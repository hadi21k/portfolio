import { freelanceSectionHeader } from "@/content/site";
import SectionHeader from "@/components/SectionHeader";
import { getProjects } from "@/lib/content";
import { ProjectCard } from "@/features/projects";

const freelance = getProjects({ kind: "freelance" });

/**
 * "Selected Freelance" home-page section. Lives between OtherProjects and
 * WorkPreview so the sequence reads: personal projects → client work shipped
 * under contract → full-time roles. Reuses ProjectCard so the card surface is
 * visually consistent with FeaturedProjects, only the column composition is
 * single-card and centered today. When a second freelance project lands, this
 * becomes a list and adopts the same asymmetric stagger as FeaturedProjects.
 */
export default function SelectedFreelance() {
  if (freelance.length === 0) return null;

  return (
    <section
      id="freelance"
      aria-labelledby="freelance-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-12 px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <div data-reveal className="col-span-12 lg:col-span-10">
          <SectionHeader
            id="freelance-heading"
            kicker={freelanceSectionHeader.kicker}
            lede={freelanceSectionHeader.lede}
          />
        </div>
      </div>

      <ul
        data-reveal-children
        data-reveal-stagger="0.08"
        className="mt-20 grid grid-cols-12 gap-x-6 gap-y-24 md:mt-24"
      >
        {freelance.map((project) => (
          <li key={project.slug} className="col-span-12 lg:col-span-9 lg:col-start-2">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
