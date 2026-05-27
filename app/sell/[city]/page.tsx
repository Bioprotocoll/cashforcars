import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { cities, site, faqs } from "@/lib/config";
import { cityContent } from "@/lib/cityContent";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import QuoteForm from "@/components/QuoteForm";
import TrustStrip from "@/components/TrustStrip";

type Params = { city: string };

// Pre-render every city at build time → instant load + crawlable.
export function generateStaticParams(): Params[] {
  return cities.map((c) => ({ city: c.slug }));
}

// Per-page metadata — unique title/description for each city is critical SEO.
export function generateMetadata({ params }: { params: Params }): Metadata {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return {};
  const title = `Sell My Car in ${city.name}, ${city.state} — Above Trade-In | ${site.name}`;
  const description = `Get a firm cash offer for your car in ${city.name}, ${city.state}. We pay 10-20% above dealer trade-in for retail-ready vehicles. Free pickup in 24 hours. Average payout ${city.avgOffer}.`;
  return {
    title,
    description,
    alternates: { canonical: `/sell/${city.slug}` },
    openGraph: { title, description, url: `${site.url}/sell/${city.slug}` },
  };
}

export default function CityPage({ params }: { params: Params }) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) notFound();

  // Deep content for this city (neighborhoods, common cars, city FAQs).
  const deep = cityContent[city.slug];
  // Merge global FAQs with city-specific ones for schema completeness.
  const mergedFaqs = deep ? [...deep.cityFaqs, ...faqs] : faqs;

  const breadcrumbs = [
    { name: "Home", url: site.url },
    { name: "Sell", url: `${site.url}/sell` },
    { name: city.name, url: `${site.url}/sell/${city.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(city.name, city.state)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(mergedFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-ink/15 bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink/60 md:px-8">
          <Link href="/" className="hover:text-rust">
            Home
          </Link>
          {" / "}
          <Link href="/" className="hover:text-rust">
            Sell
          </Link>
          {" / "}
          <span className="text-ink">{city.name}</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-5 md:px-8 md:py-20">
          <div className="md:col-span-3">
            <div className="stamp text-rust">
              Serving {city.name}, {city.state}
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[0.9] md:text-7xl">
              {city.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/80">{city.blurb}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#quote"
                className="bg-ink px-8 py-4 font-display text-2xl tracking-wide text-bone transition hover:bg-rust"
              >
                Get {city.name} Quote →
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="font-display text-2xl tracking-wide link-accent"
              >
                {site.phone}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t-2 border-ink pt-8">
              <Stat n={city.avgOffer} l={`Avg ${city.name} payout`} />
              <Stat n="24 hr" l="Pickup time" />
              <Stat n="10-20%" l="Over trade-in" />
            </div>
          </div>

          <div className="md:col-span-2" id="quote">
            <QuoteForm />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* LOCAL CONTENT — unique long-form copy is what gets you to rank */}
      <section className="border-b-2 border-ink py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3 md:px-8">
          <div className="md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-rust">
              Why {city.name} sellers choose us
            </div>
            <h2 className="mt-2 font-display text-5xl">
              The smart way to sell in {city.name}.
            </h2>
            <div className="prose prose-lg mt-8 max-w-none space-y-5 text-ink/80">
              <p>
                Selling a clean car in {city.name} usually means one of three
                bad options: take the dealer's lowball trade-in, list it
                yourself and deal with weeks of tire-kickers and no-shows, or
                drop the price at one of the big-box buying chains. We're a
                fourth option — a real tristate buyer paying retail-informed
                prices, not auction floors.
              </p>
              <p>
                We've bought thousands of vehicles from {city.name} and
                surrounding areas like {city.nearby[0]}, {city.nearby[1]}, and{" "}
                {city.nearby[2]} since {site.founded}. Late-model commuters,
                lease returns running over mileage, trade-ups when families
                grow, fleet vehicles coming off corporate cycles, garage-kept
                weekend cars — we pay strongest for the inventory that's clean
                enough to put back on a retail lot.
              </p>
              <p>
                A quote takes about ninety seconds. If you like the number, we
                schedule a free pickup at your {city.name} address — driveway,
                workplace, parking garage, wherever works. Payment is bank
                check, wire, or Zelle on arrival. We handle the title
                paperwork, sign the registration over, and you're done.
              </p>
              <p>
                We also quote damaged, salvage, and non-running cars, though
                clean retail-grade vehicles are where we consistently beat
                competitors by the largest margin.
              </p>
            </div>
          </div>

          <aside className="border-2 border-ink bg-cream p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-rust">
              Also serving
            </div>
            <div className="mt-3 font-display text-2xl">Nearby areas</div>
            <ul className="mt-4 space-y-2 text-sm">
              {city.nearby.map((n) => (
                <li key={n} className="border-b border-ink/15 pb-2">
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-6 font-mono text-xs uppercase tracking-widest text-rust">
              City stats
            </div>
            <dl className="mt-3 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <dt className="text-ink/60">Population</dt>
                <dd>{city.population}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60">Avg offer</dt>
                <dd>{city.avgOffer}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60">Pickup</dt>
                <dd>24-48 hr</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* DEEP LOCAL CONTENT — only renders if city has it in cityContent.ts */}
      {deep && (
        <>
          {/* Neighborhoods we serve */}
          <section className="border-b-2 border-ink bg-cream py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="font-mono text-xs uppercase tracking-widest text-rust">
                Neighborhoods we serve
              </div>
              <h2 className="mt-2 font-display text-5xl md:text-6xl">
                Pickup throughout {city.name}.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-ink/70">
                We know the parking, the streets, and the buildings. Pickup from
                anywhere in the city, no extra charges.
              </p>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {deep.neighborhoods.map((n) => (
                  <div
                    key={n.name}
                    className="border-2 border-ink bg-bone p-6 transition hover:shadow-[6px_6px_0_0_#0a0a0a]"
                  >
                    <div className="font-display text-2xl">{n.name}</div>
                    <p className="mt-2 text-sm text-ink/70">{n.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common cars + local market context */}
          <section className="border-b-2 border-ink py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-rust">
                  What we buy here
                </div>
                <h2 className="mt-2 font-display text-4xl md:text-5xl">
                  Cars we see daily in {city.name}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/80">
                  {deep.commonCars}
                </p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-rust">
                  Local market
                </div>
                <h2 className="mt-2 font-display text-4xl md:text-5xl">
                  Selling in {city.name}, today
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/80">
                  {deep.localContext}
                </p>
              </div>
            </div>
          </section>

          {/* Pickup logistics */}
          <section className="border-b-2 border-ink bg-ink py-20 text-bone">
            <div className="mx-auto max-w-4xl px-4 md:px-8">
              <div className="font-mono text-xs uppercase tracking-widest text-rust">
                How pickup works in {city.name}
              </div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">
                We come to you.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-bone/85">
                {deep.pickupNotes}
              </p>
            </div>
          </section>

          {/* City-specific FAQs */}
          <section className="border-b-2 border-ink py-20">
            <div className="mx-auto max-w-4xl px-4 md:px-8">
              <div className="font-mono text-xs uppercase tracking-widest text-rust">
                {city.name} questions
              </div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">
                Local FAQs.
              </h2>
              <div className="mt-10 divide-y-2 divide-ink border-y-2 border-ink">
                {deep.cityFaqs.map((f, i) => (
                  <details key={i} className="group py-6" open={i === 0}>
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
        </>
      )}

      {/* Other cities cross-link */}
      <section className="bg-ink py-20 text-bone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-4xl">Not in {city.name}?</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/sell/${c.slug}`}
                  className="border-2 border-bone px-5 py-3 font-display text-xl tracking-wide hover:bg-rust hover:border-rust"
                >
                  {c.name} →
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-rust md:text-4xl">{n}</div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
        {l}
      </div>
    </div>
  );
}
