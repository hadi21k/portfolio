import React from "react";
import H1 from "../../ui/h1";
import type { Project } from "@/lib/types";
import ProjectsList from "@/components/shared/Projects/ProjectsList";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <section>
      <div className="container max-sm:px-1">
        <H1 className="text-3xl md:text-4xl">Projects</H1>
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
