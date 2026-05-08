import type { Metadata } from "next";
import { SiteFooter, SiteHeader, SkipToContent } from "@/components/layout";
import MotionProvider from "@/components/providers/MotionProvider";
import { meta } from "@/content/site";
import { inter, jetbrainsMono, newsreader } from "@/lib/fonts";
import "./globals.css";

const metadataBase = meta.siteUrl ? new URL(meta.siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "en_US",
    url: meta.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

/**
 * If JS is disabled, MotionProvider never runs to reveal the hidden initial
 * states applied by globals.css. The <noscript> override below restores the
 * visible state for that audience. Reduced-motion users are already covered
 * because the initial-state CSS is gated on (prefers-reduced-motion: no-preference).
 */
const NOSCRIPT_MOTION_RESET = `
  [data-reveal],
  [data-reveal-children] > *,
  [data-hero-kicker],
  [data-hero-headline],
  [data-hero-deck],
  [data-hero-cue] {
    opacity: 1 !important;
    transform: none !important;
  }
  [data-hero-rule] {
    transform: scaleX(1) !important;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NOSCRIPT_MOTION_RESET }} />
        </noscript>
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <SkipToContent />
        <SiteHeader />
        <MotionProvider>
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
        </MotionProvider>
        <SiteFooter />
      </body>
    </html>
  );
}
