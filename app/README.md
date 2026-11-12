# DIJON PRIME AGRO LIMITED

Premium Agricultural Trading E-Commerce Frontend

## Overview

Dijon Prime Agro Limited is a boutique agricultural trading company based in Nairobi, Kenya. This project is the complete frontend for their premium e-commerce and informational website, designed to communicate trust, quality, and professionalism to global buyers.

## Company Documents

The client-supplied registration documents are hosted in `app/public/documents/`:

| File | Document |
|------|----------|
| `certificate-of-incorporation.pdf` | Certificate of Incorporation |
| `name-search-and-reservation.pdf` | Name Search & Reservation |

These are linked from the **Certifications & Compliance** section of the Quality page
(`/quality#certifications`), where visitors can view or download them. Keep the filenames
unchanged when replacing a document.

## Hero Images

The homepage hero is a five-slide carousel defined in `app/src/sections/Hero.tsx`. Hides and
skins lead — one slide per traded form (wet blue, wet salted, sun-dried, field-dried) — while
maize is deliberately kept as the final slide:

| Slide | File | Source | Licence |
|-------|------|--------|---------|
| 1 — Hides & Skins (wet blue) | `public/images/hero/wet-blue.jpg` | [Myousry6666, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Leather_tanneries_(40).jpg) | CC BY-SA 4.0 |
| 2 — Hides & Skins (wet salted) | `public/images/hero/wet-salted.jpg` | [OUMAROU OB, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mise_en_eau_de_la_peau_pour_la_transformation_en_cuire_au_centre_pilote_de_traitement_du_cuire_de_Maroua_au_Cameroun_01.jpg) | CC0 (public domain) |
| 3 — Hides & Skins (sun-dried) | `public/images/hero/hides-stretched.jpg` | [Enda012, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stretched_Cowhide_Skin.jpg) | CC BY 4.0 |
| 4 — Hides & Skins (field-dried) | `public/images/hero/hides-kenya.jpg` | [Lebu Ayiga, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Animal_hides_drying_at_Mai_Mahiu_Viewpoint,_Great_Rift_Valley,_Kenya.jpg) | CC BY 4.0 |
| 5 — Cereals & Pulses | Unsplash (remote URL) | [Unsplash](https://images.unsplash.com/photo-1625246333195-78d9c38ad449) | Unsplash Licence |

All four Wikimedia images are cropped for the hero and must keep their attribution, which is
shown under the carousel controls. When Dijon Prime's own product photography is available,
replace the files in `app/public/images/hero/` and update the credit details in `Hero.tsx`.

### Sourcing further product photography

Free, commercially usable images of the traded forms (verified as of this writing):

| Subject | Source | Licence |
|---------|--------|---------|
| Wet blue hides | [Leather tanneries (40) — Commons](https://commons.wikimedia.org/wiki/File:Leather_tanneries_(40).jpg) | CC BY-SA 4.0 |
| Wet blue hides | [Tannery in Brazil, Cáceres — Flickr](https://www.flickr.com/photos/28488531@N08/3729841638/) | All rights reserved — ask the photographer before use |
| Wet blue hides on a truck | [Kanpur to Lucknow — Flickr](https://www.flickr.com/photos/10171412@N02/11129286016/) | All rights reserved — ask the photographer before use |
| Wet blue hides | [A+B HIDES product photo](https://www.aplusb-hides.de/wp-content/uploads/2018/05/wetblue.jpg) | Copyright — permission required |
| Wet salted hides | [Salted hides — A+B HIDES](https://www.aplusb-hides.de/wp-content/uploads/2018/08/05.jpg) | Copyright — permission required |
| Wet salted skins | [Salted pelts — Flickr](https://www.flickr.com/photos/baalands/48816573741/) | All rights reserved — ask the photographer before use |
| Salting skins | [Salting pelts — Flickr](https://www.flickr.com/photos/baalands/48816715377/) | All rights reserved — ask the photographer before use |
| Tannery processing (CC0 set) | [Maroua tannery — Commons](https://commons.wikimedia.org/wiki/Category:Tanneries_in_Cameroon) | CC0 |
| Tanning stages | [Niger tannery — Commons](https://commons.wikimedia.org/wiki/Category:Tanneries_in_Niger) | CC BY-SA 4.0 |
| Tannery stacks of leather | [Leather in Egypt — Commons](https://commons.wikimedia.org/wiki/Category:Leather_in_Egypt) | CC BY-SA 4.0 |

Paid stock alternatives if Dijon Prime wants guaranteed subject-accurate photography:
[Shutterstock — wet blue leather](https://www.shutterstock.com/search/wet-blue-leather),
[Alamy — wet blue hides](https://www.alamy.com/search.html?qt=wet%20blue%20hides),
[Adobe Stock — salted hides](https://stock.adobe.com/search?k=salted+hides).

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Vite** for fast development and optimized builds
- **Tailwind CSS 3.4** with custom Dijon Prime Agro Limited brand theme
- **React Router** for client-side routing
- **Framer Motion** for scroll-reveal animations and transitions
- **React Icons** (Feather icons) for consistent iconography

## Fonts

- **Montserrat** (600, 700) — Headings
- **Lora** (400, 600) — Body text / descriptions
- **Inter** (400, 500, 600) — UI elements, buttons, labels

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1F4A3E` | Deep Forest Green — headers, key CTAs |
| `--color-secondary` | `#C79A3E` | Warm Gold — accents, highlights |
| `--color-accent` | `#D48B55` | Terracotta — hover states |
| `--color-background` | `#F8F6F2` | Creamy Off-White — main background |
| `--color-text-primary` | `#2D2A24` | Dark Charcoal — body text |
| `--color-text-secondary` | `#6B6B6B` | Soft Grey — captions |
| `--color-success` | `#4CAF50` | Fresh Green — in-stock badges |

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, Why Choose Us, Stats, Featured Products, Core Values, CTA |
| `/assortment` | Assortment | 9 category cards + Private Label banner |
| `/shop` | Shop | Category filters, product grid, pagination |
| `/shop/:slug` | Product Detail | Product info, WhatsApp inquiry, related products |
| `/what-we-do` | What We Do | Mission, supply chain, portfolio, sustainability |
| `/quality` | Quality | Team, standards, certifications, disclaimer || `/contact` | Contact | Form with validation, contact info, map placeholder |

## Environment Variables

Copy `.env.example` to `.env` and set the following:

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SHEETS_API_URL` | No | Google Sheets API endpoint (sheet.best or SheetDB). If unset, falls back to static mock data. |

### Google Sheets Setup

The Google Sheet should have these columns:

```
id, productName, slug, category, subCategory, description, fullDescription, price, imageUrl, stockStatus, featured, origin, packaging, moq
```

- `price` — numeric, leave empty for inquiry-only products
- `featured` — `"TRUE"` or `"FALSE"` string
- `stockStatus` — one of: `In Stock`, `Out of Stock`, `Pre-Order`
- `slug` — auto-derived from `productName` if left blank

## Integrations

### Google Sheets API — Wired
- Products are fetched live from a Google Sheets endpoint via `src/lib/googleSheets.ts`
- `src/hooks/useProducts()` hook wraps the fetch with loading/error states
- Falls back to static `src/data/products.ts` if the API is unavailable or `VITE_SHEETS_API_URL` is not set
- Categories remain static in `src/data/products.ts`
- All product-consuming components (Shop, ProductDetail, FeaturedProducts) use the hook

### Decap CMS — Scaffolded (not wired to live data)
- Admin panel at `/admin/` via `public/admin/index.html` and `public/admin/config.yml`
- **Products collection** — scaffolded at `src/data/products-cms/` but **not wired into the live product fetch**. This is a future decision point: Decap writes to git-tracked files while Google Sheets is a live API. Do not merge these without a deliberate architecture decision.
- **Site Pages collection** — covers editable copy for What We Do, Quality, and Contact info
- **Requires manual setup**: Enable Netlify Identity and Git Gateway in the Netlify dashboard before `/admin` will accept logins. This is a one-time dashboard step, not configurable from code.

### WhatsApp Integration — Wired
- Business number: `254791312250` (confirmed in `src/data/siteData.ts`)
- Used consistently across all product cards and the contact page via `src/lib/whatsapp.ts`
- Consider adding WhatsApp Business API for automated responses in the future

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/          # Navbar, Footer, WhatsApp FAB, ScrollToTop
    ui/              # shadcn/ui components (skeleton, button, card, etc.)
    ui-custom/       # Custom reusable components (ScrollReveal, AnimatedCounter)
  data/              # Static data (categories, site content, helper functions)
  hooks/             # React hooks (useProducts, useIsMobile)
  lib/               # Utilities (googleSheets, whatsapp, cn)
  pages/             # All page components
  sections/          # Homepage sections (Hero, Stats, FeaturedProducts, etc.)
  types/             # TypeScript interfaces
public/
  admin/             # Decap CMS admin panel (index.html, config.yml)
```

## Key Features

- Fully responsive (mobile-first) at 375px, 768px, 1024px, 1440px
- Sticky navbar with mobile slide-in drawer
- Scroll-reveal animations via Framer Motion
- Animated stat counters
- Product category filtering and pagination
- WhatsApp inquiry integration on all product cards
- Contact form with client-side validation
- Floating WhatsApp button with pulse animation
