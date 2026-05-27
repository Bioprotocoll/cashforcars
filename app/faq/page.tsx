import type { Metadata } from "next";
import { faqs } from "@/lib/config";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ — Sell Your Car for Cash",
  description:
    "Answers to common questions about selling your car for cash: title requirements, payment methods, pickup fees, non-running cars, and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQ() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="stamp text-rust">Frequently Asked</div>
      <h1 className="mt-6 font-display text-6xl md:text-8xl">Questions, answered.</h1>

      <div className="mt-16 divide-y-2 divide-ink border-y-2 border-ink">
        {faqs.map((f, i) => (
          <details key={i} className="group py-8" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-3xl">
              {f.q}
              <span className="text-4xl text-rust transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-lg text-ink/75">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
