import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { IntelligenceGrid } from "@/components/IntelligenceGrid";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedGuides } from "@/components/RelatedGuides";
import { pageGraph, type BreadcrumbItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED } from "@/lib/site-config";

const page = PAGES.whatIs;

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
    question: "What does product intelligence mean?",
    answer:
      "Product intelligence means gathering and interpreting data about products, competitors, customers and markets so that teams can make better product decisions. It covers product performance, competitive context, customer feedback, pricing, reviews, assortment and market signals.",
  },
  {
    question: "Is product intelligence the same as product analytics?",
    answer:
      "No. Product analytics focuses on how users behave inside a product, using the product's own usage data. Product intelligence is broader and also includes external context such as competitors, pricing, reviews and market signals.",
  },
  {
    question: "What is a product intelligence platform?",
    answer:
      "A product intelligence platform is software that collects, organizes and analyzes product-related data, such as listings, prices, reviews and competitor information, and presents it as comparisons, reports or alerts. Capabilities and data coverage vary by vendor.",
  },
  {
    question: "Who needs product intelligence?",
    answer:
      "Product managers, e-commerce and merchandising teams, pricing teams, strategy teams, marketers and competitive intelligence teams use it. Any team that makes decisions about what to build, stock, price or position can use product intelligence as evidence.",
  },
  {
    question: "Does product intelligence require AI?",
    answer:
      "No. Product intelligence has been done manually and with spreadsheets and analytics tools. AI can speed up extraction, comparison and summarization at scale, but the discipline and the decisions it supports do not depend on it.",
  },
];

export default function WhatIsProductIntelligencePage() {
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
        eyebrow="Definition"
        title={page.h1}
        updated={CONTENT_MODIFIED}
        definition={
          <DefinitionBox>
            Product intelligence is the practice of collecting, organizing and interpreting data about
            products, competitors, customers and markets to support product decisions. It combines
            inputs such as product listings, pricing, reviews, usage data and market signals to show
            how a product performs, how it compares and where opportunities or risks exist.
          </DefinitionBox>
        }
      />

      <ArticleSection
        id="purpose"
        title="What Is the Purpose of Product Intelligence?"
        shortAnswer="The purpose of product intelligence is to replace guesswork with structured evidence when deciding what to build, stock, price and position."
      >
        <p>
          Teams make product decisions with incomplete information. Competitors change prices, customers
          describe needs in reviews and support tickets, and categories shift. Product intelligence
          collects those signals in one place and ties them to specific decisions, so a team can see
          what changed, why it matters and what to do about it.
        </p>
        <p>Companies typically use product intelligence to:</p>
        <ul>
          <li>Understand how their products compare with competing offerings.</li>
          <li>Detect competitor moves, price changes and category shifts earlier.</li>
          <li>Learn what customers value and where products disappoint them.</li>
          <li>Decide which products, features or ranges to add, improve or retire.</li>
          <li>Give product, pricing, marketing and strategy teams a shared evidence base.</li>
        </ul>
        <p>
          Product intelligence supports decisions; it does not make them. It is a method for producing
          evidence, and the quality of the decision still depends on the people interpreting it.
        </p>
      </ArticleSection>

      <ArticleSection
        id="data"
        title="What Data Does Product Intelligence Use?"
        tone="alt"
        shortAnswer="Product intelligence uses product performance data, competitive information, customer feedback, pricing, reviews, assortment data and market signals."
      >
        <ComparisonTable
          caption="Data categories used in product intelligence"
          rowHeader="Data category"
          columns={["Examples", "What it helps answer"]}
          rows={[
            { label: "Product performance", cells: ["Sales, conversion, usage, returns, retention", "Is the product meeting its goals, and where is it underperforming?"] },
            { label: "Competitive context", cells: ["Competitor features, positioning, release notes, product pages", "How does our offering compare, and where do competitors differ?"] },
            { label: "Customer feedback", cells: ["Surveys, support tickets, interviews, community posts", "What do customers need, expect and struggle with?"] },
            { label: "Pricing", cells: ["List prices, discounts, promotions, price history", "Where is the product priced relative to alternatives and over time?"] },
            { label: "Reviews", cells: ["Review text, star ratings, review volume and recency", "Which features do customers praise, and which defects recur?"] },
            { label: "Assortment", cells: ["Product ranges, variants, categories, availability", "Are there gaps or overlaps in what is offered?"] },
            { label: "Market signals", cells: ["Search trends, category growth, new entrants, news", "Is demand moving, and are new competitors or categories emerging?"] },
          ]}
          note="Which sources are available depends on a team's own systems and on the terms governing any external data."
        />
      </ArticleSection>

      <ArticleSection
        id="how-it-works"
        title="How Does Product Intelligence Work?"
        shortAnswer="Product intelligence works by collecting product data, cleaning it, analyzing and comparing it, interpreting the results and feeding them into a decision."
      >
        <ProcessSteps
          label="How product intelligence works"
          steps={[
            { title: "Define the question", description: "Decide which decision the evidence must support." },
            { title: "Collect", description: "Gather listings, prices, reviews, competitor and internal data." },
            { title: "Clean and normalize", description: "Standardize attributes, units, categories and dates." },
            { title: "Analyze and compare", description: "Benchmark products, cluster feedback, track changes." },
            { title: "Interpret", description: "Explain what the patterns mean in business context." },
            { title: "Decide and monitor", description: "Act, then keep tracking the signals that mattered." },
          ]}
        />
        <p>
          The inputs are raw product-related data. The outputs are structured comparisons, trend views
          and recommendations that a named owner can act on. Manual methods and analytics tools can run
          every step; <Link href={PAGES.ai.path}>AI product intelligence</Link> speeds up the collection,
          extraction and comparison steps when the volume is too large to read by hand.
        </p>
        <h3>Product intelligence platforms, software and data</h3>
        <p>
          A product intelligence platform or tool packages these steps in software. Product intelligence
          data is the underlying material: listings, prices, reviews and signals. Some organizations
          build the capability internally from analytics tools and spreadsheets. See{" "}
          <Link href={PAGES.software.path}>product intelligence software</Link> for what such tools
          should do and how to evaluate them.
        </p>
      </ArticleSection>

      <ArticleSection
        id="related-disciplines"
        title="How Does Product Intelligence Connect to Other Disciplines?"
        tone="alt"
        shortAnswer="Product intelligence sits above several adjacent disciplines and links their outputs to product strategy."
      >
        <ComparisonTable
          caption="Relationship between product intelligence and adjacent disciplines"
          rowHeader="Discipline"
          columns={["Relationship to product intelligence", "Typical contribution"]}
          rows={[
            { label: "Product research", cells: ["Supplies primary evidence about customers and ideas", "Interviews, surveys, usability findings"] },
            { label: "Product analytics", cells: ["Supplies behavioral evidence from inside the product", "Funnels, cohorts, feature usage"] },
            { label: "Competitive intelligence", cells: ["Supplies the view of competitors and their offerings", "Competitor profiles, feature and positioning comparisons"] },
            { label: "Pricing intelligence", cells: ["Supplies price and promotion evidence", "Price comparisons and change tracking"] },
            { label: "Customer feedback", cells: ["Supplies the voice of the customer", "Review themes, support and survey insights"] },
            { label: "Product performance", cells: ["Supplies the internal results to explain", "Sales, conversion, retention, returns"] },
            { label: "Market signals", cells: ["Supplies external demand and category context", "Search trends, category growth, entrants"] },
            { label: "Product strategy", cells: ["Consumes the evidence to set direction", "Prioritization, positioning, investment choices"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="vs-product-analytics"
        title="Product Intelligence vs Product Analytics"
        shortAnswer="Product analytics measures behavior inside a product; product intelligence adds the external context needed to interpret that behavior."
      >
        <ComparisonTable
          caption="Product intelligence compared with product analytics"
          rowHeader="Aspect"
          columns={["Product intelligence", "Product analytics"]}
          rows={[
            { label: "Perspective", cells: ["Outside-in and inside-out", "Inside-out"] },
            { label: "Data origin", cells: ["External sources plus internal performance data", "The product's own event and usage data"] },
            { label: "Typical question", cells: ["Why did conversion fall after a competitor cut prices?", "Where in the funnel are users dropping off?"] },
            { label: "Typical output", cells: ["Comparisons, opportunity lists, recommendations", "Dashboards, funnels, cohort reports"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="vs-product-research"
        title="Product Intelligence vs Product Research"
        tone="alt"
        shortAnswer="Product research answers specific questions through primary and secondary study; product intelligence maintains an ongoing evidence base."
      >
        <ComparisonTable
          caption="Product intelligence compared with product research"
          rowHeader="Aspect"
          columns={["Product intelligence", "Product research"]}
          rows={[
            { label: "Rhythm", cells: ["Continuous monitoring plus periodic reviews", "Project-based, tied to a question"] },
            { label: "Methods", cells: ["Data collection, comparison, trend tracking", "Interviews, surveys, usability tests, desk research"] },
            { label: "Strength", cells: ["Scale and currency", "Depth and explanation of motivation"] },
            { label: "Typical output", cells: ["Structured market and product views", "Research reports, personas, tested hypotheses"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="vs-market-intelligence"
        title="Product Intelligence vs Market Intelligence"
        shortAnswer="Market intelligence studies a market as a whole; product intelligence studies the specific products within it."
      >
        <ComparisonTable
          caption="Product intelligence compared with market intelligence"
          rowHeader="Aspect"
          columns={["Product intelligence", "Market intelligence"]}
          rows={[
            { label: "Unit of analysis", cells: ["Individual products, features and listings", "Markets, segments, customers and industries"] },
            { label: "Typical question", cells: ["How does this product compare with its closest alternatives?", "How large is this segment, and where is it heading?"] },
            { label: "Typical data", cells: ["Product attributes, prices, reviews", "Market reports, segment data, industry trends"] },
            { label: "Typical users", cells: ["Product, pricing and merchandising teams", "Strategy, corporate development and marketing teams"] },
          ]}
          note="In practice the two inform each other: market context frames which products to study, and product evidence tests market assumptions."
        />
      </ArticleSection>

      <ArticleSection
        id="who-uses-it"
        title="Who Uses Product Intelligence?"
        shortAnswer="Product, e-commerce, merchandising, pricing, marketing, strategy and competitive intelligence teams use product intelligence."
      >
        <IntelligenceGrid
          columns={3}
          label="Teams that use product intelligence"
          items={[
            { title: "Product managers", description: "Prioritize roadmaps using competitive position, feature gaps and customer feedback." },
            { title: "E-commerce and merchandising", description: "Review listings, prices, ratings and assortment to decide what to stock and how to present it." },
            { title: "Pricing teams", description: "Monitor competitor prices and promotions to set price positions with evidence." },
            { title: "Marketing", description: "Learn how customers describe products and where positioning can differ." },
            { title: "Strategy", description: "Read category change and market signals when choosing where to compete." },
            { title: "Competitive intelligence", description: "Maintain a current, structured view of competitor products for internal briefings." },
          ]}
        />
        <p>
          Retail and marketplace teams in particular rely on this evidence; see{" "}
          <Link href={PAGES.ecommerce.path}>product intelligence for e-commerce and retail</Link>. For
          worked examples by team and goal, see{" "}
          <Link href={PAGES.useCases.path}>product intelligence use cases</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="decisions"
        title="What Decisions Can Product Intelligence Support?"
        tone="alt"
        shortAnswer="Product intelligence supports decisions about what to build, stock, price, position and launch."
      >
        <ComparisonTable
          caption="Decisions supported by product intelligence"
          rowHeader="Decision"
          columns={["Evidence that informs it", "Typical owner"]}
          rows={[
            { label: "What to build or improve", cells: ["Feature gaps, review themes, competitor releases", "Product management"] },
            { label: "What to add, keep or retire", cells: ["Assortment gaps, category trends, product performance", "Merchandising, category management"] },
            { label: "How to price", cells: ["Competitor prices, promotions, price history, performance", "Pricing, finance, commercial leadership"] },
            { label: "How to position and message", cells: ["Competitor positioning, review language, customer feedback", "Product marketing, brand"] },
            { label: "Where to compete", cells: ["Market signals, category growth, unmet needs", "Strategy, executive team"] },
            { label: "When to launch or respond", cells: ["Competitor timing, demand signals, readiness data", "Product and commercial leadership"] },
          ]}
          note="Each decision combines evidence with margin, brand, resources and risk, which product intelligence does not supply."
        />
      </ArticleSection>

      <ArticleSection id="faq" title="Product Intelligence FAQ">
        <FAQ items={faq} />
      </ArticleSection>

      <RelatedGuides exclude="whatIs" />
    </>
  );
}
