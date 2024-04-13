import type { Project } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, Link2 } from "lucide-react";
import NextBackground from "@/assets/test.png";

type Props = {
  project: Project;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-colors p-0.5">
      <div className="flex min-h-60 flex-col rounded-xl bg-black p-0 text-white bg-dot-white/10 max-md:min-h-64 sm:flex-row sm:space-x-3">
        <Image
          src={NextBackground}
          alt={project.title}
          width={600}
          height={400}
          className="z-10 rounded-xl"
        />
        <div className="z-10 w-full p-4 max-md:mt-2">
          <div className="flex justify-between">
            <h2>{project.title}</h2>
            <div className="flex space-x-4">
              <Link href={project.demoLink}>
                <Link2 />
              </Link>
              <Link href={project.githubLink}>
                <GithubIcon />
              </Link>
            </div>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
