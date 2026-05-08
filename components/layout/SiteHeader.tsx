import Link from "next/link";
import { nav } from "@/content/site";
import NavLinks from "./NavLinks";

export default function SiteHeader() {
  return (
    <header className="border-b border-warm-tan-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:py-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-headline-tight text-ink-near-black"
        >
          Hadi Diab
        </Link>
        <NavLinks items={nav} />
      </div>
    </header>
  );
}
