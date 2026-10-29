/* =========================================================
   Miro Lagueux — Portfolio (v2)
   - Le texte FRANÇAIS (par défaut) est dans index.html
   - Le texte ANGLAIS est dans EN ci-dessous (mêmes clés que data-i18n)
   - Aucun témoin, aucun stockage : la langue est gardée dans l'URL (?lang=en)
   ========================================================= */

const EN = {
  "meta.title": "Miro Lagueux — Learning Technology, LMS & Linguistics",
  "meta.desc": "Turnkey training focused on lasting behaviour change. SCORM packages, HTML design, LMS consulting, EN-FR translation, writing, video and AI.",

  "nav.home": "Home",
  "nav.services": "Services",
  "nav.approach": "Approach",
  "nav.work": "Track record",
  "nav.about": "About",
  "nav.contact": "Contact",

  "home.eyebrow": "Learning technology · LMS · Linguistics",
  "home.title": "Training that <em>changes behaviour</em>.",
  "home.lead": "Anyone can create content today. I design turnkey training that lastingly changes how people work, and I measure the results.",
  "home.cta1": "View services",
  "home.cta2": "Get in touch",

  "services.title": "Everything you need for training that pays off.",
  "services.sub": "From design to LMS integration, one single point of contact.",
  "s1.t": "Turnkey SCORM packages",
  "s1.d": "Your existing training converted to SCORM, or custom modules built from scratch.",
  "s2.t": "HTML design & editors",
  "s2.d": "Polished templates, portals and content that work in your LMS editors.",
  "s3.t": "E-learning content",
  "s3.d": "Interactive learning paths designed to drive action, not just inform.",
  "s4.t": "Learning technology & LMS consulting",
  "s4.d": "Choose, configure and run your LMS so it truly serves your goals.",
  "s5.t": "Translation & localization EN ↔ FR",
  "s5.d": "A linguist’s eye: content that reads naturally and speaks to your audience.",
  "s6.t": "Writing & language editing",
  "s6.d": "Clear, precise, error-free text, from narration scripts to user guides.",
  "s7.t": "Video editing & microlearning",
  "s7.d": "Short, effective learning videos and video user guides.",
  "s8.t": "AI in learning",
  "s8.d": "Bring AI into content creation, with sound practices and clear guardrails.",

  "approach.title": "Creating content is easy. <em>Changing behaviour</em> is my job.",
  "approach.sub": "Training doesn’t end when the learner closes the module. I measure, analyze the data and aim for tangible, lasting results.",
  "a1.t": "Before",
  "a1.d": "Measure learners’ starting skills.",
  "a2.t": "During",
  "a2.d": "Track progress and adjust along the way.",
  "a3.t": "After",
  "a3.d": "Validate learning as soon as training ends.",
  "a4.t": "On the job",
  "a4.d": "Measure real-world application in the workplace, some time later.",

  "work.title": "Experience you can measure.",
  "work.sub": "From professional orders to SMEs, public services and large corporations.",
  "w1.t": "years of experience",
  "w1.d": "in training and learning technology.",
  "w2.t": "LMS implementations",
  "w2.d": "large-scale projects completed over the last 7 years.",
  "w3.t": "years in behaviour change",
  "w3.d": "creating content for large corporations.",
  "k1": "Professional orders",
  "k2": "Small and medium-sized businesses",
  "k3": "Public services",
  "k4": "Large corporations",

  "about.title": "A linguist by training, a learning technologist by trade.",
  "about.p": "At Skillable / Humance, I spent three years designing training content focused on lasting behaviour change for large corporations. I have also completed more than 100 large-scale LMS implementation projects. Today, I offer a turnkey product: design, writing, integration and measurement of results.",
  "about.l1": "Education",
  "about.v1": "Linguistics and professional writing",
  "about.l2": "Languages",
  "about.v2": "French · English",
  "about.l3": "Expertise",
  "c1": "Data analysis",
  "c2": "Video editing",
  "c3": "Generative AI",

  "contact.title": "A training project? <em>Let’s talk.</em>",
  "contact.p": "Write to me by email or on LinkedIn. Tell me about your audience, your goals and your timeline.",
  "contact.note": "No forms, no cookies and no tracking on this site.",

  "legal.link": "Privacy",
  "legal.title": "Privacy & legal notice",
  "legal.p1": "This website does not collect personal information. It uses no forms, no cookies, no analytics and no third-party trackers, and it loads no external fonts or scripts.",
  "legal.p2": "The hosting provider may keep standard technical logs (such as IP address and browser type) for security and operation purposes.",
  "legal.p3": "Your language choice is kept only in the page address. Site published by Miro Lagueux.",
  "legal.close": "Close",

  "aria.lang": "Language",
  "aria.menu": "Menu",
  "aria.prev": "Previous section",
  "aria.next": "Next section",
  "aria.qc": "Flag of Quebec",
  "aria.ca": "Flag of Canada"
};

/* ---------------------------------------------------------
   Éléments
   --------------------------------------------------------- */
const html     = document.documentElement;
const app      = document.querySelector(".app");
const stage    = document.querySelector(".stage");
const panels   = [...document.querySelectorAll(".panel")];
const ids      = panels.map(p => p.dataset.panel);
const navLinks = [...document.querySelectorAll(".nav a")];
const menuBtn  = document.querySelector(".menu-btn");
const prevBtn  = document.getElementById("prev");
const nextBtn  = document.getElementById("next");
const legal    = document.getElementById("legal");
const metaDesc = document.querySelector('meta[name="description"]');

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("tot").textContent  = String(ids.length).padStart(2, "0");

/* ---------------------------------------------------------
   Langue (français par défaut)
   --------------------------------------------------------- */
const FR = {};
document.querySelectorAll("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll("[data-i18n-aria]").forEach(el => { FR[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
FR["meta.title"] = document.title;
FR["meta.desc"]  = metaDesc.content;

function setLang(lang, updateUrl = true) {
  const dict = lang === "en" ? EN : FR;
  html.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const v = dict[el.dataset.i18nAria];
    if (v !== undefined) el.setAttribute("aria-label", v);
  });
  document.title   = dict["meta.title"];
  metaDesc.content = dict["meta.desc"];

  document.querySelectorAll(".lang button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  if (updateUrl) {
    const url = new URL(location.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  }
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

setLang(new URLSearchParams(location.search).get("lang") === "en" ? "en" : "fr", false);

/* ---------------------------------------------------------
   Sections
   --------------------------------------------------------- */
let current = 0;

function closeMenu() {
  app.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

function show(id, focus = false) {
  const i = Math.max(0, ids.indexOf(id));
  current = i;

  panels.forEach((p, n) => {
    const active = n === i;
    p.classList.toggle("is-active", active);
    p.setAttribute("aria-hidden", String(!active));
    p.inert = !active;
    if (active) p.scrollTop = 0;
  });
  navLinks.forEach(a => {
    if (a.getAttribute("href") === "#" + ids[i]) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });

  stage.dataset.num = panels[i].dataset.num;
  document.getElementById("cur").textContent = String(i + 1).padStart(2, "0");
  document.getElementById("bar").style.width = ((i + 1) / ids.length * 100) + "%";
  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === ids.length - 1;

  closeMenu();
  if (focus) panels[i].querySelector("[tabindex='-1']")?.focus({ preventScroll: true });
}

function go(step) {
  const i = Math.min(ids.length - 1, Math.max(0, current + step));
  if (i !== current) location.hash = ids[i];
}

window.addEventListener("hashchange", () => show(location.hash.slice(1), true));
prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));

menuBtn.addEventListener("click", () => {
  const open = !app.classList.contains("menu-open");
  app.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.forEach(a => a.addEventListener("click", closeMenu));

show(location.hash.slice(1) || "home");

/* ---------------------------------------------------------
   Clavier, molette et balayage
   --------------------------------------------------------- */
const busy = () => legal.open || app.classList.contains("menu-open");
const panelScrolls = () => {
  const p = panels[current];
  return p.scrollHeight > p.clientHeight + 2;
};

document.addEventListener("keydown", e => {
  if (busy()) return;
  if (["ArrowRight", "PageDown"].includes(e.key) || (e.key === "ArrowDown" && !panelScrolls())) { e.preventDefault(); go(1); }
  if (["ArrowLeft", "PageUp"].includes(e.key)   || (e.key === "ArrowUp"   && !panelScrolls())) { e.preventDefault(); go(-1); }
  if (e.key === "Escape") closeMenu();
});

let wheelLock = false;
window.addEventListener("wheel", e => {
  if (busy() || wheelLock || panelScrolls() || Math.abs(e.deltaY) < 25) return;
  wheelLock = true;
  go(e.deltaY > 0 ? 1 : -1);
  setTimeout(() => (wheelLock = false), 900);
}, { passive: true });

let tx = 0, ty = 0;
window.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
window.addEventListener("touchend", e => {
  if (busy()) return;
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
}, { passive: true });

/* ---------------------------------------------------------
   Fenêtre confidentialité
   --------------------------------------------------------- */
document.getElementById("legalOpen").addEventListener("click", () => legal.showModal());
document.getElementById("legalClose").addEventListener("click", () => legal.close());
legal.addEventListener("click", e => {
  const r = legal.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) legal.close();
});
