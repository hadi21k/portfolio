/**
 * Shared content types for the portfolio.
 * Imported by content/site.ts, content/projects/index.ts, content/experience/index.ts.
 * Markdown bodies (about.md, projects/*.md, experience/*.md) carry their own frontmatter
 * and will be parsed at build time; this module covers the structured data layer only.
 */

export interface IHeroCopy {
  kicker: string;
  headline: string;
  headlineKeyword: string;
  deck: string;
}

export interface INavItem {
  label: string;
  href: string;
}

export interface ISiteSocial {
  label: string;
  href: string;
  handle?: string;
}

export interface ISiteContact {
  intro: string;
  email: string;
  phone?: string;
  location: string;
  socials: ISiteSocial[];
}

export interface ISiteFooter {
  colophon: string;
  links?: INavItem[];
}

export interface ISiteMeta {
  title: string;
  description: string;
  ogImageAlt?: string;
  siteUrl?: string;
}

export interface IPageHeader {
  kicker: string;
  lede: string;
}

export type ProjectKind = "personal" | "freelance";

export interface IProjectMeta {
  id: string;
  slug: string;
  title: string;
  year: number;
  kicker: string;
  oneLineSummary: string;
  tech: string[];
  kind: ProjectKind;
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
}

export interface IExperienceMeta {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location?: string;
  summary: string;
  url?: string;
}
