import { getProjects } from "@/lib/content";

const others = getProjects({ featured: false, kind: "personal" });

export default function OtherProjects() {
  return (
    <section
      aria-labelledby="other-projects-heading"
      className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-9">
          <h2
            id="other-projects-heading"
            className="font-body tracking-label text-ink-near-black text-[0.75rem] font-medium uppercase"
          >
            Other Projects
          </h2>

          <ul
            data-reveal-children
            data-reveal-stagger="0.04"
            className="border-warm-tan-border mt-8 border-t md:mt-10"
          >
            {others.map((project) => {
              const repoUrl = project.repoUrl;
              if (!repoUrl) return null;

              return (
                <li
                  key={project.slug}
                  className="group border-warm-tan-border hover:bg-paper-cream-hover relative border-b transition-colors duration-200"
                >
                  <div className="grid grid-cols-1 gap-y-2 px-2 py-5 md:grid-cols-12 md:items-baseline md:gap-x-6 md:gap-y-0 md:px-3 md:py-6">
                    <p className="font-body text-ink-muted order-2 text-[0.875rem] md:order-1 md:col-span-2">
                      {project.year}
                    </p>

                    <h3 className="font-display tracking-headline-tight text-ink-near-black order-1 text-[1.125rem] leading-snug font-semibold md:order-2 md:col-span-5 md:text-[1.25rem]">
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:text-press-red transition-colors duration-200 before:absolute before:inset-0 before:content-['']"
                      >
                        {project.title}
                        <span
                          aria-hidden
                          className="text-ink-muted group-hover:text-press-red ml-2 text-[0.85em] transition-colors duration-200"
                        >
                          ↗
                        </span>
                        <span className="sr-only"> (opens GitHub in a new tab)</span>
                      </a>
                    </h3>

                    <p className="font-body tracking-label text-ink-muted order-3 text-[0.8125rem] font-medium md:col-span-5">
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
