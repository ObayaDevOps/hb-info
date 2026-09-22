# Humble Beeing — Design System & Brand Aesthetic Reference

> **How to use this document:** This is the canonical visual reference for Humble Beeing, an artisanal honey brand from Uganda (humblebeeing.com). Use its shared rules and the named page variants below when designing website pages, graphics, or social content. Do not invent new colors, fonts, or radii. Legacy code exceptions are called out explicitly; otherwise keep this guide and the live components in sync.

**Brand in one sentence:** Premium but friendly Ugandan honey — warm, natural, craft-focused, with a confident modern edge.

**Implementation snapshot:** Updated for the live site patterns introduced through 22 September 2026.

---

## 1. Brand Essence & Aesthetic Principles

1. **Warm honey palette on cream.** The world of the brand is amber, cream, and deep navy — never stark white, never cold gray backgrounds.
2. **Pills for primary controls.** Main CTAs, navigation, badges, and search inputs use `9999px` corners. Catalog-card actions are a deliberate rounded-rectangle variant.
3. **Ink borders where they define a surface.** The nav, primary cards, and target panels use bold `2px` near-black borders. Product-list cards use a lighter `1px` border; dark SDG panels have no outline. Avoid generic gray hairlines on feature surfaces.
4. **Inversion, not tinting.** Hover states swap foreground and background colors completely (dark button → amber button) rather than lightening or darkening.
5. **Subtle film grain.** A 5% opacity fractal-noise texture (multiply blend) sits over everything, giving a tactile, printed-paper warmth.
6. **Generous breathing room.** Sections get ~128px vertical padding. Content is centered in moderate containers (64–72rem), never edge-to-edge text.
7. **Soft, grounded motion.** Elements fade up gently (0.6s ease-out); cards lift slightly on hover. Nothing bounces, spins, or flashes.
8. **Photography-forward.** Real photos of bees, beekeepers, honey, and Ugandan landscapes carry the story. The landing page uses a full-height carousel; content pages use inset image heroes with dark scrims and rounded corners on all sides.

---

## 2. Color Palette

### Core brand triad (use these constantly)

| Token | Hex | Role |
|---|---|---|
| **Navy** (primary dark) | `#000819` | Footer & dark-section backgrounds, headings/body text on light, borders, focus outlines. A near-black with a blue undertone — the brand's "ink". |
| **Cream** (primary light) | `#FFF2D7` | Default page/section background, text on navy. Never use pure white `#FFFFFF` as a background. |
| **Amber / Honey** (accent) | `#f5cb81` | Signature accent: CTA buttons, badges, footer text on navy. The honey color — use it to draw the eye. |

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
| Side gradient plus bottom gradient (`.subpage-hero__shade`) | Shared inset hero: keeps left-aligned and bottom-aligned light text readable |
| `rgba(0,0,0,0.35)` flat overlay | Landing carousel slide darkening beneath the text |
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
| **Hanken Grotesk** | Primary visual voice for headings, page copy, cards, buttons, and navigation | 300–800 (use 400/500/600/700/800) |
| **Poppins** | Supporting labels and fallback; the site root currently defaults to Poppins where a component does not select Hanken | 300–700 |
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
| Shared subpage hero H1 | `clamp(2.5rem, 11vw, 4rem)` | `clamp(2.75rem, 5vw, 5rem)` | 1.04 | `-0.035em` |
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
- **Section padding:** horizontal `24px` mobile → `32px` desktop as a general baseline; major sections use roughly `80–128px` vertically. Follow each page recipe for exceptions.
- **Card grids:** usually three columns on desktop and one on mobile, with `20–32px` gaps. The landing product range is a 2×2 desktop grid and a mobile carousel.
- **Navigation clearance:** the desktop floating pill sits at `top: 32px`; non-hero pages clear it with about `112px` top padding. Hero pages place the navigation over the photo.

---

## 5. Component Recipes

### Buttons and card actions

Primary CTAs use the pill shape: `border-radius: 9999px`, about `40–44px` high, weight 700, and a fast color transition. Reserve the rectangular action for cards whose image and body already establish the rounded container.

| Variant | Default | Hover |
|---|---|---|
| **Dark pill** (primary) | bg `#09090b`, text `#f5cb81`, border `1px solid #09090b` | bg `#f5cb81`, text `#09090b` (full inversion) |
| **Amber pill** (secondary/CTA) | bg `#f5cb81`, text `#09090b` | bg `#09090b`, text `#f5cb81` |
| **Ghost amber** (on navy) | transparent, amber text/border | fill `rgba(245,203,129,0.12)` |
| **Catalog-card action** | full-width navy with card-cream text, `44px` minimum height, `8px` radius | Do not force the pill inversion onto this variant |

### Cards and panels

| Variant | Surface and border | Image and action |
|---|---|---|
| **StyledCard** | Card cream, `2px` navy border, `0.5rem` radius, shadowMd; may use `1rem` radius on the landing page | Full-width `4:3` image; card lift is `-6px` on hover |
| **Product-list card** | Light cream surface, `1px` navy border, `1rem` radius | Full-width `4:3` image; outlined cream action; subtle `-4px` hover lift where hover and motion are available |
| **Impact story card** | Card cream, `2px` navy border, `18px` radius | Documentary `4:3` photo bleeds to the top edge |
| **SDG panel** | Raised navy `#1A2234`, `18px` radius, **no tile border** | Official square goal image beside its explanation on wider screens |

Keep text in Hanken Grotesk. Use the borderless panel only within a dark section where contrast already defines the surface.

### Floating navigation pill

- Glass: bg `rgba(255,255,255,0.6)`, `backdrop-filter: blur(10px)`.
- Border `2px solid #09090b`, radius `9999px`, shadowMd. The full floating pill is centered at `top: 32px` on wide desktops (`≥1400px`); the compact drawer-and-logo pill carries the same treatment below that width.
- Links are small pills; hover shows a soft backdrop fading in (opacity 0 → 1).
- Dropdown panels: cream `#FFF2D7` bg, `2px solid #09090b` border, radius `1.5rem`, `32px` padding.
- The logo serves as the Home link. About and Products group their child pages; Wholesale and Recipes are distinct top-level destinations. Keep the compact drawer labels legible at their smaller scale.

### Footer

- Navy `#000819` background with **amber `#f5cb81` text throughout**.
- Rounded **top** corners `2rem` (the footer "rises" out of the cream page).
- Tall and statement-like (up to ~80vh) with a large weight-800 newsletter headline.
- Newsletter input: navy bg, `2px solid #f5cb81` border, `9999px` radius, amber text.
- A sitemap sits below the main footer content, separated by a fine amber rule and arranged in a responsive two-, three-, or four-column link grid.

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
| `2rem` | Big structural corners such as the footer top |
| `1.5rem` | Dropdown/menu panels |
| `24px` (`20px` mobile) | Inset subpage heroes, rounded on all four corners |
| `1rem` | Large image blocks, feature panels, product-list cards |
| `0.75rem` | Product thumbnails |
| `18px` | Impact story cards and borderless SDG panels |
| `8px` | Catalog-card actions and product-category links |
| `0.5rem` | Base StyledCard radius |
| `0.25–0.375rem` | Small inner elements |

---

## 6. Website Page Patterns

### Impact & Sustainability

- Use a cream page with a `72rem`-wide content frame: a two-column introduction, a prominent card-cream target panel, three photo-led story cards, a navy SDG section, an accountability list, and a navy closing CTA.
- Impact section headings use an editorial display scale (`clamp(2rem, 4vw, 3.5rem)`) with balanced wrapping, `1.13` line-height, and `-0.025em` tracking.
- The target panel uses a bold `2px` ink border and oversized number. Label **2,000 farmers** as a target, not an achieved total; do not style unverified figures as dashboard results.
- On screens at least `768px` wide, the SDG section is a split layout: introduction on the left (`1.4fr`) and the goal list on the right (`1.6fr`). The heading and explanation stick `112px` from the viewport top while the six goals scroll past, then release at the section boundary.
- SDG panels are borderless navy-on-navy surfaces, with `136px` square official images beside their text. Use Goals 1, 5, 8, 12, 13, and 15 and describe the relationship as alignment, without suggesting UN endorsement.
- Below `768px`, stack the introduction above the goals and remove sticky positioning. Goal images are `114px` at the smallest common mobile widths; the cards stack image and text only below `360px`.
- Accountability is one list of rows with amber numbered pills and navy dividers, not a dashboard of separate statistic tiles. End with a navy panel and pill-shaped partnership and contact links.

### Products, recipes, and process

- The landing page product range uses a 2×2, equal-height card grid on desktop and a one-card-at-a-time slider on mobile. Images fill each card's top at `4:3`; the full-width action sits at the bottom of the copy.
- The product index uses a sticky vertical category list from `1280px`, a horizontal scrolling category list from `768–1279px`, and a single-column flow on mobile. Product cards share the `4:3` image and outlined action pattern.
- The recipe index uses a photo hero, pill search field and tag filters, and a responsive recipe-card grid. Recipe images use the same catalog crop and action placement.
- Recipe detail pages use a two-column photo-and-summary opening, bordered pill tags, a card-cream ingredient panel, numbered navy method markers, and a navy related-honey callout. Collapse both content grids to one column on mobile.
- The process page uses documentary photos in a two-column stage grid, with `3:2` crops, `1.5rem` image corners, and a one-column mobile flow.

---

## 7. Imagery & Photography

**Subjects:** apiaries and hives, Ugandan beekeepers at work, macro honey textures (drips, combs, jars), Ugandan landscapes and flora. Warm natural light, golden-hour tones that harmonize with the amber/cream palette. Authentic and documentary in feel — real people and places, not sterile stock.

**Hero treatments:**

| Pattern | Composition |
|---|---|
| **Landing carousel** | Full viewport height, centered cover photos, a `35%` dark overlay, light foreground copy, slide dots, and a bordered marquee at the bottom. A stronger grain layer belongs to the carousel itself. |
| **Shared subpage hero** | Cover photo inside an inset frame (`8px` margin mobile, `12px` from `768px`), with `24px` corners (`20px` mobile), layered side-and-bottom shade, and left-aligned copy near the bottom. Height is `clamp(480px, 78svh, 820px)` on desktop and at least `max(520px, 72svh)` on mobile. |

Use the shared subpage hero for Products, Recipes, Our Story, Our Process, and Impact & Sustainability. The newer photo choices are raw honey jars for Products, the spicy peanut cucumber salad for Recipes (`/images/recipes/spicy-peanut-cucumber-salad.webp`), and the landing page's two women at an apiary for Impact. On Impact, position that portrait photo at `center 31%` on wider screens and `center 45%` on mobile so both people remain visible. Keep text legible over the photo and provide the scene's context in surrounding copy.

**Other image treatments:**

- **Catalog and recipe cards:** `4:3` cover crop across the full top edge, separated from the body by a navy rule; the card owns the corner radius.
- **Process photos:** `3:2` cover crop with `1.5rem` image corners.
- **Impact stories:** three documentary `4:3` crops above their text; the official SDG graphics remain square and use their original goal colors rather than a brand recolor.
- **Site grain:** the fixed `body::before` texture uses fractal noise at `opacity: 0.05` with `mix-blend-mode: multiply`. Keep it subtle outside the landing carousel.

**Logo:** black bee-mark SVG on light (cream/amber) backgrounds; use the cream/amber version on navy. Never place the logo on pure white or on busy photo areas without a scrim.

**Icons:** simple line icons (Lucide style), stroke-based, in navy on light or amber/cream on dark. No filled/duotone icon sets.

---

## 8. Motion

- **Entrance:** fade-up — opacity 0 → 1, translateY 24px → 0, duration `0.6s`, ease-out, triggered once when scrolled into view.
- **Buttons:** `all 150ms ease` color inversion.
- **Cards:** `translateY(-6px)` lift + shadow deepen over `0.25s ease`.
- **Landing hero:** cross-fade between photos over `1s`, advancing about every `6s`; keep manual dots and keyboard/touch navigation.
- Other motion remains calm: no bouncing or flashing. Respect reduced-motion preferences for optional card hover movement.

---

## 9. Social Media Adaptation

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
- Use the **2px navy border + rounded corners** for light feature cards. On navy, a borderless raised panel can read more clearly; follow the SDG treatment when appropriate.
- Apply the subtle grain texture (≈5% noise, multiply) for the tactile brand feel.
- Photos get the warm, golden-hour treatment; add the dark scrim whenever text sits on a photo.
- CTA buttons in graphics mirror the site: dark pill with amber text, or amber pill with black text.

**Do / Don't**
- ✅ Cream, navy, amber dominating every composition
- ✅ Pills, chunky borders, generous margins, one clear focal message
- ❌ No teal, no pure white backgrounds, no thin gray hairlines on feature elements
- ❌ No serif or script fonts, no drop shadows on text, no neon or cool-toned filters

---

## 10. Voice Snapshot (for captions & copy)

Warm, knowledgeable, and craft-obsessed — an expert beekeeper who loves explaining the "why" behind raw honey, with easy confidence and gentle humor. Plain-spoken and vivid rather than corporate; proud of Ugandan origin and the farmers behind every jar. Prefer questions and concrete sensory detail over hype. (Full editorial guide: `docs/blog-style-guide.md`.)

---

## Appendix: Source of Truth in the Codebase

This document is hand-distilled from the live code. If styles change, update this file. Key sources:

| File | Defines |
|---|---|
| `src/styles/base.css` | Reset, film grain, responsive utility ladder, button/card hover rules, breakpoints |
| `src/styles/fonts.js` + `src/pages/_app.js` | Font loading (next/font) and CSS variables |
| `src/components/sections/Section.jsx` | Container max-widths and section padding defaults |
| `src/components/sections/HeroSection.jsx` + `src/components/home/HeroCarousel.jsx` | Inset subpage hero and full-height landing carousel |
| `src/components/StyledCard.js` | Card recipe |
| `src/components/Navbar.js` | Floating and compact glass nav pills, dropdown panels, badges, shadowMd |
| `src/components/Footer.js` | Navy/amber footer, newsletter input, sitemap |
| `src/pages/hb-home.js` | Landing hero, product grid and mobile slider, pill buttons, shadowXl |
| `src/pages/impact-and-sustainability.js` | Impact page content, six SDGs, target and accountability sections |
| `src/pages/products/index.js` + `src/pages/recipes/index.js` + `src/pages/our-process.js` | Category navigation, recipe discovery, and process photography layouts |

Known code drift this document intentionally resolves: `#09090b` and `#000819` are used interchangeably in code (prefer navy `#000819`); legacy teal accents remain on the terms page and contact-form focus rings (deprecated); Geist and Space Mono are loaded but unused (do not use).
