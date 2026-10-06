import { SOURCES, type SourceKey } from "@/lib/sources";

/** Inline numbered citation marker linking to the page's source list. */
export function Cite({ source, n }: { source: SourceKey; n: number }) {
  return (
    <sup className="cite">
      <a href={`#source-${SOURCES[source].id}`} aria-label={`Source ${n}: ${SOURCES[source].publisher}`}>
        [{n}]
      </a>
    </sup>
  );
}

/** Source list. Order of `sources` must match the numbering used by <Cite />. */
export function SourceCitation({ sources }: { sources: SourceKey[] }) {
  return (
    <section className="section section--sources" aria-labelledby="sources-heading">
      <div className="container">
        <h2 id="sources-heading" className="h2--small">
          Sources
        </h2>
        <ol className="sources">
          {sources.map((key) => {
            const s = SOURCES[key];
            return (
              <li key={s.id} id={`source-${s.id}`}>
                <cite>
                  <a href={s.url} rel="noopener" target="_blank">
                    {s.title}
                  </a>
                </cite>
                . {s.publisher}, {s.date}. <span className="sources__supports">{s.supports}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
