"use client";

import { useState } from "react";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    year: "",
    make: "",
    model: "",
    mileage: "",
    condition: "",
    zip: "",
    name: "",
    phone: "",
    email: "",
    website: "", // honeypot — must stay empty
  });
  const [submitted, setSubmitted] = useState(false);

  function update(k: string, v: string) {
    setData((d) => ({ ...d, [k]: v }));
  }

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || "Something went wrong");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
      // Fire Google Analytics conversion event if GA is loaded
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "quote_form",
          value: 1,
        });
      }
    } catch (e) {
      setError("Network error. Please call us directly.");
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border-2 border-ink bg-cream p-8 text-center">
        <div className="stamp text-rust">Received</div>
        <h3 className="mt-4 font-display text-4xl">We're on it.</h3>
        <p className="mt-3 text-sm text-ink/70">
          Expect a call from a real human within 30 minutes during business
          hours. We'll have a firm cash offer ready.
        </p>
        {data.email && (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/50">
            Confirmation sent to {data.email}
          </p>
        )}
      </div>
    );
  }

  const inputCls =
    "w-full border-2 border-ink bg-bone px-4 py-3 font-mono text-sm focus:outline-none focus:bg-cream";

  return (
    <div
      className={`border-2 border-ink bg-cream p-6 shadow-[8px_8px_0_0_#0a0a0a] ${
        compact ? "" : "md:p-8"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="font-mono text-xs uppercase tracking-widest text-ink/60">
          Step {step} of 3
        </div>
        <div className="flex gap-1">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 w-8 ${s <= step ? "bg-rust" : "bg-ink/15"}`}
            />
          ))}
        </div>
      </div>

      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={data.website}
        onChange={(e) => update("website", e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
        aria-hidden="true"
      />

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-display text-3xl">Tell us about the car.</h3>
          <div className="grid grid-cols-2 gap-3">
            <input
              className={inputCls}
              placeholder="Year"
              inputMode="numeric"
              maxLength={4}
              value={data.year}
              onChange={(e) => update("year", e.target.value)}
            />
            <input
              className={inputCls}
              placeholder="Make"
              value={data.make}
              onChange={(e) => update("make", e.target.value)}
            />
          </div>
          <input
            className={inputCls}
            placeholder="Model"
            value={data.model}
            onChange={(e) => update("model", e.target.value)}
          />
          <input
            className={inputCls}
            placeholder="Mileage (approx)"
            inputMode="numeric"
            value={data.mileage}
            onChange={(e) => update("mileage", e.target.value)}
          />
          <button
            onClick={() => setStep(2)}
            disabled={!data.year || !data.make || !data.model}
            className="w-full bg-ink py-3 font-display text-xl tracking-wide text-bone transition hover:bg-rust disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-display text-3xl">Condition & location.</h3>
          <select
            className={inputCls}
            value={data.condition}
            onChange={(e) => update("condition", e.target.value)}
          >
            <option value="">Select condition…</option>
            <option value="excellent">Excellent — like new, low miles</option>
            <option value="good">Good — clean, runs and drives well</option>
            <option value="fair">Fair — needs minor cosmetic or service</option>
            <option value="lease-return">Lease return / trade-up</option>
            <option value="fleet">Fleet or company vehicle</option>
            <option value="poor">Poor — needs major work</option>
            <option value="not-running">Not running / damaged</option>
          </select>
          <input
            className={inputCls}
            placeholder="ZIP code"
            inputMode="numeric"
            maxLength={5}
            value={data.zip}
            onChange={(e) => update("zip", e.target.value)}
          />
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border-2 border-ink bg-bone py-3 font-display text-xl tracking-wide hover:bg-ink hover:text-bone"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!data.condition || data.zip.length !== 5}
              className="flex-1 bg-ink py-3 font-display text-xl tracking-wide text-bone transition hover:bg-rust disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-display text-3xl">Where do we send the offer?</h3>
          <input
            className={inputCls}
            placeholder="Your name"
            autoComplete="name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            className={inputCls}
            placeholder="Phone"
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          <input
            className={inputCls}
            placeholder="Email (optional, for confirmation)"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {error && (
            <div className="border-2 border-rust bg-rust/10 p-3 font-mono text-xs text-rust">
              {error}
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              disabled={submitting}
              className="flex-1 border-2 border-ink bg-bone py-3 font-display text-xl tracking-wide hover:bg-ink hover:text-bone disabled:opacity-30"
            >
              ← Back
            </button>
            <button
              onClick={submit}
              disabled={!data.name || !data.phone || submitting}
              className="flex-1 bg-rust py-3 font-display text-xl tracking-wide text-bone transition hover:bg-ink disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Get My Offer"}
            </button>
          </div>
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-ink/50">
            No spam. No selling your info. Quote in 30 min.
          </p>
        </div>
      )}
    </div>
  );
}
