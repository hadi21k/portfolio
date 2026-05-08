import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { workPageHeader } from "@/content/site";
import type { IExperienceMeta } from "@/content/types";
import { getAllExperience } from "@/lib/content";

const MONTH_LABELS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

/**
 * Format a "YYYY-MM" string to "MMM YYYY" (e.g. "2024-07" -> "JUL 2024").
 * Returns "PRESENT" when the date is null (current role).
 */
function formatRoleDate(date: string | null): string {
  if (date === null) return "PRESENT";

  const [year, month] = date.split("-");
  const monthIndex = Number(month) - 1;
  const label = MONTH_LABELS[monthIndex];

  return `${label} ${year}`;
}

function formatRoleRange(startDate: string, endDate: string | null): string {
  // En-dash for date ranges. PRODUCT.md bans em-dashes; en-dash is the editorial
  // convention for ranges and is allowed.
  return `${formatRoleDate(startDate)} – ${formatRoleDate(endDate)}`;
}

/**
 * Per-role kicker pattern: "ENGINEERING · <years>".
 * Pixel38 (current): "ENGINEERING · SINCE 2024"
 * SlashML (past, same year start+end): "ENGINEERING · 2024"
 */
function buildRoleKicker(entry: IExperienceMeta): string {
  const startYear = entry.startDate.slice(0, 4);

  if (entry.endDate === null) {
    return `ENGINEERING · SINCE ${startYear}`;
  }

  const endYear = entry.endDate.slice(0, 4);
  if (startYear === endYear) {
    return `ENGINEERING · ${startYear}`;
  }

  return `ENGINEERING · ${startYear}–${endYear}`;
}

export default function WorkPreview() {
  const roles = getAllExperience();

  return (
    <section
      aria-labelledby="work-preview-heading"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-10">
          <SectionHeader
            id="work-preview-heading"
            kicker={workPageHeader.kicker}
            lede={workPageHeader.lede}
          />
        </div>
      </div>

      <ul
        data-reveal-children
        data-reveal-stagger="0.08"
        className="mt-20 flex flex-col gap-y-16 md:mt-24 md:gap-y-20"
      >
        {roles.map((role) => {
          const kicker = buildRoleKicker(role);
          const dateRange = formatRoleRange(role.startDate, role.endDate);

          return (
            <li key={role.id}>
              <article aria-labelledby={`role-${role.id}-name`}>
                <div className="grid grid-cols-12 gap-x-6 gap-y-6">
                  <div className="col-span-12 lg:col-span-4">
                    <p className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase">
                      {kicker}
                    </p>
                    <h3
                      id={`role-${role.id}-name`}
                      className="font-display tracking-headline-tight text-ink-near-black mt-5 text-[1.5rem] leading-[1.2] font-semibold"
                    >
                      {role.company}
                    </h3>
                    <p className="font-body text-ink-secondary mt-3 text-[0.9375rem] leading-snug">
                      {role.role}
                    </p>
                    <p className="font-body tracking-label text-ink-muted mt-2 text-[0.8125rem] font-medium uppercase">
                      {dateRange}
                    </p>
                    {role.location ? (
                      <p className="font-body text-ink-muted mt-1 text-[0.8125rem]">
                        {role.location}
                      </p>
                    ) : null}
                  </div>

                  <div className="col-span-12 lg:col-span-8">
                    <p className="font-display text-ink-near-black max-w-[65ch] text-[1.125rem] leading-[1.7] font-normal">
                      {role.summary}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <p data-reveal className="mt-16">
        <Link
          href="/work"
          className="text-press-red hover:text-press-red-deep inline-flex items-baseline gap-2 underline decoration-1 underline-offset-[6px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
        >
          <span className="font-display text-[1.0625rem]">Read the full work history</span>
          <span aria-hidden className="font-display text-[1rem]">
            →
          </span>
        </Link>
      </p>
    </section>
  );
}
