import ProjectItem from "./Project";
import { projects } from "#site/content";
import { sortProjects } from "@/lib/utils";

const ProjectsList = () => {
  const filteredProjects = sortProjects(
    projects.filter((project) => project.published),
  ).slice(0, 4);

  return (
    <div className="mt-2 space-y-3">
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
