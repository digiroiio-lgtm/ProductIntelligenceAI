import type { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  /** Rendered as the section's H2 */
  title: string;
  /** Short answer shown before the deeper explanation */
  shortAnswer?: ReactNode;
  /** Section body. Paragraphs, lists and H3s are width-limited by CSS; tables, grids and steps use the full container. */
  children?: ReactNode;
  tone?: "default" | "alt";
}

export function ArticleSection({
  id,
  title,
  shortAnswer,
  children,
  tone = "default",
}: ArticleSectionProps) {
  return (
    <section
      id={id}
      className={`section section--${tone}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <h2 id={`${id}-heading`}>{title}</h2>
        {shortAnswer ? (
          <div className="prose">
            <p className="short-answer">{shortAnswer}</p>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
