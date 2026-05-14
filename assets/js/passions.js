(() => {
  "use strict";

const passions = [
  {
    id: "cyber",
    title: "Cybersécurité",
    icon: "🛡️",
    short: "CTF, challenges et veille technique.",
    text: "La cybersécurité est un domaine qui me passionne particulièrement. Sur mon temps libre, je m’entraîne sur Root-Me afin de progresser sur différentes thématiques : web, réseau, forensic, cryptographie ou encore exploitation. J’aime comprendre les failles, analyser leur fonctionnement et développer une vraie logique d’attaquant pour mieux savoir défendre.",
    stats: ["Root-Me", "CTF", "Analyse"],
    link: "https://www.root-me.org/BCNG-861999?lang=fr#c2632043cfe7a4c61747d788cf0b5eff"
  },
  {
    id: "moto",
    title: "Motos",
    icon: "🏍️",
    short: "Balades, liberté et mécanique.",
    text: "La moto représente pour moi un vrai moment de liberté. J’aime partir rouler, découvrir de nouveaux paysages et partager des balades avec mes amis. C’est aussi une passion qui m’intéresse côté technique, notamment pour l’entretien, la personnalisation et la compréhension de la mécanique.",
    stats: ["Road trip", "Customisation", "Entretien"],
    link: "#"
  },
  {
    id: "sport",
    title: "Sport / Fitness",
    icon: "🏋️",
    short: "Discipline, progression et mental.",
    text: "Le sport fait partie de mon équilibre au quotidien. Je pratique notamment la musculation, le street workout et la boxe thaïlandaise. Ces activités me permettent de travailler ma régularité, mon dépassement de soi et ma capacité à rester motivé sur le long terme.",
    stats: ["Musculation", "Boxe thaï", "Street workout"],
    link: "#"
  },
  {
    id: "jeux",
    title: "Jeux",
    icon: "🎮",
    short: "Compétition, stratégie et immersion.",
    text: "Les jeux vidéo sont pour moi un moyen de me détendre, mais aussi de développer des réflexes, de la stratégie et de l’esprit d’équipe. J’apprécie particulièrement les jeux compétitifs, les expériences coopératives et le simracing, qui apporte une dimension plus immersive et technique.",
    stats: ["Teamplay", "Réflexes", "Simracing"],
    link: "https://konect.gg/BCNG"
  },
  {
    id: "tech",
    title: "Tech / Homelab",
    icon: "🧰",
    short: "Infrastructure personnelle et expérimentation.",
    text: "J’aime expérimenter chez moi avec mon propre homelab. J’ai mis en place un environnement complet autour du stockage et du partage de fichiers. Ce type de projet me permet de tester, apprendre et mieux comprendre les technologies que l’on retrouve dans un contexte professionnel.",
    stats: ["Serveur maison", "Accès distant", "Stockage"],
    link: "#"
  }
];

  const grid = document.getElementById("mosaicGrid");
  const titleEl = document.getElementById("passionTitle");
  const textEl = document.getElementById("passionText");
  const statsEl = document.getElementById("passionStats");
  const linkEl = document.getElementById("passionLink");
  const randomBtn = document.getElementById("randomBtn");

  if (!grid) return;

  function renderTiles() {
    grid.innerHTML = passions.map((p) => `
      <button class="tile reveal" type="button" data-id="${p.id}">
        <div class="icon" aria-hidden="true">${p.icon}</div>
        <p class="title">${p.title}</p>
        <p class="desc">${p.short}</p>
      </button>
    `).join("");

    grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));

    grid.querySelectorAll(".tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        const id = tile.dataset.id;
        const p = passions.find((x) => x.id === id);
        if (p) show(p);
      });
    });
  }

  function show(p) {
    titleEl.textContent = p.title;
    textEl.textContent = p.text;
    statsEl.innerHTML = (p.stats || []).map((s) => `<span class="stat-pill">${s}</span>`).join("");
    linkEl.href = p.link || "#";
    linkEl.style.display = p.link && p.link !== "#" ? "inline-flex" : "none";
  }

  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      const p = passions[Math.floor(Math.random() * passions.length)];
      show(p);
    });
  }

  renderTiles();
  show(passions[0]);

  // Compteurs
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = Number(el.getAttribute("data-counter") || "0");
        animateCounter(el, target);
        io.unobserve(el);
      });
    }, { threshold: 0.99 });

    counters.forEach((el) => io.observe(el));
  }

  function animateCounter(el, target) {
    let current = 0;
    const steps = 32;
    const inc = target / steps;

    const tick = () => {
      current += inc;
      if (current >= target) {
        el.textContent = String(target);
        return;
      }
      el.textContent = String(Math.floor(current));
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();
