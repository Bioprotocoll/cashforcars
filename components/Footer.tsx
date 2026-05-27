import Link from "next/link";
import { site, cities } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t-2 border-ink bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-4xl tracking-wide">{site.name}</div>
            <p className="mt-3 max-w-sm text-sm text-bone/70">
              Tristate's direct buyer for clean, retail-ready vehicles. Serving
              NJ, NY, CT, and Eastern PA since {site.founded}.
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-6 inline-block font-display text-3xl text-rust hover:text-bone"
            >
              {site.phone}
            </a>
            <div className="mt-2 font-mono text-xs text-bone/60">
              {site.hours}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-rust">
              Service Areas
            </div>
            <ul className="mt-4 space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/sell/${c.slug}`}
                    className="text-sm text-bone/80 hover:text-rust"
                  >
                    Sell My Car in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-rust">
              Company
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-bone/80 hover:text-rust">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-bone/80 hover:text-rust">
                  Guides & Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-bone/80 hover:text-rust">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-bone/80 hover:text-rust">
                  About
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-bone/80 hover:text-rust"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/20 pt-6 text-xs text-bone/50 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div className="font-mono">
            {site.address.street} · {site.address.city}, {site.address.state}{" "}
            {site.address.zip}
          </div>
        </div>
      </div>
    </footer>
  );
}
