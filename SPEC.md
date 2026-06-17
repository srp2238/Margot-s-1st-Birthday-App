# SPEC: Margot's 1st Birthday Invitation — Web App

**Project Name:** Wild One — Margot Turns One
**Version:** 2.0
**Author:** Savannah Phillips
**Date:** June 17, 2026
**Status:** Live — published to GitHub Pages

---

## Changelog

- **v2.0** (June 17, 2026) — Major content and UX update. Party time confirmed: 3–5 PM. Restructured Home page hero and CTA layout. Replaced "Come Safari Ready" dress code section with "Join the Jungle Jam" welcome text on The Party page. Removed "Can't Make It?" Send a Card section from Send Love page — "Can't Make It" button now routes to Wishes for Margot form. Schedule times updated (+1 hour shift). Calendar links and .ics updated to 3–5 PM CDT. App reduced from 4 tabs to 3 tabs (Travel tab removed — no longer needed). Several content placeholders resolved.
- **v1.4** (April 7, 2026) — Confirmed venue (private residence, Houston TX 77008). Party time narrowed to 11am–1pm or 3–5pm pending final decision. "GoGo" nickname removed — not being used. Photos and hashtag still pending Harry & Susan confirmation.
- **v1.3** (April 7, 2026) — Theme updated from "GoGo Disco" to "Wild One" safari. Harry & Susan selected `wireframe-wild.html` as the approved direction. Updated design tokens, animations, dress code, and all theme references. Confirmed technical approach: Formspree for all form submissions, no third-party music API, manual playlist curation. Birthday wishes collected via Formspree, displayed as manually curated static entries.
- **v1.2** (March 26, 2026) — Updated to reflect wireframe.html implementation: corrected typography, palette, section structure (4-tab SPA), bonus features, and one known gap (hashtag HTML missing).
- **v1.1** (March 25, 2026) — All features included, initial draft.

---

## 1. Overview

A private, single-page web invitation for Margot's 1st birthday party. Hosted on GitHub Pages and shared via private link with invited family and friends. Serves as both an invitation and a full guest engagement hub — replacing a traditional paper invite with a richer, interactive digital experience.

The visual theme is **"Wild One"** — warm, earthy, and safari-inspired. Think a sun-drenched savanna nursery: terracotta, jungle green, honey gold, sandy cream, and sage. Giraffe spot patterns woven throughout. Elegant and polished, not loud or kitschy.

**Approved wireframe:** `wireframe-wild.html`
**Party date:** Saturday, July 11, 2026
**Party time:** 3:00 PM – 5:00 PM
**Venue:** The Phillips Jungle Hut — 912 Lawrence St, Houston, TX 77008
**Live URL:** `https://srp2238.github.io/Margot-s-1st-Birthday-App/`

---

## 2. Target Users

- Close family and friends of Harry & Susan (Margot's parents)
- Mix of local and out-of-town guests (~30–50 attendees)
- Many guests are parents themselves with kids in Margot's age range
- All ages — mobile-first design; also beautiful on desktop

---

## 3. Goals

- Delight guests with a beautiful, on-theme digital invitation that feels personal to *Margot specifically*
- Clearly communicate all party details and logistics
- Collect RSVPs including adult + child headcount
- Allow guests to contribute to Margot's 1st birthday playlist
- Showcase Margot's first year through a photo reel
- Give guests who can't attend a way to still send love via the Wishes form
- Create keepsake moments (birthday wishes, book instead of card tradition)

---

## 4. Features

The app is organized as a **3-tab single-page application**: Home, The Party, Send Love.

---

### Tab 1 — Home

*First impression and party essentials.*

#### 4.1 Hero — Invitation Header
- Circular hero photo of Margot
- "You're invited to" script accent
- "Margot's" in Cormorant Garamond Bold
- "Wild ONE" stacked typographic moment — "Wild" on top line (italic), "ONE" on its own line below (bold, larger, terracotta background pill)
- Date badge: *Saturday, July 11, 2026* / *3–5 PM*
- Share Invite button (Web Share API with clipboard fallback)
- Scroll cue chevron
- Botanical corner flourishes and giraffe-spot background

#### 4.2 Countdown Timer
- Live JavaScript countdown to July 11, 2026
- Days, hours, minutes, seconds
- Label: "The Safari Begins In"

#### 4.3 Expedition Details
- Three detail cards: **Date** (Saturday, July 11, 2026 / from 3 to 5 PM), **Venue** (The Phillips Jungle Hut), **Address** (912 Lawrence St, Houston, TX 77008)
- Botanical corner flourishes on each card

#### 4.4 RSVP CTA
- "Give Us a Roar If You Can Come" button — positioned below Expedition Details
- Pulses continuously to draw attention
- Navigates to The Party tab (RSVP form)

---

### Tab 2 — The Party

*RSVP and everything guests need to plan their day.*

#### 4.5 RSVP — "Join the Pack"
- Form fields: Name, Email, Adults Attending, Little Ones Attending
- Optional extras (collapsible): Dietary Restrictions, Notes
- **Submission:** Formspree — `https://formspree.io/f/mjgjgeyv`
- On submit: thank-you state + confetti animation (earthy/warm palette) + Add to Calendar
- "Can't Make It" button routes to Send Love → Wishes for Margot

#### 4.6 Join the Jungle Jam
- Welcome/spirit section replacing the former dress code
- Text: *"Join the Jungle Jam where we'll laugh like hyenas, boogie like baboons, and sing like birds because our little cub is turning ONE and the whole jungle is invited!"*
- Includes "Book Instead of a Card" sub-section: guests bring a childhood book with a note inside to build Margot's first library

#### 4.7 Expedition Schedule
- 5 events with safari animal SVG icons:
  | Time | Event |
  |---|---|
  | 3:00 PM | Gates Open |
  | 3:15 PM | Explore & Mingle |
  | 4:00 PM | The Cake Smash |
  | 4:30 PM | Gifts & Books |
  | 5:00 PM | The Wild Send-Off |

#### 4.8 Add to Calendar
- Google Calendar link (3–5 PM CDT: `T200000Z/T220000Z`)
- Apple / Outlook `.ics` download (generated from `config.js` — `timeStart: 15:00`, `timeEnd: 17:00`, `timezone: America/Chicago`)

---

### Tab 3 — Send Love

*Photos, keepsakes, and love from guests near and far.*

#### 4.9 Margot's First Year Photo Reel
- 12 horizontally-scrolling frames, one per month
- Months 1–10: real photos loaded from `margot-safari-photos/`
- Months 11–12: botanical leaf placeholder SVGs
- Month 12 highlighted with terracotta border

#### 4.10 Wishes for Margot
- Form: Your Name, Your Wish for Margot
- **Submission:** Formspree — `https://formspree.io/f/mlgagwjb`
- Confirmation: "Your wish has been saved for Margot"
- 3 sample wish bubbles shown as placeholder preview
- **Display approach:** Wishes collected via Formspree, manually added to HTML as curated static entries

#### 4.11 Add a Song for Margot
- Form: Your Name, Song Title, Artist, Why this song? (optional)
- **Submission:** Formspree — `https://formspree.io/f/xaqaqdeq`
- Confirmation: "Added to Margot's playlist"
- Savannah will manually curate a Spotify playlist from submissions

---

## 5. Design System

### Typography
| Role | Font | Notes |
|---|---|---|
| Display headings | Cormorant Garamond | 700, italic; all section titles |
| Body & UI | Jost | 300–400; clean, modern sans |
| Accent / script | Pinyon Script | Nav brand, "You're invited to" eyebrow |

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--blush` | `#F5E8CC` | Sand / warm fill |
| `--rose` | `#D4A76A` | Tawny / warm mid |
| `--deep-rose` | `#C4633A` | Terracotta / primary accent |
| `--rose-accessible` | `#A84F2A` | WCAG AA text variant of deep-rose |
| `--lavender` | `#D4E8C8` | Sage light / leaf fill |
| `--soft-purple` | `#8DAF7A` | Sage medium |
| `--deep-purple` | `#3D7A56` | Jungle green |
| `--gold` | `#D4942A` | Honey gold |
| `--gold-text` | `#8B6010` | WCAG AA text variant of gold |
| `--cream` | `#FDF8F0` | Warm cream page background |
| `--sand-warm` | `#FEF3DC` | Nav / hero fill |
| `--text-dark` | `#3D2B1A` | Warm dark brown |
| `--text-mid` | `#6B4E35` | Warm medium brown |
| `--text-light` | `#8A6848` | Labels, captions (WCAG AA ✅ 5.05:1) |

### Background Pattern
- Giraffe spot SVG pattern (`--print-subtle`) tiled at 260×220px across all pages
- Enhanced opacity version (`--print-enhanced`) used in hero
- Pattern uses terracotta and khaki fill at low opacity (11–25%)

### Animations
- `pulseOnce` — continuous scale pulse on RSVP CTA button (infinite)
- `float` — gentle vertical float on hero photo
- `bounceDown` — scroll cue chevron bounce
- `pageIn` — fade + slide on tab switch
- Confetti on RSVP submission (canvas-confetti, warm palette)
- Confetti on page load (earthy palette, delayed 700ms)

### Accessibility
- WCAG AA contrast verified for all text colors
- 44px minimum touch targets on all interactive elements
- ARIA roles: `navigation`, `tablist`, `tab`, `tabpanel`, `region`, `status`, `dialog`, `live`
- All decorative elements `aria-hidden="true"`
- Welcome modal on first visit with guided tour of the three pages

---

## 6. Technical Stack

| Requirement | Decision |
|---|---|
| File structure | `index.html` + `styles.css` + `app.js` + `config.js` |
| Hosting | GitHub Pages (static) |
| Forms | Formspree — 3 active forms: RSVP, Song, Wishes |
| Photo hosting | Images in `margot-safari-photos/` directory in repo |
| Music integration | Simple text form — manual Spotify playlist curation |
| Wishes display | Static/curated — collected via Formspree, manually added to HTML |
| Dependencies | Google Fonts (Cormorant Garamond, Pinyon Script, Jost), canvas-confetti (CDN) |
| Frameworks | None |
| Browser support | Modern browsers (Chrome, Safari, Firefox, Edge) |
| Authentication | None — private by link only |

---

## 7. Configuration (`config.js`)

All party details, times, and Formspree IDs are centralized in `config.js`. Update this file — not `index.html` — when details change.

Key fields:
```js
party.date        → 'Saturday, July 11, 2026'
party.dateISO     → '2026-07-11'
party.time        → '3:00 PM – 5:00 PM'
party.timeStart   → '15:00'   // used for .ics generation
party.timeEnd     → '17:00'   // used for .ics generation
party.timezone    → 'America/Chicago'
party.venue       → 'The Phillips Jungle Hut'
party.address     → '912 Lawrence St'
party.cityState   → 'Houston, TX 77008'
```

---

## 8. Content Status

| Item | Status |
|---|---|
| Party date | ✅ Saturday, July 11, 2026 |
| Party time | ✅ 3:00 PM – 5:00 PM |
| Venue name | ✅ The Phillips Jungle Hut |
| Venue address | ✅ 912 Lawrence St, Houston, TX 77008 |
| Party schedule times | ✅ 3:00 / 3:15 / 4:00 / 4:30 / 5:00 PM |
| Calendar links (.ics + Google) | ✅ Updated to 3–5 PM CDT |
| Hero photo | ✅ `margot-safari-photos/margot-hero.JPG` |
| Month 1–10 photos | ✅ Loaded |
| Month 11–12 photos | ⏳ Pending |
| Formspree — RSVP | ✅ `mjgjgeyv` |
| Formspree — Wishes | ✅ `mlgagwjb` |
| Formspree — Songs | ✅ `xaqaqdeq` |
| Curated wish bubbles | ⏳ Placeholder names only — update with real wishes |
| RSVP deadline | ⏳ Not displayed |
| Gift registry decision | ✅ Book Instead of a Card only |
| Party hashtag | ⏳ Not currently shown — decision pending |

---

## 9. Known Gaps / Future Enhancements

- [ ] Month 11–12 photos to be added when available
- [ ] Replace sample wish bubbles with real curated wishes as they come in
- [ ] Add RSVP deadline date if desired
- [ ] Party hashtag — confirm with Harry & Susan and add if desired

---

## 10. Out of Scope

- User accounts or login
- Real-time guest list or live wish display
- Payment processing
- Video embeds or autoplay audio
- Backend database (all forms via Formspree)
- Music platform API integration (Spotify, YouTube, etc.)
- Travel tab (hotels, Airbnb) — removed as not needed

---

## 11. Success Criteria

The app is considered complete and publish-ready when:

1. All 3 tabs are implemented and visually polished
2. Wild One safari theme is consistent throughout
3. Countdown timer counts correctly to July 11, 2026
4. All 3 Formspree form IDs are active and tested
5. Page loads correctly on mobile and desktop
6. All content placeholders filled in
7. Published to GitHub Pages and shareable link confirmed working

---

*This spec is the source of truth for the Wild One — Margot Turns One invitation app.*
