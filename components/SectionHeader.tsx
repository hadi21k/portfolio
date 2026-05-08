import { cn } from "@/lib/utils";

interface ISectionHeaderProps {
  kicker: string;
  lede: string;
  /** Heading level for the kicker. Defaults to h2 (section heading). Use h1 for top-of-page contexts like /work and /about. */
  as?: "h1" | "h2";
  /** Used to anchor `aria-labelledby` from the wrapping section. */
  id?: string;
  className?: string;
}

export default function SectionHeader({
  kicker,
  lede,
  as = "h2",
  id,
  className,
}: ISectionHeaderProps) {
  const Heading = as;

  return (
    <header className={cn("max-w-[52ch]", className)}>
      <div className="flex items-center gap-4 md:gap-6">
        <Heading
          id={id}
          className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase"
        >
          {kicker}
        </Heading>
        <span aria-hidden className="bg-warm-tan-border h-px flex-1" />
      </div>
      <p className="font-display text-ink-secondary mt-7 text-[1.125rem] leading-[1.7] font-normal">
        {lede}
      </p>
    </header>
  );
}
