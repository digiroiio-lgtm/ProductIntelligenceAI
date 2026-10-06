import type { MetadataRoute } from "next";
import { INDEXABLE_KEYS, PAGES } from "@/lib/pages";
import { CONTENT_MODIFIED, absoluteUrl } from "@/lib/site-config";

/** Indexable pages only. /domain is intentionally excluded (noindex). */
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_KEYS.map((key) => ({
    url: absoluteUrl(PAGES[key].path),
    lastModified: CONTENT_MODIFIED,
    changeFrequency: "monthly",
    priority: key === "home" ? 1 : 0.8,
  }));
}
