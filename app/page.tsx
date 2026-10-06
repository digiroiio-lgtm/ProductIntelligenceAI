import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { IntelligenceGrid } from "@/components/IntelligenceGrid";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedGuides } from "@/components/RelatedGuides";
import { faqJsonLd, graphJsonLd, webPageJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED, SALE_URL, HAS_EXTERNAL_SALE_URL } from "@/lib/site-config";

const page = PAGES.home;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

const faq: FaqItem[] = [
  {
    question: "What is product intelligence?",
    answer:
      "Product intelligence is the practice of collecting and interpreting data about products, competitors, customers and markets to inform product decisions. It draws on product research, product analytics, competitive intelligence, pricing intelligence, customer feedback and market signals.",
  },
  {
    question: "What is AI product intelligence?",
    answer:
      "AI product intelligence applies artificial intelligence to product-related data, such as listings, reviews, prices and demand signals, to extract attributes, compare offerings and detect patterns faster than manual work. The results inform human decisions rather than replace them.",
  },
  {
    question: "How is product intelligence different from product analytics?",
    answer:
      "Product analytics measures how people use a product, typically from the product's own event and behavior data. Product intelligence is broader: it combines that internal view with external context such as competitors, pricing, reviews and market signals.",
  },
  {
    question: "Does AI replace product research?",
    answer:
      "No. AI can speed up desk research, review analysis and comparison, but primary research such as interviews and usability testing still captures context and motivation that data analysis alone does not. The two are complementary.",
  },
  {
    question: "Is ProductIntelligenceAI.com a software product?",
    answer:
      "No. ProductIntelligenceAI.com is an educational resource about AI-assisted product intelligence. It does not currently operate a software service, and the domain is available for acquisition.",
  },
  {
    question: "What are the main risks of using AI for product intelligence?",
    answer:
      "The main risks are poor or stale source data, biased or manipulated reviews, AI-generated errors, false correlations, missing context and over-automation. Outputs should be checked against source data before they inform decisions.",
  },
];

const aiCards = [
  { title: "Products", description: "Titles, descriptions, attributes, specifications and catalog structure, extracted and normalized for comparison." },
  { title: "Competitors", description: "Competing offerings, positioning, feature sets and changes over time across a defined competitive set." },
  { title: "Pricing", description: "Price points, discounts, promotions and price changes compared across products, sellers and periods." },
  { title: "Reviews", description: "Review text and ratings clustered into recurring themes, complaints, praised features and unmet needs." },
  { title: "Features", description: "Feature coverage and gaps compared across products to see where an offering is ahead, level or behind." },
  { title: "Demand Signals", description: "Search interest, query trends and engagement indicators that suggest where customer attention is moving." },
  { title: "Categories", description: "Category structure, new entrants, assortment breadth and shifts in how products are grouped and positioned." },
  { title: "Product Performance", description: "Sales, conversion, usage and return data read alongside external context to explain why results moved." },
];

const useCaseCards = [
  { title: "Competitive Intelligence", description: "Track how competing products are described, priced and positioned, and which differences matter commercially.", href: "/product-intelligence-use-cases#competitive-product-analysis" },
  { title: "Pricing Intelligence", description: "Compare prices, promotions and price changes across a defined set of products and sellers.", href: "/product-intelligence-use-cases#pricing-intelligence" },
  { title: "Review Mining", description: "Turn large volumes of customer reviews into structured themes covering needs, defects and expectations.", href: "/product-intelligence-use-cases#customer-review-mining" },
  { title: "Product Research", description: "Speed up desk research on markets, categories and product ideas before committing to deeper study.", href: "/product-intelligence-use-cases#product-research" },
  { title: "Benchmarking", description: "Measure a product against comparable offerings on features, price, ratings and customer perception.", href: "/product-intelligence-use-cases#product-benchmarking" },
  { title: "Product Discovery", description: "Surface unmet needs and market gaps that point to new product or assortment opportunities.", href: "/product-intelligence-use-cases#new-product-discovery" },
];

const teamCards = [
  { title: "Product", description: "Product managers use it to understand competitive position, feature gaps and customer feedback before prioritizing a roadmap." },
  { title: "E-Commerce", description: "E-commerce teams analyze listings, prices, ratings and search position to improve product pages and range decisions." },
  { title: "Strategy", description: "Strategy teams use it to read category change, new entrants and market signals when planning where to compete." },
  { title: "Marketing", description: "Marketing teams mine reviews and positioning data to sharpen messaging and understand how customers describe products." },
  { title: "Pricing", description: "Pricing teams monitor competitor prices and promotions to set and defend price positions with evidence." },
  { title: "Merchandising", description: "Merchandisers analyze assortment, category gaps and product performance to decide what to add, keep or retire." },
  { title: "Competitive Intelligence", description: "CI teams use it to keep a structured, current view of competitor products and to brief product and sales teams." },
];

const conceptChain = [
  { title: "Product Research" },
  { title: "Product Analytics" },
  { title: "Competitive Intelligence" },
  { title: "Pricing Intelligence" },
  { title: "Customer Feedback" },
  { title: "Product Performance" },
  { title: "Market Signals" },
  { title: "Product Decisions" },
];

export default function HomePage() {
  const saleLinkProps = HAS_EXTERNAL_SALE_URL
    ? { target: "_blank", rel: "noopener nofollow" }
    : {};

  return (
    <>
      <JsonLd
        data={graphJsonLd([
          websiteJsonLd(),
          webPageJsonLd({
            path: page.path,
            name: page.title,
            description: page.description,
          }),
          faqJsonLd(page.path, faq),
        ])}
      />
      <Hero
        variant="home"
        eyebrow="AI-assisted product intelligence"
        title={page.h1}
        definition={
          <DefinitionBox>
            AI product intelligence uses artificial intelligence to help teams analyze product data,
            competitor offerings, pricing, customer reviews, demand signals and product performance.
            It can accelerate research and pattern detection, but product strategy, prioritization
            and commercial decisions should remain under human judgment.
          </DefinitionBox>
        }
        lede="Understand how AI can help analyze products, competitors, pricing, reviews, demand signals and product performance."
        actions={
          <>
            <Link className="btn" href={PAGES.whatIs.path}>
              Explore Product Intelligence
            </Link>
            <a className="btn btn--outline" href={SALE_URL} {...saleLinkProps}>
              Domain for Sale
            </a>
          </>
        }
        updated={CONTENT_MODIFIED}
        aside={
          <div className="concept-map">
            <p className="concept-map__title">How the concepts connect</p>
            <p className="concept-map__caption">
              Product intelligence links these disciplines into one evidence chain for decisions.
            </p>
            <ProcessSteps steps={conceptChain} label="Product intelligence concept chain" variant="compact" />
          </div>
        }
      />

      <ArticleSection
        id="what-is-product-intelligence"
        title="What Is Product Intelligence?"
        shortAnswer="Product intelligence is the practice of collecting and interpreting data about products, competitors, customers and markets to inform product decisions."
      >
        <p>
          It connects disciplines that are often run separately: product research, product analytics,
          competitive intelligence, pricing intelligence, customer feedback analysis, product
          performance tracking and market signal monitoring. The goal is not a report for its own sake.
          It is evidence that supports decisions about what to build, what to stock, how to price and
          how to position a product.
        </p>
        <p>
          The term is used in two common ways. In product management and software, it often means
          understanding how a product is used and how it compares in its market. In e-commerce and
          retail, it usually means analyzing product listings, prices, reviews and assortment across a
          category or marketplace. Both uses rest on the same idea: structured evidence about products
          leads to better decisions than intuition alone.
        </p>
        <p>
          <Link href={PAGES.whatIs.path}>Read the full definition of product intelligence</Link> or see
          how <Link href={PAGES.ai.path}>AI changes the way product intelligence is produced</Link>.
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-can-ai-analyze"
        title="What Can AI Analyze?"
        tone="alt"
        shortAnswer="AI can analyze structured and unstructured product data, including listings, competitor information, prices, reviews, features, demand signals, categories and performance data."
      >
        <p>
          Language models and classification methods are most useful where the volume of text or
          listings is too large to read manually. They extract attributes, group similar items and
          summarize what recurs. Each card below describes one analysis target; see{" "}
          <Link href={PAGES.ai.path}>AI product intelligence</Link> for methods and limits.
        </p>
        <IntelligenceGrid items={aiCards} columns={4} label="What AI can analyze" />
      </ArticleSection>

      <ArticleSection
        id="product-intelligence-workflow"
        title="Product Intelligence Workflow"
        shortAnswer="The workflow moves from raw product data to a human decision: analyze, compare, find patterns, form insights, then decide."
      >
        <p>
          AI contributes to the middle steps. People define the question at the start and own the
          decision at the end.
        </p>
        <ProcessSteps
          label="Product intelligence workflow"
          steps={[
            { title: "Product Data", description: "Listings, prices, reviews, competitor and performance data." },
            { title: "Analysis", description: "Extract attributes and classify records." },
            { title: "Comparison", description: "Match and compare products against a defined set." },
            { title: "Patterns", description: "Detect trends, clusters, gaps and anomalies." },
            { title: "Insights", description: "Summarize what the patterns mean for the question asked." },
            { title: "Human Decision", description: "Teams weigh insights against strategy, margin and risk." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="core-data-sources"
        title="Core Data Sources"
        tone="alt"
        shortAnswer="Product intelligence draws on product listings, pricing, reviews, competitor information, demand signals and a team's own performance data."
      >
        <p>
          The table lists common source types and their typical limits. These are categories of data
          teams use in general; ProductIntelligenceAI.com does not collect or provide any of this data.
        </p>
        <ComparisonTable
          caption="Common product intelligence data sources"
          rowHeader="Source type"
          columns={["What it contains", "Questions it helps answer", "Common limitation"]}
          rows={[
            { label: "Product listings and catalogs", cells: ["Titles, descriptions, attributes, images, categories", "How are comparable products described and structured?", "Inconsistent attributes across sellers"] },
            { label: "Pricing and promotions", cells: ["List prices, discounts, price changes over time", "Where is a product priced relative to alternatives?", "Prices change quickly and vary by region and seller"] },
            { label: "Reviews and ratings", cells: ["Customer text, star ratings, dates", "What do customers value, dislike or expect?", "Reviews can be biased, sparse or manipulated"] },
            { label: "Competitor information", cells: ["Websites, documentation, release notes, positioning", "What are competitors offering and emphasizing?", "Public information is incomplete"] },
            { label: "Demand signals", cells: ["Search trend data, query patterns, engagement indicators", "Is interest in a product or category rising or falling?", "Signals show attention, not purchases"] },
            { label: "Internal performance data", cells: ["Sales, conversion, usage, returns, support tickets", "How is our own product performing and why?", "Explains what happened, not always why"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="key-use-cases"
        title="Key Use Cases"
        shortAnswer="The most common use cases are competitive analysis, pricing, review mining, product research, benchmarking and product discovery."
      >
        <p>
          Each use case follows the same pattern of goal, data, AI-assisted analysis, human decision and
          output. The full breakdown is on the{" "}
          <Link href={PAGES.useCases.path}>product intelligence use cases</Link> page.
        </p>
        <IntelligenceGrid items={useCaseCards} columns={3} label="Core product intelligence use cases" />
      </ArticleSection>

      <ArticleSection
        id="product-intelligence-vs-research-vs-analytics"
        title="Product Intelligence vs Product Research vs Product Analytics"
        tone="alt"
        shortAnswer="The three overlap but answer different questions: research explains why, analytics measures what users do, and intelligence connects both to competitors, pricing and market context."
      >
        <ComparisonTable
          caption="Product intelligence compared with product research and product analytics"
          rowHeader="Dimension"
          columns={["Product intelligence", "Product research", "Product analytics"]}
          rows={[
            { label: "Primary purpose", cells: ["Connect evidence about products, competitors, customers and markets to decisions", "Answer a specific question about customers, markets or a product idea", "Measure how people use and respond to a product"] },
            { label: "Typical data", cells: ["Listings, prices, reviews, competitor data, market signals, performance data", "Interviews, surveys, usability tests, desk research", "Event, usage, funnel, conversion and retention data"] },
            { label: "Questions answered", cells: ["How do we compare? Where are the gaps? What is changing in the market?", "Why do customers behave this way? Is there demand for this idea?", "What are users doing, and how are conversion and retention trending?"] },
            { label: "Frequency", cells: ["Ongoing monitoring plus periodic reviews", "Project-based or periodic", "Continuous"] },
            { label: "Primary users", cells: ["Product, strategy, pricing, merchandising and competitive intelligence teams", "Researchers, product managers and designers", "Product managers, growth teams and data analysts"] },
            { label: "Outputs", cells: ["Competitive and market views, opportunity lists, recommendations", "Research reports, personas, validated or rejected hypotheses", "Dashboards, funnels, cohort analyses, experiment results"] },
          ]}
          note="Boundaries blur in practice. Many teams run all three and feed their findings into the same decisions."
        />
        <h3>Product intelligence vs product research</h3>
        <p>
          Product research is usually question-led and time-boxed: a team studies a market or tests an
          idea. Product intelligence is closer to a standing capability that keeps that outside-in view
          current. AI-assisted analysis can speed up the desk-research part of both.
        </p>
        <h3>Product intelligence vs product analytics</h3>
        <p>
          Product analytics looks inward at behavior inside a product. Product intelligence adds the
          outside view, so a drop in conversion can be read alongside a competitor price change or a
          shift in review sentiment. The two work best together.
        </p>
      </ArticleSection>

      <ArticleSection
        id="product-intelligence-by-team"
        title="Who Uses Product Intelligence?"
        shortAnswer="Product, e-commerce, strategy, marketing, pricing, merchandising and competitive intelligence teams all use it, each for different decisions."
      >
        <IntelligenceGrid items={teamCards} columns={4} label="Teams that use product intelligence" />
      </ArticleSection>

      <ArticleSection
        id="risks-and-limitations"
        title="Risks and Limitations"
        tone="alt"
        shortAnswer="AI output is only as reliable as its source data and the checks applied to it."
      >
        <p>
          Common risks include poor or stale source data, biased or manipulated reviews, AI-generated
          errors, false correlations, missing context and over-automation. Regulators treat fake reviews
          as a real problem: the U.S. Federal Trade Commission&apos;s rule banning fake reviews and
          testimonials, which covers AI-generated reviews, took effect in October 2024
          <Cite source="ftcReviews" n={1} />. NIST also identifies confabulation, meaning confident but
          false output, as a risk specific to generative AI<Cite source="nistGenAi" n={2} />.
        </p>
        <p>
          Practical safeguards include checking outputs against source records, recording the date of
          data, comparing several sources and keeping a named person accountable for each decision. See{" "}
          <Link href={`${PAGES.ai.path}#risks-and-limitations`}>risks and limitations of AI product intelligence</Link>{" "}
          for the full list.
        </p>
        <DisclaimerBox title="Principle">
          AI product intelligence should support product and commercial teams, not replace strategic decision-making.
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions about Product Intelligence">
        <FAQ items={faq} />
      </ArticleSection>

      <RelatedGuides />

      <SourceCitation sources={["ftcReviews", "nistGenAi"]} />
    </>
  );
}
