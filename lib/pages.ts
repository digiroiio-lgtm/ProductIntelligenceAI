/**
 * Registry of the six primary indexable pages. Single source of truth for
 * titles, descriptions, H1s, nav labels, sitemap entries and internal links.
 */

export interface PageDef {
  path: string;
  /** <title> */
  title: string;
  /** meta description */
  description: string;
  /** The single visible H1 */
  h1: string;
  /** Short label for breadcrumbs and link lists */
  label: string;
  /** Primary keyword the page targets */
  primaryKeyword: string;
  /** Search intent the page serves */
  intent: string;
  /** One-line summary used in internal "guide" link lists */
  summary: string;
}

export const PAGES = {
  home: {
    path: "/",
    title: "AI Product Intelligence | ProductIntelligenceAI.com",
    description:
      "Learn how AI can help analyze product data, competitors, pricing, reviews, demand signals and product performance for better product decisions.",
    h1: "AI Product Intelligence for Better Product Decisions",
    label: "Home",
    primaryKeyword: "product intelligence AI",
    intent: "Broad category",
    summary: "Overview of AI-assisted product intelligence.",
  },
  whatIs: {
    path: "/what-is-product-intelligence",
    title: "What Is Product Intelligence? Data, Uses & Examples",
    description:
      "Learn what product intelligence is, how it works and how teams use product data, competitive analysis, pricing and customer feedback to make decisions.",
    h1: "What Is Product Intelligence?",
    label: "What Is Product Intelligence?",
    primaryKeyword: "what is product intelligence",
    intent: "Definition / informational",
    summary:
      "Definition, purpose, data sources and how product intelligence differs from analytics, research and market intelligence.",
  },
  ai: {
    path: "/ai-product-intelligence",
    title: "AI Product Intelligence: Methods, Uses & Limitations",
    description:
      "Explore how AI can assist product intelligence through review mining, competitor analysis, pricing comparison, trend detection and product insights.",
    h1: "AI Product Intelligence: How Artificial Intelligence Supports Product Teams",
    label: "AI Product Intelligence",
    primaryKeyword: "AI product intelligence",
    intent: "AI methodology",
    summary:
      "What AI can analyze and automate, what still needs human judgment, and where the risks are.",
  },
  software: {
    path: "/product-intelligence-software",
    title: "Product Intelligence Software: Features & Buyer Guide",
    description:
      "Learn how to evaluate product intelligence software for product data, competitor monitoring, pricing, reviews, trends, analytics and AI-powered insights.",
    h1: "Product Intelligence Software: Features, Data and Evaluation Criteria",
    label: "Product Intelligence Software",
    primaryKeyword: "product intelligence software",
    intent: "Commercial investigation",
    summary:
      "Capabilities to expect and criteria for evaluating product intelligence software and platforms.",
  },
  useCases: {
    path: "/product-intelligence-use-cases",
    title: "Product Intelligence Use Cases for Modern Product Teams",
    description:
      "Explore product intelligence use cases across competitive analysis, pricing, review mining, product discovery, benchmarking and category monitoring.",
    h1: "Product Intelligence Use Cases",
    label: "Use Cases",
    primaryKeyword: "product intelligence use cases",
    intent: "Application",
    summary:
      "Fourteen use cases, each mapped from goal and data to AI-assisted analysis, human decision and output.",
  },
  ecommerce: {
    path: "/product-intelligence-for-ecommerce",
    title: "Product Intelligence for E-Commerce & Retail",
    description:
      "Learn how product intelligence supports e-commerce and retail teams with competitor monitoring, pricing analysis, reviews, assortment and product opportunities.",
    h1: "Product Intelligence for E-Commerce and Retail",
    label: "E-Commerce and Retail",
    primaryKeyword: "product intelligence for ecommerce",
    intent: "High-commercial vertical",
    summary:
      "How retail and marketplace teams analyze listings, prices, reviews and assortment, and where AI helps.",
  },
} as const satisfies Record<string, PageDef>;

export type PageKey = keyof typeof PAGES;

/** The five pillar pages that follow the homepage, in display order. */
export const PILLAR_KEYS: PageKey[] = ["whatIs", "ai", "software", "useCases", "ecommerce"];

/** Every indexable page, in sitemap order. */
export const INDEXABLE_KEYS: PageKey[] = ["home", ...PILLAR_KEYS];
