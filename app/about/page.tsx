import { contact } from "@/content/site";
import { getAbout } from "@/lib/content";
import { aboutBody as Body } from "@/lib/mdx-bodies";

/**
 * /about: the most editorial surface in the site.
 *
 * The page H1 is the kicker (intentional editorial restraint per
 * portfolio-layout.md §4). DESIGN.md's Two-Ink Rule constrains H2/H3/H4 to
 * Ink Near-Black; H1 is not constrained, so the kicker treatment carries.
 *
 * The drop cap on the lede paragraph is wired via `.about-narrative` in
 * app/globals.css. Wrapping the rendered MDX body in
 * <article className="about-narrative">...</article> is the entire mechanism.
 * One drop cap per page maximum (DESIGN.md §5).
 */

interface IMetaCard {
  label: string;
  body: React.ReactNode;
}

export default async function AboutPage() {
  const { meta } = await getAbout();
  const { email, location, socials } = contact;

  const metaCards: IMetaCard[] = [
    {
      label: "Education",
      body: (
        <>
          <p className="font-display text-ink-near-black text-[1.0625rem] leading-snug font-normal">
            B.Sc., Lebanese University
          </p>
          <p className="font-body text-ink-muted mt-1 text-[0.9375rem]">2021–2024</p>
        </>
      ),
    },
    {
      label: "Certifications",
      body: (
        <p className="font-display text-ink-near-black text-[1.0625rem] leading-snug font-normal">
          AWS Certified Cloud Practitioner
        </p>
      ),
    },
    {
      label: "Location",
      body: (
        <p className="font-display text-ink-near-black text-[1.0625rem] leading-snug font-normal">
          {location}
        </p>
      ),
    },
    {
      label: "Elsewhere",
      body: (
        <ul className="flex flex-col gap-2">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-press-red hover:text-press-red-deep inline-flex items-baseline gap-1.5 text-[1.0625rem] leading-snug font-normal underline decoration-1 underline-offset-[4px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
              >
                <span>
                  {social.label}
                  {social.handle ? (
                    <span className="text-ink-muted ml-2 font-normal no-underline">
                      {social.handle}
                    </span>
                  ) : null}
                </span>
                <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid grid-cols-12 gap-x-6">
        <header data-reveal className="col-span-12 lg:col-span-10 lg:col-start-2">
          <div className="flex items-center gap-4 md:gap-6">
            <h1
              id="about-page-heading"
              className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase"
            >
              {meta.kicker}
            </h1>
            <span aria-hidden className="bg-warm-tan-border h-px flex-1" />
          </div>
        </header>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-x-6 md:mt-20">
        <article
          aria-labelledby="about-page-heading"
          data-reveal
          className="about-narrative col-span-12 lg:col-span-8 lg:col-start-2"
        >
          <Body />
        </article>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-x-6 md:mt-32">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <hr className="bg-warm-tan-border h-px border-0" />
        </div>
      </div>

      <section
        aria-label="Hadi Diab, at a glance"
        className="mt-16 grid grid-cols-12 gap-x-6 md:mt-20"
      >
        <div data-reveal className="col-span-12 lg:col-span-8 lg:col-start-2">
          <dl
            data-reveal-children
            data-reveal-stagger="0.06"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
          >
            {metaCards.map((card) => (
              <div key={card.label}>
                <dt className="font-body tracking-label text-ink-muted text-[0.75rem] leading-snug font-medium uppercase">
                  {card.label}
                </dt>
                <dd className="mt-3">{card.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mt-24 grid grid-cols-12 gap-x-6 md:mt-32">
        <div data-reveal className="col-span-12 lg:col-span-8 lg:col-start-2">
          <p className="font-display text-ink-near-black max-w-[65ch] text-[1.125rem] leading-[1.7] font-normal">
            If you are hiring, or you have a system worth building well, the email is{" "}
            <a
              href={`mailto:${email}`}
              className="text-press-red hover:text-press-red-deep underline decoration-1 underline-offset-[4px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
            >
              {email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
