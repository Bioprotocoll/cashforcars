import Link from "next/link";
import { site } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center bg-ink text-bone font-display text-xl">
            IA
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-wide">{site.name}</div>
            <div className="font-mono text-[10px] uppercase text-ink/60">
              est. {site.founded}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-rust">
            Get Quote
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-rust">
            How It Works
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-rust">
            Guides
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-rust">
            FAQ
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-rust">
            About
          </Link>
        </nav>

        <a
          href={`tel:${site.phoneRaw}`}
          className="hidden bg-rust px-4 py-2 font-display text-lg tracking-wide text-bone transition hover:bg-ink md:block"
        >
          {site.phone}
        </a>
      </div>
    </header>
  );
}
