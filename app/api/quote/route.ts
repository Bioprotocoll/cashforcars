import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/config";

// Lazily create Resend client only when we have a key.
// Avoids build-time errors when env vars aren't set.
function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

// --- Validation ---------------------------------------------------------
// Server-side validation prevents spam bots and malformed submissions
// from filling your inbox with garbage. We check shape, length, and
// basic format. We do NOT trust the client form.

type QuoteData = {
  year: string;
  make: string;
  model: string;
  mileage: string;
  condition: string;
  zip: string;
  name: string;
  phone: string;
  email: string;
  // Honeypot field — bots fill it, humans don't see it.
  website?: string;
};

function validate(data: any): { ok: true; data: QuoteData } | { ok: false; error: string } {
  if (typeof data !== "object" || data === null) {
    return { ok: false, error: "Invalid payload" };
  }

  // Honeypot trap. If filled, it's a bot — reject silently.
  if (data.website && data.website.length > 0) {
    return { ok: false, error: "Spam detected" };
  }

  const required = ["year", "make", "model", "condition", "zip", "name", "phone"];
  for (const field of required) {
    if (!data[field] || typeof data[field] !== "string" || data[field].trim() === "") {
      return { ok: false, error: `Missing ${field}` };
    }
    if (data[field].length > 200) {
      return { ok: false, error: `${field} too long` };
    }
  }

  // Year must be 4 digits, reasonable range.
  const year = parseInt(data.year, 10);
  if (isNaN(year) || year < 1900 || year > new Date().getFullYear() + 1) {
    return { ok: false, error: "Invalid year" };
  }

  // ZIP must be 5 digits.
  if (!/^\d{5}$/.test(data.zip.trim())) {
    return { ok: false, error: "Invalid ZIP" };
  }

  // Phone must have at least 10 digits (after stripping non-digits).
  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    return { ok: false, error: "Invalid phone" };
  }

  // Email is optional but if provided must be valid-ish.
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Invalid email" };
  }

  return { ok: true, data: data as QuoteData };
}

// --- Rate limiting (simple in-memory) -----------------------------------
// Stops the same IP from spamming the form. For high-traffic production
// upgrade to Upstash Redis or Vercel KV.

const rateLimit = new Map<string, { count: number; reset: number }>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_MAX = 5; // 5 submissions per IP per hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count++;
  return true;
}

// --- Email templates ----------------------------------------------------

function leadEmailHtml(d: QuoteData) {
  return `<!DOCTYPE html>
<html><body style="font-family:-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f5f1e8;color:#0a0a0a">
  <div style="border:2px solid #0a0a0a;padding:32px;background:#fff">
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c8533a;font-weight:700">NEW LEAD · ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })}</div>
    <h1 style="font-size:32px;margin:8px 0 24px;font-weight:900">${d.year} ${d.make} ${d.model}</h1>
    <table style="width:100%;border-collapse:collapse;font-size:15px">
      <tr><td style="padding:10px 0;border-bottom:1px solid #ddd;color:#666;width:40%">Name</td><td style="padding:10px 0;border-bottom:1px solid #ddd;font-weight:600">${d.name}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #ddd;color:#666">Phone</td><td style="padding:10px 0;border-bottom:1px solid #ddd;font-weight:600"><a href="tel:${d.phone}" style="color:#c8533a;text-decoration:none">${d.phone}</a></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #ddd;color:#666">Email</td><td style="padding:10px 0;border-bottom:1px solid #ddd;font-weight:600">${d.email || "—"}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #ddd;color:#666">ZIP</td><td style="padding:10px 0;border-bottom:1px solid #ddd;font-weight:600">${d.zip}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #ddd;color:#666">Mileage</td><td style="padding:10px 0;border-bottom:1px solid #ddd;font-weight:600">${d.mileage || "—"}</td></tr>
      <tr><td style="padding:10px 0;color:#666">Condition</td><td style="padding:10px 0;font-weight:600;text-transform:capitalize">${d.condition}</td></tr>
    </table>
    <div style="margin-top:32px;padding:20px;background:#c8533a;color:#fff;text-align:center">
      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:0.8">CALL THEM BACK WITHIN</div>
      <div style="font-size:28px;font-weight:900;margin-top:4px">30 MINUTES</div>
    </div>
  </div>
</body></html>`;
}

function customerConfirmHtml(d: QuoteData) {
  return `<!DOCTYPE html>
<html><body style="font-family:-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f5f1e8;color:#0a0a0a">
  <div style="border:2px solid #0a0a0a;padding:32px;background:#fff">
    <h1 style="font-size:32px;margin:0 0 8px;font-weight:900">We got your info, ${d.name.split(" ")[0]}.</h1>
    <p style="font-size:16px;color:#444;line-height:1.5">Thanks for reaching out about your <strong>${d.year} ${d.make} ${d.model}</strong>. A real person from ${site.name} will call you at <strong>${d.phone}</strong> within 30 minutes during business hours (${site.hours}).</p>
    <div style="margin:24px 0;padding:20px;background:#f5f1e8;border:1px solid #0a0a0a">
      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c8533a;font-weight:700">Need to reach us first?</div>
      <a href="tel:${site.phoneRaw}" style="font-size:28px;font-weight:900;color:#0a0a0a;text-decoration:none;display:block;margin-top:4px">${site.phone}</a>
    </div>
    <p style="font-size:14px;color:#666">— The ${site.name} team</p>
  </div>
</body></html>`;
}

// --- Handler ------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // Rate limit by IP.
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please call us instead." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = validate(body);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    const d = result.data;

    // Skip sending if no API key configured (dev mode) — just log instead.
    const resend = getResend();
    if (!resend) {
      console.log("📥 [DEV] Quote received (no email sent):", d);
      return NextResponse.json({ ok: true, dev: true });
    }

    // Send lead notification to business owner.
    const leadEmail = await resend.emails.send({
      from: process.env.FROM_EMAIL || "leads@yourdomain.com",
      to: process.env.LEAD_EMAIL || site.email,
      replyTo: d.email || undefined,
      subject: `🚗 New Lead: ${d.year} ${d.make} ${d.model} — ${d.name}`,
      html: leadEmailHtml(d),
    });

    if (leadEmail.error) {
      console.error("Resend lead error:", leadEmail.error);
      return NextResponse.json(
        { error: "Failed to send. Please call us." },
        { status: 500 }
      );
    }

    // Send confirmation to customer (only if they gave email).
    if (d.email) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || "leads@yourdomain.com",
        to: d.email,
        subject: `We got your quote request — ${site.name}`,
        html: customerConfirmHtml(d),
      });
    }

    // OPTIONAL: text yourself via Twilio. Uncomment after `npm i twilio`
    // and adding TWILIO_* env vars.
    /*
    import twilio from "twilio";
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
    await client.messages.create({
      from: process.env.TWILIO_FROM,
      to: process.env.OWNER_PHONE!,
      body: `New lead: ${d.year} ${d.make} ${d.model} — ${d.name} ${d.phone}`,
    });
    */

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call us directly." },
      { status: 500 }
    );
  }
}
