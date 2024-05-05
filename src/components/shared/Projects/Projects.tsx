import React from "react";
import H1 from "../../ui/h1";
import ProjectsList from "@/components/shared/Projects/ProjectsList";

const Projects = () => {
  return (
    <section>
      <div className="container max-sm:px-1">
        <H1 className="text-3xl md:text-4xl">Projects</H1>
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;
