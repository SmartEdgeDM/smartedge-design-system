# SMART/EDGE Design System

**Tagline:** *Where Great Design Clicks.*
**Tone:** Strategic · Result-Oriented · Technically Proficient

SMART/EDGE is a digital-marketing studio. The brand reads like a modern tech-forward agency: high-contrast minimalism, a single high-voltage accent (Cyber Lime), and typography that feels engineered rather than decorative. This design system captures the colors, type, motion rules, and component patterns used across SMART/EDGE marketing surfaces.

---

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography |
| `colors_and_type.css` | All CSS custom properties — colors, type scale, spacing, radii, shadows, motion, semantic tokens |
| `SKILL.md` | Cross-compatible skill definition for Claude Code / Agent Skills |
| `assets/` | Logos (black + cream wordmark), 3D favicon monogram |
| `preview/` | Design-system preview cards (colors, type, components) rendered in the Design System tab |
| `ui_kits/website/` | High-fidelity marketing-website UI kit — hero, nav, services, CTA, footer |

---

## Sources provided

- `uploads/SMARTEDGE-CyberLime-Logo-BLACK.png` — primary wordmark, dark on light
- `uploads/SMARTEDGE-CyberLime-Logo-Cream.png` — inverted wordmark for dark backgrounds
- `uploads/SmartEdge-Favicon-Transparent.webp` — 3D isometric "SE" monogram favicon
- Written brand guidance (tagline, tone, color usage rules, CMYK breakdowns)

No codebase or Figma file was provided; visual inferences for type and component styling are derived from the wordmark, favicon, and stated rules. Flagged substitutions are called out below.

---

## Brand palette (canonical)

| Token | Hex | CMYK | Usage |
|---|---|---|---|
| Almost Black | `#1A1A1B` | 0·0·0·93 | Hero backgrounds, footers, primary H1 & body headings |
| Creamy White | `#F9F8F3` | 2·1·4·0 | Main page background, text-heavy sections |
| Royal Azure Blue | `#0056B3` | 100·52·0·30 | H2 / H3, links, trust signals |
| Cyber Lime | `#CCFF00` | 20·0·100·0 | **CTAs only**, the `/` in the logo, high-impact accents |
| Light Purple | `#B19CD9` | 28·35·0·15 | Icons, decorative dividers, secondary branding |

Cyber Lime is a scarcity token — if it appears more than twice in a viewport it stops working.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, plain-spoken, outcome-focused. We name the result first (*"Turn clicks into clients."*) and defend it with a proof point. No hedging, no filler adverbs.

**Person.** Second-person-forward — *"your brand," "your funnel," "you get"* — because the page is a pitch, not a diary. First-person-plural ("we") is used when describing the agency's *process*, never its *emotions*.

**Casing.**
- H1 & H2: **Title Case** or **Sentence case** — never all-caps (the logo carries the all-caps weight already).
- Eyebrows, button labels, nav: **ALL CAPS**, wide tracking (`0.18em`).
- Body: sentence case. The `/` in "SMART/EDGE" is a forward slash with no spaces.

**Tone words to use:** *sharpen, click, edge, measurable, engineered, launch, ship, convert.*
**Tone words to avoid:** *synergy, unlock potential, journey, reimagine, solutions.* (These read like every other agency.)

**Sentence shape.** Short. Declarative. Occasional fragment for emphasis — the way a good ad runs. Long paragraphs are reserved for case-study body copy, and they cap at ~64ch.

**Emoji.** Not part of the brand vocabulary. Use Light Purple icon glyphs for the same decorative role.

**Example copy that's on-brand:**
> **Where great design clicks.**
> We build brand systems, websites, and ad creative engineered to convert. No fluff — just the work that moves the number.
> [ **START A PROJECT** → ]

**Example copy that's off-brand** *(and why):*
> *"We're passionate about unlocking your brand's digital journey through synergistic storytelling."* — vague, first-person-centric, agency-cliché bingo.

---

## VISUAL FOUNDATIONS

### Typography

- **Display: Barlow Condensed** — used for headers (H1–H4, eyebrows, button labels). Tall, narrow, confident. Pairs naturally with the Barlow body face.
- **Body: Barlow** — clean low-contrast humanist sans for long-form copy and UI.
- **Mono: JetBrains Mono** — for metric readouts, code, and `/` accented lockups.

Note: the SMART/EDGE wordmark itself uses a heavy rounded geometric face (proprietary). Barlow Condensed is the typesystem for everything *around* the wordmark; the logo file is always used as-is.

Type is set with generous line-height (1.55 body, 1.05 display) and **tight tracking on headings** (`-0.02em`) — this is what gives the brand its "engineered" feel. Eyebrow labels run ALL-CAPS with `0.18em` tracking.

### Color vibe

The palette is **high-contrast and restrained**. 90% of any given layout is cream-on-black or black-on-cream; azure carries secondary hierarchy (H2/H3/links); lime is the single jolt; purple handles decorative ornament and iconography. Gradients are **not** part of the brand language — the one exception is the 3D favicon monogram, which is used as a product mark only, never as a repeating background or decoration.

### Backgrounds

- Flat fills only: **cream** or **almost-black**. Full-bleed in dark sections.
- No gradients, no patterns, no textures in default layouts. (The favicon's blue→purple gradient is an exception reserved for the monogram itself.)
- Imagery, when used, reads **sharp and well-lit** — studio photography, product screenshots, or vector marks. Avoid warm filters and grain.
- Hero backgrounds are typically `#1A1A1B` with oversized display type and a single lime CTA.

### Animation

- **Fades and small translations only.** 120–360 ms duration range, `cubic-bezier(0.22, 1, 0.36, 1)` ease-out.
- No bounces, no spring overshoot, no parallax. The brand's confidence comes from being decisive, not playful.
- Hover states transition `background-size` on underlines and `transform` on CTAs in 220ms.

### Hover & press states

- **Primary CTA (lime):** hover slightly darkens the lime wash (`--se-lime-200`) and lifts with a **2px translate-up**; press returns to baseline and darkens the shadow. The hard-offset shadow `0 6px 0 0 var(--se-black)` is a brand signature — CTAs look like stamped tiles.
- **Secondary button (outline):** hover fills the interior with black, inverts text to cream.
- **Links:** animated underline grows from 0→100% width in 220ms, in lime.
- **Icon buttons:** hover swaps fill to azure, purple ornament rotates 0→180° only on decorative dividers, never on functional icons.

### Borders

- Hairlines: `1px solid var(--border-1)` (warm ink-200).
- Strong separators in dark sections: `1px solid var(--border-inverse)`.
- **No dashed borders. No double borders.**

### Shadow system

Restrained and crisp — not fluffy drop shadows.
- `--shadow-xs / sm / md / lg` — progressively larger `y`-offset blurs, all **warm-black** tinted (`rgba(26,26,27,...)`).
- `--shadow-lime` — the signature hard-offset: `0 6px 0 0 var(--se-black)`. Used on primary CTAs.

### Transparency & blur

- Used **sparingly**. Sticky nav gets `backdrop-filter: saturate(180%) blur(12px)` over a 90% cream fill.
- No frosted-glass card stacks. No translucent overlays on imagery except for legibility gradients on hero photos (black 0% → 60%).

### Corner radii

Tight — the brand reads technical, not bubbly.
- Buttons & inputs: `--r-md` (8px).
- Cards: `--r-lg` (12px).
- Pills / badges: `--r-pill`.
- Hero imagery and section dividers: **square corners** (0px) — keeps the composition crisp.

### Cards

- Cream background with a 1px `--border-1` hairline OR `--shadow-sm` — never both.
- 24–32px internal padding.
- Azure H3 title, ink-700 body, optional purple icon in top-left 40px square.
- No colored left-border accent stripes (that's the trope we actively avoid).

### Layout rules

- Max content width: **1200px** (narrow variant 720px for long-form reading).
- Gutter: `clamp(16px, 3vw, 32px)`.
- Section rhythm: heavy vertical spacing — 96–128px between hero/body sections on desktop.
- A section of **lime-on-black** acts as a visual punctuation mark between light content blocks.

---

## ICONOGRAPHY

No icon set was provided in the brief. The guidance calls for **Light Purple (#B19CD9)** for "icons, decorative dividers, and secondary branding elements" — so iconography is treated as an ornamental layer, colored purple, never competing with the lime CTA for attention.

**Substitution (FLAGGED):** This system uses **[Lucide](https://lucide.dev/)** via CDN as the default icon set. Lucide's **2px stroke, square-terminal** style matches the technical/engineered feel of the wordmark. If SMART/EDGE has a proprietary icon set or uses a different library (Heroicons, Phosphor, Feather, custom SVGs), please provide it and it will be swapped in.

**Usage rules:**
- Default icon color: `var(--se-purple)` (#B19CD9).
- Inside a primary CTA: `var(--accent-ink)` (#1A1A1B) on a lime background.
- On dark surfaces: cream, or lime if it's indicating an action.
- Default stroke: **2px**. Default size: 20px inline, 24px standalone, 40px feature.
- **No emoji** in UI surfaces. Purple icon glyphs fill the decorative role.
- **No unicode** used as iconography (no `→` or `★` — use Lucide's `arrow-right`, `star`).
- The **3D SE monogram** (`assets/favicon-3d.webp`) is used **only** as a favicon / app icon / social avatar. It is not pulled into layouts as a decorative element.
- The **black** and **cream** wordmarks are the only logo lockups. They are never tinted, stretched, or used on lime.

**Logo clear-space:** minimum clear space equal to the height of the "S" cap on all sides. Minimum rendered width: 120px (web), 30mm (print).

---

## Accessibility checks

- Cream `#F9F8F3` on Almost-Black `#1A1A1B` — **17.6:1** — AAA.
- Azure `#0056B3` on Cream — **7.4:1** — AAA large, AA body.
- Almost-Black on Lime `#CCFF00` — **15.1:1** — AAA. *(Lime is always used with dark text, never cream.)*
- Purple `#B19CD9` on Cream — **2.1:1** — **decorative only**, never for body copy.

---

## Known substitutions — please confirm or replace

1. **Typography confirmed:** Barlow Condensed (headers) + Barlow (body). The wordmark itself remains the proprietary face shown in the supplied logo files.
2. **Icon set** — Lucide used as the default library. Swap if the brand has its own.
3. **No codebase or Figma** was provided; component styling is inferred from the brand rules. If a live site or Figma exists, share it and components will be pinned to the real source.
