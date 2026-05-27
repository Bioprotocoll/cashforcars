// Blog posts as data — simplest possible system.
// To add a new post: append an entry. URL becomes /blog/[slug].
// Body uses markdown-flavored sections rendered by the blog page.

export type Post = {
  slug: string;
  title: string;
  description: string; // meta description, also the excerpt
  date: string; // ISO 8601, YYYY-MM-DD
  readMinutes: number;
  keyword: string; // primary SEO keyword
  body: PostBlock[];
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string };

export const posts: Post[] = [
  // ─────────────────────────────────────────────────────────
  {
    slug: "how-much-is-my-car-worth-nj",
    title: "How Much Is My Car Worth in NJ? An Honest 2026 Guide",
    description:
      "A real pricing guide for New Jersey sellers. How dealers, buyers, and online services actually price your car — and what number to expect.",
    date: "2026-05-01",
    readMinutes: 8,
    keyword: "how much is my car worth NJ",
    body: [
      { type: "p", text: "If you've Googled \"how much is my car worth\" while sitting in your driveway in Newark, Edison, or Jersey City, you've probably gotten three completely different numbers from three different websites. KBB says one thing, Carvana another, your dealer's appraisal a third. So which is right? The honest answer: none of them, exactly. Here's how car valuation actually works in New Jersey, and what to expect." },
      { type: "h2", text: "The three prices every car has" },
      { type: "p", text: "Your car doesn't have one value — it has at least three, depending on who's looking at it." },
      { type: "h3", text: "1. Retail price" },
      { type: "p", text: "What a dealer would sell your car for, after they've cleaned it, fixed minor issues, and put it on their lot with a warranty. This is the number you see on Cars.com or AutoTrader listings. It's the highest price your car can fetch — but you, as a private seller, can rarely get it. Buyers paying retail expect dealer-level convenience and protection." },
      { type: "h3", text: "2. Private party price" },
      { type: "p", text: "What you might get selling directly to another driver on Facebook Marketplace, Craigslist, or word of mouth. Typically 10-15% below retail. Sounds great until you factor in the time investment: photos, listings, fielding tire-kicker calls, scheduling test drives with strangers, and the inevitable people who try to talk you down by $2,000 at the last minute." },
      { type: "h3", text: "3. Trade-in / wholesale price" },
      { type: "p", text: "What a dealer or buying service pays you for the car. This is the lowest of the three numbers, because the buyer needs margin to resell it. KBB Trade-In is your benchmark here. Wholesale prices in New Jersey tend to run slightly higher than national averages because the tristate used-car market is one of the most active in the country." },
      { type: "h2", text: "What actually determines your car's value" },
      { type: "p", text: "Beyond the obvious factors of year, make, model, and mileage, here's what really moves the number up or down for NJ sellers:" },
      {
        type: "ul",
        items: [
          "**Title status.** Clean title is the gold standard. Salvage or rebuilt titles can drop value by 20-40%. Lost titles are often replaceable through NJ MVC for $60 and 2-4 weeks of wait time.",
          "**Service records.** Documented maintenance, especially for European or luxury cars, can add $500-2,000. Don't throw away those receipts.",
          "**Number of owners.** One-owner cars carry a premium. Three-plus owners on a 5-year-old car raises eyebrows.",
          "**Accident history.** A Carfax-reported accident drops value 10-20%. Unreported minor damage is harder to assess but still affects buyer trust.",
          "**Time of year.** Convertibles peak in April-May. SUVs and 4WD trucks spike in October-November. Selling at the right season can be worth $500-1,500.",
          "**Region.** A pickup truck in rural PA sells faster than the same truck in Manhattan. A small commuter sedan sells stronger in NJ than in Texas.",
        ],
      },
      { type: "h2", text: "How to get a realistic number, fast" },
      { type: "p", text: "If you want a quick, honest estimate without committing to anything:" },
      {
        type: "ol",
        items: [
          "Check Kelley Blue Book (kbb.com) — set condition to \"Good\" not \"Excellent\" (90% of cars aren't actually excellent). Note both the Trade-In and Private Party values.",
          "Look at active listings on AutoTrader, Cars.com, and Facebook Marketplace for your exact year, make, model, and trim within 50 miles. These are asking prices — actual sale prices are usually 5-10% lower.",
          "Get an instant offer from at least two buyers. Carvana, Carmax, and direct buyers like us will all give you a real number based on your specific VIN. Compare them.",
        ],
      },
      { type: "callout", text: "What we pay: as a direct tristate buyer of retail-ready vehicles, we typically pay 10-20% above standard trade-in for clean late-model cars. That's because we resell to dealers directly — cutting out the markup on the dealer's side." },
      { type: "h2", text: "Why dealer trade-in offers are always low" },
      { type: "p", text: "Here's something dealers won't tell you: when you trade in a car, they're not going to keep it. The majority of trade-ins get sent straight to auction, where wholesalers (companies like ours) buy them. The dealer's trade-in offer is the auction price minus their margin minus a buffer for risk. That's why dealer trade-in is structurally the lowest number you can get." },
      { type: "p", text: "If you sell directly to a buyer like us, we skip the dealer's middleman markup. You get closer to what the dealer would have made reselling it, which is usually $1,500 to $5,000 more on a late-model car." },
      { type: "h2", text: "Quick reality check by car type" },
      { type: "p", text: "Rough 2026 NJ wholesale ranges, for context. Your exact car will vary based on condition and mileage:" },
      {
        type: "ul",
        items: [
          "2019-2022 economy sedan (Camry, Civic, Corolla), 60-90k miles: $14,000-$19,000",
          "2019-2022 mid-size SUV (RAV4, CR-V, Rogue), 50-80k miles: $18,000-$25,000",
          "2019-2022 full-size truck (F-150, Silverado, Ram), 40-70k miles: $24,000-$38,000",
          "2018-2021 luxury sedan (BMW 3, Audi A4, Lexus IS), 40-70k miles: $19,000-$30,000",
          "2015-2018 older economy car, 100k+ miles: $6,000-$11,000",
          "2010-2014 daily driver, high miles, runs fine: $3,000-$6,500",
        ],
      },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "Your car is worth what someone will actually pay you for it — not what an online calculator estimates. The fastest path to a real number is getting an actual offer from a real buyer. We give firm quotes in 90 seconds via the form on our homepage. No commitment, no obligation, just a number you can compare against everything else you're hearing." },
    ],
  },
  // ─────────────────────────────────────────────────────────
  {
    slug: "how-to-sell-a-car-privately-in-nj",
    title: "How to Sell a Car Privately in New Jersey (2026 Step-by-Step)",
    description:
      "The full process for selling a car privately in NJ: paperwork, title transfer, payment safety, and the mistakes that cost sellers thousands.",
    date: "2026-05-08",
    readMinutes: 10,
    keyword: "how to sell a car privately in NJ",
    body: [
      { type: "p", text: "Selling a car privately in New Jersey can net you 10-15% more than a dealer trade-in — if you're willing to put in the work. Here's exactly what's involved: the paperwork, the safety considerations, and the mistakes that cost NJ sellers thousands every year." },
      { type: "h2", text: "What you need before listing" },
      { type: "p", text: "Get these together first. Trying to handle them after you have a buyer is how deals fall apart." },
      {
        type: "ol",
        items: [
          "**Your title.** It must be in your name. If there's a lien (you still owe money), you'll need to coordinate with your lender. More on that below.",
          "**Current registration.** Doesn't have to be unexpired, but recent registration helps prove the car's been on the road legally.",
          "**Service records.** Any maintenance history you can pull from your dealer's customer portal, MyCarfax, or paper receipts. Buyers pay more for documented cars.",
          "**A clean Carfax or AutoCheck report.** Worth pulling yourself before you list, so you know what buyers will see ($40 from carfax.com).",
          "**The keys** — both sets, plus any fobs. Missing a key drops your asking price.",
          "**Owner's manual** if you still have it. Surprisingly common buyer ask.",
        ],
      },
      { type: "h2", text: "Pricing your car for a private sale" },
      { type: "p", text: "Look at Kelley Blue Book Private Party value for your year, make, model, mileage, and condition. Then check actual listings on Facebook Marketplace, Cars.com, and AutoTrader within 50 miles of you for the same car. Price 5-10% above what comparable cars are listed for — buyers expect to negotiate." },
      { type: "p", text: "Pricing too high means your listing sits for weeks. Pricing too low means you leave money on the table. In NJ's hot used-car market, well-priced cars sell within 2 weeks." },
      { type: "h2", text: "Where to list (in 2026)" },
      {
        type: "ul",
        items: [
          "**Facebook Marketplace** — by far the highest volume of buyers in NJ. Free. Expect dozens of messages, many flaky.",
          "**Craigslist** — still works, especially for cars under $15,000. Skews toward bargain hunters.",
          "**AutoTrader Private Seller** — $25-50 listing fee. Buyers tend to be more serious.",
          "**Cars.com Private Seller** — similar to AutoTrader, paid listings.",
          "**Local Facebook groups** — neighborhood and town-specific groups in your area often have buyers nearby.",
        ],
      },
      { type: "h2", text: "Writing a listing that sells" },
      { type: "p", text: "Boring, factual, complete listings outperform clever or aggressive ones." },
      {
        type: "ul",
        items: [
          "Lead with year, make, model, trim, mileage, and price",
          "10-15 photos: exterior all four sides, interior front and back, dashboard with odometer, engine bay, tire tread, any damage",
          "List exactly what's been replaced and when (brakes, battery, tires, etc.)",
          "Disclose any known issues honestly — this filters out time-wasters",
          "State payment terms clearly: \"Cash, certified check, or Zelle only\"",
          "Mention the title is clean and in your name (if true)",
        ],
      },
      { type: "h2", text: "Handling buyer interactions safely" },
      { type: "callout", text: "Safety first. Never share your home address until a serious buyer is confirmed, and meet first-time buyers in a public place — many NJ police stations have designated safe-meet parking lots." },
      {
        type: "ul",
        items: [
          "Screen buyers via text or messenger before sharing a phone number",
          "Meet for test drives in a daylight, public location. Take your phone, leave a friend or family member knowing where you are",
          "Always ride along on test drives — never let a stranger drive your car alone",
          "Be cautious of buyers who insist on overnight test drives, mechanic inspections at unknown shops, or who push for unusual payment arrangements",
          "Verify driver's license and registration before letting anyone drive",
        ],
      },
      { type: "h2", text: "Payment — this is where deals go wrong" },
      { type: "p", text: "Accept only these forms of payment:" },
      {
        type: "ul",
        items: [
          "**Cash** for amounts under $10,000 (NJ banks have ID requirements above that)",
          "**Certified bank check or cashier's check** — but verify it at the issuing bank before signing over the title, not just by looking at it. Counterfeits are extremely common",
          "**Zelle or wire transfer** that you confirm has settled in your account before releasing the car",
        ],
      },
      { type: "p", text: "**Never accept:** personal checks, money orders for more than the agreed price (a common scam), PayPal Friends & Family, or any payment that requires you to \"refund\" part of it back to the buyer." },
      { type: "h2", text: "The paperwork — NJ specific" },
      { type: "p", text: "New Jersey requires the seller to sign the title over to the buyer on the back, including odometer reading, sale date, and sale price. Both buyer and seller must sign in front of a notary if the title was issued after 2017." },
      {
        type: "ol",
        items: [
          "Complete the back of the title: buyer's name, address, sale price, odometer reading, your signature",
          "Notarize if required (most NJ banks notarize for free if you have an account)",
          "Fill out form MVC-OS/SS-9 — the seller's report of sale. File this online at NJMVC.gov within 10 days to remove your liability",
          "Remove your license plates — in NJ, plates stay with the seller, not the car. Return them to the MVC or transfer to a new vehicle",
          "Cancel your insurance on the car once you have proof the title transfer is filed",
          "Give the buyer the title, both keys, the owner's manual, and a bill of sale",
        ],
      },
      { type: "h2", text: "If you still owe money on the car" },
      { type: "p", text: "Cars with active liens are harder to sell privately but possible. The cleanest approach: call your lender, get the exact 10-day payoff amount, then arrange for the buyer's payment to go directly to the lender, with any remainder going to you. Some banks let buyer and seller meet at a branch to handle the whole transaction at once. Most NJ buyers will walk away if the math gets complicated, which is one reason selling to a direct buyer (who handles lender payoffs as part of their normal process) is often easier when there's a loan involved." },
      { type: "h2", text: "The honest comparison" },
      { type: "p", text: "Selling privately in NJ can net you $1,500-$3,000 more than trade-in on a typical car. It also takes 2-6 weeks of effort, exposes you to safety risks and scams, and requires you to handle paperwork correctly to avoid future liability." },
      { type: "p", text: "Selling to a direct buyer like us gets you closer to private-party pricing without the time, risk, or paperwork. Our offers typically land 10-20% above dealer trade-in. We come to you, handle title paperwork, pay on arrival, and you're done in 24-48 hours total." },
    ],
  },
  // ─────────────────────────────────────────────────────────
  {
    slug: "carmax-vs-private-buyer",
    title: "Carmax vs. Private Buyer: Which Actually Pays More?",
    description:
      "An honest comparison of Carmax, Carvana, and direct private buyers for selling your car. What each pays, what they don't tell you, and which to choose.",
    date: "2026-05-15",
    readMinutes: 7,
    keyword: "Carmax vs private buyer",
    body: [
      { type: "p", text: "Carmax built its reputation on the no-haggle, instant-offer experience. Carvana copied the model online. They're popular, fast, and convenient. But are their offers actually competitive — or are you trading thousands of dollars for the simplicity?" },
      { type: "p", text: "After buying thousands of vehicles across the tristate, here's the honest comparison." },
      { type: "h2", text: "What Carmax pays" },
      { type: "p", text: "Carmax's offer is essentially a wholesale price plus a small margin for the convenience they're offering you. Their internal pricing model targets a 10-15% margin on resale, so they back into an offer that protects that margin." },
      { type: "p", text: "For clean late-model cars, Carmax offers typically land 5-10% below private party value, but 5-10% above dealer trade-in. They're a middle ground — better than trade-in, worse than selling yourself." },
      { type: "p", text: "Where Carmax shines: trucks and SUVs (their lots sell these fast), Hondas and Toyotas (huge buyer demand), and cars under 5 years old with low miles." },
      { type: "p", text: "Where Carmax underperforms: luxury and European cars (they often discount these heavily because they're slower-moving), lease returns going over mileage (they may charge you for the excess miles), and anything they consider \"unusual\" — meaning manual transmissions, oddly specced trims, or anything that doesn't fit cleanly into their inventory model." },
      { type: "h2", text: "What Carvana pays" },
      { type: "p", text: "Similar model, online-first. Their algorithm pulls from auction data and adjusts for their reconditioning costs. In our experience comparing offers across thousands of vehicles, Carvana usually comes in slightly below or roughly equal to Carmax, depending on the car." },
      { type: "p", text: "Their pickup process is fast and impersonal — a driver shows up, inspects the car against your stated condition, hands you a check. If the car doesn't match your description, the offer drops on the spot, which can be a frustrating surprise." },
      { type: "h2", text: "What direct private buyers (like us) pay" },
      { type: "p", text: "A direct buyer who resells through their own dealer network, partner auctions, or export channels can typically pay 10-20% more than Carmax or Carvana on retail-grade vehicles. The reason: we're closer to the actual end buyer in the chain, so we keep less margin." },
      { type: "p", text: "Where direct buyers win: lease returns, trade-ups, well-maintained one-owner cars, luxury and European cars that big-box buyers discount, and vehicles with specific market appeal in our region." },
      { type: "p", text: "Where direct buyers may underperform: cars in poor condition or with mechanical issues (we focus on retail-ready), salvage titles, or vehicles in extremely common configurations where everyone — including auctions — is paying about the same." },
      { type: "h2", text: "The honest comparison, side by side" },
      {
        type: "ul",
        items: [
          "**Dealer trade-in**: lowest offer, fastest, only useful if you're buying a car from them",
          "**Carmax / Carvana**: middle offer, fast, convenient, works for common cars",
          "**Direct private buyer**: highest non-private offer, fast, especially strong on retail-grade and lease returns",
          "**Selling to a private party**: highest offer, slowest, most effort, some risk",
        ],
      },
      { type: "callout", text: "The smartest move: get a Carmax/Carvana quote AND a direct buyer quote in the same week, then compare. Both are free, both take minutes. Whoever pays you the most wins your business." },
      { type: "h2", text: "Why this gap exists at all" },
      { type: "p", text: "Carmax and Carvana built their pricing around a national reconditioning and resale model. They have enormous overhead — warehouses, marketing, technology platforms, dealer licenses in every state. That overhead is built into the spread between what they pay you and what they sell the car for." },
      { type: "p", text: "Direct local buyers run leaner. We have a network of dealer partners and auction relationships, no national marketing budget, and we focus on a smaller geographic footprint. We can pay more because we don't have to fund their infrastructure." },
      { type: "h2", text: "When to choose Carmax/Carvana anyway" },
      {
        type: "ul",
        items: [
          "Your car has issues you'd rather have a national chain absorb than a local buyer scrutinize",
          "You want maximum simplicity and don't care about leaving some money on the table",
          "Your car is a common model that everyone wants and offers will be similar anyway",
          "You're trading in for a car they happen to sell",
        ],
      },
      { type: "p", text: "For everyone else — especially anyone with a clean late-model car, a lease return, or a vehicle worth over $10,000 — getting a second opinion from a direct buyer is worth the 90 seconds. We give firm quotes via the form on our homepage." },
    ],
  },
  // ─────────────────────────────────────────────────────────
  {
    slug: "how-to-sell-leased-car",
    title: "How to Sell a Leased Car (Lease Buyout Guide for Tristate Drivers)",
    description:
      "A complete guide to selling your leased vehicle in NJ, NY, CT, or PA. Lease buyouts, equity, taxes, and how to keep more of the money.",
    date: "2026-05-22",
    readMinutes: 9,
    keyword: "how to sell a leased car",
    body: [
      { type: "p", text: "If you're driving a leased car and the market value is higher than your lease's buyout price, you have equity — sometimes thousands of dollars of it. But you can only access that equity if you handle the buyout correctly. Here's how to sell a leased vehicle in the tristate area and actually keep the money." },
      { type: "h2", text: "Step 1: Find out if you have lease equity" },
      { type: "p", text: "Lease equity is the difference between your car's current market value and your lease's buyout price (sometimes called the residual or payoff). To find both numbers:" },
      {
        type: "ol",
        items: [
          "Call your leasing company (the number is on your monthly statement). Ask for your \"10-day buyout amount.\" This includes taxes and any fees.",
          "Get a market value from a few sources: KBB, Carvana's instant offer, and a direct buyer like us. Use the highest credible number.",
          "Subtract buyout from market value. Positive number = equity. Negative = upside-down (you owe more than it's worth).",
        ],
      },
      { type: "p", text: "Example: Your 2023 Highlander has a $32,000 market value and a $28,500 buyout. You have $3,500 in equity." },
      { type: "h2", text: "Step 2: Understand your leasing company's rules" },
      { type: "p", text: "This is where most people lose money. Different leasing companies have different policies:" },
      {
        type: "ul",
        items: [
          "**Some allow third-party buyouts.** Honda Finance, Toyota Financial, and several others let you sell directly to any buyer at the buyout price.",
          "**Some restrict to the originating dealer.** Ford Credit, GM Financial, and a few others now require the buyout to go through their dealer network, which can complicate selling to a private buyer.",
          "**Some allow third-party buyouts with conditions** — like requiring the sale to be in a state where the buyer is a licensed dealer.",
        ],
      },
      { type: "p", text: "Ask your leasing company directly: \"Can I sell this car to a third-party buyer at my buyout price?\" Get the answer in writing if possible." },
      { type: "h2", text: "Step 3: The math on lease equity" },
      { type: "p", text: "Here's how a clean lease buyout typically works when you sell to a direct buyer:" },
      {
        type: "ol",
        items: [
          "Buyer agrees to purchase the car for current market value ($32,000 in our example)",
          "Buyer pays the leasing company your full buyout amount ($28,500)",
          "Buyer pays you the difference ($3,500) as your equity",
          "Title transfers from leasing company to buyer, your lease is closed out",
        ],
      },
      { type: "p", text: "You walk away with $3,500 in your pocket and zero remaining lease obligation." },
      { type: "h2", text: "What about taxes?" },
      { type: "p", text: "Sales tax handling on lease buyouts varies by state. In NJ and NY, you generally pay sales tax on the buyout amount when the lease ends — this is built into your buyout figure. When a third party buys the car at the same buyout price, no additional tax is owed because they're paying the same number." },
      { type: "p", text: "In PA and CT, the rules can vary based on whether the buyer is in-state and whether the leasing company is. A good buyer will know how to handle this for your specific situation. Always confirm before signing." },
      { type: "callout", text: "Watch out for: dealer trade-in offers on leased cars often hide the equity in the new car deal. If a dealer tells you the trade-in covers your lease payoff, ask specifically: \"How much equity am I getting credited?\" The answer is often less than you'd get selling outright." },
      { type: "h2", text: "What if you're over on miles or have damage?" },
      { type: "p", text: "Selling a leased car before lease-end is the cleanest way to avoid mileage overage charges and excessive wear-and-tear fees. These charges only apply when you return the car to the leasing company. If you sell it (or have a buyer pay off the lease), they're typically waived because the leasing company is getting their money." },
      { type: "p", text: "On a 36-month lease at $0.25/mile overage, going 10,000 miles over costs you $2,500 if you return the car. Selling instead can save that entire amount." },
      { type: "h2", text: "How to actually sell a leased car" },
      {
        type: "ol",
        items: [
          "Get your 10-day buyout in writing from the leasing company",
          "Get market value quotes from 2-3 buyers (Carmax/Carvana + a direct buyer)",
          "Compare the equity you'd net from each buyer",
          "Choose the buyer paying the highest market value",
          "Buyer pays the leasing company directly for the buyout amount",
          "Buyer pays you the equity amount via wire, certified check, or Zelle",
          "Leasing company sends the title to the buyer (takes 2-4 weeks typically)",
          "You're done — no further obligation",
        ],
      },
      { type: "h2", text: "Why direct buyers often win on lease returns" },
      { type: "p", text: "We specialize in lease return purchases. We know how to coordinate with major leasing companies, handle the buyout paperwork, and we can typically pay above what big-box buyers will offer because lease-return cars are usually clean, well-documented, and easy to resell." },
      { type: "p", text: "If you're approaching lease-end or know you have equity, get a firm quote from us via the form on our homepage. It takes 90 seconds and includes the lease buyout handling at no extra cost." },
    ],
  },
  // ─────────────────────────────────────────────────────────
  {
    slug: "how-dealers-price-trade-ins",
    title: "How Dealers Actually Price Your Trade-In (Insider Breakdown)",
    description:
      "What really happens when a dealer appraises your trade-in. The formula they use, the margin they build in, and how to get a fair number.",
    date: "2026-05-26",
    readMinutes: 8,
    keyword: "how dealers price trade-ins",
    body: [
      { type: "p", text: "When a dealer hands you a trade-in offer that feels lower than expected, it's not arbitrary. There's a specific process and formula behind it. Understanding that formula is the difference between accepting a lowball offer and getting full value for your car." },
      { type: "h2", text: "The process inside a dealership" },
      { type: "p", text: "Here's what actually happens when you bring a car in for a trade-in appraisal:" },
      {
        type: "ol",
        items: [
          "**A used-car manager looks up your VIN.** They check Manheim Market Report (MMR) — the auction price index dealers use as their internal benchmark. This is the wholesale baseline.",
          "**They drive the car or have it scanned.** A 5-minute walkaround, OBD-II scanner for codes, sometimes a test drive. They're looking for anything that drops the value.",
          "**They calculate reconditioning cost.** Tires, brakes, paint scratches, interior cleaning, mechanical work. Every dealer has a standard cost per service item.",
          "**They subtract their target margin.** Dealers aim for $1,500-$3,000 profit on a used car. That comes out of your offer.",
          "**They subtract a risk buffer.** Things they can't see — transmission issues that show up after they take delivery, undisclosed accidents, etc. Usually $500-$1,500 cushion.",
          "**That's your offer.** MMR wholesale minus reconditioning minus target profit minus risk buffer.",
        ],
      },
      { type: "h2", text: "The math on a typical car" },
      { type: "p", text: "Let's say you're trading in a 2021 Honda Accord with 65,000 miles." },
      {
        type: "ul",
        items: [
          "Manheim wholesale baseline: $22,500",
          "Minus reconditioning estimate (cleaning, minor cosmetic): -$800",
          "Minus target dealer profit: -$2,500",
          "Minus risk buffer: -$1,000",
          "**Your trade-in offer: $18,200**",
        ],
      },
      { type: "p", text: "Meanwhile, that same car would sell on the dealer's lot for $25,500. The dealer's spread between what they pay you and what they sell it for is roughly $7,300 — and most of that is the gap between trade-in price and retail price." },
      { type: "h2", text: "What happens to your trade-in after you leave" },
      { type: "p", text: "One of two things, typically:" },
      {
        type: "ul",
        items: [
          "**If the car fits the dealer's lot,** they recondition it and put it for sale. Profit on resale: ~$3,000-$5,000 after costs.",
          "**If it doesn't fit their lot** (wrong make, wrong age, wrong price point), they send it straight to auction. Profit at auction: usually $500-$1,500.",
        ],
      },
      { type: "p", text: "Either way, the trade-in price you got was set with this resale margin baked in." },
      { type: "h2", text: "The four ways dealers reduce your offer" },
      { type: "h3", text: "1. Reconditioning estimates that don't match reality" },
      { type: "p", text: "A used-car manager might quote you $1,800 in reconditioning for things their detail department actually does for $400 in-house. The difference goes into the dealer's margin." },
      { type: "h3", text: "2. Bundling the trade with the new car deal" },
      { type: "p", text: "Dealers love to mix the trade-in number with the new car discount. \"We'll give you $20,000 for your trade if you take this lease, otherwise it's $17,500.\" The extra $2,500 came from somewhere else in the deal — usually a higher money factor or fewer rebates." },
      { type: "h3", text: "3. Walking down the offer after appraisal" },
      { type: "p", text: "A common move: appraise the car at $22,000 verbally, then come back with $19,500 after \"speaking with the manager\" or \"running it through our system.\" This is negotiation theater designed to anchor low." },
      { type: "h3", text: "4. Adding discovered \"problems\"" },
      { type: "p", text: "After their tech looks at the car, suddenly there's a transmission concern, a frame alignment issue, or evidence of unreported damage. Sometimes legitimate. Often a tactic to drop the number by $1,500-$2,500." },
      { type: "h2", text: "How to push back" },
      {
        type: "ul",
        items: [
          "**Negotiate the trade and the new car separately.** Refuse to discuss the trade until the new car price is locked.",
          "**Ask for the breakdown.** \"What's the reconditioning estimate and target margin in that number?\" Most dealers won't share it, but the question signals you know the game.",
          "**Get competing offers first.** Walk in with a Carvana or direct buyer offer in hand. Dealers will often match or beat to keep your business.",
          "**Don't fall for tax savings as the whole pitch.** Yes, trading in saves you sales tax on the trade-in value (in NJ that's 6.625%). On a $20,000 trade that's about $1,325. If a direct buyer pays you $3,000 more, you still come out ahead by $1,675 after the tax break.",
        ],
      },
      { type: "h2", text: "The simpler path" },
      { type: "p", text: "Selling to a direct buyer (us or others) skips this whole game. We're priced closer to the dealer's eventual resale price, not their appraisal-floor price. Our offers typically land 10-20% above standard trade-in." },
      { type: "p", text: "The tax-savings advantage of trading in is real but often less than the gap between trade-in and direct-buyer pricing. Worth running the math both ways before you commit." },
      { type: "callout", text: "The honest test: get one trade-in offer from a dealer and one quote from a direct buyer this week. Compare the net dollars in your pocket after sales tax savings. Whichever is higher wins. Both take less than an hour total." },
      { type: "p", text: "Get our firm offer in 90 seconds via the form on our homepage. No commitment, no obligation, just a real number to compare against everything else you're hearing." },
    ],
  },
];
