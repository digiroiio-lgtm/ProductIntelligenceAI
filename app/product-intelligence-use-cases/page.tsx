import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides } from "@/components/RelatedGuides";
import { UseCaseCard, type UseCase } from "@/components/UseCaseCard";
import { pageGraph, type BreadcrumbItem } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED } from "@/lib/site-config";

const page = PAGES.useCases;

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
    question: "What are the main use cases for product intelligence?",
    answer:
      "The main use cases are competitive product analysis, pricing intelligence, customer review mining, product research, benchmarking, assortment optimization, new product discovery and category monitoring.",
  },
  {
    question: "Which product intelligence use case should a team start with?",
    answer:
      "Start with the use case tied to a decision the team already has to make, where the needed data is accessible. Competitive product analysis and review mining are common starting points because they rely on widely available public information.",
  },
  {
    question: "Can AI handle product intelligence use cases on its own?",
    answer:
      "AI can assist with extraction, comparison, clustering and summarization, but every use case ends in a human decision. Outputs should be checked against source data before they inform product or commercial choices.",
  },
  {
    question: "Are product intelligence use cases only for e-commerce?",
    answer:
      "No. E-commerce and retail are common applications, but product teams in software, consumer goods and other industries use the same methods for competitive analysis, benchmarking and feature gap analysis.",
  },
];

const competitive: UseCase[] = [
  {
    id: "competitive-product-analysis",
    title: "Competitive Product Analysis",
    goal: "Understand how a product compares with competing offerings.",
    data: "Product descriptions, features, prices, reviews and category data.",
    analysis: "Extract product attributes, compare features, identify recurring customer feedback and detect positioning differences.",
    decision: "Product or strategy teams determine which differences matter commercially.",
    output: "Structured competitive product intelligence.",
  },
  {
    id: "product-benchmarking",
    title: "Product Benchmarking",
    goal: "Measure a product against comparable offerings on agreed dimensions.",
    data: "Specifications, prices, ratings, review themes and performance indicators for a defined peer set.",
    analysis: "Normalize attributes, match comparable products and score each dimension consistently.",
    decision: "Product leaders decide which gaps to close and which differences to keep.",
    output: "Benchmark table with scored dimensions and notes.",
  },
  {
    id: "market-trend-detection",
    title: "Market Trend Detection",
    goal: "Spot changes in demand, features or categories early enough to respond.",
    data: "Search trend data, listing changes, review topics over time and category news.",
    analysis: "Detect rising and falling topics, flag unusual changes and summarize drivers.",
    decision: "Strategy and product teams judge which signals are durable and which are noise.",
    output: "Trend summary with signals ranked for review.",
  },
  {
    id: "category-monitoring",
    title: "Category Monitoring",
    goal: "Keep a current view of a category's structure, entrants and offers.",
    data: "Category listings, new products, price bands, ratings and assortment depth.",
    analysis: "Track additions and removals, group products into segments and flag material changes.",
    decision: "Category and product owners decide whether to respond, and how.",
    output: "Recurring category snapshot with change highlights.",
  },
];

const customerProduct: UseCase[] = [
  {
    id: "product-research",
    title: "Product Research",
    goal: "Assess whether a market, category or product idea is worth deeper investigation.",
    data: "Market and category information, competitor offerings, reviews and search interest.",
    analysis: "Summarize sources, extract recurring needs and compare existing offerings.",
    decision: "Product teams decide whether to invest in primary research or a prototype.",
    output: "Desk research summary with open questions.",
  },
  {
    id: "customer-review-mining",
    title: "Customer Review Mining",
    goal: "Learn what customers value, dislike and expect from products in a category.",
    data: "Customer reviews, ratings and related feedback for own and competing products.",
    analysis: "Cluster review text into themes, measure sentiment by feature and surface representative quotes.",
    decision: "Product and marketing teams decide which themes warrant action and how to prioritize them.",
    output: "Theme report linked to source reviews.",
  },
  {
    id: "feature-gap-analysis",
    title: "Feature Gap Analysis",
    goal: "Identify features competitors offer that a product lacks, and the reverse.",
    data: "Product documentation, feature lists, release notes and customer requests.",
    analysis: "Extract features into a common taxonomy and map coverage across products.",
    decision: "Product managers decide which gaps are strategic and which are not worth closing.",
    output: "Feature coverage matrix with candidate gaps.",
  },
  {
    id: "new-product-discovery",
    title: "New Product Discovery",
    goal: "Find unmet needs or underserved segments that could justify a new product.",
    data: "Reviews, search trends, category listings and customer questions.",
    analysis: "Cluster complaints and requests, compare against current offerings and flag gaps.",
    decision: "Leadership assesses commercial viability, fit and resources.",
    output: "Shortlist of opportunity hypotheses to test.",
  },
  {
    id: "product-launch-research",
    title: "Product Launch Research",
    goal: "Prepare a launch with a clear view of the competitive and demand context.",
    data: "Competitor positioning, launch timing, price points, reviews and demand signals.",
    analysis: "Compare positioning and pricing, summarize customer expectations and flag launch risks.",
    decision: "Product and commercial leaders set positioning, price and timing.",
    output: "Launch research brief.",
  },
  {
    id: "product-performance-analysis",
    title: "Product Performance Analysis",
    goal: "Explain why a product's results moved.",
    data: "Sales, conversion, returns and usage data, alongside competitor price, review and market changes.",
    analysis: "Align internal metrics with external events and highlight candidate explanations.",
    decision: "Product owners judge which explanation is credible and test it.",
    output: "Performance review with hypotheses to validate.",
  },
];

const pricingAssortment: UseCase[] = [
  {
    id: "pricing-intelligence",
    title: "Pricing Intelligence",
    goal: "Understand how prices and promotions compare across competitors and over time.",
    data: "Competitor prices, discounts, promotions and the team's own price and sales history.",
    analysis: "Match comparable products, compare price points and flag meaningful changes.",
    decision: "Pricing and commercial teams set price positions, weighing margin and brand.",
    output: "Price comparison and change alerts.",
  },
  {
    id: "assortment-optimization",
    title: "Assortment Optimization",
    goal: "Decide which products to add, keep or retire.",
    data: "Own and competitor assortments, category structure, product performance and reviews.",
    analysis: "Classify products, find coverage gaps and overlaps, and group similar items.",
    decision: "Merchandising and category teams decide the range with margin, space and supplier constraints in mind.",
    output: "Assortment gap and overlap analysis.",
  },
];

const industry: UseCase[] = [
  {
    id: "ecommerce-intelligence",
    title: "E-Commerce Intelligence",
    goal: "Give online retail teams an organized view of listings, prices, reviews and competitors.",
    data: "Product listings, prices, ratings, search position, promotions and category data.",
    analysis: "Match products across catalogs, normalize attributes and summarize reviews and price changes.",
    decision: "E-commerce, pricing and merchandising teams decide on range, price and presentation.",
    output: "Monitoring views for competitors, prices and categories. See the e-commerce guide for detail.",
  },
  {
    id: "saas-product-intelligence",
    title: "SaaS Product Intelligence",
    goal: "Understand how a software product compares with alternatives and what customers say.",
    data: "Competitor product pages, documentation, release notes, public reviews and own usage data.",
    analysis: "Extract features and pricing structures, cluster review themes and compare positioning.",
    decision: "Product and go-to-market leaders decide roadmap priorities and positioning.",
    output: "Competitive feature and positioning matrix.",
  },
];

const index = [
  ["Competitive product analysis", "Product, strategy", "Features, prices, reviews"],
  ["Product benchmarking", "Product", "Specifications, ratings, prices"],
  ["Market trend detection", "Strategy, product", "Search trends, listings, reviews"],
  ["Category monitoring", "Category, product", "Listings, price bands, entrants"],
  ["Product research", "Product, research", "Market and category information"],
  ["Customer review mining", "Product, marketing", "Reviews and ratings"],
  ["Feature gap analysis", "Product", "Feature lists, release notes"],
  ["New product discovery", "Product, leadership", "Reviews, trends, listings"],
  ["Product launch research", "Product, commercial", "Positioning, pricing, demand"],
  ["Product performance analysis", "Product owners", "Internal and external data"],
  ["Pricing intelligence", "Pricing", "Competitor and own prices"],
  ["Assortment optimization", "Merchandising", "Assortments, performance"],
  ["E-commerce intelligence", "E-commerce", "Listings, prices, reviews"],
  ["SaaS product intelligence", "Product, go-to-market", "Product pages, docs, reviews"],
];

export default function UseCasesPage() {
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
        eyebrow="Applications"
        title={page.h1}
        updated={CONTENT_MODIFIED}
        definition={
          <DefinitionBox>
            Product intelligence use cases are the specific business questions that product, pricing,
            e-commerce and strategy teams answer with product-related data, such as how a product
            compares with competitors, what customers say in reviews or which categories are changing.
            Each use case below maps goal, data, AI-assisted analysis, human decision and output.
          </DefinitionBox>
        }
      />

      <ArticleSection
        id="overview"
        title="Product Intelligence Use Cases at a Glance"
        shortAnswer="Fourteen use cases cover competitive, customer, pricing, assortment and industry questions. Every one ends in a human decision."
      >
        <ComparisonTable
          caption="Product intelligence use case index"
          rowHeader="Use case"
          columns={["Main teams", "Main data"]}
          rows={index.map(([label, teams, data]) => ({ label, cells: [teams, data] }))}
        />
        <p>
          The same pattern runs through each: a goal, the data that informs it, analysis that AI can
          assist with, a decision that stays with people, and a defined output. For background see{" "}
          <Link href={PAGES.whatIs.path}>what product intelligence is</Link> and how{" "}
          <Link href={PAGES.ai.path}>AI assists the analysis</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="competitive-and-market" title="Competitive and Market Use Cases" tone="alt">
        <div className="usecases">
          {competitive.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </ArticleSection>

      <ArticleSection id="customer-and-product" title="Customer and Product Use Cases">
        <div className="usecases">
          {customerProduct.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </ArticleSection>

      <ArticleSection id="pricing-and-assortment" title="Pricing and Assortment Use Cases" tone="alt">
        <div className="usecases">
          {pricingAssortment.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </ArticleSection>

      <ArticleSection id="industry-use-cases" title="Industry-Specific Use Cases">
        <div className="usecases">
          {industry.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
        <p>
          Retail and marketplace teams can read{" "}
          <Link href={PAGES.ecommerce.path}>product intelligence for e-commerce and retail</Link> for
          more detail on data and workflow.
        </p>
      </ArticleSection>

      <ArticleSection
        id="choosing-a-use-case"
        title="How to Choose a First Use Case"
        tone="alt"
        shortAnswer="Pick the use case tied to a decision the team must make soon and where the data is accessible."
      >
        <ul>
          <li>Name the decision and its owner before choosing methods or tools.</li>
          <li>Confirm the required data exists and can be used under applicable terms.</li>
          <li>Start with a narrow product set that the team already understands, so results can be checked.</li>
          <li>Define the output format in advance, such as a table, brief or alert.</li>
        </ul>
        <p>
          Teams assessing tools can then use the{" "}
          <Link href={PAGES.software.path}>product intelligence software evaluation criteria</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Use Cases FAQ">
        <FAQ items={faq} />
      </ArticleSection>

      <RelatedGuides exclude="useCases" />
    </>
  );
}
