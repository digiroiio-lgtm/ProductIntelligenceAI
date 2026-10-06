import Link from "next/link";
import { PAGES, PILLAR_KEYS, type PageKey } from "@/lib/pages";

/** Internal-link block pointing to the other guides on the site. */
export function RelatedGuides({
  exclude,
  heading = "Continue Exploring Product Intelligence",
  id = "related-guides",
  keys = PILLAR_KEYS,
}: {
  exclude?: PageKey;
  heading?: string;
  id?: string;
  keys?: PageKey[];
}) {
  const list = keys.filter((key) => key !== exclude);
  return (
    <section className="section section--alt" id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <h2 id={`${id}-heading`}>{heading}</h2>
        <ul className="grid grid--3" aria-label="Related guides">
          {list.map((key) => (
            <li key={key} className="card card--link">
              <h3 className="card__title">
                <Link href={PAGES[key].path}>{PAGES[key].label}</Link>
              </h3>
              <p>{PAGES[key].summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
