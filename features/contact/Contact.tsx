import { contact } from "@/content/site";

export default function Contact() {
  const { intro, email, location, socials } = contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-12 px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-4 md:gap-6">
            <p className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase">
              Contact
            </p>
            <span aria-hidden className="bg-warm-tan-border h-px flex-1" />
          </div>

          <h2
            id="contact-heading"
            className="font-display tracking-headline-tight text-ink-near-black mt-8 text-[2rem] leading-[1.15] font-semibold md:text-[2.5rem]"
          >
            Send a note.
          </h2>

          <p className="font-display text-ink-near-black mt-6 max-w-[65ch] text-[1.125rem] leading-[1.7] font-normal">
            {intro}
          </p>

          <p className="mt-10">
            <a
              href={`mailto:${email}`}
              className="font-display tracking-headline-tight text-press-red hover:text-press-red-deep inline-block text-[1.75rem] leading-tight font-normal underline decoration-1 underline-offset-[8px] transition-[color,text-decoration-thickness] duration-200 ease-out hover:decoration-2 md:text-[2.25rem] md:decoration-[1.5px] md:underline-offset-[12px]"
            >
              {email}
            </a>
          </p>

          <ul
            role="list"
            className="font-body tracking-label text-ink-muted mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] font-medium uppercase"
          >
            <li>
              <span>{location}</span>
            </li>
            {socials.map((social) => (
              <li key={social.label} className="flex items-center gap-x-3">
                <span aria-hidden className="text-ink-muted">
                  ·
                </span>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-near-black inline-flex items-baseline gap-1 transition-colors duration-200 ease-out"
                >
                  <span>{social.label}</span>
                  <span aria-hidden>↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
