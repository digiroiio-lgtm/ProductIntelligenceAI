import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/jsonld";

/** Visible breadcrumb trail. Pass the same items to pageGraph() for matching JSON-LD. */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.name}>
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined}>{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
