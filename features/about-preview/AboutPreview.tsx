import Link from "next/link";
import { getAbout } from "@/lib/content";

/**
 * Pull the first n sentences from a markdown body. Splits on a sentence-end
 * punctuation followed by whitespace. The about narrative has no abbreviations
 * (no "U.S.", no "i.e."), so the simple split is safe here.
 */
function firstNSentences(text: string, n: number): string {
  const sentences = text.trim().split(/(?<=[.!?])\s+/);
  return sentences.slice(0, n).join(" ").trim();
}

export default async function AboutPreview() {
  const { body } = await getAbout();
  const excerpt = firstNSentences(body, 3);

  return (
    <section
      aria-labelledby="about-preview-heading"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-10">
          <div className="flex items-center gap-4 md:gap-6">
            <p
              id="about-preview-heading"
              className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase"
            >
              About
            </p>
            <span aria-hidden className="bg-warm-tan-border h-px flex-1" />
          </div>

          <p className="font-display text-ink-near-black mt-10 max-w-[65ch] text-[1.125rem] leading-[1.7] font-normal">
            {excerpt}
          </p>

          <p className="mt-10">
            <Link
              href="/about"
              className="text-press-red hover:text-press-red-deep inline-flex items-baseline gap-2 underline decoration-1 underline-offset-[6px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
            >
              <span className="font-display text-[1.0625rem]">Read the full piece</span>
              <span aria-hidden className="font-display text-[1rem]">
                →
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
