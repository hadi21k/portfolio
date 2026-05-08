import type { IProjectMeta } from "../types";

export const projects: IProjectMeta[] = [
  {
    id: "database-mcp",
    slug: "database-mcp",
    title: "Multi Database MCP Server",
    year: 2026,
    kicker: "DEVELOPER TOOL · 2026",
    oneLineSummary:
      "A read-only MCP server giving AI agents safe schema discovery and query access across SQL Server and Postgres, with profile isolation that prevents cross-environment leaks.",
    tech: ["TypeScript", "Node.js", "MCP", "PostgreSQL", "SQL Server"],
    kind: "personal",
    featured: true,
    repoUrl: "https://github.com/hadi21k/database-mcp",
  },
  {
    id: "figma-mcp",
    slug: "figma-mcp",
    title: "Figma MCP Server",
    year: 2026,
    kicker: "AI TOOLING · 2026",
    oneLineSummary:
      "An open-source MCP server that lets AI agents drive real Figma work, frames, auto layout, components, through a validated bridge into the plugin sandbox.",
    tech: ["TypeScript", "Node.js", "MCP", "WebSockets", "Figma Plugin API"],
    kind: "personal",
    featured: true,
    repoUrl: "https://github.com/hadi21k/figma-mcp",
  },
  {
    id: "chat-system",
    slug: "chat-system",
    title: "Real-time Chat System",
    year: 2024,
    kicker: "REAL-TIME · 2024",
    oneLineSummary:
      "A scalable chat backend on Fastify and WebSockets, using Upstash Redis Pub/Sub to broadcast across instances, with Docker multi-stage builds and graceful shutdown handling.",
    tech: ["Fastify", "WebSockets", "Next.js", "Redis", "Docker"],
    kind: "personal",
    featured: true,
    repoUrl: "https://github.com/hadi21k/chat_system",
  },
  {
    id: "compliance-exam-platform",
    slug: "compliance-exam-platform",
    title: "Compliance Exam Platform",
    year: 2026,
    kicker: "CLIENT WORK · REGULATED FINANCE · 2026",
    oneLineSummary:
      "An exam platform for a regulated-finance compliance advisory: outbox events and a Postgres-only job queue, pgvector and OpenAI for author-time question similarity, and a five-state compliance model that drives the right escalations.",
    tech: ["TypeScript", "React", "Express", "PostgreSQL", "Prisma", "pgvector", "OpenAI"],
    kind: "freelance",
    featured: false,
  },
  {
    id: "nextjs-job-board",
    slug: "nextjs-job-board",
    title: "Next.js Job Board",
    year: 2024,
    kicker: "MARKETPLACE · 2024",
    oneLineSummary:
      "A two-sided job board where employers post paid listings and candidates browse, with Clerk for auth, Prisma on Postgres, and Vercel Blob for assets.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Tailwind"],
    kind: "personal",
    featured: false,
    repoUrl: "https://github.com/hadi21k/nextjs_job_board",
  },
  {
    id: "events-system",
    slug: "events-system",
    title: "Events System",
    year: 2023,
    kicker: "PAYMENTS · 2023",
    oneLineSummary:
      "A from-scratch events booking app where Stripe Checkout handled payments and the genuinely interesting work was Zod validation and seat capacity logic against MongoDB.",
    tech: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Zod"],
    kind: "personal",
    featured: false,
    repoUrl: "https://github.com/hadi21k/events_system",
  },
  {
    id: "google-docs-clone",
    slug: "google-docs-clone",
    title: "Real-time Document Editor",
    year: 2023,
    kicker: "COLLABORATION · 2023",
    oneLineSummary:
      "A real-time collaborative editor over Socket.io with session auth, the kind of basic clone that teaches you why operational transform and CRDT libraries exist.",
    tech: ["Node.js", "Next.js", "Socket.io", "Passport.js"],
    kind: "personal",
    featured: false,
    repoUrl: "https://github.com/hadi21k/google_docs_clone",
  },
];
