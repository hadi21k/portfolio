import React from "react";
import H1 from "../../ui/h1";
import type { Project } from "@/lib/types";
import ProjectsList from "../../ProjectsList";

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description",
    image: "/assets/download.png",
    demoLink: "demoLink",
    githubLink: "githubLink",
    technologies: ["tech1", "tech2"],
    markdownDetails: "markdownDetails",
  },
  {
    title: "Project 2",
    description: "Description",
    image: "/assets/download.png",
    demoLink: "demoLink",
    githubLink: "githubLink",
    technologies: ["tech1", "tech2"],
    markdownDetails: "markdownDetails",
  },
  {
    title: "Project 3",
    description: "Description",
    image: "/assets/download.png",
    demoLink: "demoLink",
    githubLink: "githubLink",
    technologies: ["tech1", "tech2"],
    markdownDetails: "markdownDetails",
  },
];

const Projects = () => {
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
