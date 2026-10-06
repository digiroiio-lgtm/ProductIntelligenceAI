import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { Hero } from "@/components/Hero";
import { IntelligenceGrid } from "@/components/IntelligenceGrid";
import { buildMetadata } from "@/lib/metadata";
import { PAGES, PILLAR_KEYS } from "@/lib/pages";
import { HAS_EXTERNAL_SALE_URL, SALE_URL } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Acquire ProductIntelligenceAI.com",
  description:
    "ProductIntelligenceAI.com is a premium category domain for companies building at the intersection of AI, product data, commerce intelligence and product analytics.",
  path: "/domain",
  noindex: true,
});

const categories = [
  "Product intelligence SaaS",
  "Product analytics software",
  "Competitive intelligence",
  "Pricing intelligence",
  "E-commerce intelligence",
  "Retail intelligence",
  "Product research platforms",
  "Catalog intelligence",
  "Product data platforms",
  "AI commerce software",
].map((title) => ({
  title,
  description: "A natural fit for a company whose product or category matches this description.",
}));

export default function DomainPage() {
  const breadcrumbs = [{ name: "Home", href: "/" }, { name: "Acquire ProductIntelligenceAI.com" }];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        eyebrow="Domain acquisition"
        title="Acquire ProductIntelligenceAI.com"
        definition={
          <DefinitionBox label="About the domain">
            ProductIntelligenceAI.com is a premium category domain for companies building at the
            intersection of artificial intelligence, product data, commerce intelligence and product
            analytics.
          </DefinitionBox>
        }
        actions={
          HAS_EXTERNAL_SALE_URL ? (
            <a className="btn" href={SALE_URL} target="_blank" rel="noopener nofollow">
              Make an Inquiry
            </a>
          ) : undefined
        }
      />

      <ArticleSection
        id="what-is-included"
        title="What an Acquisition Includes"
        shortAnswer="The buyer is acquiring the domain name and the associated informational website asset."
      >
        <p>
          The website is an educational resource on AI-assisted product intelligence, organized around
          the topics a future product would need to rank for: a{" "}
          <Link href={PAGES.home.path}>category overview</Link>, a definition page, an AI methodology
          page, a software evaluation guide, a use-case library and an e-commerce guide.
        </p>
        <DisclaimerBox title="Clarification">
          ProductIntelligenceAI.com is not represented as an operating software company unless
          separately agreed. The site does not claim customers, proprietary data, integrations or
          revenue.
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="who-it-fits"
        title="Who This Domain Fits"
        tone="alt"
        shortAnswer="The name fits any company building tools or services in product, commerce or competitive intelligence."
      >
        <IntelligenceGrid items={categories} columns={3} label="Potential buyer and use categories" />
      </ArticleSection>

      <ArticleSection id="content-foundation" title="The Content Foundation">
        <p>
          The existing pages cover the core semantic territory of the category and can be kept, extended
          or replaced by a new owner:
        </p>
        <ul>
          {PILLAR_KEYS.map((key) => (
            <li key={key}>
              <Link href={PAGES[key].path}>{PAGES[key].label}</Link>
            </li>
          ))}
        </ul>
      </ArticleSection>

      <ArticleSection id="inquiry" title="Make an Inquiry" tone="alt">
        {HAS_EXTERNAL_SALE_URL ? (
          <p>
            <a className="btn" href={SALE_URL} target="_blank" rel="noopener nofollow">
              Make an Inquiry
            </a>
          </p>
        ) : (
          <p>
            Inquiry details are not yet published on this page. The owner can set an inquiry link by
            configuring <code>NEXT_PUBLIC_DOMAIN_SALE_URL</code>.
          </p>
        )}
      </ArticleSection>
    </>
  );
}
