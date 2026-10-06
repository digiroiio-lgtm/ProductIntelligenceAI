import Link from "next/link";

export interface GridItem {
  title: string;
  description: string;
  href?: string;
}

/** Responsive card grid for entities, data types, teams and use-case summaries. */
export function IntelligenceGrid({
  items,
  columns = 4,
  label,
}: {
  items: GridItem[];
  columns?: 2 | 3 | 4;
  /** Accessible name for the list */
  label: string;
}) {
  return (
    <ul className={`grid grid--${columns}`} aria-label={label}>
      {items.map((item) => (
        <li key={item.title} className="card">
          <h3 className="card__title">
            {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
          </h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
