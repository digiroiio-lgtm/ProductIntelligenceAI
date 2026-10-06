import Link from "next/link";
import { HAS_EXTERNAL_SALE_URL, SALE_URL } from "@/lib/site-config";

/**
 * Slim sitewide banner. Links to NEXT_PUBLIC_DOMAIN_SALE_URL when set,
 * otherwise to the internal /domain page. Visually secondary by design.
 * Desktop and mobile copy are swapped with CSS; only one is exposed at a time.
 */
export function DomainSaleBanner() {
  const content = (
    <>
      <span className="sale-banner__long">
        ProductIntelligenceAI.com is available for acquisition
        <span aria-hidden="true"> → </span>
        <span className="sale-banner__action">View Domain Details</span>
      </span>
      <span className="sale-banner__short">
        This domain is for sale<span aria-hidden="true"> →</span>
      </span>
    </>
  );

  return (
    <aside className="sale-banner" aria-label="Domain availability">
      <div className="container sale-banner__inner">
        {HAS_EXTERNAL_SALE_URL ? (
          <a
            className="sale-banner__link"
            href={SALE_URL}
            target="_blank"
            rel="noopener nofollow"
          >
            {content}
          </a>
        ) : (
          <Link className="sale-banner__link" href={SALE_URL}>
            {content}
          </Link>
        )}
      </div>
    </aside>
  );
}
