import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Selling Guides & Resources — Tristate Car Selling Blog",
  description:
    "Honest guides for selling your car in NJ, NY, CT, and PA. Pricing, paperwork, lease buyouts, and dealer-trade insider info.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
      <div className="stamp text-rust">Guides & Resources</div>
      <h1 className="mt-6 font-display text-6xl md:text-8xl">
        Read before you sell.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/70">
        Honest, jargon-free guides written by people who buy cars across the
        tristate every single day. No fluff, no SEO filler — just the stuff
        we wish more sellers knew.
      </p>

      <div className="mt-16 divide-y-2 divide-ink border-y-2 border-ink">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid gap-4 py-10 transition hover:bg-cream md:grid-cols-5"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-ink/50 md:col-span-1">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              <div className="mt-1">{post.readMinutes} min read</div>
            </div>
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl group-hover:text-rust md:text-4xl">
                {post.title}
              </h2>
              <p className="mt-3 text-ink/70">{post.description}</p>
              <span className="mt-4 inline-block font-display text-xl text-rust">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-2 border-ink bg-ink p-10 text-bone">
        <h3 className="font-display text-3xl">
          Done reading? Ready to sell?
        </h3>
        <p className="mt-3 text-bone/70">
          Get a firm cash offer on your car in 90 seconds.
        </p>
        <Link
          href="/#quote"
          className="mt-6 inline-block bg-rust px-8 py-4 font-display text-2xl tracking-wide hover:bg-bone hover:text-ink"
        >
          Get My Quote →
        </Link>
      </div>
    </div>
  );
}
