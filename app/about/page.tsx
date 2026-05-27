import type { Metadata } from "next";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us — The Tristate's Direct Vehicle Buyer",
  description:
    "Ironclad Auto has been buying clean retail-ready vehicles across NJ, NY, CT, and Eastern PA since 2018. Licensed, bonded, and direct — no middlemen.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 md:px-8">
      <div className="stamp text-rust">About {site.name}</div>
      <h1 className="mt-6 font-display text-6xl md:text-8xl">
        The buyer behind the buyer.
      </h1>

      <div className="prose prose-lg mt-12 max-w-none space-y-6 text-ink/85">
        <p className="text-2xl leading-snug">
          {site.name} was started in {site.founded} by a third-generation auto
          dealer who got tired of watching everyday sellers leave thousands on
          the table at the trade-in counter.
        </p>
        <p>
          Here's what most sellers don't know: when a dealer takes your car on
          trade, they immediately resell it to a wholesaler — companies like
          ours. The dealer takes a margin on that resale. We're cutting them
          out and paying you closer to that wholesale number directly. On a
          clean late-model car, that's often $1,500 to $5,000 more in your
          pocket.
        </p>
        <p>
          We're a tristate operation headquartered in Newark with buyers and
          drivers across NJ, NYC, Long Island, Fairfield County, and Eastern
          PA. The person who quotes your car is the same person who answers
          your follow-up text. Our drivers are employees, not contractors. The
          number we quote is the number we pay.
        </p>
        <p>
          Vehicles we buy go three places: clean retail cars get reconditioned
          and sold at our partner dealerships, wholesale-grade inventory moves
          through auctions to other dealers, and the occasional rough one gets
          parted out responsibly. Because we have multiple real exits — not
          just scrap — we can pay more for the right cars.
        </p>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          { l: "Licensed Dealer", v: "NJ MVC" },
          { l: "Bonded & Insured", v: "$2M coverage" },
          { l: "BBB Accredited", v: "A+ rating" },
        ].map((c) => (
          <div key={c.l} className="border-2 border-ink p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-rust">
              {c.l}
            </div>
            <div className="mt-2 font-display text-2xl">{c.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-2 border-ink bg-ink p-10 text-bone">
        <h3 className="font-display text-3xl">Talk to a real person.</h3>
        <p className="mt-3 text-bone/70">
          Questions before you sell? Want a quote over the phone? We're here.
        </p>
        <a
          href={`tel:${site.phoneRaw}`}
          className="mt-6 inline-block font-display text-4xl text-rust hover:text-bone"
        >
          {site.phone}
        </a>
        <div className="mt-1 font-mono text-xs text-bone/50">{site.hours}</div>
      </div>
    </div>
  );
}
