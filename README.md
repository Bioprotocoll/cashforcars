# Ironclad Auto — Cash for Cars Starter

A production-ready Next.js 14 starter for a "we buy cars for cash" website,
optimized for local SEO.

## What's included

- **Homepage** with quote form, social proof, FAQ, city links
- **5 city landing pages** auto-generated from one template (Phoenix, Tucson, Mesa, Chandler, Scottsdale)
- **How It Works**, **FAQ**, **About** pages
- **3-step lead-capture quote form** (logs to console — wire up your backend)
- **Schema markup**: AutomotiveBusiness, LocalBusiness, FAQPage, BreadcrumbList
- **Auto-generated sitemap.xml** and **robots.txt**
- **Per-page unique titles, descriptions, canonicals, OpenGraph**
- **Mobile-first responsive design** with custom industrial aesthetic
- **Self-hosted Google Fonts** loaded efficiently

## Quick start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Customize for your business

Everything you'll edit lives in **`lib/config.ts`**:

- `site` — name, phone, address, hours, domain
- `cities` — add, edit, or remove city landing pages (each becomes `/sell/[slug]`)
- `faqs` — questions and answers (also drives FAQPage schema)

To add a new city, just append to the `cities` array. The page, sitemap entry,
schema, and footer link all generate automatically.

## Wire up the quote form (5 minutes)

The form posts to `/api/quote` which validates input, rate-limits by IP, blocks
spam via honeypot, emails you the lead, and sends the customer a confirmation.

**Step 1**: Sign up at [resend.com](https://resend.com) (free, no credit card).
Grab your API key from the dashboard.

**Step 2**: Copy `.env.example` to `.env.local` and fill in:
```
RESEND_API_KEY=re_your_actual_key
LEAD_EMAIL=you@yourbusiness.com
FROM_EMAIL=onboarding@resend.dev
```
You can use `onboarding@resend.dev` as FROM immediately for testing. For
production, [verify your domain](https://resend.com/docs/dashboard/domains/introduction)
in Resend (takes 5 min, just adds 3 DNS records) then use
`leads@yourdomain.com` so emails land in inboxes not spam.

**Step 3**: Run `npm run dev` and test the form. You should get a styled
lead email in your inbox within seconds.

**SMS alerts (optional)**: Uncomment the Twilio block in `app/api/quote/route.ts`,
run `npm i twilio`, and add the env vars. Costs ~$0.0075 per text.

**Without an API key**: the form still works in dev mode — submissions log to
the terminal instead of emailing. Useful for testing the UI.

## Deploy

Easiest: push to GitHub, import into Vercel, point your domain at it. Free
tier handles thousands of visits per day.

## SEO launch checklist

After deploying:

1. **Google Search Console** — verify your domain, submit `sitemap.xml`
2. **Google Business Profile** — claim, verify, fill out 100%, add 10+ photos
3. **Bing Webmaster Tools** — same as #1 but for Bing
4. **NAP consistency** — list business on Yelp, BBB, Yellow Pages, Apple Maps,
   Foursquare, Manta, Angi. Name/Address/Phone must match site EXACTLY.
5. **Industry directories** — Cars.com seller listings, junk car aggregators,
   local Chamber of Commerce
6. **Reviews** — text/email a Google review link to every customer post-pickup.
   Target: 4.7+ star average, 50+ reviews in year one
7. **Backlinks** — partner with local tow companies, body shops, auto blogs,
   junk removal services for link exchanges
8. **Blog content** — add `/blog/[slug]` pages targeting long-tail like
   "what to do with a totaled car in Arizona", "how to sell a car with a
   lien", "scrap car value calculator"
9. **Page speed** — run PageSpeed Insights, aim for 90+ mobile

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Folder structure

```
app/
  layout.tsx          # Root layout, fonts, sitewide schema
  page.tsx            # Homepage
  sitemap.ts          # Dynamic sitemap
  robots.ts           # Dynamic robots.txt
  globals.css         # Design tokens, fonts, custom styles
  sell/[city]/        # Dynamic city landing pages
  how-it-works/       # Static page
  faq/                # Static page
  about/              # Static page
components/
  Header.tsx
  Footer.tsx          # Links to every city for internal SEO
  QuoteForm.tsx       # 3-step lead capture
  TrustStrip.tsx
lib/
  config.ts           # ★ Edit this to customize everything
  seo.ts              # Schema generators
```
