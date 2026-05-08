import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // pageExtensions intentionally left at the Next default (tsx, ts, jsx, js).
  // MDX files live under content/ and are imported as modules — never routed.
};

const withMDX = createMDX({
  options: {
    // Plugins must be referenced by package name (string form) so Turbopack
    // can serialize the loader config and ship it to its worker. Importing
    // remark-frontmatter as a function reference fails with
    // "loader does not have serializable options".
    // Strips YAML frontmatter at parse time so it doesn't render as a stray
    // thematic break + paragraph. Frontmatter metadata is read separately by
    // lib/content.ts via gray-matter.
    remarkPlugins: [["remark-frontmatter", "yaml"]],
  },
});

export default withMDX(nextConfig);
