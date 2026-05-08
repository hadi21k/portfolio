---
name: Hadi's Portfolio
description: Editorial palette, Rauno-grade discipline. Warm-paper background, ink-red kicker, technical precision in execution.
colors:
  paper-cream: "#f5f2eb"
  paper-cream-card: "#ede9e0"
  paper-cream-hover: "#e4dfd4"
  ink-near-black: "#1a1916"
  ink-secondary: "#3d3b36"
  ink-muted: "#6b6760"
  press-red: "#c0392b"
  press-red-deep: "#962d22"
  steel-blue: "#2563a8"
  forest-green: "#1a6b3a"
  warm-tan-border: "#ccc9be"
  code-ink: "#1a1916"
  code-lime: "#c8f542"
typography:
  kicker:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  body-serif:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
rounded:
  none: "0px"
  input: "2px"
  pill: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
  "32": "128px"
  "40": "160px"
components:
  button-primary:
    backgroundColor: "{colors.ink-near-black}"
    textColor: "{colors.paper-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.press-red}"
    textColor: "{colors.paper-cream}"
  button-ghost:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.ink-near-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.paper-cream-card}"
    textColor: "{colors.ink-near-black}"
  link-inline:
    textColor: "{colors.press-red}"
    typography: "{typography.body}"
  link-inline-hover:
    textColor: "{colors.press-red-deep}"
  kicker-label:
    textColor: "{colors.press-red}"
    typography: "{typography.kicker}"
  code-block:
    backgroundColor: "{colors.code-ink}"
    textColor: "{colors.code-lime}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "24px 28px"
  input-text:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.ink-near-black}"
    typography: "{typography.body}"
    rounded: "{rounded.input}"
    padding: "12px 14px"
  input-text-focus:
    backgroundColor: "{colors.paper-cream}"
---

# Design System: Hadi's Portfolio

## 1. Overview

**Creative North Star: "The Letterpress Notebook"**

A warm-paper page composed with broadsheet discipline and a single ink-stamp red. The site sits at the intersection of two crafts: the typographer's letterpress (paper, serif, scarce ink) and the engineer's lab notebook (precise spacing, surgical motion, code as an honest visual element). Every choice is deliberate. Color is rationed. Motion is purposeful. Whitespace is the medium, not the leftover.

What this system explicitly rejects: the convergent dark-and-neon dev portfolio, the SaaS landing page with gradient hero and bento grid, the Awwwards-of-the-day with custom cursor and intro animation, the Notion clone with three identical feature cards, the v0 default. If the site looks like any of those, the design has failed.

The bridge that resolves the warmth-versus-precision tension is the leading principle from PRODUCT.md: **editorial palette, Rauno-grade discipline.** Warmth in color and type. Austerity in execution and motion.

**Key Characteristics:**

- Warm paper (`#f5f2eb`) is the dominant surface; never pure white, never pure gray.
- Press-red (`#c0392b`) is the only saturated accent and occupies less than 3 percent of any visible viewport.
- Type pairs editorial serif (Newsreader) for display and kicker with humanist sans (Inter) for body and UI.
- Surfaces are flat. Depth comes from background tonal shifts and hairline borders, not shadows.
- Animation is restrained: ease-out-expo entrances, instant state changes, total respect for `prefers-reduced-motion`.
- Code blocks are the one "tech jolt": near-black ink with lime-green text. Their contrast against paper is the design's other point.

## 2. Colors: The Letterpress Palette

A warm newspaper palette: cream paper, ink-near-black type, scarce ink-stamp red. Two utility accents (steel blue, forest green) handle reference and confirmation roles only. Never decorative.

### Primary

- **Press Red** (`#c0392b`, oklch ≈ 53% 0.165 30): the ink stamp. Used for kickers, inline body links, the H1 keyword (occasionally), and the primary button hover state. Its scarcity is the reason it has weight.
- **Press Red Deep** (`#962d22`): the hover and active state of any element using Press Red. Slightly darker, same hue family.

### Tertiary (utility accents)

- **Steel Blue** (`#2563a8`): reserved for "reference" semantics: file paths inline in copy, info callouts, citation marks. Never decoration, never headlines, never buttons.
- **Forest Green** (`#1a6b3a`): reserved for "confirmation" semantics: success states, completed status pills, a check glyph. Never decoration.

### Neutral

- **Paper Cream** (`#f5f2eb`): the dominant page background. Warm off-white. Roughly 90 percent of the visible surface at any time.
- **Paper Cream Card** (`#ede9e0`): card backgrounds, sidebar / table-of-contents fills, the section that needs to feel "lifted" without using shadow.
- **Paper Cream Hover** (`#e4dfd4`): inline code background, hover states on neutral buttons, list-row hover.
- **Ink Near-Black** (`#1a1916`): primary body text and headings. Approximately 14:1 contrast on Paper Cream. Never pure `#000`.
- **Ink Secondary** (`#3d3b36`): secondary text, deck copy under headlines, tag chip text.
- **Ink Muted** (`#6b6760`): metadata, labels, captions, meta-info under project titles.
- **Warm Tan Border** (`#ccc9be`): hairline rules and dividers. 1px only.

### Code

- **Code Ink** (`#1a1916`): code block background.
- **Code Lime** (`#c8f542`): code block text. The single piece of "lab notebook" energy in an otherwise paper palette.

### Named Rules

**The 3 Percent Rule.** Press Red occupies less than 3 percent of any visible viewport at any scroll position. Squint at a screenshot: if red dominates, it has been over-applied. Rework until the red functions as ornament, not coverage.

**The Two-Ink Rule.** The default ink for headings and buttons is `#1a1916`, not red. Red appears on kickers, inline body links, the optional H1 keyword, and the primary button's hover state. H2, H3, H4 are always Ink Near-Black. Buttons in their resting state are always Ink Near-Black on Paper Cream.

**The Utility-Accent Rule.** Steel Blue and Forest Green carry semantic load only. They appear on file paths, info callouts, success states. They never appear on buttons, links, headlines, or as decoration. If a Steel Blue or Forest Green element cannot be defended by its semantic role, it does not ship.

**The No-Pure-Neutral Rule.** Every neutral is tinted toward the warm hue. Pure `#000`, pure `#fff`, and untinted grays (`#666`, `#888`, etc.) are forbidden. If a fourth gray is needed, it stays on the warm vector defined by the existing scale.

## 3. Typography

**Display Font:** Newsreader (variable, Google Fonts). Falls back to Georgia, serif.
**Body Font:** Inter (variable, Google Fonts). Falls back to system-ui, sans-serif.
**Mono Font:** JetBrains Mono. Falls back to ui-monospace, monospace.

**Character:** Editorial serif for display and kicker, humanist sans for body and UI, technical monospace inside code blocks. The pairing reads as "the typographer who also ships code." Three families is the maximum and code mono only appears inside a code block, so the running page reads as a two-family system.

### Hierarchy

- **Kicker** (Newsreader 600, 13px, line-height 1.2, letter-spacing 0.18em, ALL CAPS): the small red label that sits above section headlines and project titles, often paired with a hairline tan rule extending to the right. The single most identifiable typographic element of the system.
- **Display** (Newsreader 600, clamp(2.75rem, 6vw, 4.5rem), line-height 1.05, letter-spacing -0.02em): the H1 of the home page and the H1 of long-form pages. Tight tracking on large display type is mandatory.
- **Headline** (Newsreader 600, 2rem, line-height 1.15, letter-spacing -0.01em): H2, used for section titles. Always Ink Near-Black, never red.
- **Title** (Newsreader 600, 1.375rem, line-height 1.3): H3, used for project titles inside cards, sub-section heads.
- **Body** (Inter 400, 1.0625rem ≈ 17px, line-height 1.65): the default running text on UI surfaces (about page, project descriptions, contact form).
- **Body Serif** (Newsreader 400, 1.125rem, line-height 1.7): used for long-form essay-like content, when the writer is being a writer rather than a UI presenter. About page intro, project case-study narratives.
- **Label** (Inter 500, 0.75rem, letter-spacing 0.06em, often ALL CAPS): button labels, form labels, table column heads, meta-info chips.
- **Mono** (JetBrains Mono 400, 0.875rem, line-height 1.6): inline code in copy, full code blocks, technical references like file paths (paired with Steel Blue color).

### Named Rules

**The 65ch Rule.** Body copy is capped at 65 characters per line. Wider lines kill reading speed and break editorial feel instantly. On wide viewports, content sits in a max-width container, not edge-to-edge.

**The Two-Family Visible Rule.** A reader scrolling the home page sees Newsreader and Inter. Mono lives inside code blocks only. Three families on the page at the same time is a slop tell.

**The Kicker-Tracking Rule.** Kicker labels (small red ALL CAPS) take 0.18em letter-spacing minimum. Tight kicker labels read as accidental, not designed. The wide tracking is what turns a label into a typographic event.

**The Display-Tightening Rule.** Any heading 32px or larger gets letter-spacing -0.01em or tighter. Default tracking on large display type is sloppy by default.

## 4. Elevation

This system is **flat**. Surfaces do not float, do not cast shadows, do not blur. Depth is signaled three ways:

1. **Background tonal shifts.** Card backgrounds use Paper Cream Card (`#ede9e0`) against the Paper Cream (`#f5f2eb`) page. The 2 percent lightness difference is enough to register the layer without breaking the paper metaphor.
2. **Hairline borders.** 1px solid Warm Tan Border (`#ccc9be`) is the entire border vocabulary. Used on horizontal section rules, the underside of kicker labels, table cells, and the perimeter of input fields. Never thicker than 1px on horizontal rules; never on cards (cards use background shift instead).
3. **Whitespace.** The most powerful layering tool. A 96px gap between sections separates them more clearly than any shadow ever could.

There is no shadow vocabulary. There are no `box-shadow` declarations on any surface in the system, with one exception: the focus ring (rendered as a 2px solid outline with 2px offset, not a shadow).

### Named Rules

**The Flat Rule.** No shadows on any surface. If a card needs to feel lifted, change its background to Paper Cream Card. If an input needs focus, render the focus ring as `outline: 2px solid #1a1916; outline-offset: 2px`. Drop shadows, glow effects, and elevation simulations are forbidden.

**The Hairline Rule.** Every divider is 1px. 2px-and-thicker rules belong to product UIs and dashboard chrome. Editorial layouts use weight differences and whitespace to create separation, not heavy lines.

## 5. Components

### Buttons

- **Shape:** square corners (radius 0).
- **Primary** (resting): Ink Near-Black background (`#1a1916`), Paper Cream text (`#f5f2eb`), Label typography (Inter 500, 12px, 0.06em tracking, ALL CAPS), 14px 28px padding, 1px solid Ink Near-Black border (so it matches the ghost variant's visual weight).
- **Primary** (hover): background swaps to Press Red (`#c0392b`). The button "stamps" red on hover. Transition: 200ms ease-out-quart on background-color.
- **Primary** (focus): outline 2px solid Ink Near-Black, offset 2px. Visible always when focused via keyboard.
- **Ghost**: Paper Cream background (transparent on the page), Ink Near-Black text, 1px solid Warm Tan Border, same padding and label as Primary.
- **Ghost** (hover): background swaps to Paper Cream Card (`#ede9e0`). Border deepens to Ink Near-Black.

Note: there is no "filled red" CTA variant. Press Red appears on hover only. A solid red rectangle is sales-page energy and is forbidden.

### Inline Links (in body copy)

- Color: Press Red (`#c0392b`).
- Underline: yes, 1px, underline-offset 4px, text-decoration-thickness 1px.
- Hover: color shifts to Press Red Deep (`#962d22`). Underline thickens to 2px.
- Focus: outline 2px solid Ink Near-Black, offset 2px.
- Color alone is not the affordance. The underline carries semantic weight for color-blind readers.

### Kicker

- All-caps label sitting above section headlines and project titles.
- Newsreader 600, 13px, 0.18em letter-spacing, Press Red color.
- Often paired with a hairline rule (`border-bottom: 1px solid #ccc9be`) that extends to the right of the label, terminating at the column edge.
- Spacing: 16px below the kicker before the headline.

### Code Blocks

- Background: Code Ink (`#1a1916`), Text: Code Lime (`#c8f542`).
- Mono typography (JetBrains Mono 14px, line-height 1.6).
- Padding 24px 28px.
- Square corners (radius 0).
- No syntax highlighting necessary on first ship. The lime-on-black is itself the visual statement; ornate token coloring fights the editorial restraint.
- Inline code (in body copy): background Paper Cream Hover (`#e4dfd4`), text Ink Near-Black, padding 1px 6px, no border.

### Cards / Containers

- Corner Style: square (radius 0).
- Background: Paper Cream Card (`#ede9e0`), or transparent (no fill) for compositional cards.
- Border: optional 1px solid Warm Tan Border on cards that need a stronger edge; default is no border (depth comes from the background shift alone).
- Internal Padding: minimum 24px, often 32px or 48px on hero cards. Editorial cards breathe.
- No nested cards. Ever. Card-inside-a-card is always wrong.

### Inputs / Fields

- Background: Paper Cream (matches the page).
- Border: 1px solid Warm Tan Border, radius 2px (the one place the system allows non-zero radius, for visual softness on long form fields).
- Padding: 12px 14px.
- Focus: border swaps to Ink Near-Black; outline 2px solid Ink Near-Black with 2px offset.
- Label: Inter 500, 12px, ALL CAPS, 0.06em tracking, color Ink Muted, sitting 8px above the field.

### Navigation

- Style: text-only links, no buttons, no chrome. Inter 500, 14px, Ink Near-Black.
- Hover: text color shifts to Press Red. No underline (links in nav are not body links; they get the color affordance instead). 200ms ease-out-quart transition.
- Active page: small red dot or red leading rule, never a filled background.
- Mobile: simple stacked list inside a flat sheet that slides from the right (no blur, no glass, no overlay scrim with opacity less than 0.6).

### Section Ornament: Drop Cap

A signature flourish reserved for one place: the first paragraph of the About section.

- The opening letter is rendered as Newsreader 600, ~5.5em, line-height 0.85, color Press Red.
- Floats left, 4 lines deep, 8px right margin, 4px top margin to align cap-height with body line.
- One drop cap per page maximum. More than one breaks the editorial rhythm.

## 6. Do's and Don'ts

### Do

- **Do** keep Press Red below 3 percent of any visible viewport. Use it as a stamp, not as paint.
- **Do** tint every neutral toward the warm hue. Use `#1a1916`, never `#000`. Use `#f5f2eb`, never `#fff`.
- **Do** pair Newsreader (display, kicker) with Inter (body, UI), and use JetBrains Mono inside code blocks only.
- **Do** cap body copy at 65 characters per line, regardless of viewport width.
- **Do** apply 0.18em letter-spacing on kickers and 0.06em on small ALL-CAPS labels. Wide tracking is what makes them read as designed.
- **Do** tighten letter-spacing on display headings (≤ -0.01em on anything 32px or larger).
- **Do** use background tonal shifts and hairline borders for depth, not shadows.
- **Do** make code blocks numerous and prominent. The lime-on-black is the design's "tech jolt" element and a critical signal that this is a developer's portfolio.
- **Do** respect `prefers-reduced-motion` on every GSAP and Lenis animation. Reduced-motion users get fades only or instant state changes.
- **Do** render visible focus rings (2px solid Ink Near-Black, 2px offset). Never `outline: none` without replacement.
- **Do** vary section padding for rhythm. Hero sections breathe larger (96px+ top/bottom); content sections sit at 64px-96px; navigation rows tighten to 16px-24px.

### Don't

- **Don't** ship a filled red CTA button. Press Red appears on the primary button's hover state, never on its resting state. A solid red rectangle is sales-page energy and is forbidden.
- **Don't** use red on H2, H3, or H4. Red lives on kickers, inline body links, and (occasionally) one keyword inside the H1. Default heading ink is `#1a1916`.
- **Don't** introduce a second saturated accent. Indigo (`#6366f1`), violet (`#8b5cf6`), electric blue, neon green, or any second saturated hue breaks the editorial restraint and is the single biggest "AI-generated" tell. The palette is committed to one color.
- **Don't** use Steel Blue or Forest Green as decoration. They are semantic-only: Steel Blue for "reference" (file paths, info callouts), Forest Green for "confirmation" (success states). Decorative use is forbidden.
- **Don't** add shadows. The system is flat. If something needs to feel lifted, shift its background or change its border, not its shadow.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, or list items. This is a banned pattern. Use full borders, leading numbers, or nothing.
- **Don't** ship gradient text (`background-clip: text` over a gradient). Editorial type is solid ink. Emphasis comes from weight or size.
- **Don't** ship glassmorphism or backdrop blurs. Wrong genre entirely. Paper is opaque.
- **Don't** ship a v0-style bento grid of identical feature cards. Editorial uses asymmetric compositions. If cards repeat, vary their sizes deliberately.
- **Don't** ship "Trusted by" logo strips, urgency banners, "available for hire!" pulsing dots, hero metric cards, or rocket-emoji headlines. These are sales-page tropes and break the brand.
- **Don't** use elastic, bounce, or back-out easing. Paper does not bounce. Use ease-out-expo (entrances) and ease-out-quart (state changes) only.
- **Don't** animate CSS layout properties (width, height, top, left, padding, margin). Animate `transform` and `opacity` only.
- **Don't** add a custom cursor or scroll-jacking. They feel "designed" but they break expected behavior and read as Awwwards-overproduction.
- **Don't** ship dark mode on first release. The warm-paper aesthetic IS the brand; the red does not translate cleanly to dark surfaces. Defer dark mode unless and until a full second design pass is budgeted for it.
