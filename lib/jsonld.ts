/**
 * Reusable JSON-LD builders. Every builder only emits properties that are
 * backed by visible page content. No Organization details, ratings, reviews
 * or other unverifiable facts are generated.
 */
import {
  CONTENT_MODIFIED,
  CONTENT_PUBLISHED,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./site-config";

export type JsonLdNode = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  /** Omit for the current page */
  href?: string;
}

const websiteId = `${SITE_URL}/#website`;
const webpageId = (path: string) => `${absoluteUrl(path)}#webpage`;

export function websiteJsonLd(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-US",
  };
}

export function webPageJsonLd(input: {
  path: string;
  name: string;
  description: string;
  hasBreadcrumb?: boolean;
}): JsonLdNode {
  return {
    "@type": "WebPage",
    "@id": webpageId(input.path),
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId },
    ...(input.hasBreadcrumb
      ? { breadcrumb: { "@id": `${absoluteUrl(input.path)}#breadcrumb` } }
      : {}),
  };
}

export function breadcrumbJsonLd(path: string, items: BreadcrumbItem[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href ?? path),
    })),
  };
}

export function articleJsonLd(input: {
  path: string;
  headline: string;
  description: string;
}): JsonLdNode {
  // The site name is the only author/publisher identity; no organization facts are asserted.
  const publisher = { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") };
  return {
    "@type": "Article",
    "@id": `${absoluteUrl(input.path)}#article`,
    headline: input.headline,
    description: input.description,
    inLanguage: "en-US",
    datePublished: CONTENT_PUBLISHED,
    dateModified: CONTENT_MODIFIED,
    mainEntityOfPage: { "@id": webpageId(input.path) },
    image: absoluteUrl(OG_IMAGE.path),
    author: publisher,
    publisher,
  };
}

export function faqJsonLd(
  path: string,
  items: { question: string; answer: string }[],
): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    isPartOf: { "@id": webpageId(path) },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function graphJsonLd(nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Serializes JSON-LD safely for inline <script> embedding. */
export function serializeJsonLd(data: JsonLdNode): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Standard graph for an indexable inner page: WebPage + BreadcrumbList,
 * plus Article for content pages and FAQPage when a visible FAQ exists.
 */
export function pageGraph(input: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  article?: { headline: string };
  faq?: { question: string; answer: string }[];
}): JsonLdNode {
  const nodes: JsonLdNode[] = [
    webPageJsonLd({
      path: input.path,
      name: input.name,
      description: input.description,
      hasBreadcrumb: true,
    }),
    breadcrumbJsonLd(input.path, input.breadcrumbs),
  ];
  if (input.article) {
    nodes.push(
      articleJsonLd({
        path: input.path,
        headline: input.article.headline,
        description: input.description,
      }),
    );
  }
  if (input.faq?.length) nodes.push(faqJsonLd(input.path, input.faq));
  return graphJsonLd(nodes);
}
