import { serializeJsonLd, type JsonLdNode } from "@/lib/jsonld";

/** Renders a JSON-LD script tag (server component, no client JS). */
export function JsonLd({ data }: { data: JsonLdNode }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
