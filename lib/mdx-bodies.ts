import About from "@/content/about.mdx";
import Pixel38 from "@/content/experience/pixel38.mdx";
import Slashml from "@/content/experience/slashml.mdx";
import ChatSystem from "@/content/projects/chat-system.mdx";
import ComplianceExamPlatform from "@/content/projects/compliance-exam-platform.mdx";
import DatabaseMcp from "@/content/projects/database-mcp.mdx";
import FigmaMcp from "@/content/projects/figma-mcp.mdx";

/**
 * Static registry of MDX body components.
 *
 * MDX files compile to React components via @next/mdx. Importing them by
 * static name lets the bundler tree-shake correctly and gives us typed slug
 * lookup without dynamic-import path strings (which can confuse the bundler
 * during SSG).
 *
 * Frontmatter is stripped by remark-frontmatter (configured in next.config.ts);
 * metadata for these files comes from lib/content.ts via gray-matter.
 *
 * `projectBodies` keys are the source of truth for which slugs render a case
 * study at /projects/[slug]. A project is considered to have a case study iff
 * its slug appears here. Today the set covers the three featured personal
 * projects plus the freelance compliance-exam-platform entry.
 */

type MDXBody = (props: Record<string, unknown>) => React.ReactElement;

export const projectBodies = {
  "database-mcp": DatabaseMcp,
  "figma-mcp": FigmaMcp,
  "chat-system": ChatSystem,
  "compliance-exam-platform": ComplianceExamPlatform,
} as const satisfies Record<string, MDXBody>;

export type CaseStudySlug = keyof typeof projectBodies;

export const experienceBodies = {
  pixel38: Pixel38,
  slashml: Slashml,
} as const satisfies Record<string, MDXBody>;

export type ExperienceId = keyof typeof experienceBodies;

export const aboutBody: MDXBody = About;
