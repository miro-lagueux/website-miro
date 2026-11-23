/* =========================================================
   Miro Lagueux — Script unique du site
   Pages : index.html (accueil), offre.html, demos.html
   - Toutes les pages partagent le même en-tête, le même menu de
     8 sections, le même pied de page et la même fenêtre Confidentialité.
   - Le texte FRANÇAIS (par défaut) est dans les fichiers HTML.
   - Le texte ANGLAIS est dans EN ci-dessous (mêmes clés que data-i18n).
   - Aucun témoin, aucun stockage : la langue est gardée dans l'URL (?lang=en).
   ========================================================= */
const EN = {
  /* ---------- Commun ---------- */
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.approach": "Approach",
  "nav.work": "Track record",
  "nav.about": "About",
  "nav.offer": "Offer",
  "nav.demos": "Demos",
  "nav.contact": "Contact",
  "legal.link": "Privacy",
  "legal.title": "Privacy & legal notice",
  "legal.p1": "This website does not collect personal information. It uses no forms, no cookies, no analytics and no third-party trackers, and it loads no external fonts or scripts.",
  "legal.p2": "The hosting provider may keep standard technical logs (such as IP address and browser type) for security and operation purposes.",
  "legal.p3": "Your language choice is kept only in the page address. Site published by Miro Lagueux.",
  "legal.close": "Close",
  "mail.subject": "Quote request",
  "aria.lang": "Language",
  "aria.menu": "Menu",
  "aria.prev": "Previous section",
  "aria.next": "Next section",
  "aria.qc": "Flag of Quebec",
  "aria.ca": "Flag of Canada",

  /* ---------- Accueil (index.html) ---------- */
  "home.meta.title": "Miro Lagueux — Learning Technology, LMS & Linguistics",
  "home.meta.desc": "Complete learning paths, interactive SCORM training and quizzes, FR-EN writing, translation and localization, LMS management and content integration, microlearning videos, tutorials and technical guides, AI-assisted content creation with a human touch.",
  "home.eyebrow": "Online training content · LMS · Linguistics",
  "home.title": "Human-centred training that <em>changes behaviour</em>.",
  "home.lead": "Today, anyone can create content in a few clicks. What matters is quality and the human touch, even when using AI and the latest technologies. We design turnkey online training content that lastingly changes how people work, and we measure the results.",
  "home.cta1": "View services",
  "home.cta2": "Get in touch",
  "services.title": "What we deliver, turnkey.",
  "services.sub": "From needs analysis to going live in your LMS, we take your project from start to finish.",
  "s1.t": "Complete learning paths",
  "s1.d": "We design your learning paths end to end: needs analysis, storyboarding, content, assessments and results measurement.",
  "t1a": "Learning technology",
  "t1c": "Behaviour change",
  "s2.t": "Interactive SCORM training & quizzes",
  "s2.d": "We build interactive modules and quizzes, delivered as SCORM and ready to deploy in your LMS.",
  "s3.t": "Writing, translation & localization",
  "s3.d": "We write, edit and adapt your training content, scripts and guides in French and English.",
  "s4.t": "LMS management & content integration",
  "s4.d": "We configure and administer your platform and integrate your content so it stays reliable and up to date.",
  "s5.t": "AI-assisted content, with a human touch",
  "s5.d": "We use AI and the latest technologies to produce faster, then add the human expertise and judgment that guarantee quality and accuracy.",
  "t5a": "Generative AI",
  "t5b": "Speech synthesis",
  "t5c": "Human narration",
  "s6.t": "Microlearning videos, tutorials & technical guides",
  "s6.d": "We produce and edit learning videos, tutorials and clear technical guides to support your users.",
  "t6a": "Video editing",
  "t6b": "Microlearning",
  "t6c": "Tutorials",
  "s7.t": "Results measurement & analysis",
  "s7.d": "We measure learning and on-the-job application, then analyze the data to demonstrate the real impact of training.",
  "t7a": "Data analysis",
  "t7b": "Reports",
  "s8.t": "Training",
  "s8.d": "We have extensive training experience. We train your staff online on your processes, your tools or your LMS.",
  "t8a": "Online training",
  "approach.title": "Creating content is one thing. <em>Driving behaviour adoption and measuring it</em> is another.",
  "approach.sub": "This is our approach in a full engagement to create a learning path. We also offer other services, à la carte (see the Offer tab).",
  "a1.t": "Before",
  "a1.d": "Analyze the project with you and design the training on paper.",
  "a2.t": "At the start",
  "a2.d": "Measure learners’ starting skills and knowledge.",
  "a3.t": "During",
  "a3.d": "Track progress and adjust along the way.",
  "a4.t": "At the end",
  "a4.d": "Validate learning as soon as training ends.",
  "a5.t": "On the job",
  "a5.d": "Measure real-world application in the workplace, some time later.",
  "work.title": "Experience you can measure.",
  "w1.t": "years of experience",
  "w1.d": "in training and learning technology.",
  "w2.t": "LMS implementation and behaviour change projects",
  "w2.d": "small, medium and large-scale projects completed over the last 10 years.",
  "k1": "Professional orders",
  "k2": "Small and medium-sized businesses",
  "k3": "Public services",
  "k4": "Large corporations",
  "e1": "Adult education",
  "e2": "CEGEPs",
  "e3": "Universities",
  "e4": "Vocational training",
  "e5": "Corporate services",
  "about.title": "Linguists by training, learning technologists by trade.",
  "about.p": "We have designed training content focused on lasting behaviour adoption for large corporations. We have also completed more than 100 LMS implementation projects. Today, we offer a turnkey product: design, writing, integration and measurement of results.",
  "about.l1": "Education",
  "about.v1": "Linguistics and professional writing, translation, learning technology",
  "about.l2": "Languages",
  "about.v2": "French · English · Mexican Spanish on request",
  "about.l3": "Expertise",
  "c1": "Language and linguistics",
  "c2": "Online training",
  "c3": "Self-paced learning",
  "c4": "Learning design and technology",
  "c5": "Generative AI",
  "c6": "Data analysis",
  "c7": "Training microlearning videos",
  "c8": "Video editing",
  "c9": "Audio processing",
  "contact.title": "A training project? <br><em>Let’s talk.</em>",
  "contact.p": "Write to us by email or on LinkedIn. Tell us about your audience, your goals and your timeline.",
  "contact.note": "No forms, no cookies, no personal data and no tracking on this site.",

  /* ---------- Offre (offre.html) ---------- */
  "offre.meta.title": "Service offer — Miro Lagueux",
  "offre.meta.desc": "On-demand services and complete e-learning projects: LMS integration, translation, job aids, learning design, interactive modules with macro and micro design, behaviour change learning paths.",
  "of.eyebrow": "Service offer",
  "of.title": "From on-demand help <em>to complete projects</em>.",
  "of.lead": "A job aid to produce, a module to integrate into your LMS or a complete learning path: we adapt to the size of your need. Every engagement starts with a free written quote.",
  "of.cta.quote": "Request a quote",
  "of.cta.pdf": "Download the offer as PDF",
  "of.alc.eyebrow": "À la carte",
  "of.alc.title": "Need a quick hand? <em>We’ve got it covered.</em>",
  "of.alc.sub": "For a one-off need, an update or to support your team on short notice. One simple rate, whatever the service: you only pay for what you need.",
  "of.a1": "LMS integration and SCORM testing of an existing module",
  "of.a2": "Job aid, quick reference or technical guide",
  "of.a3": "Video or tutorial",
  "of.a4": "Translation and localization FR ↔ EN (Mexican Spanish on request)",
  "of.a5": "Writing and language editing",
  "of.a6": "Update of an existing module",
  "of.a7": "Learning technology and LMS consulting",
  "of.a8": "Learning design and technology",
  "of.a9": "Online staff training (training or LMS)",
  "of.rate.n": "$75",
  "of.rate.u": "per hour",
  "of.plans.eyebrow": "Complete projects",
  "of.plans.title": "Going further: three packages.",
  "of.plans.sub": "Every project is unique. The price is set in a free written quote, based on complexity and volume.",
  "of.est": "Custom quote",
  "of.delay": "Indicative timeline",
  "of.badge": "Most requested",
  "of.p1.tag": "Conversion",
  "of.p1.t": "Convert existing training into interactive content",
  "of.p1.d": "Your existing content (PowerPoint, PDF, Word) turned into an interactive online module.",
  "of.p1.i1": "Tool chosen to match the style you want",
  "of.p1.i2": "Interactive layout of your content",
  "of.p1.i3": "Knowledge check quiz",
  "of.p1.i4": "1 round of revisions",
  "of.p1.i5": "Tested SCORM package, ready for your LMS",
  "of.p1.delay": "1 to 2 weeks",
  "of.p2.tag": "Custom",
  "of.p2.t": "Custom interactive module",
  "of.p2.d": "Training designed from A to Z to get your learners acting, not just informed.",
  "of.p2.i1": "Needs analysis and learning objectives",
  "of.p2.i2": "<b>Macro design</b>: high-level training plan, approved by you",
  "of.p2.i3": "<b>Micro design</b>: detailed screen-by-screen plan, approved by you",
  "of.p2.i4": "Scenarios and interactions",
  "of.p2.i5": "Quizzes and final assessment",
  "of.p2.i6": "Realistic next-generation AI narration (FR or EN)",
  "of.p2.i7": "2 rounds of revisions",
  "of.p2.i8": "Integration and testing in your LMS",
  "of.p2.i9": "Source files included",
  "of.p2.delay": "3 to 5 weeks",
  "of.p3.tag": "Complete path",
  "of.p3.t": "Behaviour change",
  "of.p3.d": "A learning path measured all the way to the workplace, for tangible and lasting results.",
  "of.p3.i1": "Everything in the custom package",
  "of.p3.i2": "Macro and micro design of the full path, approved by you",
  "of.p3.i3": "Learning path of 3 modules or more",
  "of.p3.i4": "Job aids and quick references",
  "of.p3.i5": "Measurement before, during and after training",
  "of.p3.i6": "Follow-up on on-the-job application",
  "of.p3.i7": "Results analysis report",
  "of.p3.delay": "6 to 10 weeks",
  "of.valid": "Rates in effect at the time of viewing. Final quote provided in writing.",
  "of.style.eyebrow": "Style and narration",
  "of.style.title": "You choose the style of your training.",
  "of.tools.t": "The right tools for the right need",
  "of.tools.d": "Each style has its strengths: clean microlearning, interactive scenarios, simulations or quizzes. We use many SCORM content authoring tools depending on the need, along with AI, audio processing, graphic design and video editing tools. We choose the ones that suit your audience and your LMS.",
  "of.tt1": "SCORM authoring tools",
  "of.tt2": "AI tools",
  "of.tt3": "Audio processing",
  "of.tt4": "Graphic design",
  "of.tt5": "Video editing",
  "of.tools.link": "Compare styles on the Demos page",
  "of.voice.t": "AI narration or human voice",
  "of.voice.d": "Narration is produced with the latest speech synthesis models: natural, expressive and highly realistic, in French and English.",
  "of.voice.d2": "Prefer a real voice? We also work with professional narrators, in French and English. Rates on request.",
  "of.voice.tag1": "Realistic AI voice",
  "of.voice.tag2": "Human voice",
  "of.proc.eyebrow": "Process",
  "of.proc.title": "How it works.",
  "of.proc.sub": "For custom modules and learning paths, nothing is produced until you have approved the macro design, then the micro design.",
  "of.o1.t": "Discovery call",
  "of.o1.d": "30 minutes, free of charge, to understand your need, your audience and your constraints.",
  "of.o2.t": "Written quote",
  "of.o2.d": "Deliverables, indicative timeline and price, approved before any work begins.",
  "of.o3.t": "Macro design",
  "of.o3.d": "High-level plan: objectives, structure, approach and assessment. <b>You approve it.</b>",
  "of.o4.t": "Micro design",
  "of.o4.d": "Detailed plan: content, screens, interactions and narration. <b>You approve it.</b>",
  "of.o5.t": "Production and revisions",
  "of.o5.d": "Development true to the approved micro design, then revisions according to the package.",
  "of.o6.t": "Delivery and integration",
  "of.o6.d": "Go-live and testing in your LMS, then results measurement depending on the package.",
  "of.terms.eyebrow": "Terms",
  "of.terms.title": "Simple and transparent.",
  "of.c1.t": "Payment",
  "of.c1.d": "No payment upfront. Completed work is invoiced monthly. For larger projects, payment milestones are agreed in the quote. Prices in Canadian dollars.",
  "of.c2.t": "Timelines",
  "of.c2.d": "Timelines are indicative. In practice, work is generally delivered as quickly as possible.",
  "of.c3.t": "Revisions",
  "of.c3.d": "The rounds included in the package are covered. Additional revisions are billed at the hourly rate.",
  "of.c4.t": "What you provide",
  "of.c4.d": "The source content, a subject matter expert available for approvals and test access to your LMS.",
  "of.c5.t": "Deliverables and ownership",
  "of.c5.d": "All deliverables are handed over to you and belong to you once paid. A copy is also kept on our server, which makes future updates easier.",
  "of.c6.t": "Hosting and security",
  "of.c6.d": "All project data is hosted and maintained in Canada, in the Microsoft Azure cloud, according to the highest security standards.",
  "of.cta.title": "A project, big or small? <br><em>Let’s talk.</em>",
  "of.cta.lead": "Tell us about your need: we’ll reply with a written quote within 2 business days.",

  /* ---------- Démos (demos.html) ---------- */
  "demos.meta.title": "Demos — Miro Lagueux",
  "demos.meta.desc": "E-learning style demos: quiz, microlearning, interactive job aid, narration, scenario and simulation.",
  "dm.eyebrow": "Demos",
  "dm.title": "Choose <em>your style</em>.",
  "dm.lead": "Each style meets a different need. Try the demos, compare them, then tell us which one suits your audience: we’ll take care of the rest.",
  "dm.notice.t": "A taste, not a real training course",
  "dm.notice.d": "These demos are fictional examples, created so you can try each style. Your own training will be custom-built from your content, your audience and your brand. More demos are coming soon, and we can also show you examples during a discovery call.",
  "dm.list.eyebrow": "Styles",
  "dm.list.title": "A preview of each style.",
  "dm.soon": "Coming soon",
  "dm.try": "Try the demo",
  "dm.v1": "Microlearning",
  "dm.d1.tag": "Clean style",
  "dm.d1.t": "Microlearning",
  "dm.d1.d": "A short, clean and responsive module, ideal on desktop and on mobile.",
  "dm.d1.aria": "Open the microlearning demo in a new tab",
  "dm.v2": "Scenario",
  "dm.d2.tag": "Realistic situation",
  "dm.d2.t": "Branching scenario",
  "dm.d2.d": "A realistic situation where every choice has consequences, to practise the right behaviours.",
  "dm.v3": "Quiz",
  "dm.d3.tag": "Assessment",
  "dm.d3.t": "Interactive quiz",
  "dm.d3.d": "Varied questions with instant feedback, to validate learning.",
  "dm.d3.aria": "Open the quiz demo in a new tab",
  "dm.v4": "Simulation",
  "dm.d4.tag": "Guided practice",
  "dm.d4.t": "Software simulation",
  "dm.d4.d": "Learners practise a task in software, step by step, in guided then independent mode.",
  "dm.v5": "Voice",
  "dm.d5.tag": "Narration",
  "dm.d5.t": "Next-generation AI narration",
  "dm.d5.d": "A natural, fluid and localized voice. Listen to the presentation of our services.",
  "dm.d5.aria": "Narration demo",
  "dm.v6": "Job aid",
  "dm.d6.tag": "Support tools",
  "dm.d6.t": "Interactive job aid: PAR 5 in OHS",
  "dm.d6.d": "A form to fill out on a phone before a task, download as PDF or email to a supervisor.",
  "dm.d6.aria": "Open the job aid demo in a new tab",
  "dm.cta.title": "Want to see an example <br><em>right now?</em>",
  "dm.cta.lead": "Write to us: we’ll show you examples tailored to your need during a free 30-minute call.",
  "dm.cta.offer": "See the service offer"
};

/* =========================================================
   1. Parcours de navigation : les 8 sections du menu
   Identique sur toutes les pages. Ordre = menu = flèches du bas.
   ========================================================= */
const STEPS = ["home", "services", "approach", "work", "about", "offre", "demos", "contact"];
const PAGE_STEPS = ["offre", "demos"];              // sections qui sont des pages séparées
const page     = document.body.dataset.page;        // "home", "offre" ou "demos"
const isHome   = page === "home";
const html     = document.documentElement;
const metaDesc = document.querySelector('meta[name="description"]');
const pad2     = n => String(n).padStart(2, "0");

/* Adresse d'une section, en conservant la langue */
function stepUrl(step) {
  const q = html.lang === "en" ? "?lang=en" : "";
  return PAGE_STEPS.includes(step) ? step + ".html" + q : "index.html" + q + "#" + step;
}

/* Met à jour le menu (lien actif) et le compteur du bas */
function markStep(step) {
  const i = STEPS.indexOf(step);
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.dataset.step === step) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.getElementById("tot").textContent = pad2(STEPS.length);
  document.getElementById("cur").textContent = pad2(i + 1);
  document.getElementById("bar").style.width = ((i + 1) / STEPS.length * 100) + "%";
  document.getElementById("prev").disabled = i === 0;
  document.getElementById("next").disabled = i === STEPS.length - 1;
  const stage = document.querySelector(".stage");
  if (stage) stage.dataset.num = pad2(i + 1);
}

/* =========================================================
   2. Langue (français par défaut, ?lang=en pour l'anglais)
   ========================================================= */
const FR = {};
document.querySelectorAll("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll("[data-i18n-aria]").forEach(el => { FR[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
FR[page + ".meta.title"] = document.title;
FR[page + ".meta.desc"]  = metaDesc.content;
FR["mail.subject"] = "Demande d’estimation";

const baseHref = new Map();
document.querySelectorAll("a[data-keep-lang]").forEach(a => baseHref.set(a, a.getAttribute("href")));

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
  document.querySelectorAll("[data-i18n-mail]").forEach(a => {
    a.href = "mailto:info@mirolagueux.com?subject=" + encodeURIComponent(dict["mail.subject"]);
  });
  baseHref.forEach((href, a) => {
    if (lang !== "en") { a.setAttribute("href", href); return; }
    const [path, hash] = href.split("#");
    a.setAttribute("href", path + "?lang=en" + (hash ? "#" + hash : ""));
  });
  document.title   = dict[page + ".meta.title"];
  metaDesc.content = dict[page + ".meta.desc"];
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

/* =========================================================
   3. Menu mobile, confidentialité, année
   ========================================================= */
const app     = document.querySelector(".app");
const menuBtn = document.querySelector(".menu-btn");
const legal   = document.getElementById("legal");

function closeMenu() {
  app.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
}
menuBtn.addEventListener("click", () => {
  const open = !app.classList.contains("menu-open");
  app.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

document.getElementById("legalOpen").addEventListener("click", () => legal.showModal());
document.getElementById("legalClose").addEventListener("click", () => legal.close());
legal.addEventListener("click", e => {
  const r = legal.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) legal.close();
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("printBtn")?.addEventListener("click", () => window.print());

/* =========================================================
   4. Navigation précédente / suivante (identique partout)
   ========================================================= */
let currentStep = isHome ? "home" : page;

function goStep(dir) {
  const k = STEPS.indexOf(currentStep) + dir;
  if (k < 0 || k >= STEPS.length) return;
  const target = STEPS[k];
  if (isHome && !PAGE_STEPS.includes(target)) location.hash = target;   // même page : simple ancre
  else location.href = stepUrl(target);                                 // autre page
}
document.getElementById("prev").addEventListener("click", () => goStep(-1));
document.getElementById("next").addEventListener("click", () => goStep(1));

/* =========================================================
   5. Accueil : sections plein écran, sans défilement
   ========================================================= */
if (isHome) {
  const panels = [...document.querySelectorAll(".panel")];
  const ids    = panels.map(p => p.dataset.panel);

  function show(id, focus = false) {
    const i = Math.max(0, ids.indexOf(id));
    currentStep = ids[i];
    panels.forEach((p, n) => {
      const active = n === i;
      p.classList.toggle("is-active", active);
      p.setAttribute("aria-hidden", String(!active));
      p.inert = !active;
      if (active) p.scrollTop = 0;
    });
    markStep(currentStep);
    closeMenu();
    if (focus) panels[i].querySelector("[tabindex='-1']")?.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", () => show(location.hash.slice(1), true));
  show(location.hash.slice(1) || "home");

  const busy = () => legal.open || app.classList.contains("menu-open");
  const panelScrolls = () => {
    const p = panels[ids.indexOf(currentStep)];
    return p.scrollHeight > p.clientHeight + 2;
  };
  document.addEventListener("keydown", e => {
    if (busy()) return;
    if (["ArrowRight", "PageDown"].includes(e.key) || (e.key === "ArrowDown" && !panelScrolls())) { e.preventDefault(); goStep(1); }
    if (["ArrowLeft", "PageUp"].includes(e.key)   || (e.key === "ArrowUp"   && !panelScrolls())) { e.preventDefault(); goStep(-1); }
  });
  let wheelLock = false;
  window.addEventListener("wheel", e => {
    if (busy() || wheelLock || panelScrolls() || Math.abs(e.deltaY) < 25) return;
    wheelLock = true;
    goStep(e.deltaY > 0 ? 1 : -1);
    setTimeout(() => (wheelLock = false), 900);
  }, { passive: true });
  let tx = 0, ty = 0;
  window.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("touchend", e => {
    if (busy()) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) goStep(dx < 0 ? 1 : -1);
  }, { passive: true });
} else {
  /* Pages Offre et Démos : la page défile, le menu et le pied restent fixes */
  markStep(page);
}
