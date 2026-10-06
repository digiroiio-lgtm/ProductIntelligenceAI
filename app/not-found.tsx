import type { Metadata } from "next";
import Link from "next/link";
import { PAGES, PILLAR_KEYS } from "@/lib/pages";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | ProductIntelligenceAI.com" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="hero hero--page">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>Page not found</h1>
        <p className="hero__lede">
          The page you requested does not exist. These guides cover AI-assisted
          product intelligence:
        </p>
        <ul className="link-list">
          <li>
            <Link href={PAGES.home.path}>Home: {PAGES.home.h1}</Link>
          </li>
          {PILLAR_KEYS.map((key) => (
            <li key={key}>
              <Link href={PAGES[key].path}>{PAGES[key].label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
