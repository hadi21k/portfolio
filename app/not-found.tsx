import Link from "next/link";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-headline"
      className="mx-auto flex min-h-[70svh] w-full max-w-7xl flex-col px-6 pt-20 pb-16 md:pt-28 md:pb-20"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-9">
          <div className="flex items-center gap-4 md:gap-6">
            <p className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase">
              Error · 404
            </p>
            <span aria-hidden className="bg-warm-tan-border h-px flex-1" />
          </div>

          <h1
            id="not-found-headline"
            className="font-display tracking-display-tight text-ink-near-black mt-7 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-semibold"
          >
            This page is not in the index.
          </h1>

          <p className="font-display text-ink-secondary mt-8 max-w-[52ch] text-[1.125rem] leading-[1.7] font-normal">
            The address you tried did not resolve to anything I have written.
          </p>
        </div>
      </div>

      <div data-reveal className="mt-auto pt-16">
        <Link
          href="/"
          className="text-press-red hover:text-press-red-deep inline-flex items-baseline gap-2 underline decoration-1 underline-offset-[6px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
        >
          <span aria-hidden className="font-display text-[1rem]">
            ←
          </span>
          <span className="font-display text-[1.0625rem]">Back home</span>
        </Link>
      </div>
    </section>
  );
}
