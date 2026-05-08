"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { INavItem } from "@/content/types";

interface INavLinksProps {
  items: INavItem[];
}

function isItemActive(href: string, pathname: string): boolean {
  // Anchor items (e.g. /#projects, /#contact) get scroll-spy in Step 15;
  // until then they have no active state.
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLinks({ items }: INavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-5 font-body text-sm md:gap-8">
        {items.map((item) => {
          const active = isItemActive(item.href, pathname);
          return (
            <li key={item.href} className="flex items-center gap-2">
              {active ? (
                <span aria-hidden className="h-1 w-1 rounded-full bg-press-red" />
              ) : null}
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="text-ink-secondary transition-colors duration-150 hover:text-ink-near-black"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
