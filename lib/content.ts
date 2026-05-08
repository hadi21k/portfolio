import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import type { IExperienceMeta, IProjectMeta, ProjectKind } from "@/content/types";

/**
 * Content loader. Two source-of-truth split:
 *
 * - Projects + experience: list, order, and the featured flag live in
 *   `content/projects/index.ts` and `content/experience/index.ts` (typed,
 *   in-memory, no I/O for list operations).
 * - Bodies (the markdown narrative under the frontmatter) live in the matching
 *   `.mdx` file and are pulled with gray-matter when a single entry is
 *   requested. Pages that render the full body should dynamic-import the MDX
 *   directly so MDX components apply; the body string returned here is for
 *   excerpting (e.g. the home About preview that needs the first 3 sentences).
 *
 * About has no index.ts equivalent — its frontmatter (title, kicker,
 * ledeWord) is parsed straight from `content/about.mdx`.
 *
 * If the index.ts metadata and the .mdx frontmatter ever drift, the index.ts
 * value wins for projects and experience (it is what `generateStaticParams`
 * already uses). Dedrift to a single source is a v1.1 chore.
 */

const CONTENT_ROOT = path.join(process.cwd(), "content");

export interface IProjectContent {
  meta: IProjectMeta;
  body: string;
}

export interface IExperienceContent {
  meta: IExperienceMeta;
  body: string;
}

export interface IAboutMeta {
  title: string;
  kicker: string;
  ledeWord: string;
}

export interface IAboutContent {
  meta: IAboutMeta;
  body: string;
}

interface IGetProjectsOptions {
  featured?: boolean;
  kind?: ProjectKind;
}

async function readBody(filePath: string): Promise<string> {
  const raw = await fs.readFile(filePath, "utf8");
  const { content } = matter(raw);
  return content.trim();
}

async function readFrontmatterAndBody<T>(filePath: string): Promise<{ data: T; body: string }> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as T, body: content.trim() };
}

export function getProjects({ featured, kind }: IGetProjectsOptions = {}): IProjectMeta[] {
  return projects.filter((project) => {
    if (featured !== undefined && project.featured !== featured) return false;
    if (kind !== undefined && project.kind !== kind) return false;
    return true;
  });
}

export async function getProject(slug: string): Promise<IProjectContent | null> {
  const meta = projects.find((project) => project.slug === slug);
  if (!meta) return null;

  const body = await readBody(path.join(CONTENT_ROOT, "projects", `${slug}.mdx`));
  return { meta, body };
}

export function getAllExperience(): IExperienceMeta[] {
  return experience;
}

export async function getExperience(id: string): Promise<IExperienceContent | null> {
  const meta = experience.find((entry) => entry.id === id);
  if (!meta) return null;

  const body = await readBody(path.join(CONTENT_ROOT, "experience", `${id}.mdx`));
  return { meta, body };
}

export async function getAbout(): Promise<IAboutContent> {
  const { data, body } = await readFrontmatterAndBody<IAboutMeta>(
    path.join(CONTENT_ROOT, "about.mdx"),
  );
  return { meta: data, body };
}
