import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { projectBodies, type CaseStudySlug } from "@/lib/mdx-bodies";

const caseStudies = getProjects().filter((project) => project.slug in projectBodies);
const caseStudySlugs = caseStudies.map((project) => project.slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

interface IProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Role label is derived from the project's `kind`. Personal projects render as
// "Author" (sole-builder framing); freelance projects render as "Freelance ·
// Lead Developer" so the meta strip immediately signals the buyer-side framing
// to recruiters and freelance prospects scanning the page.
function getRoleLabel(kind: "personal" | "freelance"): string {
  return kind === "freelance" ? "Freelance · Lead Developer" : "Author";
}

export default async function ProjectPage({ params }: IProjectPageProps) {
  const { slug } = await params;

  const project = await getProject(slug);
  if (!project || !(slug in projectBodies)) {
    notFound();
  }

  const { meta } = project;
  const Body = projectBodies[slug as CaseStudySlug];
  const roleLabel = getRoleLabel(meta.kind);

  // Modulo loop across the case-study slugs in their authored order
  // (database-mcp → figma-mcp → chat-system → compliance-exam-platform → database-mcp).
  const currentIndex = caseStudies.findIndex((p) => p.slug === slug);
  const prev = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <article className="mx-auto w-full max-w-7xl px-6 pt-12 pb-24 md:pt-16 md:pb-32">
      <p>
        <Link
          href="/#projects"
          className="group font-body tracking-label text-ink-muted hover:text-ink-near-black inline-flex items-baseline gap-2 text-[0.75rem] font-medium uppercase transition-colors duration-200"
        >
          <span aria-hidden>←</span>
          <span>Back to projects</span>
        </Link>
      </p>

      <header className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
        <div data-reveal className="col-span-12 lg:col-span-9">
          <div className="flex items-center gap-4 md:gap-6">
            <p className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase">
              {meta.kicker}
            </p>
            <span aria-hidden className="bg-warm-tan-border h-px flex-1" />
          </div>

          <h1 className="font-display tracking-display-tight text-ink-near-black mt-7 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-semibold">
            {meta.title}
          </h1>

          <p className="font-display text-ink-secondary mt-7 max-w-[52ch] text-[1.125rem] leading-[1.7] font-normal">
            {meta.oneLineSummary}
          </p>
        </div>
      </header>

      <div className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
        <div data-reveal className="col-span-12 lg:col-span-9">
          <dl className="border-warm-tan-border font-body tracking-label flex flex-wrap items-baseline gap-x-2 gap-y-2 border-y py-4 text-[0.75rem] font-medium">
            <div className="inline-flex items-baseline gap-2">
              <dt className="sr-only">Year</dt>
              <dd className="text-ink-muted uppercase">{meta.year}</dd>
            </div>
            <span aria-hidden className="text-ink-muted">
              ·
            </span>
            <div className="inline-flex items-baseline gap-2">
              <dt className="sr-only">Role</dt>
              <dd className="text-ink-muted uppercase">{roleLabel}</dd>
            </div>
            <span aria-hidden className="text-ink-muted">
              ·
            </span>
            <div className="inline-flex items-baseline gap-2">
              <dt className="sr-only">Tech</dt>
              <dd className="text-ink-secondary">{meta.tech.join(" · ")}</dd>
            </div>
            {meta.repoUrl ? (
              <>
                <span aria-hidden className="text-ink-muted">
                  ·
                </span>
                <div className="inline-flex items-baseline gap-2">
                  <dt className="sr-only">Repository</dt>
                  <dd>
                    <a
                      href={meta.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-press-red hover:text-press-red-deep inline-flex items-baseline gap-1 underline decoration-1 underline-offset-[4px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
                    >
                      <span>Repo</span>
                      <span aria-hidden>↗</span>
                      <span className="sr-only">(opens GitHub in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </>
            ) : null}
          </dl>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-x-6 md:mt-20">
        <div data-reveal className="col-span-12 lg:col-span-9">
          <Body />
        </div>
      </div>

      <hr aria-hidden className="bg-warm-tan-border mt-24 mb-12 h-px border-0 md:mt-32 md:mb-16" />

      <nav
        aria-label="More projects"
        data-reveal-children
        data-reveal-stagger="0.08"
        className="grid grid-cols-12 gap-x-6 gap-y-12"
      >
        <div className="col-span-12 lg:col-span-5 lg:col-start-1">
          <Link href={`/projects/${prev.slug}`} className="group block">
            <p className="font-body tracking-label text-ink-muted text-[0.75rem] font-medium uppercase">
              <span aria-hidden>← </span>
              Previous project
            </p>
            <p className="font-display text-ink-near-black group-hover:text-press-red mt-3 text-[1.25rem] leading-[1.3] font-semibold transition-colors duration-200 md:text-[1.375rem]">
              {prev.title}
            </p>
          </Link>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <Link href={`/projects/${next.slug}`} className="group block lg:text-right">
            <p className="font-body tracking-label text-ink-muted text-[0.75rem] font-medium uppercase">
              Next project
              <span aria-hidden> →</span>
            </p>
            <p className="font-display text-ink-near-black group-hover:text-press-red mt-3 text-[1.25rem] leading-[1.3] font-semibold transition-colors duration-200 md:text-[1.375rem]">
              {next.title}
            </p>
          </Link>
        </div>
      </nav>
    </article>
  );
}
