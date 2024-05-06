import ProjectItem from "./Project";
import { projects } from "#site/content";
import { sortProjects } from "@/lib/utils";

const ProjectsList = ({ full_page }: { full_page?: boolean }) => {
  const numProjects = full_page ? projects.length : 4;
  const filteredProjects = sortProjects(
    projects.filter((project) => project.published),
  ).slice(0, numProjects);

  return (
    <div className="mt-2 grid lg:grid-cols-2 gap-8">
      {filteredProjects.map((project, i) => {
        const { title, date, demoLink, githubLink, slug } = project;

        const items = {
          title,
          date,
          demoLink,
          githubLink,
          slug,
        };

        return <ProjectItem project={items} key={i} />;
      })}
    </div>
  );
};

export default ProjectsList;
