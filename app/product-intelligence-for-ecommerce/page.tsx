import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedGuides } from "@/components/RelatedGuides";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { pageGraph, type BreadcrumbItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED } from "@/lib/site-config";

const page = PAGES.ecommerce;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  type: "article",
});

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: page.label },
];

const faq: FaqItem[] = [
  {
    question: "What is product intelligence for e-commerce?",
    answer:
      "It is the analysis of product listings, prices, reviews, ratings, search position, assortment, promotions and competitor products to inform merchandising, pricing and product decisions for online retail.",
  },
  {
    question: "What is the difference between e-commerce product intelligence and marketplace intelligence?",
    answer:
      "Marketplace intelligence focuses on activity within specific marketplaces, such as sellers, listings and rankings. E-commerce product intelligence is broader and covers product-level analysis across a team's own store, competitors and marketplaces.",
  },
  {
    question: "Can a retailer use AI for product intelligence?",
    answer:
      "Yes. AI can help match products across catalogs, normalize attributes, summarize reviews and flag price or assortment changes. Retail teams still decide pricing, range, positioning and supplier strategy.",
  },
  {
    question: "Where does e-commerce product intelligence data come from?",
    answer:
      "Sources include a retailer's own catalog, sales and site data, publicly visible competitor listings and reviews, and data from providers or marketplace programs. Availability and permitted use depend on the source and its terms, so teams should confirm both before relying on them.",
  },
  {
    question: "Is product intelligence the same as price monitoring?",
    answer:
      "No. Price monitoring tracks prices. Product intelligence includes pricing but also covers reviews, ratings, assortment, search position, promotions and category trends.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: page.path,
          name: page.title,
          description: page.description,
          breadcrumbs,
          article: { headline: page.h1 },
          faq,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        eyebrow="Vertical guide"
        title={page.h1}
        updated={CONTENT_MODIFIED}
        definition={
          <DefinitionBox>
            E-commerce product intelligence is the analysis of product listings, prices, reviews,
            ratings, search position, assortment, promotions and competitor products to inform
            merchandising, pricing and product decisions. AI can help extract attributes, match similar
            products and summarize customer feedback, while category, pricing and assortment decisions
            remain with commercial teams.
          </DefinitionBox>
        }
      />

      <ArticleSection
        id="what-is-ecommerce-product-intelligence"
        title="What Is E-Commerce Product Intelligence?"
        shortAnswer="E-commerce product intelligence applies product intelligence to online retail: the listings, prices, reviews and assortment that shape what sells."
      >
        <p>
          It builds on the general discipline of{" "}
          <Link href={PAGES.whatIs.path}>product intelligence</Link> and focuses on questions that
          online sellers face daily: how competing listings compare, where prices sit, what customers say
          and which products or categories deserve attention. The related terms below are used in
          overlapping ways.
        </p>
        <ComparisonTable
          caption="Related e-commerce intelligence terms"
          rowHeader="Term"
          columns={["Typical meaning", "Typical focus"]}
          rows={[
            { label: "E-commerce product intelligence", cells: ["Product-level analysis for online sellers", "Listings, prices, reviews, assortment"] },
            { label: "Retail product intelligence", cells: ["The same approach across stores and channels, including omnichannel retail", "Range, pricing and performance across channels"] },
            { label: "Marketplace intelligence", cells: ["Analysis of activity within specific online marketplaces", "Sellers, listings, rankings, category dynamics"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="data"
        title="What Data Can Be Analyzed?"
        tone="alt"
        shortAnswer="E-commerce teams can analyze product listings, prices, reviews, ratings, search position, assortment, promotions, competitor products and category trends."
      >
        <ComparisonTable
          caption="E-commerce data types and what they show"
          rowHeader="Data type"
          columns={["What it shows", "Caveat"]}
          rows={[
            { label: "Product listings", cells: ["Titles, descriptions, attributes, images and categories", "Attribute quality varies widely by seller"] },
            { label: "Prices", cells: ["Price points and price changes over time", "Vary by region, seller, bundle and time"] },
            { label: "Reviews", cells: ["Customer opinion in text form", "Self-selected and open to manipulation"] },
            { label: "Ratings", cells: ["Aggregate satisfaction by product", "Averages hide distribution and volume"] },
            { label: "Search position", cells: ["Where a product appears for given searches", "Varies by user, location and time"] },
            { label: "Assortment", cells: ["Breadth, depth and variants offered", "Availability and stock status change often"] },
            { label: "Promotions", cells: ["Discounts, bundles and campaigns", "Terms and timing can be hard to compare"] },
            { label: "Competitor products", cells: ["What rivals sell and how they present it", "Matching equivalent products is difficult"] },
            { label: "Category trends", cells: ["Growth, decline and new entrants in a category", "Depends on how categories are defined"] },
          ]}
        />
        <p>
          Which of this data a team can use depends on its own systems, its permissions and the terms of
          the sites and marketplaces involved. ProductIntelligenceAI.com does not provide data access,
          APIs or datasets.
        </p>
      </ArticleSection>

      <ArticleSection
        id="use-cases"
        title="Key E-Commerce Use Cases"
        shortAnswer="The core use cases are competitor monitoring, pricing intelligence, assortment analysis, review mining, category analysis, opportunity discovery and performance monitoring."
      >
        <h3>Competitor monitoring</h3>
        <p>
          Track which products competitors list, how they describe and price them, and when they change.
          The output is a current view of the competitive set. See{" "}
          <Link href={`${PAGES.useCases.path}#competitive-product-analysis`}>competitive product analysis</Link>.
        </p>
        <h3>Pricing intelligence</h3>
        <p>
          Compare prices, discounts and promotions for equivalent products across sellers. Teams use it
          to see where they are priced above or below the market and decide what to do about it. See{" "}
          <Link href={`${PAGES.useCases.path}#pricing-intelligence`}>pricing intelligence</Link>.
        </p>
        <h3>Assortment analysis</h3>
        <p>
          Compare range breadth and depth with competitors and category norms to find gaps, overlaps and
          candidates to retire. See{" "}
          <Link href={`${PAGES.useCases.path}#assortment-optimization`}>assortment optimization</Link>.
        </p>
        <h3>Review mining</h3>
        <p>
          Group review text into themes such as fit, durability or value, to see what customers praise
          and what drives complaints. See{" "}
          <Link href={`${PAGES.useCases.path}#customer-review-mining`}>customer review mining</Link>.
        </p>
        <h3>Category analysis</h3>
        <p>
          Describe how a category is structured, who is entering it and which segments are growing or
          shrinking. See{" "}
          <Link href={`${PAGES.useCases.path}#category-monitoring`}>category monitoring</Link>.
        </p>
        <h3>Product opportunity discovery</h3>
        <p>
          Look for needs that few current products serve, using review complaints, search interest and
          category gaps as starting points. See{" "}
          <Link href={`${PAGES.useCases.path}#new-product-discovery`}>new product discovery</Link>.
        </p>
        <h3>Product performance monitoring</h3>
        <p>
          Read the team&apos;s own sales, conversion and return data alongside competitor and market
          changes to help explain why results moved. See{" "}
          <Link href={`${PAGES.useCases.path}#product-performance-analysis`}>product performance analysis</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-assistance"
        title="How Can AI Assist E-Commerce Product Intelligence?"
        tone="alt"
        shortAnswer="AI helps most where catalogs and review sets are too large to handle manually, by matching, normalizing, summarizing and flagging changes."
      >
        <ProcessSteps
          label="AI-assisted e-commerce product intelligence workflow"
          steps={[
            { title: "Listings and prices", description: "Collect own and competitor product data." },
            { title: "Product matching", description: "Identify equivalent products across catalogs." },
            { title: "Attribute extraction", description: "Standardize specifications and claims." },
            { title: "Comparison", description: "Line up price, features and ratings." },
            { title: "Pattern detection", description: "Flag changes, clusters and gaps." },
            { title: "Merchandising decision", description: "Teams decide range, price and presentation." },
          ]}
        />
        <ComparisonTable
          caption="Where AI assists e-commerce product intelligence"
          rowHeader="Challenge"
          columns={["How AI can assist", "What still needs checking"]}
          rows={[
            { label: "Matching equivalent products", cells: ["Compares titles, attributes and images to propose matches", "Near-identical products with different specifications"] },
            { label: "Inconsistent attributes", cells: ["Extracts and standardizes sizes, materials and specifications", "Mis-parsed or missing attributes"] },
            { label: "Large review volumes", cells: ["Clusters and summarizes review themes", "Fake or unrepresentative reviews"] },
            { label: "Frequent price changes", cells: ["Flags meaningful changes and anomalies", "Promotions, bundles and regional effects"] },
            { label: "Category drift", cells: ["Detects new segments and shifting product groupings", "Whether the shift is durable"] },
          ]}
        />
        <p>
          Reviews deserve particular care. The U.S. Federal Trade Commission&apos;s final rule banning
          fake reviews and testimonials, including AI-generated ones, took effect in October 2024
          <Cite source="ftcReviews" n={1} />, so review sets should not be treated as automatically
          authentic. More on methods is in{" "}
          <Link href={PAGES.ai.path}>AI product intelligence</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="vs-product-research"
        title="Product Intelligence vs Product Research for E-Commerce"
        shortAnswer="Product research investigates a specific product question; product intelligence keeps a continuous view of listings, prices and customers."
      >
        <ComparisonTable
          caption="Product intelligence compared with product research in e-commerce"
          rowHeader="Aspect"
          columns={["Product intelligence", "Product research"]}
          rows={[
            { label: "Typical question", cells: ["How are we priced and positioned against competing listings this month?", "Should we source and launch this new product line?"] },
            { label: "Typical data", cells: ["Listings, prices, reviews, ratings, assortment", "Customer interviews, surveys, supplier and market studies"] },
            { label: "Rhythm", cells: ["Ongoing monitoring", "Project-based"] },
            { label: "Typical output", cells: ["Competitor, price and category views", "A recommendation on a product or sourcing idea"] },
          ]}
          note="Retail teams usually need both: intelligence to find candidates and watch the market, research to validate them."
        />
      </ArticleSection>

      <ArticleSection
        id="human-judgment"
        title="What Still Requires Human Judgment?"
        tone="alt"
        shortAnswer="Commercial teams still decide pricing strategy, range, positioning, supplier terms and how to respond to competitors."
      >
        <ul>
          <li>
            <strong>Pricing strategy.</strong> Matching or beating a competitor price depends on margin,
            brand and volume goals.
          </li>
          <li>
            <strong>Range and assortment.</strong> Space, cash, supplier terms and customer experience
            limit what can be stocked.
          </li>
          <li>
            <strong>Positioning and brand.</strong> How a product is presented reflects brand choices, not
            only data patterns.
          </li>
          <li>
            <strong>Data use and compliance.</strong> Decisions about collecting or using data from
            marketplaces and competitors should respect applicable terms and laws, with legal advice
            where needed.
          </li>
          <li>
            <strong>Interpreting anomalies.</strong> A sudden price or rating change may be a promotion, an
            error or manipulation; a person has to judge which.
          </li>
        </ul>
        <DisclaimerBox title="Principle">
          AI product intelligence should support product and commercial teams, not replace strategic decision-making.
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="E-Commerce Product Intelligence FAQ">
        <FAQ items={faq} />
        <p>
          For tool selection see{" "}
          <Link href={PAGES.software.path}>product intelligence software</Link>; for definitions see{" "}
          <Link href={PAGES.whatIs.path}>what is product intelligence</Link>.
        </p>
      </ArticleSection>

      <RelatedGuides exclude="ecommerce" />

      <SourceCitation sources={["ftcReviews"]} />
    </>
  );
}
