# Humble Beeing — Design System & Brand Aesthetic Reference

> **How to use this document:** This is the canonical visual reference for Humble Beeing, an artisanal honey brand from Uganda (humblebeeing.com). Paste it into any AI chat or design tool to produce on-brand website pages, graphics, or social media content. Treat every token here as authoritative — do not invent new colors, fonts, or radii. Where the live codebase drifts from this document, this document wins.

**Brand in one sentence:** Premium but friendly Ugandan honey — warm, natural, craft-focused, with a confident modern edge.

---

## 1. Brand Essence & Aesthetic Principles

1. **Warm honey palette on cream.** The world of the brand is amber, cream, and deep navy — never stark white, never cold gray backgrounds.
2. **Everything is a pill.** Buttons, nav, badges, and inputs use fully-rounded `9999px` corners. Pill geometry is the single most recognizable shape motif.
3. **Chunky ink borders.** Key surfaces (cards, nav, dropdown panels) carry bold `2px` solid near-black borders — a hand-drawn, label-on-a-jar feel. Never thin 1px gray hairlines on major elements.
4. **Inversion, not tinting.** Hover states swap foreground and background colors completely (dark button → amber button) rather than lightening or darkening.
5. **Subtle film grain.** A 5% opacity fractal-noise texture (multiply blend) sits over everything, giving a tactile, printed-paper warmth.
6. **Generous breathing room.** Sections get ~128px vertical padding. Content is centered in moderate containers (64–72rem), never edge-to-edge text.
7. **Soft, grounded motion.** Elements fade up gently (0.6s ease-out); cards lift slightly on hover. Nothing bounces, spins, or flashes.
8. **Photography-forward.** Real photos of bees, beekeepers, honey, and Ugandan landscapes carry the story; heroes are full-bleed images with dark scrims and rounded bottom corners.

---

## 2. Color Palette

### Core brand triad (use these constantly)

| Token | Hex | Role |
|---|---|---|
| **Navy** (primary dark) | `#000819` | Footer & dark-section backgrounds, headings/body text on light, borders, focus outlines. A near-black with a blue undertone — the brand's "ink". |
| **Cream** (primary light) | `#FFF2D7` | Default page/section background, text on navy. Never use pure white `#FFFFFF` as a background. |
| **Amber / Honey** (accent) | `#f5cb81` | Signature accent: CTA buttons, badges, footer text on navy, outer page frame. The honey color — use it to draw the eye. |

### Supporting colors

| Token | Hex | Role |
|---|---|---|
| Near-black | `#09090b` | Button backgrounds, borders, UI text. Visually interchangeable with navy; prefer **navy `#000819`** in new work. |
| Card cream | `#fff7e1` | Card surfaces (slightly lighter than page cream, so cards read as raised). |
| Panel navy | `#1A2234` | Raised panels/cards on navy backgrounds. |
| Caramel | `#c77b30` | Warm accent — deep honey tone for highlights, illustration, gradients. |
| Brown | `#8a5420` | Darkest honey tone — small accents, illustration depth. |
| Muted text | `rgba(9, 9, 11, 0.75)` | Secondary/body text on light backgrounds. |
| Zinc grays | `#f4f4f5` `#e4e4e7` `#d4d4d8` `#a1a1aa` `#71717a` `#52525b` | Subtle borders, dividers, muted UI text only — never as feature colors. |
| Error red | `#ef4444` | Form validation errors. |
| Success green | `#4ade80` | Success toasts/confirmation. |

### Approved color pairings

- Navy text on cream — default reading experience
- Amber text/accents on navy — the signature high-contrast statement look (footer, dark sections)
- Cream text on navy — body copy in dark sections
- Near-black text on amber — buttons and badges
- Amber text on near-black — primary dark button

### Overlays & scrims

| Recipe | Use |
|---|---|
| `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.5))` | Hero photo scrim (top-to-bottom) so light text stays readable |
| `rgba(0,0,0,0.35)` flat overlay | Alternative photo darkening |
| `rgba(255,255,255,0.6)` + `backdrop-filter: blur(10px)` | Glass surfaces (floating nav pill) |
| `rgba(245,203,129,0.12)` | Ghost-amber hover fill on dark surfaces |

### ⛔ Deprecated — do not use

- **Teal family** (`#00DEE3`, `#00E2E5`, `#D2FAFB`, `#5eead4`, `#99f6e4`) — legacy accent from an older design language. Do not use in any new page or social content.
- Pure white `#FFFFFF` backgrounds — always use cream `#FFF2D7` or card cream `#fff7e1`.

---

## 3. Typography

### Fonts (all on Google Fonts)

| Font | Role | Weights |
|---|---|---|
| **Hanken Grotesk** | Primary — headings, body, buttons, nav, everything by default | 300–800 (use 400/500/600/700/800) |
| **Poppins** | Secondary — badges, occasional UI labels; acceptable fallback where Hanken Grotesk is unavailable | 300–700 |
| **Unbounded** | Optional display accent — sparingly, for special statement graphics only | 300–700 |

Fallback stack: `'Hanken Grotesk', Poppins, ui-sans-serif, system-ui, sans-serif`.
Do **not** use Geist, Space Mono, or serif faces — they are not part of the brand.

### Weight conventions

| Weight | Use |
|---|---|
| 400 | Body copy |
| 500 | Meta text, captions, secondary labels |
| 600 | Headings, nav links, card titles |
| 700 | Buttons, emphasis, badges |
| 800 | Big brand statements (footer headline, hero taglines) |

### Type scale (rem-based, responsive: mobile → desktop)

| Style | Mobile | Desktop (≥768px) | Line-height | Letter-spacing |
|---|---|---|---|---|
| Hero / display H1 | 2.25rem (36px) | 4.5rem (72px) | ~1.2 | `-0.025em` |
| Statement heading | 1.875rem (30px) | 3.75rem (60px) | ~1.25 | `-0.025em` |
| Section heading (H2) | 1.875rem (30px) | 2.25–2.75rem | ~1.2 | normal |
| Subsection heading (H3) | 1.25rem (20px) | 1.875rem (30px) | ~1.3 | normal |
| Body large / lede | 1.125rem (18px) | 1.25rem (20px) | 1.5–1.55 | normal |
| Body base | 1rem (16px) | 1.125rem (18px) | 1.5 | normal |
| Small / meta | 0.875rem (14px) | 0.875rem | 1.4 | normal |
| Caption | 0.75–0.8rem | 0.75–0.8rem | 1.4 | normal |
| Eyebrow / badge label | 0.75–0.875rem | same | 1.2 | `0.08em`, **UPPERCASE** |

Rules of thumb:
- Negative tracking (`-0.025em`) only on large display headings.
- Wide tracking + uppercase only on tiny eyebrow/badge labels ("BEST SELLER").
- Base body line-height is 1.5; display headings tighten toward 1.2.

---

## 4. Layout & Spacing

### Breakpoints

| Name | Min-width |
|---|---|
| sm | 480px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

### Containers

- **Default content width:** `64rem` (1024px), centered with auto margins.
- **Wide sections (most common):** `72rem` (1152px).
- **Max frame (footer, full-width bands):** `90rem` (1440px).
- **Narrow prose (long-form text):** `42rem` (672px).

### Spacing

- Base unit: **4px**. Common steps: 8 / 12 / 16 / 24 / 32 / 48 / 64px.
- **Section padding:** horizontal `24px` mobile → `32px` desktop; vertical **`128px`** — sections breathe generously.
- Card grids: `repeat(3, 1fr)` on desktop collapsing to 1 column on mobile, with 24–32px gaps.
- Fixed floating nav sits at `top: 32px`; page content below heroes clears it with ~112px top padding.

---

## 5. Component Recipes

### Buttons (pills)

All buttons: `border-radius: 9999px`, height `40px`, font-weight 700, font-size `0.875rem`, padding ~`0 20px`, `transition: all 150ms ease`.

| Variant | Default | Hover |
|---|---|---|
| **Dark pill** (primary) | bg `#09090b`, text `#f5cb81`, border `1px solid #09090b` | bg `#f5cb81`, text `#09090b` (full inversion) |
| **Amber pill** (secondary/CTA) | bg `#f5cb81`, text `#09090b` | bg `#09090b`, text `#f5cb81` |
| **Ghost amber** (on navy) | transparent, amber text/border | fill `rgba(245,203,129,0.12)` |

### Cards

- Background `#fff7e1`, border `2px solid #000819`, radius `0.5rem`, overflow hidden.
- Shadow: `0px 4px 8px rgba(24,24,27,0.1), 0px 0px 1px rgba(24,24,27,0.3)` (call this **shadowMd**).
- Hover: lift `translateY(-6px)` with heavier shadow, `0.25s ease`.
- Card typography in Hanken Grotesk; imagery bleeds to the card edge at the top.

### Floating navigation pill

- Glass: bg `rgba(255,255,255,0.6)`, `backdrop-filter: blur(10px)`.
- Border `2px solid #09090b`, radius `9999px`, shadowMd, fixed at `top: 32px`, centered.
- Links are small pills; hover shows a soft backdrop fading in (opacity 0 → 1).
- Dropdown panels: cream `#FFF2D7` bg, `2px solid #09090b` border, radius `1.5rem`, `32px` padding.

### Footer

- Navy `#000819` background with **amber `#f5cb81` text throughout**.
- Rounded **top** corners `2rem` (the footer "rises" out of the cream page).
- Tall and statement-like (up to ~80vh) with a large weight-800 newsletter headline.
- Newsletter input: navy bg, `2px solid #f5cb81` border, `9999px` radius, amber text.

### Badges / eyebrows

- Amber pill (`#f5cb81` bg, near-black text), radius `9999px`, uppercase, letter-spacing `0.08em`, weight 600–700, ~0.75rem.

### Shadows

| Token | Value |
|---|---|
| shadowMd | `0px 4px 8px rgba(24,24,27,0.1), 0px 0px 1px rgba(24,24,27,0.3)` |
| shadowXl | `0px 16px 24px rgba(24,24,27,0.1), 0px 0px 1px rgba(24,24,27,0.3)` |

### Border-radius scale

| Radius | Use |
|---|---|
| `9999px` | Pills: buttons, nav, badges, inputs (dominant motif) |
| `2rem` | Big structural corners: footer top, hero bottom |
| `1.5rem` | Dropdown/menu panels |
| `1rem` | Large image blocks, feature panels |
| `0.75rem` | Product thumbnails |
| `0.5rem` | Cards |
| `0.25–0.375rem` | Small inner elements |

---

## 6. Imagery & Photography

**Subjects:** apiaries and hives, Ugandan beekeepers at work, macro honey textures (drips, combs, jars), Ugandan landscapes and flora. Warm natural light, golden-hour tones that harmonize with the amber/cream palette. Authentic and documentary in feel — real people and places, not sterile stock.

**Treatments:**
- **Heroes:** full-bleed cover images with the dark gradient scrim (`rgba(0,0,0,0.05) → rgba(0,0,0,0.5)`), light (cream/white) display text on top, rounded **bottom** corners `2rem`.
- **Product/thumbnail crops:** `4:3` aspect ratio, `object-fit: cover`, radius `0.75rem`, optional hairline border `1px rgba(9,9,11,0.15)`.
- **Film grain:** overlay the whole composition with fractal noise at `opacity 0.05`, `mix-blend-mode: multiply` (in CSS: an inline SVG `feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'` tile). Subtle — texture you feel more than see.

**Logo:** black bee-mark SVG on light (cream/amber) backgrounds; use the cream/amber version on navy. Never place the logo on pure white or on busy photo areas without a scrim.

**Icons:** simple line icons (Lucide style), stroke-based, in navy on light or amber/cream on dark. No filled/duotone icon sets.

---

## 7. Motion

- **Entrance:** fade-up — opacity 0 → 1, translateY 24px → 0, duration `0.6s`, ease-out, triggered once when scrolled into view.
- **Buttons:** `all 150ms ease` color inversion.
- **Cards:** `translateY(-6px)` lift + shadow deepen over `0.25s ease`.
- Nothing loops, bounces, or autoplays aggressively. Motion is calm and grounded.

---

## 8. Social Media Adaptation

Translate the same system to Instagram/Facebook/X/TikTok graphics:

**Backgrounds by purpose**

| Purpose | Background | Text |
|---|---|---|
| Default / educational posts | Cream `#FFF2D7` | Navy `#000819` |
| Bold statements, quotes, brand moments | Navy `#000819` | Amber `#f5cb81` (headline) + cream (body) |
| Promos, product pushes, sale badges | Amber `#f5cb81` | Near-black `#09090b` |

**Rules**
- Headlines in **Hanken Grotesk 700/800**, tight tracking on big text (`-0.025em`); body in 400/500. Use Poppins only if Hanken Grotesk is unavailable in the tool.
- Reuse the **pill badge** motif for labels ("100% RAW", "NEW HARVEST"): amber pill, uppercase, letterspaced.
- Frame photos or panels with the **2px navy border + rounded corners** (0.75–1.5rem) card language.
- Apply the subtle grain texture (≈5% noise, multiply) for the tactile brand feel.
- Photos get the warm, golden-hour treatment; add the dark scrim whenever text sits on a photo.
- CTA buttons in graphics mirror the site: dark pill with amber text, or amber pill with black text.

**Do / Don't**
- ✅ Cream, navy, amber dominating every composition
- ✅ Pills, chunky borders, generous margins, one clear focal message
- ❌ No teal, no pure white backgrounds, no thin gray hairlines on feature elements
- ❌ No serif or script fonts, no drop shadows on text, no neon or cool-toned filters

---

## 9. Voice Snapshot (for captions & copy)

Warm, knowledgeable, and craft-obsessed — an expert beekeeper who loves explaining the "why" behind raw honey, with easy confidence and gentle humor. Plain-spoken and vivid rather than corporate; proud of Ugandan origin and the farmers behind every jar. Prefer questions and concrete sensory detail over hype. (Full editorial guide: `docs/blog-style-guide.md`.)

---

## Appendix: Source of Truth in the Codebase

This document is hand-distilled from the live code. If styles change, update this file. Key sources:

| File | Defines |
|---|---|
| `src/styles/base.css` | Reset, film grain, responsive utility ladder, button/card hover rules, breakpoints |
| `src/styles/fonts.js` + `src/pages/_app.js` | Font loading (next/font) and CSS variables |
| `src/components/sections/Section.jsx` | Container max-widths and section padding defaults |
| `src/components/sections/HeroSection.jsx` | Hero image treatment and display type scale |
| `src/components/StyledCard.js` | Card recipe |
| `src/components/Navbar.js` | Floating glass nav pill, dropdown panels, badges, shadowMd |
| `src/components/Footer.js` | Navy/amber footer, newsletter input |
| `src/pages/hb-home.js` (~lines 42–67) | Pill button constants, shadowXl |

Known code drift this document intentionally resolves: `#09090b` and `#000819` are used interchangeably in code (prefer navy `#000819`); legacy teal accents remain on the terms page and contact-form focus rings (deprecated); Geist and Space Mono are loaded but unused (do not use).
