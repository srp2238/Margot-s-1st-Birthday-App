# App Review — Wild One Birthday Invite
**Date:** June 17, 2026
**Reviewer:** Savannah (via Devin / Claude)
**Against:** SPEC.md v2.0

> **Note:** The original wireframe review (March 2026) compared `wireframe.html` against the disco-themed spec v1.1. This document supersedes that review and reflects the current state of the live app at `index.html`.

---

## Overall Assessment

The app is live on GitHub Pages and substantially complete. All three tabs are implemented, all party details are confirmed and filled in, all Formspree forms are wired up, and the design is polished and on-theme. A small number of content items remain pending (month 11–12 photos, real wish bubbles).

---

## Feature Status

| # | Feature | Status | Notes |
|---|---|---|---|
| 4.1 | Hero | ✅ Complete | "Wild ONE" stacked layout, hero photo, date badge shows 3–5 PM, Share Invite button, scroll cue, botanical flourishes |
| 4.2 | Countdown Timer | ✅ Complete | Counts to July 11, 2026 — "The Safari Begins In" |
| 4.3 | Expedition Details | ✅ Complete | Date card shows "Saturday, July 11, 2026 / from 3 to 5 PM", Venue, Address |
| 4.4 | RSVP CTA | ✅ Complete | Pulsing "Give Us a Roar If You Can Come" button, positioned below detail cards |
| 4.5 | RSVP Form | ✅ Complete | Formspree `mjgjgeyv`, thank-you state, confetti, Add to Calendar |
| 4.6 | Join the Jungle Jam | ✅ Complete | Replaced "Come Safari Ready" dress code; Jungle Jam welcome text + Book Instead of a Card |
| 4.7 | Schedule | ✅ Complete | 3:00 / 3:15 / 4:00 / 4:30 / 5:00 PM with safari animal SVG icons |
| 4.8 | Add to Calendar | ✅ Complete | Google Calendar link and .ics both updated to 3–5 PM CDT |
| 4.9 | Photo Reel | ⏳ Partial | Months 1–10 loaded; months 11–12 using botanical leaf placeholders |
| 4.10 | Wishes for Margot | ✅ Complete | Formspree `mlgagwjb`, sample wish bubbles; real wishes to be added manually |
| 4.11 | Add a Song | ✅ Complete | Formspree `xaqaqdeq` |

---

## Resolved Items from Previous Review

| Previous Gap | Resolution |
|---|---|
| Party time TBD | ✅ Confirmed 3–5 PM — updated everywhere (hero badge, date card, schedule, calendar links, config.js) |
| Wireframe badge | ✅ Removed |
| Google Calendar placeholder time | ✅ Updated to `T200000Z/T220000Z` (3–5 PM CDT) |
| .ics placeholder time | ✅ `config.js` `timeStart` updated to `15:00` |
| "Come Safari Ready" dress code | ✅ Replaced with "Join the Jungle Jam" |
| "Can't Make It? Send a Card" form | ✅ Section removed; button now routes to Wishes for Margot |
| RSVP button placement | ✅ Moved below Expedition Details with continuous pulse animation |
| Tab structure (4 tabs) | ✅ Reduced to 3 tabs — Travel tab removed |

---

## Remaining Content Items

- [ ] **Month 11–12 photos** — botanical leaf placeholders showing until photos are available
- [ ] **Real wish bubbles** — 3 sample placeholder names still showing; swap in real wishes from Formspree responses as they come in
- [ ] **Party hashtag** — not currently featured; add to Send Love page if Harry & Susan want one

---

## Intentional Design Decisions (for reference)

- **"HOUSTON, TX" removed from hero badge** — replaced with "3–5 PM" since the address is already shown in Expedition Details below
- **RSVP eyebrow label removed** — the pulsing button is self-explanatory without the "RSVP" script text above it
- **"Can't Make It?" section removed from Send Love** — consolidated into the Wishes for Margot flow so non-attendees use the same keepsake form as attendees
- **Dress code replaced with Jungle Jam text** — party spirit message felt more appropriate than clothing guidance; "Book Instead of a Card" kept below it
- **Schedule shifted to 3–5 PM window** — all five events now fall within the confirmed party hours

---

*This review reflects the app as of June 17, 2026. See SPEC.md v2.0 for the full feature specification.*
