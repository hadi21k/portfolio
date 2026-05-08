import Link from "next/link";
import { contact, footer, nav } from "@/content/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-tan-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:py-20">
        <p className="max-w-prose font-body text-sm leading-relaxed text-ink-muted">
          {footer.colophon}
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-secondary transition-colors duration-150 hover:text-ink-near-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="font-body text-sm">
          <p className="text-ink-muted">© {year}</p>
          <ul className="mt-2 flex flex-col gap-1">
            {contact.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary transition-colors duration-150 hover:text-ink-near-black"
                >
                  {social.label}
                  {social.handle ? (
                    <span className="ml-2 text-ink-muted">{social.handle}</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
