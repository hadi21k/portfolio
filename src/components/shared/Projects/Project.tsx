import Link from "next/link";
import { Link2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import GithubIcon from "@/components/ui/github-icon";

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
      <div className="flex min-h-60 flex-row rounded-xl bg-black p-0 text-white bg-dot-white/15 max-md:min-h-64 sm:space-x-3">
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
