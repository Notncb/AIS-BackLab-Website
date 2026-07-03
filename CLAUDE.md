# CLAUDE.md — BACKLAB Detailing Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## 01 · WHO WE ARE

**Elevator pitch (use word for word):**
> "BACKLAB is mobile car detailing in Fernandina Beach — we come to you and bring your car back to showroom. And our pricing's posted right upfront, so there's no quote runaround."

BACKLAB brings water, power, and products to the customer's driveway. The single differentiator: **prices posted upfront, no quote required.** Local, one-on-one — one person treats your car like it's the only job that day.

---

## 02 · POSITIONING

**Tagline (leads everything):** *Upfront pricing, no quotes.*

**Companion line (warmer — use when tagline alone feels blunt):**
> "A real person, a real price, right in your driveway."

**Charm phrase (sprinkle; never lead with it):** *Back to showroom.*

**How they work together:** Tagline argues. Companion line warms. Charm phrase adds character. Don't make any one do all the work.

**The gap BACKLAB owns:** Every mobile detailer comes to you — mobile isn't special anymore. What no local owner-operator does is post a flat price before you book. National apps post prices but have no local face. BACKLAB is the real local person who posts the price upfront.

---

## 03 · WHO WE TALK TO

**Primary:** Fernandina Beach households — families and commuters with sedans, SUVs, trucks. Time-pressed, practical, won by local word-of-mouth and Facebook.

**Secondary:** Yulee commuters & work-truck owners — tradespeople whose trucks take a beating.

**Future:** Amelia Island premium & enthusiast owners — second-home owners wanting protection work (paint correction, ceramic coating).

**Mindset to write toward:** *"I just want my car cleaned properly, by someone I trust, without a sales runaround — and I want to know what it costs before I commit."*

---

## 04 · VOICE & TONE

Friendly local neighbor. Straight-talking, not corporate, not a hype machine.

| We sound like | We don't sound like |
|---|---|
| "We'll come to you and take care of it." | "We provide premium automotive reconditioning solutions." |
| "Here's exactly what it costs." | "Contact us for a custom quote!" |
| "Right here in Fernandina." | "Serving customers nationwide." |
| "We'll have it looking showroom again." | "THE #1 BEST DETAIL EVER!!!" |

**Words we lean on:** upfront · showroom · come to you · plain and simple · no runaround · local · take care of it

**Words to avoid (slop filter):** quote · premium reconditioning · solutions · synergy · delve · tapestry · testament · revolutionize · bespoke · paradigm shift — anything that sounds like a brochure or a chatbot.

---

## 05 · COLORS

Three colors only — never introduce a fourth.

| Name | Hex | Use |
|---|---|---|
| Backlab Navy | `#29436C` | Logo, headlines, buttons |
| Charcoal | `#3A3A37` | Body text, wordmark |
| Off-White | `#EEEFF0` | Backgrounds, space |

RGB: Navy R41 G67 B108 · Charcoal R58 G58 B55 · Off-White R238 G239 B240

---

## 06 · TYPOGRAPHY

**One typeface family: Inter (Google Fonts)**

- **Headings:** Inter Bold / Semibold — tight, confident. Tracking `-0.02em` to `-0.03em` on large sizes.
- **Body:** Inter Regular — comfortable line length, line-height ~1.65–1.72 for easy mobile reading.
- **Fallback stack:** `Inter, "Helvetica Neue", Arial, sans-serif`
- **Accent / monospace details** (labels, eyebrows, price notes): `'Space Mono', monospace` — small sizes (0.5–0.625rem) with wide letter-spacing.

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**Do not use Archivo.** Inter is the brand-specified font.

---

## 07 · LOGO

- Use navy-on-light or white-on-navy only.
- Clear space equal to the height of the "B" on all sides.
- Minimum size: 24px tall on screen.
- Do not recolor, stretch, squash, add shadows, or place on a busy photo without contrast.

---

## 08 · PHOTOGRAPHY

Before/after photos are the most important marketing asset.

- **Same angle for both shots** — frame before, don't move your feet for after.
- **Even, natural light** — open shade or overcast. No harsh midday glare.
- **Clean background** — driveway is fine; keep bins, hoses, and clutter out of frame.
- **Landscape orientation** for the website; vertical too for Stories/Reels.
- **Light, honest edits only** — straighten and brighten if needed. No over-saturation or filters (reads as fake, undercuts honest-pricing positioning).

---

## 09 · SERVICES & PRICING

Prices are public — that's the whole point. Show them upfront everywhere.

| Service | Sedan | SUV | Truck |
|---|---|---|---|
| Full Detail | $160 | $185 | $215 |
| Exterior Only | $95 | $110 | $125 |
| Interior Only | $90 | $105 | $120 |

Add-ons handled in person. Mobile — fully self-contained with water and power.

**Service area:** Fernandina Beach · Amelia Island · Yulee

**Square booking URL:** `https://book.squareup.com/appointments/27x2rtg8x1ynqv/location/LQWPVHAEA41YA/services`

---

## 10 · BUSINESS INFO

- **Business name (exact):** BACKLAB Detailing
- **Standard sign-off / CTA:** *"See the price, book it, we come to you. — BACKLAB Detailing, Fernandina Beach."*
- **Social handles:** @backlabdetailing (Instagram + Facebook, same on both)

---

## 11 · READY-TO-USE COPY

**One-liners:**
- Upfront pricing, no quotes. Mobile detailing, right in your driveway.
- See the price. Book it. We come to you.
- Back to showroom — without leaving your driveway.
- No "contact us for pricing." Just the price.

**Review-response template:**
> "Thanks [Name] — it was a pleasure bringing your [car] back to showroom. Appreciate you trusting a local. See you next time."

**Objection handler — "Why not just get a quote?"**
> "You could — but you'd have to wait for someone to call you back with a number. With us the price is already posted, so you book the moment you decide. Same work, none of the runaround."

---

## Technical — Local Server

- Start: `node serve.mjs` (serves project root at `http://localhost:3000`)
- Never screenshot a `file:///` URL — always use localhost.
- If server is already running, do not start a second instance.

## Technical — Screenshot Workflow

- Puppeteer installed in `node_modules/` at project root.
- Run: `node screenshot.mjs http://localhost:3000`
- Saves to `./temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool and compare against intent.
- Check: spacing/padding, font sizes, colors (exact hex), alignment, border-radius, image sizing.

## Technical — Image Processing

- `process-images.mjs` — Jimp v1 script. Run with `node process-images.mjs`.
- Produces `images/before.jpg` (watermark removed) and `images/after.jpg` (PNG → JPEG).
- Jimp v1 API: named import `{ Jimp }`, use `.write(filepath)` — not `.quality()` or `.writeAsync()`.

## Technical — Output Defaults

- Shared CSS in `styles.css`, shared slider JS in `slider.js`.
- Three pages: `index.html` (homepage), `full-detail.html`, `exterior.html`.
- Mobile-first responsive. Service pages use `position: fixed` for slider/nav/card on desktop; switch to `position: relative/sticky` on mobile (≤767px).
- `--disable-gpu` flag required in Puppeteer launch args for service pages (fixed+overflow compositor issue in headless Chrome).
- `fullPage: false` for service pages with `overflow: hidden` on html/body.

## Technical — Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly.
- Screenshot output, compare against reference, fix mismatches, re-screenshot. At least 2 rounds.

## Anti-Generic Guardrails

- **Colors:** Use only the three brand tokens above — never default Tailwind palette.
- **Shadows:** Layered, color-tinted, low opacity. Never flat `shadow-md`.
- **Typography:** Inter for all prose/headings. Space Mono only for micro-labels/eyebrows.
- **Animations:** Only `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active. No exceptions.
- **Spacing:** Intentional, consistent tokens — not random steps.
- **Depth:** Surfaces should layer (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules

- Do not add sections, features, or content not requested.
- Do not use Archivo — replaced by Inter per brand guidelines.
- Do not use default Tailwind blue/indigo as primary color.
- Do not use `transition-all`.
- Do not stop after one screenshot pass — compare and iterate.
