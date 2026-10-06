import Link from "next/link";
import { PAGES, PILLAR_KEYS } from "@/lib/pages";
import { DISCLAIMER, DOMAIN_PAGE_PATH, SITE_NAME } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">{SITE_NAME}</p>
            <p className="site-footer__tagline">
              An educational resource on AI-assisted product intelligence.
            </p>
          </div>
          <nav aria-label="Guides">
            <h2 className="site-footer__heading">Guides</h2>
            <ul>
              <li>
                <Link href={PAGES.home.path}>Home</Link>
              </li>
              {PILLAR_KEYS.map((key) => (
                <li key={key}>
                  <Link href={PAGES[key].path}>{PAGES[key].label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Domain">
            <h2 className="site-footer__heading">Domain</h2>
            <ul>
              <li>
                <Link href={DOMAIN_PAGE_PATH}>Acquire ProductIntelligenceAI.com</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="site-footer__disclaimer">{DISCLAIMER}</p>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
