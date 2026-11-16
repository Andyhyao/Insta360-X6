# Insta360 X6 — Landing Page Design Spec

Version 1.0 · November 2026 · Dark theme only

Concept redesign of the Insta360 X6 product page. This spec documents the shipped
build: every value below comes from the code, not from intentions. The visual
companions are the three design-system artboards on the canvas — **Foundations**,
**Type & Layout** and **Components & Rules**.

| | |
|---|---|
| Live site | https://insta360-x6.vercel.app |
| Repository | https://github.com/Andyhyao/Insta360-X6 |
| Stack | React 19 · Vite 8 · Tailwind CSS 4 (theme + utilities only) · Framer Motion (`LazyMotion`) |
| Styles | `src/styles.css` (design system) · `src/index.css` (Tailwind layers) |
| Motion | `src/motion.jsx` (shared components and variants) |
| Sections | `src/sections/*.jsx`, composed in `src/App.jsx` |

---

## 1. Principles

1. **Photography leads, interface frames.** Dark, low-chroma neutrals let product and
   landscape images carry the page. The UI behaves like a camera viewfinder: corner
   brackets, mono readouts, a red REC dot.
2. **One accent, one meaning.** Electric blue `#1F6BFF` marks what you can act on and
   what is live — never decoration, never body text.
3. **Statement, then payoff.** Every headline pairs a white phrase with a muted one.
4. **Motion arrives once.** Elements enter a single time on one easing curve with a short
   stagger, then stay still. Scroll drives only three things: hero parallax, the 360°
   ring and the closing banner zoom.
5. **Accessible by default.** 44px targets, a visible focus ring everywhere, AA contrast
   on every text colour, and a complete reduced-motion path.

---

## 2. Colour

There are no CSS custom properties yet; colours are written as literal values in
`src/styles.css` and in inline styles. The token names below are the canonical names to
use when they are extracted (see §12).

### 2.1 Core

| Token | Value | Use |
|---|---|---|
| `bg/ground` | `#05070B` | Page background, sections, nav base. Base for all contrast checks. |
| `bg/surface` | `#0B1018` | Cards, panels, accessory tiles |
| `accent/primary` | `#1F6BFF` | Primary button, active states, dots, eyebrow dot, glows. White on accent = 4.6:1 |
| `signal/rec` | `#FF453A` | REC indicator only |

`ACCENT` is also exported from `src/motion.jsx` for components that set colour in JS.

### 2.2 Text ramp (contrast measured on `#05070B`)

| Token | Value | Contrast | Use |
|---|---|---|---|
| `text/headline` | `#F5F7FA` | 18.8:1 AAA | Headlines, card titles |
| `text/body` | `#F2F4F7` | 18.3:1 AAA | Body copy, list items |
| `text/cta-sub` | `#E3E8EF` | 16.4:1 AAA | Closing banner subtitle |
| `text/card` | `#C9D0DA` | 13.0:1 AAA | Card descriptions |
| `text/nav` | `#C3CAD4` | 12.2:1 AAA | Nav and footer links |
| `text/lead` | `#B3BCC8` | 10.5:1 AAA | Section lead paragraphs |
| `text/meta` | `#A9B2BF` | 9.4:1 AAA | Eyebrows, spec notes |
| `text/label` | `#8B95A3` | 6.6:1 AA | Mono labels, table heads |
| `text/headline-muted` | `#7F8B9D` | 5.8:1 AA | Second phrase of headlines |

### 2.3 Lines and overlays

| Token | Value | Use |
|---|---|---|
| `line/hairline` | `rgba(255,255,255,.07)` | Table rows, nav bottom border |
| `line/divider` | `rgba(255,255,255,.14)` | Table heads, HUD frame |
| `line/card` | `rgba(190,215,255,.16)` | Card border at rest |
| `line/card-hover` | `rgba(190,215,255,.40)` | Card border on hover |
| `overlay/frosted` | `rgba(5,7,11,.78)` + `backdrop-filter: blur(16px)` | Desktop nav after 40px scroll |
| `overlay/frosted-solid` | `rgba(5,7,11,.84)` + blur 16 | Sticky nav ≤1180 |
| `overlay/scrim` | `#05070B` → transparent gradients | Any text over photography |

---

## 3. Typography

### 3.1 Families

Loaded from Google Fonts in `index.html` with `display=swap`.

| Family | Weights | Role |
|---|---|---|
| **Archivo** | 400–700 | Everything people read: display, headings, body, buttons |
| **JetBrains Mono** | 400, 500, 600 | The camera-HUD voice: eyebrows, labels, chips, counters, readouts |
| **Kaushan Script** | 400 | Accent lettering — closing banner only, once per page |

### 3.2 Scale

Only the hero headline, section titles and the script scale with the viewport; every
other style is fixed. Hierarchy comes from weight, colour and the mono voice, not from
many sizes.

| Token | Desktop 1440 | Tablet 768 | Phone 375 | Rule | Weight · line height · tracking |
|---|---|---|---|---|---|
| `display/h1` | 64 | 40 | 40 | `clamp(40px, 5vw, 64px)` | 700 · 1.02 · −0.028em |
| `heading/h2` | 52 | 34 | 34 | `clamp(34px, 4vw, 52px)` | 700 · 1.05 · −0.028em |
| `script/accent` | 58 | 48 | 42 | 58 → 48 at ≤1180 → 42 at ≤900 | 400 · 1.08 · rotated −9° (−6° ≤1180) |
| `heading/card-l` | 30 | 30 | 30 | fixed | 700 · 1.08 · −0.02em |
| `heading/card-m` | 26 | 26 | 26 | fixed | 700 · 1.10 · −0.02em |
| `heading/card-s` | 22 | 22 | 22 | fixed | 700 · 1.15 · −0.02em |
| `stat` | 30 | 30 | 30 | fixed | 700 · tabular figures · −0.01em |
| `body/lead` | 18 | 18 | 18 | fixed | 400 · 1.6 |
| `body/m` | 16 | 16 | 16 | fixed | 400 · 1.5 |
| `body/s` | 14–15 | 14–15 | 14–15 | fixed | 400 · 1.5 |
| `mono/eyebrow` | 12 | 12 | 12 | fixed | 500 · 0.18em · caps |
| `mono/label` | 11 | 11 | 11 | fixed | 400 · 0.16em · caps |
| `mono/hud` | 9–10 | 9–10 | 9–10 | fixed | 400 · 0.12em · caps |

### 3.3 Headline pattern

- Two phrases: the first in `text/headline` states the product, the second in
  `text/headline-muted` lands the benefit. Each ends with a full stop.
  *One Camera. Every Angle.*
- Each phrase is an `inline-block`, so lines only break **between** phrases — never
  inside one ("Frame / Later." is a bug).
- Every heading renders through `StaggerText` (word-by-word reveal) and carries an
  `aria-label` with the full sentence.

### 3.4 Line length

| Context | Max width | ≈ characters |
|---|---|---|
| Hero copy | 500px | 55 |
| Section lead | 600px | 65 |
| Card text column | 240–300px | 28–34 |

---

## 4. Spacing and layout

### 4.1 Spacing scale

A loose 4px base with deliberate jumps:

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 44 · 56 · 72 · 80 · 96`

| Value | Where |
|---|---|
| 4–8 | Icon gaps, chip padding |
| 12 | Phone swipe-row gap, list gaps |
| 16 / 20 / 24 | Grid gaps: tablet / four-up / three-up |
| 32 / 40 / 56 | Section header → content: phone / ≤900 / desktop |
| 44 | Minimum tap target |
| 72 / 56 | Section vertical padding: desktop / ≤900 |
| 80 | Desktop page gutter |
| 96 | Closing banner padding |

### 4.2 Page grid

- Frame max **1440px**, centred. Content column **1280px** inside **80px** gutters.
- Gutters step down to **24px** at ≤1180 and **20px** at ≤560. The nav uses its own
  inset: 56px desktop, 24px tablet, 20px phone.
- Grids use `repeat(n, minmax(0, 1fr))` so long words can't push a column wider.
- Full-bleed photography ignores gutters; text never does.

| Grid | Columns · gap | Used by |
|---|---|---|
| 3-up | 3 × 1fr · 24 | Core Features, AI Powered, Built to Explore |
| 4-up | 4 × 1fr · 20 | Creative Playground |
| 3-up × 2 rows | 3 × 1fr · 20 | Made for Every Direction |
| 2 panels | 1.38fr / 1fr · 20 | Why X6 (spec table / accessories) |
| 5-up | 5 × 1fr, hairline dividers | Spec strip |

### 4.3 Section header anatomy

Centred, max width 760–1200px:

```
EYEBROW   mono 12 · accent dot + "NN / LABEL"
  ↕ 22px
H2        white phrase + muted phrase
  ↕ 20px
LEAD      18 / 1.6 · max 600px
  ↕ 56px (40 at ≤900, 32 on phones)
CONTENT   cards / ring / table
```

### 4.4 Breakpoints

| Width | What changes |
|---|---|
| > 1180 | Desktop: fixed frosted nav, hero copy left with product + HUD right |
| ≤ 1180 | Sticky nav with menu button; hero stacks photo above copy; HUD hidden; 2-up grids |
| ≤ 900 | Single-column cards; 56px section padding; header-to-content 40px |
| ≤ 760 | 360° ring scales to 55% |
| ≤ 700 | Why X6 spec table stacks under its photo |
| ≤ 560 | Phone: card grids become swipe rows with dots |
| ≤ 480 | Ring scales to 42% |

### 4.5 Measured page heights

| | Desktop 1440 | Tablet 768 | Phone 375 |
|---|---|---|---|
| Total | 6,996px | 9,977px | 7,744px |

Tablet is the longest layout because cards stack one per row; phones win the height back
with swipe rows.

---

## 5. Shape and elevation

### 5.1 Radius

| Value | Name | Use |
|---|---|---|
| 999px | Pill | Buttons, chips, nav Buy Now |
| 16px | Card | Cards, panels, spec box |
| 12px | Tile | Accessory tiles |
| 10px | Panel | 360° ring panels |
| 8px | Thumb | Collage thumbnails |
| 4px | Badge | X6 wordmark badge |
| 50% | Round | Dots, icon buttons, step markers |

### 5.2 Elevation

Depth comes from deep shadows and accent glow, never from lighter surfaces.

| Token | Value | Use |
|---|---|---|
| `elev/card-hover` | `0 24px 60px rgba(0,0,0,.45)` | Cards on hover |
| `elev/menu` | `0 30px 60px rgba(0,0,0,.55)` | Phone menu panel |
| `glow/accent` | `0 0 10px #1F6BFF` | Eyebrow dot, active dot, CTA hover |
| `glow/live` | `0 0 0 1px #1F6BFF, 0 0 36px #1F6BFF` + 1.5px white border | Live 360° panel, Highlight thumbnail |

---

## 6. Components

All interactive components: minimum **44px** tall, white focus ring (§9).

### 6.1 Buttons

| Component | Spec | States | Use |
|---|---|---|---|
| **Primary pill** | 54 tall · padding 0 28 · `accent/primary` fill · 16/600 white · arrow 18 | Hover scale 1.03 + `0 12px 40px` accent glow · pressed scale 0.97 | One per view. Buy Now only. |
| **Nav pill** | 44 tall · padding 0 20 · 14/600 | Same | Buy Now in the nav, always visible |
| **Secondary pill** | 54 tall · 1px white 16% border · 40px icon well (white 10%) | Hover scale 1.03, border 40% | Supporting media action ("Watch the film"). Currently hidden: `SHOW_FILM_BUTTON` in `Hero.jsx` |
| **Text link** | min 44 tall · 15/600 white · accent arrow 16 | Arrow nudges 3px on hover | "Learn more" in cards and CTAs |
| **Round button** | 44 × 44 · 1px white 30% · `rgba(5,7,11,.25)` fill | Hover border white + fill white 12% | Card arrow, menu toggle |

### 6.2 Navigation

- **Desktop bar:** 76 tall, fixed. Transparent at the top; `overlay/frosted` after 40px of
  scroll (0.4s transition). Active link white with a 2px accent underline; others
  `text/nav`. Anchors scroll with `scroll-margin-top: 76px`.
- **Tablet/phone bar (≤1180):** 68 tall, sticky, always frosted. Links and Compare hide;
  a 44px round menu button appears.
- **Menu panel:** full width under the bar, `rgba(5,7,11,.97)`, `elev/menu`. Links are
  56 tall, 20/600, with a mono section number on the right, plus a full-width Buy Now.
  - Burger morphs to ✕ (0.3s); links slide in with a 0.05s stagger.
  - Opening focuses the first link; **Escape** closes and returns focus to the button;
    choosing a link closes the menu.
  - `aria-expanded`, `aria-controls` and a "Open menu / Close menu" label.

### 6.3 Labels

| Component | Spec | Rule |
|---|---|---|
| **Eyebrow** | 8px accent dot with glow + `NN / LABEL`, mono 12/500, 0.18em | One per section, centred above the H2 |
| **Chip** | Mono 11, 0.16em, caps · padding 5 9 · pill · 1px white 30% · `rgba(5,7,11,.3)` | Top-right of a card; max one per card |
| **Counter** | Mono 11 white, `01 / 03` | Top-left of a card; total matches the row |
| **Stat** | Mono label 11 · value 30/700 tabular · note 14 | Spec strip; value counts up on enter (`CountUp`) |

### 6.4 Cards

One photo-card structure covers every grid; variants change height and text size, never
the structure. Shared: radius 16, `line/card` border, `bg/surface`.

| Variant | Size (desktop) | Build |
|---|---|---|
| **Feature card** | 410 × 460 (420 ≤1180, 380 ≤900) | Full-bleed photo · scrim 35% top → clear → 88% bottom · counter + chip inset 20/22 · title 30 + body 16 inset 24/26 · 44px round arrow |
| **Split card** | 410 × 300 (400 on phone) | Text column max 240, inset 28/26/18 · 16:9 image anchored right, masked in from 0 → 34% · Learn more link |
| **Media card** | 305 × ~302 | 220px media (240 on phone) fading into the panel · title 22 + body 15, inset 2/22/24 |
| **Scene card** | 413 × 248 (232 on phone) | Feature-card build at a third of the height · counter + title 22 + one line of body |

- **Entrance:** y 56 → 0, scale 0.96 → 1, 1.0s; siblings stagger 0.10s.
- **Hover (mouse only):** lift −6px, `elev/card-hover`, border to `line/card-hover`,
  image scale 1.045 over 1.2s, 3D tilt up to ±3.5° following the pointer
  (spring 220 / 22).
- Implemented by `MotionCard` in `src/motion.jsx`.

### 6.5 Data display

- **Spec table:** a real `<table>` with a visually hidden `<caption>`, `th scope="row"`.
  14px; labels `text/meta`, values `text/body` 500. Hairline rows; head row uses
  `line/divider`. Rows slide in (x −12 → 0, 0.6s, stagger 0.05s).
- **Icon list:** 34px ring (1px white 28%) with a 16px line icon + label 15, gap 12. A
  46px ring variant pairs with a stat.
- **Accessory tile:** radius 12, 1px `rgba(190,215,255,.12)`, white 2.5% fill. Line-art
  illustration with accent details over a soft radial glow; label 14/500. Rows are
  equal height (`grid-auto-rows: 1fr`).

### 6.6 Interactive controls

- **Swipe row + dots (phones ≤560):** cards `min(320px, 84vw)` wide, 12px gap,
  `scroll-snap-type: x mandatory`, the next card peeks in. Dots sit below: active
  20 × 6 accent with glow, idle 6 × 6 white 32%, each in a 28 × 44 button with
  `aria-current` and "Show card n of N". Dots track scroll position; tapping one
  scrolls smoothly to its card. Implemented by `Carousel`.
- **360° stepper:** five buttons (0°, 90°, 180°, 270°, 360°), 44 tall, joined by a 1px
  line. Active: 14px accent ring with a white centre, 4px accent halo, white 600 label;
  `aria-pressed`. Scrolling the section scrubs the ring 0 → 360° (spring 90 / 24); a
  click scrolls to that angle. Under reduced motion the ring ignores scroll and the
  buttons switch the view in place. The stepper sits on the right on desktop and below
  the ring at ≤1180.
- **Viewfinder frame:** four 2px white corner brackets, mono readouts
  (`8K · 360°`, `REC 00:12:48:06`, `YAW 212°`), red REC dot blinking every 1.6s, and an
  accent compass marker. The AI-tracking box uses the same brackets plus an
  "AI TRACKING" label with an accent dot. Always `aria-hidden`.

---

## 7. Iconography

- Line icons on a 24px grid, stroke 1.6–2.2, round caps and joins, `currentColor`.
- Inline SVG only; no icon font, no emoji.
- Icons inside buttons are `aria-hidden`; the button carries the label.
- The same stroke system draws the accessory illustrations and the HUD, so interface and
  viewfinder read as one instrument.

---

## 8. Motion

### 8.1 Easing

One curve for every entrance and hover: **`cubic-bezier(0.22, 1, 0.36, 1)`**, a fast
start that settles softly (`EASE` in `src/motion.jsx`).

### 8.2 Motion tokens

| Name | Duration | Stagger / spring | Detail |
|---|---|---|---|
| Word reveal | 0.90s | 0.07s per word | Rises from 110% inside a mask, blur 8px → 0 (`StaggerText`) |
| Fade up | 0.90s | 0.12s | y 28 → 0 (`fadeUp`, `group`) |
| Card in | 1.00s | 0.10s | y 56 → 0, scale 0.96 → 1 |
| Row in | 0.60s | 0.05s | x −12 → 0 (`rows`, `rowIn`) |
| Hover lift | 0.40s | spring 220 / 22 | y −6, tilt ±3.5° (mouse only) |
| Count up | 1.60s | on enter | 0 → value, tabular figures (`CountUp`) |
| Hero intro | 1.60s | copy from 0.15s | Photo scale 1.12 → 1; HUD corners snap in at 0.9s + 0.08s each |
| Menu | 0.35s | 0.05s | Panel y −12 → 0; links x −16 → 0 |
| Ring scrub | scroll-linked | spring 90 / 24 | 360° ring turns across the section |
| Hero parallax | scroll-linked | — | Photo scale 1 → 1.12, y 0 → 8%; copy y 0 → −90, fades out |
| Closing zoom | scroll-linked | — | Banner photo scale 1.14 → 1; script wipes in left → right (1.6s) |

Entrances trigger once (`viewport: { once: true }`) when 20–60% of the element is visible.

### 8.3 Reduced motion

`MotionConfig reducedMotion="user"` honours the OS setting site-wide:

- Transforms are dropped; opacity fades remain.
- Hero parallax, closing zoom and the ring scrub stop; the stepper switches the ring in place.
- Count-ups show their final value; the REC blink stops; smooth scrolling is disabled.
- Card hover lift and tilt are disabled.

---

## 9. Accessibility

- **Contrast:** every text colour passes AA on `#05070B` (§2.2). Text over photos sits on
  a scrim.
- **Focus:** `a:focus-visible, button:focus-visible` → 2px solid white outline, 3px
  offset. Carousel dots use a −4px inset ring. Outlines are never removed.
- **Targets:** every link and button is at least 44px tall; dots use 28 × 44 hit areas.
- **Landmarks:** `header` (nav), `main` (all sections), `footer`. Each section has an `id`
  and is labelled by its H2.
- **Headings:** one `h1` (hero), then `h2` per section and `h3` per card.
- **Images:** content images have descriptive `alt`; decorative images use `alt=""`; HUD
  and tracking overlays are `aria-hidden`.
- **External links:** `target="_blank" rel="noopener noreferrer"`, and social icons say
  "(opens in a new tab)".
- **Lighthouse (production build):** Accessibility 100 on mobile and desktop.

---

## 10. Content rules

- **Voice:** short declarative pairs. *Capture Everything. Frame It Later.* No exclamation marks.
- **Headlines:** two phrases, each ending in a full stop (§3.3).
- **Eyebrows:** `NN / SECTION NAME` in caps, numbered in page order (02–08).
- **Numbers:** specs use the product's own notation (`8K 30fps`, `5K60 / 4K120`,
  `1/1.7"`, `−20°C`) with a true minus sign.
- **Placeholders:** none in production. Prices appear only once confirmed.
- **Disclaimer:** the footer must keep "Concept redesign · Not an official Insta360 page".

---

## 11. Do and don't

| Do | Don't |
|---|---|
| One filled primary button per view; everything else steps down to a text link | Put several accent pills side by side |
| Keep each headline phrase whole | Let a line break inside a phrase |
| Use accent for actions, active states and live signals | Use accent for headlines or body copy |
| Put a scrim behind any text on a photo | Set text directly on snow, sky or busy imagery |
| Animate once on enter with the shared ease | Loop, pulse or bounce for attention (REC blink excepted) |
| Use mono for data, labels and readouts | Set sentences in mono; use the script more than once |
| Keep 44px targets and the white focus ring | Remove outlines or ship 16px tap areas |
| One chip and one counter per card | Pile tags onto the photo |

---

## 12. Implementation notes

- **Build:** `npm run build` runs Vite, an SSR build of `src/entry-server.jsx`, then
  `scripts/prerender.mjs`, which writes the rendered HTML into `dist/index.html`. The
  client hydrates it (`src/main.jsx`). Server and client output must match; the only
  intentional differences (reduced-motion text, count-up values) use
  `suppressHydrationWarning`.
- **Motion bundle:** components use `m.*` under `<LazyMotion features={domAnimation} strict>`.
  Using `motion.*` will throw — always import `m`.
- **Images:** WebP in `public/assets/`. The hero ships `hero-1080.webp` (phones) and the
  1440 version through `srcSet`, preloaded with `fetchpriority="high"`. Every image below
  the hero uses `loading="lazy" decoding="async"`.
- **Fonts:** Archivo is limited to the weights in use (400–700); `fonts.gstatic.com` is
  preconnected.
- **Lint:** `npm run lint` (ESLint with React Hooks rules) must pass before committing.
- **Known debt:**
  - Colours and type sizes are hard-coded across about 220 inline style objects. The next
    step is to move §2–§3 into `:root` custom properties or the Tailwind theme and
    reference them by token name.
  - The `og:image` and `twitter:image` URLs are relative; switch them to
    `https://insta360-x6.vercel.app/og-image.jpg`.
  - Specs in the spec strip and table are taken from design mockups and still need
    verifying against official Insta360 data.
