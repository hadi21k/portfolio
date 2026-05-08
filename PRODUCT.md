# Product

## Register

brand

## Users

Two audiences, both arriving on the portfolio link from email, LinkedIn, GitHub, or a referral. Both audiences make a 20 to 30 second decision: keep reading, or close the tab.

- **Recruiters at tech companies**, evaluating Hadi for full-time frontend or fullstack TypeScript roles. They are time-pressed, scanning for senior signal: clarity of work, quality of execution, ability to communicate. The portfolio's job for them is to convert "another React dev" into "someone I want to schedule a call with."
- **Freelance prospects**, evaluating Hadi for project work. They are more skeptical (often burned before by under-delivery) and more visual (they judge craft directly). The portfolio's job is to demonstrate that the work itself is high-quality, not just claimed to be.

Both audiences are reading on default light-mode browsers, often on a laptop, sometimes on mobile during a commute. Neither has time for a 4 second intro animation.

## Product Purpose

A personal portfolio for Hadi that:

1. Generates interviews for full-time roles.
2. Generates inbound freelance leads.
3. Functions as its own work sample. The portfolio's craft signals the craft level of the work it advertises. Visitors should walk away with the impression "if his portfolio is built like this, his client work is built like this."
4. Differentiates from the convergent dark-neon-monospaced default that most developer portfolios collapse into. It does this by claiming a deliberate editorial-warm lane.

Success looks like: interviews scheduled and freelance inquiries received, both attributable to portfolio visits, with the warm-editorial direction acting as the differentiator that started the conversation.

## Brand Personality

Three words: **modern, calm, deliberate.**

- **Modern**: current technology, sharp execution, clean type, real performance. Not "modern" as a color trend. "Modern" as in engineered for today's screens, today's accessibility expectations, today's reading speeds.
- **Calm**: the first feeling on landing should be "this is calm" before it becomes "this is impressive." The page does not shout. Color is rationed, motion is purposeful, layouts are quiet.
- **Deliberate**: every choice can be defended. No arbitrary radii, no decorative gradients, no animations without reason. If you ask "why is this here," there is an answer.

Voice: confident without being loud, precise without being austere, warm without being casual. The narrator on the page reads books, ships code, and respects the reader's time.

## Anti-references

The portfolio must not look like any of these, by name:

- **Generic AI-generated templates**: v0 default output, Cursor-screenshot aesthetic, shadcn-installed-and-untouched, "ship a site in 5 minutes" SaaS templates.
- **Notion-clone marketing sites**: gradient title, big bento grid, three identical feature cards, "Trusted by" logo strip.
- **Awwwards-of-the-day overproduction**: mandatory custom cursor, intro animation that delays content, WebGL because-it-can, full-screen scroll-jacking.
- **Dark plus neon plus monospaced convergent dev portfolio**: black background, electric blue or green accent, monospace for everything, "I'm a developer" tropes.
- **Sales-page energy**: filled red CTA buttons, urgency banners, pulsing "available for hire" dots, hero metrics with rocket emoji.

The bridge that resolves the tension between the warm editorial palette and the Rauno-style reference: **editorial palette, Rauno-grade discipline.** Warmth in color and type, austerity in execution, motion, and spacing.

## Design Principles

Five strategic principles. These are not visual rules (those live in DESIGN.md). They are decisions that shape every visual choice that follows.

1. **The portfolio is a work sample.** Every section's craft signals the craft of the work it shows. Sloppy spacing means sloppy code. There is no separation between "the design of the portfolio" and "the work being advertised." This raises the bar on every detail: kerning, leading, focus rings, empty states, 404 page.

2. **Editorial palette, Rauno-grade discipline.** Warmth comes from the palette and typography (cream paper, Newsreader serif, red ink). Discipline comes from the execution (precise spacing, restrained motion, surgical interactions, willingness to leave whitespace). Neither principle without the other. A cluttered editorial site fails; a sterile minimal site loses the differentiation that motivated this lane.

3. **Scarcity is the source of impact.** Red ink works because the rest of the page is restrained. Animation works because the rest of the page is still. A bold display headline works because the surrounding type is quiet. Whatever is rare is what carries weight. Spreading any one element across the whole page neutralizes it.

4. **Show, do not claim.** Projects are demonstrated through real work (screens, embedded views, live links, GitHub repos), not described with adjectives. "Built X" is stronger than "passionate about X." A working component embedded in a project card is stronger than a screenshot of one. Adjectives like "innovative" or "passionate" are banned from the copy.

5. **Calm before impressive.** The first half-second feeling on landing must be "this is calm." Impressive comes second, in the next 5 seconds, as the visitor reads the kicker, the headline, and starts to scroll. Anything that creates urgency, alert, or sales-ad reflex on first paint (filled red blocks, ticker animations, marketing modals, exit-intent popups) breaks the brand and is forbidden.

## Accessibility & Inclusion

Target: **WCAG 2.1 AA**, with the additions below. The portfolio is reviewed by recruiters and freelance clients who increasingly expect a11y as table stakes; failing it is a hireability signal.

- **Contrast**: AA at minimum (4.5:1 body, 3:1 large text). The current palette passes: `#1a1916` on `#f5f2eb` is approximately 14:1, `#c0392b` on `#f5f2eb` is approximately 5.2:1. Do not use red text on red-tinted backgrounds.
- **Reduced motion**: every GSAP and Lenis animation must have a `prefers-reduced-motion: reduce` fallback. Reduced-motion users get instant transitions or short fades only. No parallax, no scroll-tied transforms, no smooth scroll. This is non-negotiable.
- **Focus rings**: every interactive element has a visible focus ring. Default is 2px solid `#1a1916` offset 2px. Never `outline: none` without replacement.
- **No color-only signaling**: red links carry an underline (or another non-color affordance). Status pills carry an icon or a label, not just a color.
- **Real alt text**: every project image has descriptive alt text, not "screenshot" or empty. Decorative-only images get `alt=""`.
- **Skip to content**: a skip link in the layout, visible on focus.
- **Keyboard navigation**: fully tested. Tab order matches reading order. No keyboard traps in animated components.
- **Semantic HTML**: real headings, real lists, real buttons. No clickable divs.
