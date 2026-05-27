import Link from "next/link";
import { site, cities, faqs } from "@/lib/config";
import { faqSchema } from "@/lib/seo";
import QuoteForm from "@/components/QuoteForm";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a0a0a" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-5 md:px-8 md:py-24">
          <div className="md:col-span-3">
            <div className="rise stamp text-rust">No. 01 — Tristate's Honest Buyer</div>
            <h1 className="rise mt-6 font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
              Beat the dealer trade-in.
              <br />
              <span className="text-rust">Sell direct for more.</span>
            </h1>
            <p className="rise mt-8 max-w-xl text-lg text-ink/80" style={{ animationDelay: "0.15s" }}>
              We buy clean, retail-ready cars across NY, NJ, CT, and Eastern PA — paying 10-20% above standard trade-in for late-model vehicles. Skip the dealer haircut and the Craigslist circus. Quote in 90 seconds, pickup in 24 hours.
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "0.3s" }}>
              <a
                href="#quote"
                className="bg-ink px-8 py-4 font-display text-2xl tracking-wide text-bone transition hover:bg-rust"
              >
                Get Free Quote →
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="font-display text-2xl tracking-wide link-accent"
              >
                or call {site.phone}
              </a>
            </div>

            <div className="rise mt-12 grid grid-cols-3 gap-6 border-t-2 border-ink pt-8" style={{ animationDelay: "0.45s" }}>
              <Stat n="12,400+" l="Cars bought" />
              <Stat n="$9,200" l="Avg payout" />
              <Stat n="24 hr" l="Pickup time" />
            </div>
          </div>

          <div className="rise md:col-span-2" id="quote" style={{ animationDelay: "0.2s" }}>
            <QuoteForm />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* HOW IT WORKS */}
      <section className="border-b-2 border-ink py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-rust">
                The Process
              </div>
              <h2 className="mt-2 font-display text-5xl md:text-6xl">
                Three steps. No surprises.
              </h2>
            </div>
            <Link
              href="/how-it-works"
              className="hidden font-display text-xl link-accent md:block"
            >
              See full process →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Step
              n="01"
              title="Tell us about the car"
              body="Year, make, model, mileage, VIN if handy. Takes 90 seconds online or 5 minutes on the phone. Photos turn a price range into a firm offer."
            />
            <Step
              n="02"
              title="Get a firm offer"
              body="No bait-and-switch. We use live auction data and our own retail comps to make you a real number — not a lowball you'll have to negotiate up from."
            />
            <Step
              n="03"
              title="Pickup & payment"
              body="Bank check, wire, or Zelle the moment we arrive. Free pickup across NJ, NYC, Long Island, CT, and Eastern PA. We handle the paperwork."
            />
          </div>
        </div>
      </section>

      {/* WHAT WE BUY — retail focus */}
      <section className="border-b-2 border-ink bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-rust">
            Our Buy Zone
          </div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">
            We pay top dollar for <span className="italic">clean inventory.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            Our focus is vehicles we can put back on the road — for resale, dealer
            wholesale, or export. If yours is clean, expect a strong offer.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Late-model cars",
              "Lease returns",
              "Trade-ups",
              "SUVs & crossovers",
              "Trucks & pickups",
              "Fleet vehicles",
              "European & luxury",
              "One-owner classics",
            ].map((t) => (
              <div
                key={t}
                className="border-2 border-ink bg-bone p-6 transition hover:bg-ink hover:text-bone"
              >
                <div className="font-display text-2xl">{t}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm text-ink/60">
            Also have a damaged or non-running car? We'll quote it — just know
            retail-grade inventory is where we pay the strongest premiums.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b-2 border-ink py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-rust">
            Why sellers pick us
          </div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">
            Above trade-in. Below the headache.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard
              title="10-20% over trade-in"
              body="We're the buyer dealers resell to. Skip the middleman, keep the margin."
            />
            <ValueCard
              title="No tire-kickers"
              body="No Craigslist meetups, no flaky buyers, no strangers in your driveway. One pro shows up, you get paid, done."
            />
            <ValueCard
              title="Same-day deals possible"
              body="Most tristate pickups happen within 24 hours. Call before noon and we can often close same day."
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b-2 border-ink bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-rust">
            What sellers say
          </div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">
            Real reviews from real people.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="The dealer offered me $14k for my 2021 Highlander on trade. Ironclad paid $17,200 and picked it up the next morning. No idea why I waited so long to call them."
              who="Anita R."
              city="Jersey City"
            />
            <Testimonial
              quote="Sold a lease return that was 8,000 miles over. Carmax wanted to charge me. Ironclad bought it for fair money and handled the lease buyout paperwork directly."
              who="Marcus T."
              city="Brooklyn"
            />
            <Testimonial
              quote="Quick, professional, fair. They knew the car better than I did. Wire hit my account before the flatbed left."
              who="David K."
              city="Stamford"
            />
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="border-b-2 border-ink bg-ink py-20 text-bone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-rust">
            Service Areas
          </div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">
            Covering the tristate, end to end.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-bone/70">
            Free pickup across New Jersey, New York City, Long Island, Fairfield
            County CT, and Eastern Pennsylvania. Tap your area for local
            pricing.
          </p>

          <div className="mt-12 grid gap-px bg-bone/20 md:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/sell/${c.slug}`}
                className="group flex items-end justify-between bg-ink p-8 transition hover:bg-rust"
              >
                <div>
                  <div className="font-display text-4xl">{c.name}</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-bone/60 group-hover:text-bone">
                    {c.state} · Avg payout {c.avgOffer}
                  </div>
                </div>
                <div className="font-display text-3xl">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b-2 border-ink py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-rust">
            Questions
          </div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">
            Things people ask.
          </h2>

          <div className="mt-12 divide-y-2 divide-ink border-y-2 border-ink">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl">
                  {f.q}
                  <span className="text-rust transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rust py-20 text-bone">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-6xl md:text-8xl">
            Done thinking about it?
          </h2>
          <p className="mt-6 text-lg">
            Get your firm offer right now. Takes 90 seconds.
          </p>
          <a
            href="#quote"
            className="mt-8 inline-block bg-ink px-12 py-5 font-display text-3xl tracking-wide hover:bg-bone hover:text-ink"
          >
            Quote My Car →
          </a>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-rust md:text-5xl">{n}</div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
        {l}
      </div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border-2 border-ink bg-cream p-8 transition hover:shadow-[8px_8px_0_0_#0a0a0a]">
      <div className="font-mono text-xs text-rust">{n}</div>
      <h3 className="mt-3 font-display text-3xl">{title}</h3>
      <p className="mt-3 text-sm text-ink/70">{body}</p>
    </div>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-2 border-ink p-8">
      <h3 className="font-display text-3xl text-rust">{title}</h3>
      <p className="mt-3 text-ink/75">{body}</p>
    </div>
  );
}

function Testimonial({
  quote,
  who,
  city,
}: {
  quote: string;
  who: string;
  city: string;
}) {
  return (
    <div className="border-2 border-ink bg-bone p-8">
      <div className="font-display text-2xl text-rust">★★★★★</div>
      <p className="mt-4 text-ink/85">"{quote}"</p>
      <div className="mt-6 font-mono text-xs uppercase tracking-widest">
        — {who}, {city}
      </div>
    </div>
  );
}
