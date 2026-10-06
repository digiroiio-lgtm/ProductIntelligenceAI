import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { IntelligenceGrid } from "@/components/IntelligenceGrid";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedGuides } from "@/components/RelatedGuides";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { pageGraph, type BreadcrumbItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED } from "@/lib/site-config";

const page = PAGES.ai;

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
    question: "What is AI product intelligence?",
    answer:
      "AI product intelligence applies machine learning and language models to product-related data, such as listings, reviews, prices and market signals, to extract attributes, compare offerings and surface patterns. The outputs support human product and commercial decisions.",
  },
  {
    question: "Can AI replace product managers or analysts?",
    answer:
      "No. AI can automate extraction, summarization and comparison, but strategy, positioning, prioritization and commercial tradeoffs depend on judgment, accountability and context that remain with people.",
  },
  {
    question: "How accurate is AI-generated product intelligence?",
    answer:
      "Accuracy depends on the quality, freshness and coverage of the source data and on how outputs are checked. Generative models can state incorrect information confidently, so important findings should be verified against the underlying records.",
  },
  {
    question: "What is automated product intelligence?",
    answer:
      "Automated product intelligence uses software to run repeatable steps, such as collecting data, extracting attributes, clustering reviews and flagging price changes, on a schedule. People still define the questions and make the decisions.",
  },
  {
    question: "How is AI product intelligence different from AI product analytics?",
    answer:
      "AI product analytics usually applies AI to a product's own usage data. AI product intelligence also covers external context such as competitor offerings, pricing, reviews and market signals.",
  },
];

export default function AiProductIntelligencePage() {
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
        eyebrow="AI methodology"
        title={page.h1}
        updated={CONTENT_MODIFIED}
        definition={
          <DefinitionBox>
            AI product intelligence applies machine learning and language models to product-related
            data, such as listings, reviews, prices and market signals, to extract attributes, compare
            offerings and surface patterns faster than manual analysis. Its outputs are inputs to human
            decisions, not substitutes for them. Accuracy depends on source data quality, freshness and
            review.
          </DefinitionBox>
        }
      />

      <ArticleSection
        id="what-is-ai-product-intelligence"
        title="What Is AI Product Intelligence?"
        shortAnswer="AI product intelligence is product intelligence in which AI performs the high-volume work of extracting, classifying, comparing and summarizing product data."
      >
        <p>
          It builds on the discipline described in{" "}
          <Link href={PAGES.whatIs.path}>what product intelligence is</Link>. The goal is unchanged:
          evidence for product decisions. What changes is the cost of working with large volumes of
          unstructured data such as review text, product descriptions and competitor pages. Terms such
          as product intelligence AI, automated product intelligence and product intelligence automation
          describe the same idea from different angles.
        </p>
        <ComparisonTable
          caption="How AI product intelligence relates to its core capabilities"
          rowHeader="Capability"
          columns={["What it does", "Typical output"]}
          rows={[
            { label: "Data extraction", cells: ["Pulls attributes, prices and features out of listings, pages and documents", "Structured product records"] },
            { label: "Review mining", cells: ["Groups and summarizes themes across customer reviews", "Ranked themes with example quotes"] },
            { label: "Competitive analysis", cells: ["Compares products and positioning across a defined competitor set", "Feature and positioning comparisons"] },
            { label: "Pricing analysis", cells: ["Compares prices and tracks changes across products and sellers", "Price comparisons and change alerts"] },
            { label: "Trend detection", cells: ["Identifies rising or falling topics, features and categories", "Trend summaries over time"] },
            { label: "Opportunity discovery", cells: ["Highlights unmet needs and gaps in a category", "Candidate opportunity lists for review"] },
            { label: "Human decision-making", cells: ["Receives the outputs above and weighs them against strategy, margin and risk", "A documented product or commercial decision"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="what-can-ai-analyze"
        title="What Can AI Analyze?"
        tone="alt"
        shortAnswer="AI can analyze both structured product data and unstructured text, from catalogs and prices to reviews and descriptions."
      >
        <IntelligenceGrid
          columns={3}
          label="Data types AI can analyze for product intelligence"
          items={[
            { title: "Competitor products", description: "Competing offerings, specifications and positioning, compared against a defined set." },
            { title: "Product catalogs", description: "Large catalogs normalized into consistent attributes and categories." },
            { title: "Customer reviews", description: "Review text clustered into themes, praise and complaints." },
            { title: "Product descriptions", description: "Claims, benefits and terminology compared across sellers and brands." },
            { title: "Pricing", description: "Price points, discounts and price changes across products and over time." },
            { title: "Feature comparisons", description: "Feature coverage mapped across products to find gaps and overlaps." },
            { title: "Search trends", description: "Changes in search interest for products, features and categories." },
            { title: "Demand signals", description: "Engagement and interest indicators that suggest shifting demand." },
            { title: "Customer sentiment", description: "Positive, negative and mixed opinion detected in text and grouped by topic." },
            { title: "Product performance", description: "Internal results read alongside external context to help explain movement." },
            { title: "Category changes", description: "New entrants, reclassification and shifts in category structure." },
            { title: "Market gaps", description: "Needs that few current products address, flagged for human review." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="AI Product Intelligence Workflow"
        shortAnswer="The workflow runs from product data through extraction, classification, comparison and pattern detection to an insight, and ends with a human decision."
      >
        <ProcessSteps
          label="AI product intelligence workflow"
          steps={[
            { title: "Product Data", description: "Listings, prices, reviews, competitor and internal data." },
            { title: "Extraction", description: "Pull attributes, prices and claims into structured fields." },
            { title: "Classification", description: "Assign categories, topics, sentiment and product types." },
            { title: "Comparison", description: "Match like with like and compare across products." },
            { title: "Pattern Detection", description: "Find trends, clusters, gaps and anomalies." },
            { title: "Insight", description: "Summarize findings with links back to source data." },
            { title: "Human Decision", description: "A named owner decides, with evidence in hand." },
          ]}
        />
        <p>
          Inputs are raw product-related data and a clearly stated question. Outputs are structured
          records, comparisons and summaries, each of which should trace back to source data so a person
          can verify it before acting.
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-can-ai-automate"
        title="What Can AI Automate?"
        tone="alt"
        shortAnswer="AI can automate repeatable, high-volume analysis tasks such as summarization, clustering, extraction, comparison and monitoring."
      >
        <ComparisonTable
          caption="Tasks AI can automate in product intelligence"
          rowHeader="Task"
          columns={["How AI assists", "Output", "What to review"]}
          rows={[
            { label: "Summarization", cells: ["Condenses long documents, pages and review sets", "Short summaries", "Whether key details were dropped or distorted"] },
            { label: "Review clustering", cells: ["Groups similar review comments into themes", "Theme list with counts", "Whether themes are coherent and representative"] },
            { label: "Sentiment analysis", cells: ["Classifies opinion as positive, negative or mixed by topic", "Sentiment by feature or topic", "Sarcasm, mixed opinions and sample sizes"] },
            { label: "Feature extraction", cells: ["Identifies product attributes and features in text", "Structured feature tables", "Missing or mis-assigned attributes"] },
            { label: "Competitor comparison", cells: ["Matches comparable products and lines up differences", "Side-by-side comparison", "Whether products are truly comparable"] },
            { label: "Pricing comparison", cells: ["Compares prices and flags changes", "Price tables and change alerts", "Currency, bundle, region and promotion effects"] },
            { label: "Trend detection", cells: ["Spots rising and falling topics over time", "Trend views", "Seasonality and one-off spikes"] },
            { label: "Anomaly detection", cells: ["Flags unusual prices, rating changes or review bursts", "Alerts for review", "Whether the anomaly is real or a data error"] },
            { label: "Opportunity identification", cells: ["Surfaces gaps between customer needs and current offerings", "Candidate opportunity list", "Commercial viability and fit with strategy"] },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="human-judgment"
        title="What Still Requires Human Judgment?"
        shortAnswer="People still decide strategy, positioning, priorities, commercial tradeoffs, brand direction and final product choices."
      >
        <ul>
          <li>
            <strong>Product strategy.</strong> Choosing which markets and customers to serve depends on
            goals and constraints that data does not contain.
          </li>
          <li>
            <strong>Positioning.</strong> Deciding how to differ from competitors is a judgment about
            brand and audience, not a pattern in a dataset.
          </li>
          <li>
            <strong>Prioritization.</strong> Ranking opportunities requires weighing effort, risk, timing
            and dependencies.
          </li>
          <li>
            <strong>Commercial tradeoffs.</strong> Margin, price, inventory and partnerships involve
            tradeoffs that an analysis can inform but not resolve.
          </li>
          <li>
            <strong>Brand decisions.</strong> Consistency, reputation and tone are owned by people.
          </li>
          <li>
            <strong>Final product decisions.</strong> Someone accountable must make the call and own the
            result.
          </li>
        </ul>
        <DisclaimerBox title="Principle">
          AI product intelligence should support product and commercial teams, not replace strategic decision-making.
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="risks-and-limitations"
        title="Risks and Limitations"
        tone="alt"
        shortAnswer="Most failures in AI product intelligence trace back to data quality, missing context or unchecked output."
      >
        <ComparisonTable
          caption="Risks of AI product intelligence and common safeguards"
          rowHeader="Risk"
          columns={["What can go wrong", "Safeguard"]}
          rows={[
            { label: "Poor source data", cells: ["Incomplete, inconsistent or mislabeled data produces unreliable output", "Profile data quality before analysis; document sources"] },
            { label: "Stale information", cells: ["Prices, listings and competitor offers change, so old data misleads", "Record collection dates; refresh on a schedule"] },
            { label: "Biased reviews", cells: ["Reviews over-represent extreme opinions and self-selected customers", "Check sample sizes; combine with other feedback"] },
            { label: "Manipulated marketplace data", cells: ["Fake reviews, inflated ratings and manipulated rankings distort analysis", "Cross-check sources; treat anomalies with suspicion"] },
            { label: "Hallucinations", cells: ["Generative models can state false information with confidence", "Require traceable sources; verify key claims"] },
            { label: "False correlations", cells: ["Patterns can appear without any causal link", "Test explanations; do not infer cause from correlation alone"] },
            { label: "Missing context", cells: ["Data omits reasons such as promotions, stock-outs or strategy", "Add internal context; involve domain experts"] },
            { label: "Over-automation", cells: ["Decisions made on unreviewed output erode accountability", "Keep a named human owner for every decision"] },
          ]}
        />
        <p>
          Two of these risks have authoritative references. The U.S. Federal Trade Commission&apos;s
          final rule banning fake reviews and testimonials, including AI-generated ones, took effect in
          October 2024, which is a reminder that review data cannot be assumed authentic
          <Cite source="ftcReviews" n={1} />. NIST&apos;s Generative AI Profile identifies confabulation,
          meaning confidently stated but false output, as a risk specific to generative AI
          <Cite source="nistGenAi" n={2} />. NIST&apos;s broader AI Risk Management Framework offers
          voluntary guidance for managing AI risk in general<Cite source="nistAiRmf" n={3} />.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="AI Product Intelligence FAQ">
        <FAQ items={faq} />
        <p>
          For tool selection, see{" "}
          <Link href={PAGES.software.path}>how to evaluate product intelligence software</Link>. For
          applied examples, see{" "}
          <Link href={PAGES.useCases.path}>product intelligence use cases</Link>.
        </p>
      </ArticleSection>

      <RelatedGuides exclude="ai" />

      <SourceCitation sources={["ftcReviews", "nistGenAi", "nistAiRmf"]} />
    </>
  );
}
