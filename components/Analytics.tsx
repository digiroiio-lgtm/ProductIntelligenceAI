import Script from "next/script";
import { GA_ID } from "@/lib/site-config";

/**
 * GA4 loader. Renders nothing unless NEXT_PUBLIC_GA_ID is set to a valid
 * measurement ID. Scripts load after the page is interactive so they do not
 * block rendering.
 */
export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
