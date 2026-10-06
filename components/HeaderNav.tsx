"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/site-config";

interface HeaderNavProps {
  items: NavItem[];
  saleHref: string;
  saleExternal: boolean;
}

/**
 * Primary navigation. One nav element serves desktop and mobile; below the
 * breakpoint it collapses behind a toggle button that closes on route
 * change, Escape and link activation.
 */
export function HeaderNav({ items, saleHref, saleExternal }: HeaderNavProps) {
  const pathname = usePathname();
  // The menu is "open" only for the page it was opened on, so it closes
  // automatically on navigation without a setState-in-effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (value: boolean) => setOpenPath(value ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        <span className="nav-toggle__label">{open ? "Close" : "Menu"}</span>
        <span className="nav-toggle__bars" aria-hidden="true" />
      </button>
      <nav
        id="primary-nav"
        className="primary-nav"
        aria-label="Primary"
        data-open={open}
      >
        <ul className="primary-nav__list">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {saleExternal ? (
          <a
            className="btn btn--outline btn--sm"
            href={saleHref}
            target="_blank"
            rel="noopener nofollow"
          >
            Domain for Sale
          </a>
        ) : (
          <Link className="btn btn--outline btn--sm" href={saleHref}>
            Domain for Sale
          </Link>
        )}
      </nav>
    </>
  );
}
