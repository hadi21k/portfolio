import type {
  IHeroCopy,
  INavItem,
  IPageHeader,
  ISiteContact,
  ISiteFooter,
  ISiteMeta,
} from "./types";

export const hero: IHeroCopy = {
  kicker: "BUILDER · BEIRUT · 2026",
  headline: "Software that holds up after launch.",
  headlineKeyword: "holds",
  deck: "I am Hadi Diab, a full-stack developer. I build the backends, the interfaces, and the operational pieces that have to keep working on a Monday morning.",
};

export const nav: INavItem[] = [
  { label: "Projects", href: "/#projects" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const workPageHeader: IPageHeader = {
  kicker: "WORK · 2024 TO PRESENT",
  lede: "Two roles, both since 2024. The thread is ownership: writing software end-to-end and being on the call when something breaks.",
};

export const projectsSectionHeader: IPageHeader = {
  kicker: "SELECTED PROJECTS · 2023 TO 2026",
  lede: "Personal work, mostly developer tools. Three featured below have their own write-ups; the rest link out to the source.",
};

export const freelanceSectionHeader: IPageHeader = {
  kicker: "CLIENT WORK · 2026",
  lede: "Work shipped under contract. Client names stay private; the architectural decisions do not.",
};

export const contact: ISiteContact = {
  intro:
    "If you have a system that needs to be built well, or you are looking for a full-stack developer who finishes what he starts, send me a note. I read every email and reply to most within a day.",
  email: "hadidyeb@gmail.com",
  location: "Beirut, Lebanon",
  socials: [
    { label: "GitHub", href: "https://github.com/hadi21k", handle: "@hadi21k" },
    { label: "LinkedIn", href: "https://linkedin.com/in/hadidiab", handle: "in/hadidiab" },
  ],
};

export const footer: ISiteFooter = {
  colophon: "Set in Newsreader and Inter. Written, designed, and built in Beirut, 2026.",
};

export const meta: ISiteMeta = {
  title: "Hadi Diab, Full Stack Developer, Beirut",
  description:
    "Hadi Diab is a full-stack developer in Beirut working in TypeScript, Node, and React. Real-time systems, queue-backed services, and AI tooling that respects the database underneath.",
  ogImageAlt:
    "Hadi Diab, full-stack developer based in Beirut. A warm-paper portfolio with a single red kicker.",
  siteUrl: "https://hadidiab.com",
};
