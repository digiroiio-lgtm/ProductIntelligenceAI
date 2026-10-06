/**
 * Central site configuration.
 *
 * Everything that a future owner might change (domain, canonical origin,
 * sale URL, analytics, verification, navigation) lives here.
 *
 * NOTE: NEXT_PUBLIC_* variables must be referenced as literal
 * `process.env.NEXT_PUBLIC_X` expressions so Next.js can inline them at build time.
 */

export const SITE_DOMAIN = "ProductIntelligenceAI.com";
export const SITE_NAME = "ProductIntelligenceAI.com";
export const SITE_DESCRIPTION =
  "Learn how AI can help analyze product data, competitors, pricing, reviews, demand signals and product performance for better product decisions.";

/** Canonical production origin (no trailing slash). Used by metadata, sitemap, robots and JSON-LD. */
export const SITE_URL = "https://productintelligenceai.com";

export const SITE_LOCALE = "en_US";

/** Content dates shown on pages and mirrored in Article JSON-LD. ISO 8601 (YYYY-MM-DD). */
export const CONTENT_PUBLISHED = "2026-10-06";
export const CONTENT_MODIFIED = "2026-10-06";

/** Default social/OG image (1200x630) served from /public. */
export const OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "ProductIntelligenceAI.com — AI Product Intelligence for Better Product Decisions",
} as const;

/** Internal domain-details page used when no external sale URL is configured. */
export const DOMAIN_PAGE_PATH = "/domain";

const rawSaleUrl = (process.env.NEXT_PUBLIC_DOMAIN_SALE_URL ?? "").trim();

/** True when an external sale/contact URL is configured. */
export const HAS_EXTERNAL_SALE_URL = /^https?:\/\//i.test(rawSaleUrl);

/** Sale/contact URL. Falls back to the internal /domain page when unset. */
export const SALE_URL = HAS_EXTERNAL_SALE_URL ? rawSaleUrl : DOMAIN_PAGE_PATH;

const rawGaId = (process.env.NEXT_PUBLIC_GA_ID ?? "").trim();

/** GA4 measurement ID. Empty string disables analytics. Format-checked so it is safe to inline in a script. */
export const GA_ID = /^G-[A-Z0-9]{4,20}$/.test(rawGaId) ? rawGaId : "";

/** Google Search Console HTML-tag verification token. Empty string disables the meta tag. */
export const GOOGLE_SITE_VERIFICATION = (
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? ""
).trim();

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Product Intelligence", href: "/what-is-product-intelligence" },
  { label: "AI Intelligence", href: "/ai-product-intelligence" },
  { label: "Software", href: "/product-intelligence-software" },
  { label: "Use Cases", href: "/product-intelligence-use-cases" },
  { label: "E-Commerce", href: "/product-intelligence-for-ecommerce" },
];

export const DISCLAIMER =
  "ProductIntelligenceAI.com provides general educational information about product intelligence and AI-assisted product analysis. It does not provide business, financial or investment advice and does not represent a commercial software service.";

/** Absolute URL for a site path. "/" resolves to the bare origin (no trailing slash) everywhere: canonical, OG, JSON-LD, sitemap. */
export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}
