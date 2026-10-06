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
import { pageGraph, type BreadcrumbItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED } from "@/lib/site-config";

const page = PAGES.software;

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
    question: "What is product intelligence software?",
    answer:
      "Product intelligence software collects and analyzes data about products, competitors, pricing, reviews and market trends so teams can compare offerings and track product performance. The term is also used for product intelligence tools and platforms.",
  },
  {
    question: "What is the difference between product intelligence software and product analytics software?",
    answer:
      "Product analytics software measures how users behave inside a product. Product intelligence software focuses on external and comparative data such as competitor products, pricing, reviews and market signals, and may also combine it with internal performance data.",
  },
  {
    question: "What is the most important factor when evaluating product intelligence software?",
    answer:
      "Data coverage and quality usually matter most: which sources and marketplaces are covered, how fresh the data is, and how granular it is at the product level. Features are only as useful as the data behind them.",
  },
  {
    question: "Should AI features influence the buying decision?",
    answer:
      "They can, but buyers should ask what the AI does, whether outputs link back to source data, how errors are handled and whether users can inspect and override results. AI summaries without traceable evidence are hard to trust.",
  },
  {
    question: "Does ProductIntelligenceAI.com sell or recommend product intelligence software?",
    answer:
      "No. ProductIntelligenceAI.com is an educational resource. It does not operate a software service, rank vendors, endorse products or publish vendor pricing.",
  },
];

export default function ProductIntelligenceSoftwarePage() {
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
        eyebrow="Buyer guide"
        title={page.h1}
        updated={CONTENT_MODIFIED}
        definition={
          <DefinitionBox>
            Product intelligence software collects and analyzes data about products, competitors,
            pricing, reviews and market trends so teams can compare offerings and track performance.
            Capabilities and data coverage vary widely between tools, so buyers should evaluate data
            sources, freshness, granularity and exportability rather than feature lists alone.
          </DefinitionBox>
        }
      />

      <section className="section" aria-label="Scope of this page">
        <div className="container">
          <DisclaimerBox title="Scope of this guide">
            This page is educational. It does not rank, endorse or price any vendor, and
            ProductIntelligenceAI.com is not a software vendor.
          </DisclaimerBox>
        </div>
      </section>

      <ArticleSection
        id="what-should-it-do"
        title="What Should Product Intelligence Software Do?"
        tone="alt"
        shortAnswer="Product intelligence software should bring product data together, analyze it against competitors and the market, and deliver the results to the people who decide."
      >
        <p>
          Not every tool covers every capability. The groups below describe what to look for; the right
          set depends on the decisions a team needs to support. The term{" "}
          <Link href={PAGES.whatIs.path}>product intelligence</Link> is also used for platforms that
          combine several of these functions.
        </p>
        <h3>Data collection</h3>
        <ComparisonTable
          caption="Data collection capabilities"
          rowHeader="Capability"
          columns={["What it should do"]}
          rows={[
            { label: "Product data ingestion", cells: ["Bring in product, catalog and listing data from defined sources and the team's own files or systems."] },
            { label: "Competitor monitoring", cells: ["Track competitor products, prices and changes across a defined set and flag what changed."] },
            { label: "Review mining", cells: ["Collect and structure customer reviews so themes and sentiment can be analyzed by product."] },
          ]}
        />
        <h3>Analysis</h3>
        <ComparisonTable
          caption="Analysis capabilities"
          rowHeader="Capability"
          columns={["What it should do"]}
          rows={[
            { label: "Pricing analysis", cells: ["Compare prices, discounts and promotions across products, sellers and time."] },
            { label: "Feature comparison", cells: ["Line up product attributes and features to show gaps and overlaps."] },
            { label: "Market trend detection", cells: ["Show rising and falling topics, products and categories over time."] },
            { label: "Category analysis", cells: ["Describe category structure, breadth and change."] },
            { label: "Product performance tracking", cells: ["Track metrics for specific products over time, ideally alongside external context."] },
            { label: "Customer sentiment", cells: ["Summarize opinion by topic, with access to the underlying reviews."] },
            { label: "Assortment analysis", cells: ["Identify range gaps, overlaps and concentration."] },
            { label: "AI summaries", cells: ["Summarize findings in plain language with links back to the evidence."] },
          ]}
        />
        <h3>Delivery and collaboration</h3>
        <ComparisonTable
          caption="Delivery and collaboration capabilities"
          rowHeader="Capability"
          columns={["What it should do"]}
          rows={[
            { label: "Reporting", cells: ["Produce repeatable views and reports that stakeholders can read without help."] },
            { label: "Alerts", cells: ["Notify users of material changes such as price moves or new competitor products."] },
            { label: "Exports", cells: ["Allow data and reports to leave the tool in open formats."] },
            { label: "Collaboration", cells: ["Let teams share views, annotate findings and control who sees what."] },
          ]}
        />
        <h3>Connectivity</h3>
        <ComparisonTable
          caption="Connectivity capabilities"
          rowHeader="Capability"
          columns={["What it should do"]}
          rows={[
            { label: "Integrations", cells: ["Connect to the systems where the team's data lives and where decisions are made."] },
            { label: "API access", cells: ["Provide programmatic access to data and outputs, with documented limits."] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="how-to-evaluate"
        title="How to Evaluate Product Intelligence Software"
        shortAnswer="Evaluate the data first, then the analysis, then the workflow. A polished interface cannot compensate for narrow, stale or coarse data."
      >
        <ComparisonTable
          caption="Evaluation criteria for product intelligence software"
          rowHeader="Criterion"
          columns={["What to check", "Why it matters"]}
          rows={[
            { label: "Data sources", cells: ["Which sources are used, how they are obtained and how they are documented", "Determines what questions can be answered and how far results can be trusted"] },
            { label: "Data freshness", cells: ["How often data updates and whether timestamps are visible", "Stale prices and listings lead to wrong conclusions"] },
            { label: "Marketplace coverage", cells: ["Which marketplaces, retailers and sites are covered", "Gaps in coverage create blind spots"] },
            { label: "Geographic coverage", cells: ["Which countries, currencies and languages are supported", "Prices, assortment and reviews differ by region"] },
            { label: "Product-level granularity", cells: ["Whether analysis reaches individual products and variants or only categories", "Coarse data cannot support product decisions"] },
            { label: "Historical data", cells: ["How far back history goes and whether it can be exported", "Trends and seasonality need history"] },
            { label: "AI transparency", cells: ["What the AI does, which models or methods are used, and whether outputs cite source data", "Untraceable outputs cannot be verified"] },
            { label: "Reporting", cells: ["Flexibility of views, scheduling and sharing", "Insight only matters if it reaches decision makers"] },
            { label: "Integrations", cells: ["Connectors to the team's existing systems", "Reduces manual work and keeps data consistent"] },
            { label: "Exportability", cells: ["Open export formats and data portability on exit", "Avoids lock-in and supports further analysis"] },
            { label: "Permissions", cells: ["Role-based access, audit trails and data handling controls", "Needed for governance and sensitive commercial data"] },
            { label: "Pricing model", cells: ["How cost scales, for example by user, products tracked, usage or data volume, and what is included", "Affects total cost as usage grows; confirm directly with each vendor"] },
          ]}
        />
        <h3>A practical evaluation process</h3>
        <ProcessSteps
          label="Software evaluation process"
          steps={[
            { title: "Define decisions", description: "List the decisions the tool must support." },
            { title: "List required data", description: "Name the sources, regions and granularity needed." },
            { title: "Shortlist", description: "Select tools that credibly cover that data." },
            { title: "Test on known cases", description: "Run products you already understand and check the results." },
            { title: "Compare", description: "Score each tool against the same criteria." },
            { title: "Check governance", description: "Review permissions, exports and contract terms." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="adjacent-tools"
        title="How Does It Differ from Related Software Categories?"
        tone="alt"
        shortAnswer="Product intelligence software overlaps with analytics, competitive intelligence and pricing tools but is defined by its product-level, comparative focus."
      >
        <ComparisonTable
          caption="Product intelligence software compared with related categories"
          rowHeader="Category"
          columns={["Primary focus", "Typical data", "Overlap"]}
          rows={[
            { label: "Product intelligence software", cells: ["Products compared across competitors, prices, reviews and markets", "Listings, prices, reviews, market signals", "Core category"] },
            { label: "Product analytics software", cells: ["User behavior inside a product", "Events, funnels, retention", "Shares performance questions"] },
            { label: "Competitive intelligence tools", cells: ["Competitor strategy and activity", "Competitor websites, news, releases", "Shares competitor monitoring"] },
            { label: "Pricing intelligence tools", cells: ["Price monitoring and positioning", "Competitor prices and promotions", "Shares pricing analysis"] },
            { label: "Business intelligence tools", cells: ["General reporting on internal and connected data", "Warehouse and operational data", "Can host internal performance views"] },
          ]}
          note="Categories are descriptive. Some products span several categories."
        />
      </ArticleSection>

      <ArticleSection
        id="ai-in-software"
        title="What to Ask About AI in Product Intelligence Software"
        shortAnswer="Ask what the AI does, what it is based on, how it is checked and how users can override it."
      >
        <ul>
          <li>Which tasks use AI, such as extraction, summarization, clustering or matching?</li>
          <li>Does each AI output link back to the source records it was based on?</li>
          <li>How are errors and low-confidence results handled and reported?</li>
          <li>Can users correct mappings and classifications, and do corrections persist?</li>
          <li>How is customer data used, stored and protected?</li>
        </ul>
        <p>
          More on methods and risks is in{" "}
          <Link href={PAGES.ai.path}>AI product intelligence</Link>. Retail-specific evaluation points
          are covered in{" "}
          <Link href={PAGES.ecommerce.path}>product intelligence for e-commerce</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="common-mistakes"
        title="Common Mistakes When Choosing a Tool"
        tone="alt"
      >
        <ul>
          <li>Choosing on features and demos without testing data coverage on real products.</li>
          <li>Assuming every marketplace or region the team cares about is covered.</li>
          <li>Treating AI summaries as facts without checking the underlying data.</li>
          <li>Ignoring export and data portability until it is time to leave.</li>
          <li>Buying a broad platform when one use case, such as pricing, would be enough to start.</li>
        </ul>
        <p>
          Start from the decisions to be supported. The{" "}
          <Link href={PAGES.useCases.path}>product intelligence use cases</Link> page lists the data and
          outputs for each.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Product Intelligence Software FAQ">
        <FAQ items={faq} />
      </ArticleSection>

      <RelatedGuides exclude="software" />
    </>
  );
}
