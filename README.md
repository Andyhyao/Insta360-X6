# Insta360 X6 — Landing Page (concept)

React + Tailwind CSS + Framer Motion build of the Insta360 X6 redesign, with Apple-style
motion across every section (reference: apple.com/iphone-18-pro).

## Run it

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Dev server on port 3000 with hot reload        |
| `npm run build`   | Production build into `dist/`, with the page HTML pre-rendered |
| `npm run preview` | Serves the `dist/` build on port 3000          |
| `npm run lint`    | ESLint (React hooks rules, unused code)        |

The build pre-renders the page (`src/entry-server.jsx` + `scripts/prerender.mjs`) so the
hero paints before the JavaScript loads; the browser then hydrates it.

## Motion system (`src/motion.jsx`)

| Piece          | What it does                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| `StaggerText`  | Word-by-word masked reveal (rise + blur) for every headline                  |
| `fadeUp`, `group` | Staggered fade-up for eyebrows, copy and CTAs                             |
| `MotionCard`   | Staggered card entrance, hover lift and pointer-follow 3D tilt (mouse only)  |
| `Carousel`     | Card grid on desktop; swipe row with animated dots on phones                 |
| `CountUp`      | Spec numbers count up when they enter the viewport                           |

Section highlights: cinematic hero intro with scroll parallax, scroll-scrubbed 360° ring
(the angle buttons jump to that point in the scroll), frosted sticky nav, animated menu,
staggered spec-table rows, and a zoom-out + write-on closing banner.

Respects the OS "Reduce motion" setting (`MotionConfig reducedMotion="user"`).

## Files

- `src/App.jsx` — page composition
- `src/sections/*.jsx` — one component per section
- `src/motion.jsx` — shared motion components and variants
- `src/styles.css` — the design system styles; `src/index.css` adds Tailwind (no preflight)
- `public/assets/` — images (WebP; `hero-1080.webp` is the phone-size hero)
- `public/` — favicon, touch icon, Open Graph image, robots.txt
- `scripts/prerender.mjs`, `src/entry-server.jsx` — build-time pre-rendering
