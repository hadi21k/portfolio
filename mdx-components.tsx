import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * MDX → DESIGN.md element map. Applied globally to every .mdx body imported
 * as a React component (via @next/mdx). Matches the typography hierarchy and
 * components defined in DESIGN.md so editorial bodies render on-brand without
 * per-page overrides.
 *
 * Notes:
 * - Body copy uses the body-serif spec (Newsreader 400, ~18px, 1.7 leading).
 * - Headings stay ink-near-black (Two-Ink Rule); only inline links are red.
 * - Inline code and code blocks differ: inline gets paper-cream-hover bg;
 *   block gets the lime-on-ink slab. The `code` mapping checks `className`
 *   to distinguish (block code carries `language-*` from the markdown fence).
 * - Internal links route through next/link. External links use a plain `<a>`
 *   with safe rel attributes.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => (
      <h1
        className="mt-12 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-display-tight text-ink-near-black first:mt-0"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mt-14 mb-4 font-display text-[1.625rem] font-semibold leading-[1.2] tracking-headline-tight text-ink-near-black first:mt-0 md:text-[1.875rem]"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mt-10 mb-3 font-display text-[1.25rem] font-semibold leading-[1.3] text-ink-near-black first:mt-0 md:text-[1.375rem]"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="mt-8 mb-2 font-display text-[1.0625rem] font-semibold leading-snug text-ink-near-black first:mt-0"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p
        className="mt-5 max-w-[65ch] font-display text-[1.125rem] font-normal leading-[1.7] text-ink-near-black first:mt-0"
        {...props}
      >
        {children}
      </p>
    ),
    a: ({ href, children, ...props }) => {
      const url = href ?? "#";
      const isExternal = /^https?:\/\//.test(url);
      const className =
        "text-press-red underline decoration-1 underline-offset-[4px] transition-[color,text-decoration-thickness] duration-200 hover:text-press-red-deep hover:decoration-2";

      if (isExternal) {
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={url} className={className}>
          {children}
        </Link>
      );
    },
    ul: ({ children, ...props }) => (
      <ul
        className="mt-5 ml-5 max-w-[65ch] list-outside list-disc space-y-2 font-display text-[1.125rem] leading-[1.7] text-ink-near-black marker:text-ink-muted"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mt-5 ml-5 max-w-[65ch] list-outside list-decimal space-y-2 font-display text-[1.125rem] leading-[1.7] text-ink-near-black marker:text-ink-muted"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="pl-1" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mt-6 max-w-[65ch] border-l border-warm-tan-border pl-5 font-display text-[1.125rem] font-normal italic leading-[1.7] text-ink-secondary"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: (props) => (
      <hr className="my-12 h-px border-0 bg-warm-tan-border" {...props} />
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-ink-near-black" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
    code: ({ className, children, ...props }) => {
      const isBlockCode = typeof className === "string" && className.startsWith("language-");
      if (isBlockCode) {
        return (
          <code className={`font-mono text-[0.875rem] leading-[1.6] ${className}`} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="rounded-none bg-paper-cream-hover px-1.5 py-px font-mono text-[0.95em] text-ink-near-black"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="mt-6 max-w-[65ch] overflow-x-auto bg-code-ink p-7 font-mono text-[0.875rem] leading-[1.6] text-code-lime"
        {...props}
      >
        {children}
      </pre>
    ),
  };
}
