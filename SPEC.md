# SPEC: Margot's 1st Birthday Invitation — Web App

**Project Name:** Wild One — Margot Turns One
**Version:** 1.4
**Author:** Savannah Phillips
**Date:** April 7, 2026
**Status:** Theme approved by Harry & Susan — Building

---

## Changelog

- **v1.4** (April 7, 2026) — Confirmed venue (private residence, Houston TX 77008). Party time narrowed to 11am–1pm or 3–5pm pending final decision. "GoGo" nickname removed — not being used. Photos and hashtag still pending Harry & Susan confirmation.
- **v1.3** (April 7, 2026) — Theme updated from "GoGo Disco" to "Wild One" safari. Harry & Susan selected `wireframe-wild.html` as the approved direction. Updated design tokens, animations, dress code, and all theme references. Confirmed technical approach: Formspree for all form submissions, no third-party music API, manual playlist curation. Birthday wishes collected via Formspree, displayed as manually curated static entries. Song hashtag options updated.
- **v1.2** (March 26, 2026) — Updated to reflect wireframe.html implementation: corrected typography, palette, section structure (4-tab SPA), bonus features, and one known gap (hashtag HTML missing).
- **v1.1** (March 25, 2026) — All features included, initial draft.

---

## 1. Overview

A private, single-page web invitation for Margot ("GoGo")'s 1st birthday party. The app will be hosted on GitHub Pages and shared via private link with invited family and friends. It serves as both an invitation and a full guest engagement hub — replacing a traditional paper invite with a richer, interactive digital experience.

The visual theme is **"Wild One"** — warm, earthy, and safari-inspired. Think a sun-drenched savanna nursery: terracotta, jungle green, honey gold, sandy cream, and sage. Giraffe spot patterns woven throughout. Elegant and polished, not loud or kitschy. Designed to meet Susan's high standards while feeling warm and celebratory for a baby's first birthday.

**Approved wireframe:** `wireframe-wild.html`
**Target party date:** Saturday, July 11, 2026

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
- Provide helpful info for traveling relatives (lodging, parking, directions)
- Collect RSVPs including adult + child headcount
- Allow guests to contribute to Margot's 1st birthday playlist
- Showcase Margot's first year through a photo reel
- Give guests who can't attend a way to still send love
- Create keepsake moments (birthday wishes, book instead of card tradition)
- Generate a shared photo hashtag for post-party memory collection

---

## 4. Features

The app is organized as a 4-tab single-page application. Tab structure reflects the `wireframe-wild.html` implementation.

### Tab 1 — 🏠 Home
*First impression and party essentials.*

#### 4.1 HERO — Invitation Header
- Margot's name displayed large with animated `wildShimmer` gradient (terracotta → gold → jungle green → khaki → rose)
- Subtitle beneath in Dancing Script (no nickname — "GoGo" not being used)
- "is turning one" tagline
- Date + venue pill (venue TBD)
- Hero photo placeholder (clearly marked; 152px circle)
- Safari animal cluster (giraffe 🦒 + flanking animal emojis) with floating animation
- Floating leaf/nature sparkles in background
- Two CTAs: RSVP button (jumps to The Party tab) and Share Invite button (Web Share API)
- Scroll cue chevron

#### 4.2 Countdown Timer
- Live JavaScript countdown to July 11, 2026 (set to 2:00 PM — update when times confirmed)
- Days, hours, minutes, seconds — styled with Playfair Display numerals
- Bouncing animation per unit; color-coded to safari palette

#### 4.3 Party Details
- Four detail cards: Date, Time, Venue, Address — all clearly TBD except date
- Add to Calendar: Google Calendar link + .ics download (Apple/Outlook)
- Host personal note from Harry & Susan (placeholder)

#### 4.4 All About Margot
- 6 personality/milestone cards — safari-themed framing
- Includes Sophie la Girafe card (✅ already fits theme perfectly)
- Last two cards reserved for Harry & Susan to fill in with personal milestones
- **Pending:** Harry & Susan to provide copy for milestone cards

---

### Tab 2 — 🎉 The Party
*RSVP and everything guests need to plan their day.*

#### 4.5 RSVP
- "X families are already coming" social proof banner
- RSVP deadline (TBD)
- Form fields: Name, Email, Adults Attending, Little Ones Attending, Dietary Restrictions, Notes
- **Submission:** Formspree — `https://formspree.io/f/mjgjgeyv`
- On submit: thank-you state + confetti animation (earthy/warm palette)
- Max-width 540px form card

#### 4.6 Party Schedule — "The Wild Itinerary"
- 5 events: Doors Open, Play Time & Mingling, The Cake Smash, Gifts & Books, Last Dance & Farewell
- All times TBD; styled with left-border color coding in safari palette

#### 4.7 Dress Code — "Dress Wild ✨"
- Encourages safari-inspired looks: khaki, olive, terracotta, animal prints, floral
- Tag row with style examples
- "Best dressed little wild one & best dressed adult will be crowned at the party"
- **Pending:** Confirm dress code language with Harry & Susan

#### 4.8 Gift & Registry Note
- Currently shows both options:
  - Book Instead of a Card (bring a childhood book, write a note to Margot)
  - Gift Registry placeholder
- **Pending decision from Harry & Susan:** book only, registry only, or both

#### 4.9 Submit a Song 🎵
- Simple text form — no music platform API integration (confirmed decision)
- Fields: Your Name, Song Title, Artist, Why this song? (optional)
- **Submission:** Formspree — `https://formspree.io/f/xaqaqdeq`
- Confirmation: "Added to Margot's playlist! She's going to love it."
- Savannah will manually curate a Spotify playlist from submitted songs
- *Note: Spotify/YouTube API integration was evaluated and ruled out — overly complex for a static site, poor UX for party guests*

---

### Tab 3 — 💌 Send Love
*Photos, keepsakes, and love from guests near and far.*

#### 4.10 Margot's First Year Photo Reel 📸
- 12 horizontally-scrolling frames, one per month
- Each frame: nature/animal emoji representing that month + "Month N" label
- Month 12 highlighted with terracotta border and gradient background
- **Placeholder:** All 12 images TBD; code clearly marked for photo insertion
- **Pending:** Harry & Susan to provide photos

#### 4.11 Birthday Wishes for Margot 💌
- Form to collect wishes + display of curated wishes below
- Fields: Your Name, Your Wish for Margot
- **Submission:** Formspree — `https://formspree.io/f/mlgagwjb`
- Confirmation: "Your wish has been saved for Margot — She'll read it someday and feel so loved."
- **Display approach (confirmed):** Wishes are collected via Formspree, then manually added to the HTML as curated static entries. Not real-time/live — this avoids backend complexity while maintaining editorial control.
- 3 sample wish bubbles shown as placeholder preview until real ones arrive

#### 4.12 Can't Make It? Send a Card 💌
- For guests who cannot attend in person
- Fields: Name, Relationship to Margot, Message
- **Submission:** Formspree — `TBD (4th form not yet created)`
- Confirmation: "Message delivered with love"

---

### Tab 4 — ✈️ Travel
*For out-of-town guests.*

#### 4.13 Places to Stay 🏨
- 3 cards: Hotel One, Hotel Two, Airbnb Area — all TBD
- Each: hotel name, distance from venue, description, "View & Book" link
- **Pending:** Real hotel names, distances, booking links from Harry & Susan

#### 4.14 Party Hashtag 📷
- CSS and JS complete in wireframe; HTML section to be added to Travel tab
- `copyHashtag()` function written
- **Pending decision:** Confirm final hashtag with Harry & Susan
  - Options: `#MargotTurnsOne`, `#GoGoTurnsOne`, `#WildOneGoGo`, `#MargotWildOne`

---

## 5. Design System

### Typography
| Role | Font | Notes |
|---|---|---|
| Display headings | Playfair Display | 700, italic available |
| Section sub-heads | Cormorant Garamond | 300–600, italic |
| Body & UI | Nunito | 300–800; clean, friendly |
| Accent / brand | Dancing Script | 700; nav brand and nickname |

### Color Palette (Wild One / Safari)
| Token | Hex | Usage |
|---|---|---|
| `--blush` | `#F5E8CC` | Sand / warm fill |
| `--rose` | `#D4A76A` | Tawny / warm mid |
| `--deep-rose` | `#C4633A` | Terracotta / primary accent & CTAs |
| `--lavender` | `#D4E8C8` | Sage light / leaf fill |
| `--soft-purple` | `#8DAF7A` | Sage medium |
| `--deep-purple` | `#3D7A56` | Jungle green |
| `--champagne` | `#F0E0C0` | Warm sand |
| `--gold` | `#D4942A` | Honey gold |
| `--baby-blue` | `#E8D5B0` | Warm tan |
| `--sky` | `#9B7B4A` | Khaki |
| `--cream` | `#FDF8F0` | Warm cream page background |
| `--text-dark` | `#3D2B1A` | Warm dark brown |
| `--text-mid` | `#6B4E35` | Warm medium brown |
| `--text-light` | `#8A6848` | Labels, captions (WCAG AA ✅ 5.05:1) |

### Background Pattern
- Giraffe spot SVG pattern (`--print-subtle`) tiled at 260×220px across all pages
- Hero has a lighter opacity version of the same pattern
- Pattern uses terracotta and khaki fill at low opacity (5–15%)

### Animations
- `wildShimmer` — multi-directional gradient animation on hero name (terracotta → gold → jungle green)
- `float` — gentle vertical float on safari animal cluster and dress code emojis
- `twinkle` — sparkle fade on hero background leaf/nature sparkles
- `pulse` — subtle scale on hero photo and RSVP button
- `cdBounce` — countdown unit bounce
- Confetti on RSVP submission (canvas-confetti, warm palette)

### Accessibility
- WCAG AA contrast verified for all text colors on white
- 44px minimum touch targets on all interactive elements
- ARIA roles: `navigation`, `tablist`, `tab`, `tabpanel`, `region`, `status`, `live`
- All decorative elements `aria-hidden="true"`

---

## 6. Technical Requirements

| Requirement | Decision |
|---|---|
| File format | Single `index.html` (HTML + CSS + JS inline) |
| Hosting | GitHub Pages (static) |
| Forms | Formspree — 4 forms: RSVP, Song, Wishes, Card |
| Photo hosting | Images hosted in GitHub repo alongside `index.html` |
| Music integration | None — simple text form only, manual playlist curation |
| Wishes display | Static/curated — collected via Formspree, manually added to HTML |
| Dependencies | Google Fonts, canvas-confetti (CDN) |
| Frameworks | None |
| Browser support | Modern browsers (Chrome, Safari, Firefox, Edge) |
| Authentication | None — private by link only |

---

## 7. Content Placeholders (TBD Before Publishing)

- [ ] Confirmed party start and end time *(options: 11am–1pm or 3–5pm, pending Susan's decision)*
- [ ] Venue name *(private residence — no public venue name needed)*
- [x] ~~Venue address~~ *(confirmed: 912 Lawrence St., Houston, TX 77008)*
- [ ] Indoor/outdoor note
- [ ] Party schedule times (5 events)
- [ ] RSVP deadline date
- [ ] Hero photo of Margot
- [ ] All About Margot — personal milestone cards copy (from Harry & Susan)
- [ ] Host personal note from Harry & Susan
- [ ] Hotel One — name, distance, description, booking link
- [ ] Hotel Two — name, distance, description, booking link
- [ ] Airbnb neighborhood name and search link
- [ ] First-year photo reel images (12 photos, one per month)
- [ ] Gift registry decision: book only / registry / both
- [ ] Party hashtag confirmation (see options in §4.14)
- [ ] Formspree ID — RSVP form
- [ ] Formspree ID — Song submission form
- [ ] Formspree ID — Birthday Wishes form
- [ ] Formspree ID — Send a Card form
- [ ] "Families coming" counter starting number (currently placeholder)
- [ ] Dress code language confirmation from Harry & Susan

---

## 8. Known Gaps (Pre-Publish Checklist)

- [ ] **Hashtag HTML section** not yet added to Travel tab — CSS and JS complete, HTML missing
- [ ] **Google Calendar link** uses placeholder time — update when confirmed
- [ ] **ICS file** uses placeholder time — update when confirmed
- [ ] **Wireframe badge** (`WIREFRAME — NOT FINAL`) to be removed before publishing

---

## 9. Build Order (Recommended)

Work through features in this sequence to minimize rework:

1. **Formspree setup** — create account, generate 4 form IDs (unblocks all form features)
2. **RSVP form** — wire to Formspree, confirm thank-you state + confetti
3. **Add to Calendar** — fill in real venue + time once confirmed
4. **Song Request form** — wire to Formspree
5. **Birthday Wishes form** — wire to Formspree; manually add curated wishes to display
6. **Send a Card form** — wire to Formspree
7. **Margot's Photo Reel** — build carousel structure, slot in photos as Harry & Susan provide them
8. **Fill all TBD content** — venue, times, hotel links, hashtag, personal notes
9. **GitHub Pages publish** — rename to `index.html`, set up repo, test, go live

---

## 10. Out of Scope (v1.0)

- User accounts or login
- Real-time guest list or live wish display
- Payment processing
- Video embeds or autoplay audio
- Backend database (all forms via Formspree)
- Music platform API integration (Spotify, YouTube, etc.)

---

## 11. Success Criteria

The app is ready to publish when:

1. All 14 sections are implemented and visually polished (including Hashtag HTML)
2. Wild One safari theme is consistent throughout
3. Countdown timer counts correctly to July 11, 2026
4. All 4 Formspree form IDs are active and tested
5. Page loads correctly on mobile and desktop
6. All `[TBD]` content placeholders filled in
7. Wireframe badge removed
8. File is a single `index.html` deployable to GitHub Pages

---

*This spec is the source of truth for the Wild One — Margot Turns One invitation app. All changes should be reflected here before implementation begins.*
