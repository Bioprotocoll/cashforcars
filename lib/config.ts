// Central config — edit these to customize for your business.
// All copy, schema, and metadata pulls from here.

export const site = {
  name: "Ironclad Auto",
  legalName: "Ironclad Auto LLC",
  tagline: "Tristate's top buyer for retail-ready vehicles.",
  domain: "ironcladauto.com", // change to your real domain
  url: "https://ironcladauto.com",
  phone: "(555) 010-2025",
  phoneRaw: "+15550102025",
  email: "buy@ironcladauto.com",
  address: {
    street: "1200 Frelinghuysen Ave",
    city: "Newark",
    state: "NJ",
    zip: "07114",
    country: "US",
  },
  geo: { lat: 40.7095, lng: -74.1745 },
  hours: "Mon-Sat 8am-7pm, Sun 10am-5pm",
  founded: "2018",
  socials: {
    facebook: "https://facebook.com/ironcladauto",
    instagram: "https://instagram.com/ironcladauto",
    google: "https://g.page/ironcladauto",
  },
};

// City landing pages. Add/edit/remove freely.
// Slugs become /sell/[slug]. Keep slugs lowercase-hyphenated.
// Mix chosen for tristate SEO: NJ (densest used-car market in US),
// NYC borough (highest search volume), CT (Fairfield County wealth),
// Long Island (volume + retail-grade inventory), Eastern PA (Lehigh
// Valley / Philly suburbs commute into NJ).
export const cities = [
  {
    slug: "newark",
    name: "Newark",
    state: "NJ",
    nearby: ["Elizabeth", "Jersey City", "Irvington", "East Orange"],
    headline: "Sell Your Car in Newark — Dealer-Beating Offers",
    blurb:
      "Newark's go-to buyer for clean, retail-ready vehicles. We pay above trade-in for late-model cars, SUVs, and trucks because we resell them — we don't auction them off at a loss.",
    population: "311K",
    avgOffer: "$8,400",
  },
  {
    slug: "jersey-city",
    name: "Jersey City",
    state: "NJ",
    nearby: ["Hoboken", "Bayonne", "Union City", "West New York"],
    headline: "Cash for Cars in Jersey City",
    blurb:
      "From Downtown to the Heights, we buy clean retail and wholesale-ready cars across Hudson County. Lease returns, trade-ups, and well-kept used vehicles are our sweet spot.",
    population: "292K",
    avgOffer: "$9,100",
  },
  {
    slug: "brooklyn",
    name: "Brooklyn",
    state: "NY",
    nearby: ["Queens", "Staten Island", "Manhattan"],
    headline: "Sell Your Car in Brooklyn — We Come to You",
    blurb:
      "Free pickup across all five boroughs. Brooklyn drivers get fast, fair offers on late-model cars without the headache of Craigslist or the haircut of a dealer trade.",
    population: "2.6M",
    avgOffer: "$9,800",
  },
  {
    slug: "stamford",
    name: "Stamford",
    state: "CT",
    nearby: ["Greenwich", "Norwalk", "Darien", "New Canaan"],
    headline: "We Buy Cars in Stamford & Fairfield County",
    blurb:
      "Fairfield County's quiet alternative to the dealer trade-in. We specialize in clean late-model European, Japanese, and domestic vehicles from Greenwich to New Canaan.",
    population: "136K",
    avgOffer: "$12,200",
  },
  {
    slug: "long-island",
    name: "Long Island",
    state: "NY",
    nearby: ["Nassau County", "Suffolk County", "Hempstead", "Huntington"],
    headline: "Sell Your Car on Long Island — Cash Today",
    blurb:
      "Free pickup across Nassau and Suffolk. We're the buyer Long Island residents call when they want a fair offer on a clean car without sitting at a dealership for four hours.",
    population: "7.8M",
    avgOffer: "$9,400",
  },
  {
    slug: "lehigh-valley",
    name: "Lehigh Valley",
    state: "PA",
    nearby: ["Allentown", "Bethlehem", "Easton", "Bucks County"],
    headline: "Cash for Cars in Lehigh Valley & Eastern PA",
    blurb:
      "Serving Allentown, Bethlehem, Easton, and Bucks County. Eastern PA sellers get tristate pricing — we cross state lines for the right car and pay accordingly.",
    population: "865K",
    avgOffer: "$8,800",
  },
];

export const faqs = [
  {
    q: "What kinds of cars do you buy?",
    a: "Our focus is clean, retail-ready and wholesale-grade vehicles — late-model cars, SUVs, and trucks with clean titles and solid mechanicals. Lease returns, trade-ups, fleet vehicles, well-maintained older cars, and one-owner garage finds all fit. We'll also quote damaged or non-running vehicles, though those aren't our specialty.",
  },
  {
    q: "How fast can I get paid?",
    a: "Most sellers get a firm offer in under two minutes online or five minutes by phone. Pickup and payment usually happen within 24 to 48 hours. Same-day deals are common in NJ, NYC, and Fairfield County if you reach out before noon.",
  },
  {
    q: "Why pay more than a dealer trade-in?",
    a: "Dealers price trade-ins to win at auction. We're the buyer on the other side of that auction — so by skipping the middleman, we can pay you closer to actual market value. On clean retail cars, our offers typically land 10-20% above standard dealer trade-in.",
  },
  {
    q: "Do I need the title to sell my car?",
    a: "Yes. Because we focus on retail and wholesale-ready inventory, we work primarily with clean titles. Lost titles can sometimes be replaced through your state DMV before pickup. For salvage or rebuilt titles, mention it on your quote and we'll let you know.",
  },
  {
    q: "Is there a fee for pickup?",
    a: "No. Free pickup throughout NJ, NYC, Long Island, Westchester, Fairfield County CT, and Eastern PA. The number we quote is the number you receive.",
  },
  {
    q: "How is payment made?",
    a: "Certified bank check, instant wire, or Zelle — your choice. We don't carry large amounts of cash, but funds clear before our driver leaves with your car.",
  },
  {
    q: "What information do I need for a quote?",
    a: "Year, make, model, mileage, VIN if handy, and an honest description of condition. A few photos turn a price range into a firm offer.",
  },
];
