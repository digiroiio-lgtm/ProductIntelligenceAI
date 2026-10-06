import type { Metadata } from "next";
import {
  CONTENT_MODIFIED,
  CONTENT_PUBLISHED,
  OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
} from "./site-config";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Site path beginning with "/" */
  path: string;
  /** "article" adds published/modified times to Open Graph */
  type?: "website" | "article";
  /** Excludes the page from indexing (links are still followed) */
  noindex?: boolean;
}

/**
 * Builds complete page metadata: title, description, canonical, Open Graph,
 * Twitter card and robots. `title.absolute` bypasses any layout template so
 * each page's title is exactly what is defined in lib/pages.ts.
 */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = {
    url: absoluteUrl(OG_IMAGE.path),
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    alt: OG_IMAGE.alt,
  };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      title,
      description,
      images: [image],
      ...(type === "article"
        ? {
            publishedTime: CONTENT_PUBLISHED,
            modifiedTime: CONTENT_MODIFIED,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
