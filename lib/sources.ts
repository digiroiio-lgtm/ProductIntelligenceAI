/**
 * Reusable citation structure. Only externally verifiable claims are cited,
 * and only to primary or official publications.
 */

export interface Source {
  id: string;
  title: string;
  publisher: string;
  /** Publication date, human readable */
  date: string;
  url: string;
  /** What the source is used to support */
  supports: string;
}

export const SOURCES = {
  nistAiRmf: {
    id: "nist-ai-rmf",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1",
    publisher: "National Institute of Standards and Technology (NIST)",
    date: "January 2023",
    url: "https://doi.org/10.6028/NIST.AI.100-1",
    supports:
      "Voluntary U.S. guidance for managing risks of AI systems, including attention to data quality, context and human oversight.",
  },
  nistGenAi: {
    id: "nist-genai-profile",
    title:
      "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1",
    publisher: "National Institute of Standards and Technology (NIST)",
    date: "July 2024",
    url: "https://doi.org/10.6028/NIST.AI.600-1",
    supports:
      "Identifies confabulation (confidently stated but false output) as a risk specific to or amplified by generative AI.",
  },
  ftcReviews: {
    id: "ftc-reviews-rule",
    title: "Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials",
    publisher: "U.S. Federal Trade Commission",
    date: "August 14, 2024",
    url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials",
    supports:
      "The final rule prohibits fake or false consumer reviews, including AI-generated reviews, and took effect October 21, 2024, which is why review data cannot be assumed to be authentic.",
  },
} as const satisfies Record<string, Source>;

export type SourceKey = keyof typeof SOURCES;
