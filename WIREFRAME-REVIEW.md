# Wireframe Review — GoGo Turns One
**Date:** March 26, 2026
**Reviewer:** Savannah (via Claude)
**Wireframe:** `wireframe.html`
**Against:** SPEC.md v1.1

---

## Overall Assessment

The wireframe is in excellent shape. **13 of 14 spec features are fully implemented**, with one gap (the Hashtag section has its CSS and JavaScript written but no HTML on any page). There are also several thoughtful additions beyond the spec that meaningfully improve the experience.

---

## Feature-by-Feature Status

| # | Spec Feature | Status | Notes |
|---|---|---|---|
| 4.1 | Hero | ✅ Complete | Name, nickname, photo placeholder, disco ball cluster, sparkle animations, date pill, RSVP + Share CTAs, scroll cue |
| 4.2 | All About GoGo | ✅ Complete | 6 cards: Sophie, smiling, curious, laugh, milestone (TBD), why disco (TBD) |
| 4.3 | Party Details | ✅ Complete | Date, time, venue, address cards; host note placeholder. *Minor: indoor/outdoor note not present as a dedicated card* |
| 4.4 | Dress Code | ✅ Complete | "Come Disco Ready!" card, tag row, "best dressed" note |
| 4.5 | Countdown Timer | ✅ Complete | Live JS countdown to July 11 — days, hours, minutes, seconds |
| 4.6 | Party Schedule | ✅ Complete | "The Party Setlist" — 5 events, disco setlist visual, all times TBD |
| 4.7 | RSVP | ✅ Complete | Name, email, adults, children, dietary, notes; Formspree; thank-you state with confetti |
| 4.8 | Gift & Registry | ✅ Complete | Shows both book tradition AND registry placeholder (implements Option C) |
| 4.9 | Places to Stay | ✅ Complete | 3 cards: 2 hotels + Airbnb search, all TBD |
| 4.10 | Submit a Song | ✅ Complete | Name, song, artist, + bonus "why this song?" field; Formspree |
| 4.11 | Photo Reel | ✅ Complete | 12 frames, horizontal scroll, emoji + month labels, Month 12 highlighted |
| 4.12 | Birthday Wishes | ✅ Complete | Form + 3 sample wish bubbles shown as preview |
| 4.13 | Send a Card | ✅ Complete | Separate section, bonus "relationship to Margot" field |
| 4.14 | Party Hashtag | ⚠️ Gap | CSS (`.hashtag-section`, `.hashtag-display`) + JS (`copyHashtag()` using `#MargotTurnsOne`) are written, but **no HTML section exists on any page**. Needs to be added. |

---

## One Bug to Fix Before Sending to Harry & Susan

**Missing: Hashtag HTML section**

The hashtag section was originally planned for the Travel tab (CSS comment reads "Hotels → Add a Song → Hashtag") but its HTML was never added. The CSS and `copyHashtag()` function are fully ready — the section just needs to be dropped into the Travel tab (or another logical home).

Note: The wireframe JS currently uses `#MargotTurnsOne` — this should be confirmed with Harry & Susan before publishing (spec suggested `#GoGoTurnsOne` or `#GoGoDiscoParty` as alternatives).

---

## Intentional Upgrades from Spec

These are places where the wireframe departed from spec language in ways that are deliberate improvements.

**Typography:** Spec mentioned Bebas Neue or Righteous. The wireframe uses Playfair Display, Cormorant Garamond, Dancing Script, and Nunito. This is significantly more polished and Susan-appropriate — the kind of elevated, editorial feel that won't look like a generic party app.

**Color palette:** Spec language said "gold, hot pink, deep purple." The wireframe interprets this as soft pastels (blush, rose, lavender, champagne) with deep-rose and deep-purple as accents. Same spirit, far more refined.

**Tab structure:** Spec described a flat scroll of 14 sections. The wireframe reorganizes this into 4 tabs (Home, The Party, Send Love, Travel), which dramatically improves navigation especially on mobile. This is a major UX improvement.

**Song submission placement:** Spec placed "Submit a Song" between Gift Note and Places to Stay (#9). Wireframe moved it to The Party tab, after Gifts. This is a better thematic fit.

---

## Bonus Features Not in Spec

These were added during development and are all keepers.

- **Add to Calendar** — Google Calendar link generator + `.ics` download for Apple/Outlook. Guests with traveling families will love this.
- **Share Invite button** — Web Share API (native share sheet on mobile) with URL copy fallback.
- **"X families are coming" banner** — Social proof nudge on the RSVP section. Fun and motivating.
- **Sample wish bubbles** — Preview of birthday wishes with placeholder names (Grandma Carol, Uncle Jake, etc.) helps guests understand what to write.
- **WCAG AA accessibility** — Text contrast ratios verified, 44px+ tap targets, ARIA roles throughout.
- **Wireframe preview badge** — The dark banner at top clearly marks this as a draft for Harry & Susan review.

---

## Content Placeholders Remaining

No change from SPEC.md section 7. All TBD items remain clearly marked in the code:

- [ ] Confirmed time (start/end)
- [ ] Venue name and address
- [ ] Indoor/outdoor note
- [ ] Party schedule times
- [ ] RSVP deadline date
- [ ] Hero photo of Margot
- [ ] "About GoGo" milestone and why-disco cards from Harry & Susan
- [ ] Host personal note from Harry & Susan
- [ ] Hotel names, distances, booking links (3 entries)
- [ ] Photo reel images (12 months)
- [ ] Gift registry decision (show both / book only / registry link)
- [ ] Party hashtag confirmation (#MargotTurnsOne vs #GoGoTurnsOne vs #GoGoDiscoParty)
- [ ] Formspree IDs (4 forms: RSVP, Song, Wishes, Card)
- [ ] "Families coming" counter starting number

---

## Recommendation for Harry & Susan Review

The wireframe is ready to share as-is. The one gap (hashtag HTML) is minor and doesn't need to be fixed before sharing — it can be noted as "to be added." The design is polished, the structure is solid, and all the charm and personality are there.

Consider asking them to specifically weigh in on:
1. The hashtag — which one do they want?
2. The gift section — book only, registry only, or both?
3. The "About GoGo" cards — their words for the milestone and why-disco cards
4. The host note — what feels like them

---

*This review was generated automatically by comparing wireframe.html against SPEC.md v1.1.*
