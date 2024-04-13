import type { Project } from "@/lib/types";
import ProjectItem from "./Project";

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <div className="mt-2 space-y-3">
      {projects.map((project, i) => (
        <ProjectItem project={project} key={i} />
      ))}
    </div>
  );
};

export default ProjectsList;
