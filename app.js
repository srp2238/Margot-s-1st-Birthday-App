/* ── RSVP optional extras toggle ── */
function toggleRSVPExtras() {
  const toggle = document.getElementById('rsvp-opt-toggle');
  const extras = document.getElementById('rsvp-extras');
  const isOpen = extras.classList.contains('open');
  extras.classList.toggle('open', !isOpen);
  toggle.classList.toggle('open', !isOpen);
  toggle.setAttribute('aria-expanded', String(!isOpen));
}

/* ── Share Invite (Web Share API with clipboard fallback) ── */
function shareInvite() {
  var cfg = SITE_CONFIG.share;
  if (navigator.share) {
    navigator.share({ title: cfg.title, text: cfg.text, url: cfg.url }).catch(function() {});
  } else {
    navigator.clipboard.writeText(cfg.url).then(function() {
      showToast('Link copied \u2014 share it with the family');
    }).catch(function() {
      showToast('Copy this link: ' + cfg.url);
    });
  }
}

/* ── RSVP decline — navigate to Send Love > Wishes for Margot ── */
function declineRSVP() {
  var loveTab = document.getElementById('tab-love');
  showPage('love', loveTab);
  setTimeout(function() {
    var wishSection = document.querySelector('.wishes-section');
    if (wishSection) {
      wishSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 350);
}

/* ── Tab switching ── */
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected','false');
    t.setAttribute('tabindex','-1');
  });
  document.getElementById('page-' + id).classList.add('active');
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    btn.setAttribute('tabindex','0');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Tablist arrow-key navigation (ARIA tabs pattern) ── */
document.querySelector('[role="tablist"]').addEventListener('keydown', function(e) {
  const tabs = Array.from(this.querySelectorAll('[role="tab"]'));
  const idx = tabs.indexOf(document.activeElement);
  if (idx < 0) return;
  let next;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    next = tabs[(idx + 1) % tabs.length];
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    next = tabs[(idx - 1 + tabs.length) % tabs.length];
  } else if (e.key === 'Home') {
    next = tabs[0];
  } else if (e.key === 'End') {
    next = tabs[tabs.length - 1];
  }
  if (next) {
    e.preventDefault();
    next.click();
    next.focus();
  }
});

/* ── Toast helper ── */
function showToast(msg, duration) {
  duration = duration || 2400;
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, duration);
}

/* ── Form submission state persistence ── */
function markSubmitted(formId) {
  try { localStorage.setItem('margot-submitted-' + formId, '1'); } catch(e) {}
}
function wasSubmitted(formId) {
  try { return localStorage.getItem('margot-submitted-' + formId) === '1'; } catch(e) { return false; }
}
function showThanksState(formId, thanksId) {
  var form = document.getElementById(formId);
  var thanks = document.getElementById(thanksId);
  if (form) form.style.display = 'none';
  if (thanks) thanks.style.display = 'block';
  /* Hide RSVP section intro text when the RSVP thanks state shows */
  if (formId === 'rsvp-form') {
    var intro = document.getElementById('rsvp-intro');
    if (intro) intro.style.display = 'none';
  }
}

/* ── RSVP form handler ── */
function handleRSVP(e) {
  e.preventDefault();
  var form = document.getElementById('rsvp-form');
  var btn = form.querySelector('button[type="submit"]');

  /* Validation: adults must be at least 1 */
  var adultsInput = form.querySelector('[name="adults"]');
  var adults = parseInt(adultsInput.value, 10);
  if (isNaN(adults) || adults < 1) {
    showToast('Please enter at least 1 adult attending');
    adultsInput.focus();
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Sending\u2026';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      showThanksState('rsvp-form', 'rsvp-thanks');
      markSubmitted('rsvp-form');
      showToast('RSVP received \u2014 see you there');
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 },
          colors: SITE_CONFIG.confetti.colors, gravity: 0.7, scalar: 0.85 });
    } else {
      btn.disabled = false;
      btn.textContent = "We\u2019ll Be There";
      showToast('Something went wrong \u2014 please try again');
    }
  }).catch(function() {
    btn.disabled = false;
    btn.textContent = "We\u2019ll Be There";
    showToast('Network error \u2014 please try again');
  });
}

/* ── Generic form handler (wishes, songs, card) ── */
function handleForm(e, formId, thanksId) {
  e.preventDefault();
  var form = document.getElementById(formId);
  var btn = form.querySelector('button[type="submit"]');
  var origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending\u2026';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      showThanksState(formId, thanksId);
      markSubmitted(formId);
      showToast('Submitted \u2014 thank you');
    } else {
      btn.disabled = false;
      btn.textContent = origText;
      showToast('Something went wrong \u2014 please try again');
    }
  }).catch(function() {
    btn.disabled = false;
    btn.textContent = origText;
    showToast('Network error \u2014 please try again');
  });
}

/* ── Add to Calendar toggle ── */
function toggleCal() {
  const dd = document.getElementById('cal-dropdown');
  const btn = document.getElementById('cal-trigger');
  const isOpen = dd.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    setTimeout(() => {
      document.addEventListener('click', closeCal, { once: true });
    }, 0);
  }
}
function closeCal() {
  document.getElementById('cal-dropdown').classList.remove('open');
  document.getElementById('cal-trigger').setAttribute('aria-expanded','false');
}

/* ── Download .ics (Apple / Outlook) ── */
function downloadICS() {
  var cfg = SITE_CONFIG.calendar;
  var p = SITE_CONFIG.party;
  var ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MargotWildOne//EN',
    'BEGIN:VEVENT',
    'DTSTART;TZID=' + p.timezone + ':' + p.dateISO.replace(/-/g,'') + 'T' + p.timeStart.replace(':','') + '00',
    'DTEND;TZID=' + p.timezone + ':' + p.dateISO.replace(/-/g,'') + 'T' + p.timeEnd.replace(':','') + '00',
    'SUMMARY:' + cfg.summary,
    'DESCRIPTION:' + cfg.description,
    'LOCATION:' + cfg.location.replace(/,/g, '\\,'),
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
  var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href = url; a.download = 'margots-wild-one.ics';
  a.click(); URL.revokeObjectURL(url);
  closeCal();
  showToast('Calendar file downloaded');
}

/* ── Confetti on load — earthy palette ── */
window.addEventListener('load', function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setTimeout(function() {
    confetti({ particleCount: 65, spread: 60, origin: { y: 0.5 },
      colors: SITE_CONFIG.confetti.colors,
      gravity: 0.6, scalar: 0.82 });
  }, 700);
});

/* ═══════════════════════════════════════════
   WELCOME MODAL — first-time visitor guide
═══════════════════════════════════════════ */
(function() {
  var STORAGE_KEY = 'margot-wild-one-welcomed';
  var modal = document.getElementById('welcome-modal');
  var dismissBtn = document.getElementById('welcome-dismiss');

  function showModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    dismissBtn.focus();
  }

  function hideModal() {
    modal.classList.add('closing');
    setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('closing');
      document.body.style.overflow = '';
    }, 300);
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch(e) {}
  }

  /* TESTING MODE — always show modal on load. Restore first-visit check before sending invite. */
  setTimeout(showModal, 1600);

  dismissBtn.addEventListener('click', hideModal);

  /* Close on overlay click (outside card) */
  modal.addEventListener('click', function(e) {
    if (e.target === modal) hideModal();
  });

  /* Close on Escape */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') hideModal();
  });
})();

/* ═══════════════════════════════════════════
   SCROLL INDICATORS — fade out after scrolling
═══════════════════════════════════════════ */
(function() {
  var hints = document.querySelectorAll('[data-scroll-hint]');
  if (!hints.length) return;

  var scrolled = false;

  function checkScroll() {
    if (scrolled) return;
    if (window.scrollY > 120) {
      scrolled = true;
      hints.forEach(function(h) { h.classList.add('hidden'); });
      window.removeEventListener('scroll', checkScroll);
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });

  /* Also hide when switching tabs (new page starts at top) */
  var origShowPage = window.showPage;
  window.showPage = function(id, btn) {
    origShowPage(id, btn);
    /* Reset: show hints on new page, hide after scroll */
    scrolled = false;
    hints.forEach(function(h) { h.classList.remove('hidden'); });
    window.addEventListener('scroll', checkScroll, { passive: true });
  };
})();

/* ═══════════════════════════════════════════
   RESTORE SUBMITTED FORM STATES
   (so refreshing doesn't reset thank-you screens)
═══════════════════════════════════════════ */
(function() {
  var forms = [
    { formId: 'rsvp-form', thanksId: 'rsvp-thanks' },
    { formId: 'wish-form', thanksId: 'wish-thanks' },
    { formId: 'song-form', thanksId: 'song-thanks' },
    { formId: 'card-form', thanksId: 'card-thanks' },
  ];
  forms.forEach(function(f) {
    if (wasSubmitted(f.formId)) {
      showThanksState(f.formId, f.thanksId);
    }
  });
})();

/* ═══════════════════════════════════════════
   PHOTO LIGHTBOX — tap reel photos to enlarge
═══════════════════════════════════════════ */
(function() {
  var lightbox  = document.getElementById('photo-lightbox');
  var plbImg    = document.getElementById('plb-img');
  var plbMonth  = document.getElementById('plb-month');
  var plbClose  = document.getElementById('plb-close');
  var plbPrev   = document.getElementById('plb-prev');
  var plbNext   = document.getElementById('plb-next');

  if (!lightbox) return;

  /* Collect all photo frames that have a real image */
  var frames = [];
  var currentIdx = 0;

  function buildFrameList() {
    frames = Array.from(document.querySelectorAll('.reel-frame.has-photo'));
  }

  function openLightbox(idx) {
    buildFrameList();
    if (!frames.length) return;
    currentIdx = Math.max(0, Math.min(idx, frames.length - 1));
    showFrame(currentIdx);
    lightbox.style.display = 'flex';
    lightbox.classList.remove('closing');
    document.body.style.overflow = 'hidden';
    plbClose.focus();
  }

  function showFrame(idx) {
    var frame = frames[idx];
    var img   = frame.querySelector('img');
    var month = frame.querySelector('.rf-month');
    plbImg.src   = img ? img.src : '';
    plbImg.alt   = img ? img.alt : '';
    plbMonth.textContent = month ? month.textContent : '';
    plbPrev.disabled = (idx === 0);
    plbNext.disabled = (idx === frames.length - 1);
    /* Re-trigger entrance animation */
    plbImg.parentElement.style.animation = 'none';
    plbImg.parentElement.offsetHeight; /* reflow */
    plbImg.parentElement.style.animation = '';
  }

  function closeLightbox() {
    lightbox.classList.add('closing');
    setTimeout(function() {
      lightbox.style.display = 'none';
      lightbox.classList.remove('closing');
      document.body.style.overflow = '';
    }, 200);
  }

  /* Wire up close / prev / next */
  plbClose.addEventListener('click', closeLightbox);
  plbPrev.addEventListener('click', function() {
    if (currentIdx > 0) { currentIdx--; showFrame(currentIdx); }
  });
  plbNext.addEventListener('click', function() {
    if (currentIdx < frames.length - 1) { currentIdx++; showFrame(currentIdx); }
  });

  /* Tap backdrop to close */
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* Keyboard: Escape / arrow keys */
  document.addEventListener('keydown', function(e) {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape')     { closeLightbox(); }
    if (e.key === 'ArrowLeft')  { plbPrev.click(); }
    if (e.key === 'ArrowRight') { plbNext.click(); }
  });

  /* Touch swipe support */
  var touchStartX = 0;
  lightbox.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? plbNext.click() : plbPrev.click(); }
  }, { passive: true });

  /* Attach click and keyboard handlers to each reel frame */
  function attachHandlers() {
    document.querySelectorAll('.reel-frame.has-photo').forEach(function(frame) {
      frame.addEventListener('click', function() {
        buildFrameList();
        openLightbox(frames.indexOf(frame));
      });
      frame.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          buildFrameList();
          openLightbox(frames.indexOf(frame));
        }
      });
    });
  }

  /* Run once DOM is ready (script is deferred at bottom of body) */
  attachHandlers();
})();

/* ═══════════════════════════════════════════
   COUNTDOWN TIMER
═══════════════════════════════════════════ */
(function() {
  var target = SITE_CONFIG.countdown.targetDate;
  var daysEl  = document.getElementById('cd-days');
  var hoursEl = document.getElementById('cd-hours');
  var minsEl  = document.getElementById('cd-mins');
  var secsEl  = document.getElementById('cd-secs');

  if (!daysEl) return;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var now  = new Date();
    var diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    daysEl.textContent  = pad(d);
    hoursEl.textContent = pad(h);
    minsEl.textContent  = pad(m);
    secsEl.textContent  = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();
