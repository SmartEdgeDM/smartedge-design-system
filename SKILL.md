---
name: smartedge-design
description: Use this skill to generate well-branded interfaces and assets for SMART/EDGE Digital Marketing, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/`, `preview/`).

SMART/EDGE is a digital-marketing studio. The tone is *Strategic, Result-Oriented, Technically Proficient* — voice the copy in second-person, name outcomes first, and keep sentences short. The visual language is high-contrast minimalism: cream and almost-black do 90% of the work, Royal Azure Blue handles H2/H3 and links, and **Cyber Lime (#CCFF00) is a scarcity token reserved for CTAs and the `/` in the logo only**. Light Purple is for icons and decorative ornament.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Link `colors_and_type.css` from each HTML file to get all brand tokens for free. If working on production code, use `colors_and_type.css` as the source of truth — every color, type size, radius, and shadow in the brand is tokenized there.

If the user invokes this skill without any other guidance, ask them what they want to build or design (website section, landing page, slide deck, ad creative, etc.), ask a few clarifying questions (audience, length, variations), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Hard rules (derived from the brand):**
- Never use Cyber Lime for decoration — CTAs and the logo slash only.
- No gradients (the 3D favicon monogram is the one exception — and it's only a favicon).
- No emoji. Use Lucide icons in Light Purple for the decorative role.
- Headings use Barlow Condensed (tall narrow). Body uses Barlow. Both via Google Fonts.
- The signature CTA is a lime-filled button with a `0 6px 0 0 var(--se-black)` hard-offset shadow — looks like a stamped tile.
- Corner radii stay tight (2–12px). No bubbly cards.
- No colored left-border card accents. No dashed borders. No parallax. No bounces.
