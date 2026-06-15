/*  ═══════════════════════════════════════════
    SITE CONFIG — Margot's Wild One
    Edit this file to update party details,
    dates, times, and content across the site.
    ═══════════════════════════════════════════ */

const SITE_CONFIG = {
  /* ── Party Details ── */
  party: {
    childName:    'Margot',
    turningAge:   1,
    tagline:      "Wild One",
    date:         'Saturday, July 11, 2026',
    dateISO:      '2026-07-11',
    time:         'TBD',                        // Update when confirmed
    timeStart:    '14:00',                       // 24h format — update when confirmed
    timeEnd:      '17:00',                       // 24h format — update when confirmed
    venue:        'The Phillips Jungle Hut',
    address:      '912 Lawrence St',
    cityState:    'Houston, TX 77008',
    timezone:     'America/Chicago',
  },

  /* ── Countdown target (midnight July 11 until time confirmed) ── */
  countdown: {
    targetDate: new Date('2026-07-11T00:00:00-05:00'),
  },

  /* ── Share / Social ── */
  share: {
    url:   'https://srp2238.github.io/Margot-s-1st-Birthday-App/',
    title: "Margot's Wild One Birthday Party",
    text:  "You're invited to celebrate Margot's 1st birthday safari party! Saturday, July 11, 2026 in Houston, TX.",
  },

  /* ── Formspree Endpoints ── */
  forms: {
    rsvp:    'https://formspree.io/f/mjgjgeyv',
    wishes:  'https://formspree.io/f/mlgagwjb',
    songs:   'https://formspree.io/f/xaqaqdeq',
    card:    '',                                 // TBD — 4th form ID
  },

  /* ── Calendar Event ── */
  calendar: {
    summary:     "Margot's Wild One Birthday Party",
    description: "You're invited to celebrate Margot's 1st birthday safari party!",
    location:    '912 Lawrence St, Houston, TX 77008',
  },

  /* ── Confetti palette (safari theme) ── */
  confetti: {
    colors: ['#F5E8CC', '#D4E8C8', '#C4633A', '#D4942A', '#D4A76A', '#8DAF7A'],
  },

  /* ── Schedule (update times when confirmed) ── */
  schedule: [
    { time: 'TBD', title: 'Doors Open',             icon: 'door',  desc: 'Welcome to the jungle!' },
    { time: 'TBD', title: 'Play Time & Mingling',   icon: 'play',  desc: 'Games, snacks & safari selfies' },
    { time: 'TBD', title: 'The Cake Smash',         icon: 'cake',  desc: "Margot meets her first cake" },
    { time: 'TBD', title: 'Gifts & Books',          icon: 'gift',  desc: 'Unwrapping the wild treasures' },
    { time: 'TBD', title: 'Last Dance & Farewell',  icon: 'wave',  desc: 'Goodbyes & safari sendoff' },
  ],
};
