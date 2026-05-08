import Link from "next/link";
import { hero } from "@/content/site";

export default function Hero() {
  const { kicker, headline, headlineKeyword, deck } = hero;
  const keywordIndex = headline.indexOf(headlineKeyword);
  const beforeKeyword = headline.slice(0, keywordIndex);
  const afterKeyword = headline.slice(keywordIndex + headlineKeyword.length);

  return (
    <section
      aria-labelledby="hero-headline"
      className="mx-auto w-full max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-10">
          <div className="flex items-center gap-4 md:gap-6">
            <p
              data-hero-kicker
              className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase"
            >
              {kicker}
            </p>
            <span data-hero-rule aria-hidden className="bg-warm-tan-border h-px flex-1" />
          </div>

          <h1
            id="hero-headline"
            data-hero-headline
            className="font-display tracking-display-tight text-ink-near-black mt-7 text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] font-semibold"
          >
            {beforeKeyword}
            <span data-hero-keyword className="text-press-red">
              {headlineKeyword}
            </span>
            {afterKeyword}
          </h1>

          <p
            data-hero-deck
            className="font-display text-ink-secondary mt-8 max-w-[52ch] text-[1.125rem] leading-[1.7] font-normal"
          >
            {deck}
          </p>
        </div>
      </div>

      <div data-hero-cue className="mt-14 md:mt-16">
        <Link
          href="/#projects"
          className="group font-display tracking-kicker text-ink-muted hover:text-ink-near-black inline-flex items-center gap-3 text-[0.8125rem] font-semibold uppercase transition-colors duration-200"
        >
          <span
            aria-hidden
            className="bg-warm-tan-border group-hover:bg-ink-near-black h-px w-8 transition-colors duration-200"
          />
          <span>Projects</span>
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="translate-y-px transition-transform duration-200 group-hover:translate-y-0.5"
          >
            <path
              d="M6 1V11M6 11L1.5 6.5M6 11L10.5 6.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
