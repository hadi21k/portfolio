import Link from "next/link";
import type { IProjectMeta } from "@/content/types";

interface IProjectCardProps {
  project: IProjectMeta;
}

export default function ProjectCard({ project }: IProjectCardProps) {
  const { slug, title, kicker, oneLineSummary, tech } = project;

  return (
    <article aria-labelledby={`project-${slug}-title`}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-6">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-4">
            <p className="font-display tracking-kicker text-press-red text-[0.8125rem] leading-none font-semibold uppercase">
              {kicker}
            </p>
            <span aria-hidden className="bg-warm-tan-border h-px flex-1 md:hidden" />
          </div>
          <h3
            id={`project-${slug}-title`}
            className="font-display tracking-headline-tight text-ink-near-black mt-5 text-[1.625rem] leading-[1.2] font-semibold md:text-[1.875rem]"
          >
            {title}
          </h3>
        </div>

        <div className="col-span-12 md:col-span-7">
          <p className="font-display text-ink-near-black text-[1.125rem] leading-[1.7] font-normal">
            {oneLineSummary}
          </p>
          <p className="font-body tracking-label text-ink-muted mt-6 text-[0.8125rem] font-medium">
            {tech.join(" · ")}
          </p>
          <p className="mt-8">
            <Link
              href={`/projects/${slug}`}
              className="text-press-red hover:text-press-red-deep inline-flex items-baseline gap-2 underline decoration-1 underline-offset-[6px] transition-[color,text-decoration-thickness] duration-200 hover:decoration-2"
            >
              <span className="font-display text-[1.0625rem]">Read the case study</span>
              <span aria-hidden className="font-display text-[1rem]">
                →
              </span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
