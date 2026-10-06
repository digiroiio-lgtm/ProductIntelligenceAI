import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import {
  HAS_EXTERNAL_SALE_URL,
  NAV_ITEMS,
  SALE_URL,
  SITE_NAME,
} from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${SITE_NAME} home`}>
          <svg
            className="brand__mark"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="32" height="32" rx="7" fill="#1e1b4b" />
            <path d="M8 22V16M14 22V10M20 22V13M26 22V8" stroke="#a5b4fc" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <span className="brand__text">
            ProductIntelligence<span className="brand__ai">AI</span>
          </span>
        </Link>
        <HeaderNav
          items={NAV_ITEMS}
          saleHref={SALE_URL}
          saleExternal={HAS_EXTERNAL_SALE_URL}
        />
      </div>
    </header>
  );
}
