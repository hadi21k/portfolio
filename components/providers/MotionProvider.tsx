"use client";

import type LenisType from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * MotionProvider — single client-side coordinator for all page motion.
 *
 * Scope:
 *   1. Lenis smooth scroll (with native scroll fallback under reduced-motion)
 *   2. Anchor-link interception so hash navigation flows through Lenis
 *   3. Hero entrance choreography (data-hero-* attributes on Hero.tsx)
 *   4. Scroll-triggered reveals via data-reveal / data-reveal-children
 *
 * Two-effect architecture:
 *   - Effect A (deps: []) owns Lenis. Lifelong: Lenis lives across route
 *     changes because the App Router keeps the layout mounted, so we should
 *     not tear down and recreate it on every navigation.
 *   - Effect B (deps: [pathname]) owns the GSAP context. The new page's
 *     [data-reveal] / hero elements only exist after the route transition,
 *     so the context is rebuilt per pathname and `ctx.revert()` cleans up
 *     the previous page's triggers.
 *
 * Why one provider:
 *   - Single client boundary keeps server components server-rendered.
 *   - GSAP, ScrollTrigger, and Lenis are dynamic-imported so they stay out
 *     of the initial bundle (LCP-safe; no above-the-fold cost).
 *   - Declarative data-attributes decouple motion from content components.
 *
 * prefers-reduced-motion: hard short-circuit. The CSS initial-state rules in
 * globals.css are scoped to (prefers-reduced-motion: no-preference) so
 * reduced-motion users never see the hidden state; this provider also exits
 * early in BOTH effects so neither GSAP nor Lenis is loaded for those users.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisType | null>(null);
  const pathname = usePathname();

  // Effect A — Lenis lifecycle + anchor-link interception. Runs once.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap, ScrollTrigger }, { default: Lenis }, { lenisDefaultOptions }] =
        await Promise.all([import("@/lib/gsap"), import("lenis"), import("@/lib/lenis")]);

      if (cancelled) return;

      // Lenis ↔ ScrollTrigger integration. Lenis owns the scroll loop;
      // ScrollTrigger updates from Lenis's scroll events; gsap.ticker drives
      // Lenis's RAF so they share one frame budget.
      const lenis = new Lenis(lenisDefaultOptions);
      lenisRef.current = lenis;

      lenis.on("scroll", ScrollTrigger.update);
      const tickerFn = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      // Intercept same-origin same-pathname hash anchor clicks so Lenis can
      // animate to the target. Cross-page hash links fall through to Next's
      // router; Effect B handles the hash on the new route's first paint.
      //
      // Capture phase (third arg `true`) is critical: Next.js Link's onClick
      // is dispatched via React synthetic events on the root container during
      // bubble. A bubble-phase document listener fires AFTER React's handler,
      // by which time Next has already called preventDefault + done a native
      // scrollTo. Capture phase puts us first; stopImmediatePropagation
      // prevents the event from ever reaching React's handler.
      const handleAnchorClick = (event: MouseEvent) => {
        if (event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const target = event.target as HTMLElement | null;
        const link = target?.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href) return;

        let url: URL;
        try {
          url = new URL(link.href);
        } catch {
          return;
        }

        if (url.origin !== window.location.origin) return;
        if (!url.hash) return;
        if (url.pathname !== window.location.pathname) return;

        const targetId = url.hash.slice(1);
        if (!targetId) return;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        // Update URL so back/forward and copy-link still work.
        window.history.pushState(null, "", url.hash);
        lenis.scrollTo(targetEl);
      };
      document.addEventListener("click", handleAnchorClick, true);

      cleanup = () => {
        document.removeEventListener("click", handleAnchorClick, true);
        gsap.ticker.remove(tickerFn);
        lenis.destroy();
        lenisRef.current = null;
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  // Effect B — per-route GSAP context. Re-runs on pathname change so the
  // hero entrance and [data-reveal] triggers re-attach to the new page's DOM.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap, ScrollTrigger }] = await Promise.all([import("@/lib/gsap")]);

      if (cancelled) return;

      const ctx = gsap.context(() => {
        // Hero entrance choreography (only fires on pages that include a hero).
        const heroKicker = document.querySelector("[data-hero-kicker]");
        const heroRule = document.querySelector("[data-hero-rule]");
        const heroHeadline = document.querySelector("[data-hero-headline]");
        const heroKeyword = document.querySelector("[data-hero-keyword]");
        const heroDeck = document.querySelector("[data-hero-deck]");
        const heroCue = document.querySelector("[data-hero-cue]");

        if (heroKicker) {
          const tl = gsap.timeline();
          tl.to(heroKicker, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          })
            .to(
              heroRule,
              {
                scaleX: 1,
                duration: 0.6,
                ease: "expo.out",
              },
              0.1,
            )
            .to(
              heroHeadline,
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "expo.out",
              },
              0.2,
            )
            .to(
              heroKeyword,
              {
                color: "#c0392b",
                duration: 0.4,
                ease: "power2.out",
              },
              1.1,
            )
            .to(
              [heroDeck, heroCue].filter(Boolean),
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              1.3,
            );
        }

        // Single-element scroll reveals.
        document.querySelectorAll("[data-reveal]").forEach((element) => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });

        // Stagger reveals for children of [data-reveal-children].
        document.querySelectorAll<HTMLElement>("[data-reveal-children]").forEach((parent) => {
          const stagger = parseFloat(parent.dataset.revealStagger ?? "0.06");
          const children = Array.from(parent.children);
          if (children.length === 0) return;

          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "expo.out",
            stagger,
            scrollTrigger: {
              trigger: parent,
              start: "top 88%",
              once: true,
            },
          });
        });
      });

      // Cross-page hash navigation: when the new route renders, scroll to
      // the hash target via Lenis. Defer one frame so layout is settled.
      if (window.location.hash) {
        const hashId = window.location.hash.slice(1);
        if (hashId) {
          requestAnimationFrame(() => {
            if (cancelled) return;
            const targetEl = document.getElementById(hashId);
            if (!targetEl) return;
            const lenis = lenisRef.current;
            if (lenis) {
              lenis.scrollTo(targetEl);
            } else {
              targetEl.scrollIntoView();
            }
          });
        }
      }

      // Refresh ScrollTrigger so it recomputes positions for the new DOM.
      ScrollTrigger.refresh();

      cleanup = () => {
        ctx.revert();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return <>{children}</>;
}
