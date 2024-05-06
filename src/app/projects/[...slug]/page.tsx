import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import { projects } from "#site/content";
import { MDXContent } from "@/components/shared/MDXContent";
import { formatDate } from "@/lib/utils";

import { Link2 } from "lucide-react";
import GithubIcon from "@/components/ui/github-icon";

type Props = {
  params: {
    slug: string[];
  };
};

async function getProjectFromParams(params: Props["params"]) {
  const slug = params?.slug?.join("/");
  const project = projects.find((project) => project.slugAsParams === slug);

  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: project.slug,
    },
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return projects.map((project) => ({ slug: project.slugAsParams.split("/") }));
}

const page = async ({ params }: Props) => {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-[80px] bg-grid-white/[0.07]">
      <article className="container prose prose-invert max-w-3xl py-6">
        <h1 className="mb-2">{project.title}</h1>
        <div className="flex items-center justify-between">
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
        {project.description ? (
          <p className="mt-0">{project.description}</p>
        ) : null}
        <MDXContent code={project.body} />
      </article>
    </div>
  );
};

export default page;
