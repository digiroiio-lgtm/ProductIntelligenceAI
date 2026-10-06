import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  /** The page's single H1 */
  title: string;
  /** Direct answer (DefinitionBox) rendered immediately below the H1 */
  definition: ReactNode;
  /** Supporting line below the definition */
  lede?: string;
  actions?: ReactNode;
  /** Optional right-hand visual (decorative or explanatory HTML) */
  aside?: ReactNode;
  updated?: string;
  variant?: "home" | "page";
}

export function Hero({
  eyebrow,
  title,
  definition,
  lede,
  actions,
  aside,
  updated,
  variant = "page",
}: HeroProps) {
  return (
    <section className={`hero hero--${variant}`}>
      <div className="container hero__grid">
        <div className="hero__main">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {definition}
          {lede ? <p className="hero__lede">{lede}</p> : null}
          {actions ? <div className="hero__actions">{actions}</div> : null}
          {updated ? (
            <p className="hero__meta">
              Last updated: <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          ) : null}
        </div>
        {aside ? <div className="hero__aside">{aside}</div> : null}
      </div>
    </section>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
