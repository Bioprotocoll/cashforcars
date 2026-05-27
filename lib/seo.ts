import { site } from "./config";

// Organization + LocalBusiness schema for sitewide use.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    foundingDate: site.founded,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHours: ["Mo-Sa 07:00-19:00", "Su 09:00-17:00"],
    sameAs: Object.values(site.socials),
  };
}

// LocalBusiness schema scoped to a specific city page.
export function localBusinessSchema(cityName: string, state: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: `${site.name} — ${cityName}`,
    url: `${site.url}/sell/${cityName.toLowerCase()}`,
    telephone: site.phoneRaw,
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: state },
    },
    serviceType: "Cash for Cars",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
