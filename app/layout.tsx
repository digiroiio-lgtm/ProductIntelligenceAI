import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { DomainSaleBanner } from "@/components/DomainSaleBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  GOOGLE_SITE_VERIFICATION,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AI Product Intelligence | ProductIntelligenceAI.com", template: "%s" },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  openGraph: { siteName: SITE_NAME, locale: SITE_LOCALE, type: "website" },
  // Rendered only when NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is set.
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f9fb",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <DomainSaleBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
