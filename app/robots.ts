import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

/** Simple, permissive robots. /domain stays crawlable so its noindex directive is honored. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
