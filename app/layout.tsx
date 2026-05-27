import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/config";
import { organizationSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: `Sell your car for top dollar across NJ, NY, CT, and Eastern PA. We pay 10-20% above dealer trade-in for retail-ready vehicles. Free pickup in 24 hours, no haggling.`,
  keywords: [
    "sell my car NJ",
    "sell my car NYC",
    "sell my car tristate",
    "cash for cars Newark",
    "cash for cars Jersey City",
    "sell car Brooklyn",
    "we buy cars NJ",
    "above trade-in offer",
    "sell lease return",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: "Cash offers in 90 seconds. Pickup in 24 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  // Search Console verification — set these env vars when ready
  // GOOGLE_SITE_VERIFICATION = the content value Google gives you
  // BING_SITE_VERIFICATION = the content value Bing gives you
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </head>
      <body>
        <Analytics />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
