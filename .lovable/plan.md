
## DZYNER — Premium 3D Multipage Website

Brand: **DZYNER by Impactful Pitch** — "A Creative Design Studio For Modern Businesses". Stats 150K+ designs, 10K+ clients, 3X faster. Contacts: Nikhil Sharma +91 8077439014, Rahul Sinha +91 7739500297, Akanshit Bhatnagar +91 7351712217.

### Design system
- Palette: black `#000` bg, `#0A0A0A` surface, `#111` cards, neon lime `#D6FF00`, cyan `#00E5FF`, purple `#8A2EFF`, white text, `#A0A0A0` muted, borders `rgba(255,255,255,.08)`, glow `rgba(214,255,0,.4)`.
- Type: Bebas Neue (display), Space Grotesk (headings), Inter (body), JetBrains Mono (mono). Loaded via `<link>` in `__root.tsx`.
- All tokens in `src/styles.css` under `@theme inline` + `:root`.
- Semantic Tailwind utilities only — no ad‑hoc hex in components.

### Motion / 3D stack
- Framer Motion (`motion/react`) + GSAP + ScrollTrigger + Lenis smooth scroll.
- CSS 3D transforms + perspective for cards, marquees, tilt (60fps, no WebGL cost). Optional lightweight Three.js hero particle scene via `@react-three/fiber` + `@react-three/drei` only on Home hero.
- Reduced-motion respected.

### Routes (multipage)
```
/                Home (all signature sections)
/services        Full services grid (from PDF)
/why-us          Expandable "why choose DZYNER" points
/pricing         3 models + calculator
/work            Portfolio / client logo wall
/about           About + team
/contact         Contact managers
```
Each route: own `head()` with title/description/og. Shared `Header` (glass nav, magnetic links) + `Footer` (huge typography, socials). Custom cursor + Lenis wired in `__root.tsx`.

### Home sections (in order)
1. **Cinematic Hero** — full-viewport black. R3F particle field + floating wireframe grid. Huge headline "DESIGN. CREATE. INSPIRE." with letter-by-letter reveal, gradient neon text. Mouse-tilted perspective. Two CTAs: "Book a call", "See work". Animated grid floor + bloom.
2. **Mouse-parallax image grid** (img 1 reference — right-side grid moves with mouse). 3-column stagger of design work with individual layer depths driven by mouse Y.
3. **Brand marquee** (img 2) — infinite right→left auto-scroll of client logos, hover glow, greyscale→color.
4. **Stats band** — animated counters 150K+ / 10K+ / 3X with neon underlines.
5. **Services** (img 5/6) — expandable accordion grouped by BASIC / STANDARD / ADVANCED / BRANDING / PREMIUM & MOTION from the PDF. Click a category → sub-points slide open with glow border, icons.
6. **Why Us** (img 7/8) — 6 pill headers (No hiring stress, No salary burden, No training time, Single point of contact, No back & forths, Consistent quality). Click → expands with detailed copy in glass card.
7. **3D Card Carousel** — the volumetric-card scroll piece from your spec, adapted with DZYNER's neon palette. Continuous circular scroll + mouse tilt.
8. **Feature cards trio** ("Hardware / Studio / Motion" pattern) — 3 gradient-bordered glow cards for "One Partner / Multiple Teams / Endless Possibilities" narrative.
9. **Process timeline** — horizontal glowing 6-step line (Discover → Research → Strategy → Design → Prototype → Deliver).
10. **Pricing preview** — 3 model cards (Pay per project / Subscription★ / Hourly) → link to /pricing.
11. **Portfolio marquee** (img 3/4) — right→left auto scroll of project thumbs.
12. **Payment / CTA banner** (img 9) — full-width neon banner with 3D floating cards & "Start your project" CTA.
13. **About section** — Kanit + gradient heading + scroll-driven per-character reveal + corner floating images + gradient contact pill (as specified).
14. **Testimonials** — 3D glass rotating cards.
15. **Contact strip** — 3 relationship managers with phone CTAs.
16. **Footer** — oversized "DZYNER" wordmark, socials, back-to-top.

### Micro-interactions (site-wide)
Custom neon cursor with magnetic buttons, hover tilt on cards, animated borders, letter-reveal headings, section-enter parallax, scroll progress bar, Lenis smooth scroll, page transitions (fade + blur).

### Technical
- Follow TanStack Start file-based routing under `src/routes/`.
- New deps: `motion`, `gsap`, `lenis`, `three`, `@react-three/fiber`, `@react-three/drei`.
- Fonts via Google Fonts `<link>` in `__root.tsx` head.
- Sitemap + robots at end.
- SEO head() per route, og:image only on leaf routes with meaningful visuals.
- PDF images/logos NOT embedded (branding placeholders will be generated for design work thumbnails; real client logos via CDN text names on the marquee).

### First iteration scope
Ship **all Home sections + Header/Footer + Contact page + Services page** in one pass. Pricing/Why-us/About/Work pages get real routes with sections stubbed and progressively enhanced next turn if desired.

### Out of scope for now
- Backend/Cloud (no forms saved yet — contact links open `tel:` / mailto).
- Sound FX, AI chatbot (mentioned as optional in your brief).
- Real client logos (using stylized text logos on marquee to avoid trademark issues).

Approve and I'll build.
