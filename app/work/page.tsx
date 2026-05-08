import SectionHeader from "@/components/SectionHeader";
import { contact, workPageHeader } from "@/content/site";
import type { IExperienceMeta } from "@/content/types";
import { getAllExperience } from "@/lib/content";
import { experienceBodies, type ExperienceId } from "@/lib/mdx-bodies";

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
 * Mirrors the helper in features/work-preview/WorkPreview.tsx so the dedicated
 * page matches the home preview's date treatment exactly.
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

function isExperienceId(id: string): id is ExperienceId {
  return id in experienceBodies;
}

export default function WorkPage() {
  const roles = getAllExperience();
  const { email } = contact;

  return (
    <article className="mx-auto w-full max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-10">
          <SectionHeader
            as="h1"
            id="work-page-heading"
            kicker={workPageHeader.kicker}
            lede={workPageHeader.lede}
          />
        </div>
      </div>

      <div data-reveal-children data-reveal-stagger="0.1" className="mt-20 flex flex-col md:mt-24">
        {roles.map((role, index) => {
          if (!isExperienceId(role.id)) return null;

          const Body = experienceBodies[role.id];
          const kicker = buildRoleKicker(role);
          const dateRange = formatRoleRange(role.startDate, role.endDate);
          const isFirst = index === 0;

          return (
            <article
              key={role.id}
              aria-labelledby={`role-${role.id}-name`}
              className={
                isFirst ? "" : "border-warm-tan-border mt-24 border-t pt-24 md:mt-32 md:pt-32"
              }
            >
              <div className="grid grid-cols-12 gap-x-6 gap-y-8">
                <header className="col-span-12 lg:col-span-3">
                  <p className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase">
                    {kicker}
                  </p>
                  <h2
                    id={`role-${role.id}-name`}
                    className="font-display tracking-headline-tight text-ink-near-black mt-5 text-[1.75rem] leading-[1.15] font-semibold md:text-[2rem]"
                  >
                    {role.company}
                  </h2>
                  <p className="font-body text-ink-secondary mt-3 text-[0.9375rem] leading-snug">
                    {role.role}
                  </p>
                  {role.location ? (
                    <p className="font-body text-ink-muted mt-2 text-[0.8125rem]">
                      {role.location}
                    </p>
                  ) : null}
                  <p className="font-body tracking-label text-ink-muted mt-3 text-[0.8125rem] font-medium uppercase">
                    {dateRange}
                  </p>
                </header>

                <div className="col-span-12 lg:col-span-7 lg:col-start-4">
                  <Body />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-24 grid grid-cols-12 gap-x-6 md:mt-32">
        <div data-reveal className="col-span-12 lg:col-span-10 lg:col-start-4">
          <p className="font-display text-ink-near-black max-w-[65ch] text-[1.125rem] leading-[1.7] font-normal">
            If you are hiring, the email is below.
          </p>
          <p className="mt-8">
            <a
              href={`mailto:${email}`}
              className="font-display tracking-headline-tight text-press-red hover:text-press-red-deep inline-block text-[1.75rem] leading-tight font-normal underline decoration-1 underline-offset-8 transition-[color,text-decoration-thickness] duration-200 ease-out hover:decoration-2 md:text-[2.25rem] md:decoration-[1.5px] md:underline-offset-12"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
