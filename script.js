/* =========================================================
   Miro Lagueux — Portfolio
   - English text lives in index.html
   - French text lives in FR below (same keys as data-i18n)
   - No cookies, no localStorage: language is kept in the URL (?lang=fr)
   ========================================================= */

const FR = {
  "meta.title": "Miro Lagueux — Implantation LMS et formation numérique",
  "meta.desc": "Spécialiste autonome en implantation LMS et en formation numérique. Configuration de plateformes, portails à votre image, contenu de formation en ligne. FR / EN / ES. Disponible en 2027.",

  "nav.home": "Accueil",
  "nav.services": "Services",
  "nav.approach": "Approche",
  "nav.work": "Réalisations",
  "nav.about": "À propos",
  "nav.contact": "Contact",

  "home.eyebrow": "Travailleur autonome · Disponible en 2027",
  "home.title": "Des plateformes de formation <em>vraiment</em> utilisées.",
  "home.lead": "J’aide les organisations à lancer, structurer et personnaliser leur LMS, de la configuration aux portails à leur image, jusqu’au contenu de formation prêt à l’emploi.",
  "home.cta1": "Voir les services",
  "home.cta2": "Me joindre sur LinkedIn",
  "home.meta": "À distance · Canada et Mexique · FR / EN / ES",

  "services.title": "Ce que je peux faire pour votre organisation.",
  "services.sub": "De la première configuration à une plateforme que votre équipe gère en toute autonomie.",
  "s1.t": "Implantation LMS",
  "s1.d": "Configuration et déploiement, du démarrage au lancement.",
  "s2.t": "Portails et tableaux de bord",
  "s2.d": "Portails de formation et tableaux de bord fidèles à votre image de marque.",
  "s3.t": "Contenu de formation en ligne",
  "s3.d": "Structure de cours, scripts de narration et quiz prêts à intégrer.",
  "s4.t": "Gabarits et communications",
  "s4.d": "Attestations et courriels de notification, conçus une fois et réutilisés.",
  "s5.t": "Formation des administrateurs",
  "s5.d": "Votre équipe gère la plateforme de façon autonome, guides à l’appui.",
  "s6.t": "Traduction et localisation",
  "s6.d": "Contenu de formation FR / EN / ES naturel, pas une traduction littérale.",

  "approach.title": "Une démarche claire en quatre étapes.",
  "approach.sub": "Aucune surprise&nbsp;: vous savez où on en est à chaque étape.",
  "a1.t": "Découvrir",
  "a1.d": "Besoins, publics cibles et contraintes.",
  "a2.t": "Structurer",
  "a2.d": "Programmes, rôles et processus.",
  "a3.t": "Construire",
  "a3.d": "Configuration, design et contenu.",
  "a4.t": "Transférer",
  "a4.d": "Formation, documentation et soutien.",

  "work.title": "Projets types.",
  "work.sub": "Les projets sont anonymisés par respect de la confidentialité des clients.",
  "w1.tag": "Municipalité",
  "w1.t": "Portail de formation des employés",
  "w1.d": "Portail et tableau de bord à l’image de l’organisation, qui centralisent la formation obligatoire et facultative.",
  "w2.tag": "Santé",
  "w2.t": "Parcours de formation obligatoire",
  "w2.d": "Programmes structurés avec attestations de réussite automatisées.",
  "w3.tag": "Commerce et services",
  "w3.t": "Accueil des nouveaux employés",
  "w3.d": "Programme d’intégration pour des équipes réparties sur plusieurs sites.",
  "w4.tag": "Organisme de formation",
  "w4.t": "Catalogue et inscriptions",
  "w4.d": "Catalogue de formations public avec un parcours d’inscription simplifié.",

  "about.title": "La langue, la structure et la technologie.",
  "about.p": "Formé en linguistique et en rédaction professionnelle, je me suis spécialisé en implantation de LMS, là où se rencontrent la langue, la structure et la technologie. Je fais le pont entre les besoins des équipes de formation et ce que la plateforme peut réellement faire, et je rédige le contenu entre les deux.",
  "about.l1": "Langues",
  "about.v1": "Français · Anglais · Espagnol",
  "about.l2": "Mode de travail",
  "about.v2": "À distance — Canada et Mexique",
  "about.l3": "Outils",
  "c1": "Plateformes LMS",
  "c3": "Outils auteurs e-learning",
  "c4": "Narration vocale IA",
  "c5": "Importations Excel / CSV",

  "contact.title": "Un projet pour 2027? <em>Parlons-en.</em>",
  "contact.p": "Le plus simple est de m’écrire sur LinkedIn. Parlez-moi de votre plateforme, de votre échéancier et de vos objectifs.",
  "contact.note": "Aucun formulaire, aucun témoin (cookie) ni outil de suivi sur ce site.",

  "legal.link": "Confidentialité",
  "legal.title": "Confidentialité et mentions légales",
  "legal.p1": "Ce site ne recueille aucun renseignement personnel. Il n’utilise aucun formulaire, aucun témoin (cookie), aucun outil d’analyse ni traceur tiers, et ne charge aucune police ou aucun script externe.",
  "legal.p2": "L’hébergeur peut conserver des journaux techniques usuels (comme l’adresse IP et le type de navigateur) à des fins de sécurité et de fonctionnement.",
  "legal.p3": "Votre choix de langue est conservé uniquement dans l’adresse de la page. Site publié par Miro Lagueux.",
  "legal.close": "Fermer",

  "aria.lang": "Langue",
  "aria.menu": "Menu",
  "aria.prev": "Section précédente",
  "aria.next": "Section suivante"
};

/* ---------------------------------------------------------
   Elements
   --------------------------------------------------------- */
const html     = document.documentElement;
const app      = document.querySelector(".app");
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
   Language
   --------------------------------------------------------- */
const EN = {};   // English originals captured from the HTML
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll("[data-i18n-aria]").forEach(el => { EN[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
EN["meta.title"] = document.title;
EN["meta.desc"]  = metaDesc.content;

function setLang(lang, updateUrl = true) {
  const dict = lang === "fr" ? FR : EN;
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
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

const urlLang = new URLSearchParams(location.search).get("lang");
const startLang = urlLang === "fr" || urlLang === "en"
  ? urlLang
  : (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
setLang(startLang, false);

/* ---------------------------------------------------------
   Panels (hash navigation: #services, #about, ...)
   --------------------------------------------------------- */
let current = 0;

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

  document.querySelector(".stage").dataset.num = panels[i].dataset.num;
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
show(location.hash.slice(1) || "home");

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));

/* ---------------------------------------------------------
   Mobile menu
   --------------------------------------------------------- */
function closeMenu() {
  app.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
}
menuBtn.addEventListener("click", () => {
  const open = !app.classList.contains("menu-open");
  app.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.forEach(a => a.addEventListener("click", closeMenu));

/* ---------------------------------------------------------
   Keyboard, wheel and swipe → change section
   (only when the active panel doesn't need its own scroll)
   --------------------------------------------------------- */
const busy = () => legal.open || app.classList.contains("menu-open");
const panelScrolls = () => {
  const p = panels[current];
  return p.scrollHeight > p.clientHeight + 2;
};

document.addEventListener("keydown", e => {
  if (busy() || e.target.closest("input, textarea")) return;
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
   Privacy dialog
   --------------------------------------------------------- */
document.getElementById("legalOpen").addEventListener("click", () => legal.showModal());
document.getElementById("legalClose").addEventListener("click", () => legal.close());
legal.addEventListener("click", e => {
  const r = legal.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (outside) legal.close();
});
