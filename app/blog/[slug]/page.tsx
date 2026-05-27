import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, type PostBlock } from "@/lib/posts";
import { site } from "@/lib/config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${site.url}/blog/${post.slug}`,
    },
  };
}

// Render simple inline markdown for **bold**
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function renderBlock(block: PostBlock, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="my-5 text-lg leading-relaxed text-ink/85">
          {renderInline(block.text)}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="mt-12 mb-4 font-display text-4xl md:text-5xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-8 mb-3 font-display text-2xl md:text-3xl">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="my-5 space-y-3 pl-5">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="relative list-none pl-6 text-lg text-ink/85 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:bg-rust"
            >
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="my-5 space-y-3 pl-5">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="relative pl-8 text-lg text-ink/85 marker:font-display marker:text-2xl marker:text-rust"
              style={{ listStyle: "decimal" }}
            >
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-4 border-rust bg-cream px-6 py-4 text-xl italic text-ink/80"
        >
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-8 border-2 border-ink bg-cream p-6 shadow-[6px_6px_0_0_#0a0a0a]"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-rust">
            Worth Knowing
          </div>
          <p className="mt-2 text-lg text-ink/90">{renderInline(block.text)}</p>
        </div>
      );
  }
}

export default function PostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="font-mono text-xs uppercase tracking-widest text-ink/50">
        <Link href="/blog" className="hover:text-rust">
          ← All guides
        </Link>
      </div>

      <header className="mt-8 border-b-2 border-ink pb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-rust">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readMinutes} min read
        </div>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl text-ink/70">{post.description}</p>
      </header>

      <div className="prose-content mt-8">
        {post.body.map((block, i) => renderBlock(block, i))}
      </div>

      {/* CTA */}
      <div className="mt-16 border-2 border-ink bg-ink p-10 text-bone">
        <h3 className="font-display text-3xl">
          Ready to find out what your car is worth?
        </h3>
        <p className="mt-3 text-bone/70">
          Get a firm offer in 90 seconds. No commitment, no obligation.
        </p>
        <Link
          href="/#quote"
          className="mt-6 inline-block bg-rust px-8 py-4 font-display text-2xl tracking-wide hover:bg-bone hover:text-ink"
        >
          Get My Quote →
        </Link>
      </div>

      {/* Related posts */}
      <div className="mt-16">
        <div className="font-mono text-xs uppercase tracking-widest text-rust">
          Keep Reading
        </div>
        <h3 className="mt-2 font-display text-3xl">More guides</h3>
        <div className="mt-6 divide-y-2 divide-ink border-y-2 border-ink">
          {otherPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block py-5 transition hover:bg-cream"
            >
              <div className="font-display text-2xl group-hover:text-rust">
                {p.title}
              </div>
              <div className="mt-1 text-sm text-ink/60">{p.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
