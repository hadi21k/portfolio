import { projectsSectionHeader } from "@/content/site";
import SectionHeader from "@/components/SectionHeader";
import { getProjects } from "@/lib/content";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const featured = getProjects({ featured: true, kind: "personal" });

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-12 px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-10">
          <SectionHeader
            id="featured-projects-heading"
            kicker={projectsSectionHeader.kicker}
            lede={projectsSectionHeader.lede}
          />
        </div>
      </div>

      <ul
        data-reveal-children
        data-reveal-stagger="0.08"
        className="mt-20 grid grid-cols-12 gap-x-6 gap-y-24 md:mt-24"
      >
        {featured.map((project, index) => (
          <li
            key={project.slug}
            className={cn(
              "col-span-12",
              index === 1 ? "lg:col-span-9 lg:col-start-4" : "lg:col-span-9 lg:col-start-1",
            )}
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
