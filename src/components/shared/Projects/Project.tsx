import Link from "next/link";
import Image from "next/image";
import { GithubIcon, Link2 } from "lucide-react";
import NextBackground from "@/assets/test.png";
import { formatDate } from "@/lib/utils";

type Props = {
  project: {
    title: string;
    date: string;
    demoLink?: string | undefined;
    githubLink: string;
    slug: string;
  };
};

const ProjectItem = ({ project }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-colors p-0.5">
      <div className="flex min-h-60 flex-col rounded-xl bg-black p-0 text-white bg-dot-white/10 max-md:min-h-64 sm:flex-row sm:space-x-3">
        <Link href={project.slug}>
          <Image
            src={NextBackground}
            alt={project.title}
            width={600}
            height={400}
            className="z-10 rounded-xl"
          />
        </Link>
        <div className="z-10 flex w-full flex-col justify-between p-4 max-md:mt-2">
          <h1 className="mb-2 text-lg font-bold">{project.title}</h1>
          <div className="flex items-center justify-between text-sm">
            <p>{formatDate(project.date)}</p>
            <div className="flex space-x-4">
              {project.demoLink && (
                <Link href={project.demoLink}>
                  <Link2 />
                </Link>
              )}
              <Link href={project.githubLink}>
                <GithubIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
