export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-none focus:bg-paper-cream focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink-near-black focus:outline focus:outline-2 focus:outline-ink-near-black"
    >
      Skip to content
    </a>
  );
}
