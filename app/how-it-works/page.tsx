import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Sell Your Car in 3 Steps",
  description:
    "Our buying process across the tristate: get a firm online quote, schedule free pickup, get paid on arrival. Bank check, wire, or Zelle.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
      <div className="stamp text-rust">How It Works</div>
      <h1 className="mt-6 font-display text-6xl md:text-8xl">
        Sell a car the easy way.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/70">
        Three steps. The whole thing usually takes between 24 and 48 hours from
        first click to cash in your pocket.
      </p>

      <div className="mt-20 space-y-16">
        {[
          {
            n: "01",
            t: "Get an instant quote",
            b: "Tell us year, make, model, mileage, and VIN if you have it. Online takes about 90 seconds; phone takes about 5 minutes. We use live auction comps, retail listings, and our own dealer network to give you a firm number — not a guess.",
          },
          {
            n: "02",
            t: "Schedule free pickup",
            b: "Pick a time that works. Our driver shows up at your driveway, workplace, parking garage, or storage lot — anywhere in NJ, NYC, Long Island, Fairfield County, or Eastern PA. No hidden fees, no surprise deductions.",
          },
          {
            n: "03",
            t: "Get paid on arrival",
            b: "Bank check, wire, or Zelle — your call. Funds clear before our driver leaves with your car. We sign the title paperwork right there, hand you payment, and you're done.",
          },
        ].map((s) => (
          <div key={s.n} className="grid gap-8 border-t-2 border-ink pt-10 md:grid-cols-5">
            <div className="md:col-span-1">
              <div className="font-display text-8xl text-rust">{s.n}</div>
            </div>
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl">{s.t}</h2>
              <p className="mt-4 text-lg text-ink/75">{s.b}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-2 border-ink bg-cream p-10 text-center">
        <h3 className="font-display text-4xl">Ready when you are.</h3>
        <a
          href="/#quote"
          className="mt-6 inline-block bg-ink px-10 py-4 font-display text-2xl tracking-wide text-bone hover:bg-rust"
        >
          Start My Quote →
        </a>
      </div>
    </div>
  );
}
