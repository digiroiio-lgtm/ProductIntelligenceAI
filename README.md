# ProductIntelligenceAI.com

Educational, SEO-ready resource site on **AI-assisted product intelligence**. Built with Next.js (App Router) + TypeScript, statically rendered, no client JS except the mobile menu toggle.

This is **not** a software product. It makes no claims about customers, integrations, datasets, pricing or proprietary AI. The domain is for sale.

## Commands

```bash
npm install
npm run dev          # local development
npm run check        # typecheck + lint + production build + site validation
```

`npm run validate` (run after `npm run build`) starts the production server and checks every route: one H1, unique titles/descriptions, canonicals, Open Graph/Twitter tags, robots/noindex, sitemap, robots.txt, 404, banner, JSON-LD vs. visible content, definition length (40–80 words), banned phrases and internal links/anchors.

## Configuration

All site-wide values live in `lib/site-config.ts`. Environment variables (see `.env.example`):

| Variable | Effect |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Loads GA4 (`G-XXXXXXXXXX`) after interactive. Unset = no analytics. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Renders the Search Console verification meta tag. Unset = no tag. |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Target for the sale banner, header/hero CTAs and the `/domain` "Make an Inquiry" button. Unset = banner links to `/domain`. |

`NEXT_PUBLIC_*` values are inlined at build time; rebuild after changing them.

## Structure

- `app/` – routes: `/`, `/what-is-product-intelligence`, `/ai-product-intelligence`, `/product-intelligence-software`, `/product-intelligence-use-cases`, `/product-intelligence-for-ecommerce`, `/domain` (noindex, not in sitemap), plus `robots.ts`, `sitemap.ts`, `not-found.tsx`.
- `components/` – reusable UI (Header, Footer, DomainSaleBanner, Breadcrumbs, Hero, DefinitionBox, ComparisonTable, ProcessSteps, IntelligenceGrid, UseCaseCard, FAQ, ArticleSection, DisclaimerBox, SourceCitation, RelatedGuides, JsonLd, Analytics).
- `lib/` – `site-config.ts`, `pages.ts` (page registry), `metadata.ts` (metadata helper), `jsonld.ts` (JSON-LD helpers), `sources.ts` (citation structure).
- `public/` – `og-image.png` (1200×630).

## Adding a page

1. Add an entry to `lib/pages.ts` (and `INDEXABLE_KEYS`) – it feeds the sitemap and link lists.
2. Create `app/<slug>/page.tsx` using `buildMetadata`, `pageGraph`, `Breadcrumbs`, `Hero` + `DefinitionBox`, and `ArticleSection`s.
3. Add the path to `INDEXABLE` in `scripts/validate-site.mjs`.
