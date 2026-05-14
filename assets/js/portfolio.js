(() => {
  "use strict";

const projects = [
  {
    id: "audit-securite-si",
    title: "Suivi d’audit cybersécurité & remédiation des vulnérabilités",
    category: "cyber",
    short:
      "Participation à un audit Orange Cyberdéfense, recensement des failles et remédiation progressive en assurant la continuité de service.",
    tags: [
      "Orange Cyberdéfense",
      "Audit cybersécurité",
      "Remédiation",
      "Continuité de service"
    ],
    image: "assets/img/OCD.png",
    details: {
      context:
        "Dans le cadre de mon alternance, j’ai eu l’opportunité de suivre un audit de sécurité mené par Orange Cyberdéfense sur l’infrastructure informatique de mon entreprise. J’ai participé aux différentes phases de cet audit, notamment au suivi des tests réalisés sur l’ensemble de l’infrastructure.",

      objectives:
        "L’objectif principal de ce projet était d’établir un état des lieux complet de la sécurité du système d’information, d’évaluer le niveau de maturité de l’infrastructure et de référencer l’ensemble des failles de sécurité identifiées. À l’issue de cette phase d’analyse, j’ai pu entamer une phase de remédiation, visant à corriger les vulnérabilités détectées.",

      actions: [
        "Les actions mises en œuvre allaient de failles simples, telles que des mises à jour logicielles ou des correctifs de sécurité, à des actions plus complexes, comme la migration de certains systèmes critiques, notamment le changement du système d’exploitation d’un serveur Active Directory vers une version plus récente et sécurisée.",
        "L’ensemble de ces interventions a été réalisé en garantissant une continuité de service totale, avec pour objectif que les utilisateurs finaux ne subissent aucun impact : aucune interruption, aucune coupure et une transparence complète des opérations."
      ],

      result:
        "À ce jour, plus de 80 % des failles de sécurité identifiées ont été corrigées, ce qui représente une amélioration significative du niveau de sécurité global de l’infrastructure.",

      learned: [
        "Ce projet m’a permis de faire le lien direct entre les enseignements théoriques suivis en formation et leur application concrète en entreprise. J’ai pu mobiliser de nombreuses notions en cybersécurité, tout en en découvrant de nouvelles dans un contexte réel et exigeant. \n" +
        "Cette expérience a constitué une véritable opportunité de progression, tant sur le plan technique que méthodologique, en apprenant à prioriser les actions en fonction de la criticité des vulnérabilités, à mieux m’organiser et à gagner en autonomie dans la mise en œuvre des remédiations. \n\n\n" +
        "Ressources utilisées : \n" +
        "• R5.Cyber.10 : Audits de sécurité \n" +
        "• R5.Cyber.09 : Archi. Sécurisées \n" +
        "• R4.Cyber.11 : Sécurisation des services réseaux \n" +
        "• R3.Cyber.16 : Méthodologie du pentesting"
      ],
      },
    links: []
  },







    {
      id: "extension-infrastructure-reseau",
  title: "Extension de l’infrastructure réseau et migration du plan IP",
  category: "reseau",
  short: "Projet d’optimisation du réseau visant à doubler la capacité d’adressage IP tout en garantissant une continuité de service totale pour les utilisateurs.",
  tags: [
    "Plan d’adressage",
    "Réseaux",
    "Continuité de service",
    "Disponibilité"
  ],
  image: "assets/img/extention.png",
    details: {
      context:
        "Dans le cadre de mon alternance, j’ai travaillé sur un projet réseau lié à une saturation de la plage d’adresses IP existante. Le nombre d’hôtes disponibles n’était plus suffisant pour répondre aux besoins croissants des utilisateurs, des machines et des équipements réseau. Il était donc nécessaire de revoir le plan d’adressage afin d’anticiper l’évolution de l’infrastructure.",

      objectives:
      "L’objectif principal du projet était d’augmenter la capacité d’adressage IP du réseau en élargissant la plage existante, tout en assurant une continuité de service complète pour l’ensemble des utilisateurs et des services critiques. Cette évolution devait être réalisée sans interruption de connexion ni impact visible côté utilisateur.",
      
      actions: [
        "Un important travail d’analyse et de recensement des équipements a été mené afin d’identifier l’ensemble des éléments impactés par cette modification.",
        "Migration du masque réseau de /24 vers /23, permettant ainsi de doubler le nombre d’adresses IP disponibles.",
        "Adaptation des configurations réseau sur les serveurs",
        "Mettre à jour les règles de routage",
        "Ajuster les règles de pare-feu",
        "Vérifier et modifier les configurations VPN afin d’assurer la compatibilité avec le nouveau plan d’adressage"
      ],

      result:
        "La migration a permis de doubler la capacité du réseau en termes d’adresses IP, répondant ainsi aux besoins actuels et futurs de l’infrastructure. L’ensemble des services est resté pleinement fonctionnel et aucune coupure n’a été perçue par les utilisateurs.",

      learned: [
        "Ce projet m’a permis de prendre conscience qu’une modification réseau en apparence simple ne se limite pas à un changement de paramètre. Il nécessite une vision globale de l’infrastructure, une forte rigueur, ainsi qu’une organisation méthodique pour garantir la continuité des services. Cette expérience a renforcé mes compétences en réseaux et m’a permis de mieux appréhender les impacts transverses d’un changement d’architecture en environnement professionnel."
      ],
      },
  links: []
},






    {
      id: "renouvellement-infrastructure-it",
  title: "Renouvellement de l’infrastructure informatique",
  category: "systeme",
  short: "Modernisation de l’infrastructure systèmes et réseaux avec continuité de service.",
  tags: [
    "Infrastructure IT",
    "Architecture systèmes",
    "Migration",
    "Continuité de service",
    "Sécurité"
  ],
  image: "assets/img/renewinfra.png",
  details: {
    context:
      "Dans le cadre de mon alternance chez JRI, un projet de renouvellement de l’infrastructure informatique a été engagé afin de l’adapter aux besoins actuels et futurs de l’entreprise. L’objectif est de moderniser les systèmes et services existants tout en garantissant la continuité de service et en prenant en compte les contraintes techniques et opérationnelles.",

    actions: [
      "Analyse de l’infrastructure existante et identification des limites techniques.",
      "Définition d’une architecture cible plus adaptée aux usages actuels.",
      "Planification des changements et des différentes étapes de migration.",
      "Préparation des environnements et des configurations systèmes et réseaux.",
      "Prise en compte des contraintes de sécurité, de disponibilité et d’exploitation.",
      "Documentation des choix techniques et des procédures associées."
    ],

    result:
      "Projet actuellement en cours de réalisation, les résultats seront évalués à l’issue du déploiement complet de la nouvelle infrastructure.",

    learned:
      "Ce projet en cours me permet d’acquérir une vision globale et structurée de la transformation d’une infrastructure informatique, depuis la phase d’analyse jusqu’à la préparation des changements. " +
      "Il met directement en application les enseignements du BUT Réseaux & Télécommunications liés aux systèmes et aux infrastructures, notamment en matière d’architecture, de continuité de service et de sécurisation. " +
      "Ce travail me confronte à des problématiques réelles de modernisation du SI, renforçant ma capacité à anticiper les impacts techniques et organisationnels des choix effectués.\n\n"
  },
  links: []
},
{
  id: "Mise-en-place-centralisation-logs",
  title: "Mise en place d’une centralisation des logs avec Wazuh",
  category: "cyber",
  short: "Déploiement d’une solution de centralisation des logs afin d’améliorer la visibilité, la supervision et la sécurité du système d’information.",
  tags: [
    "Centralisation de logs",
    "Wazuh",
    "Cybersécurité"
  ],
  image: "assets/img/wazuh.png",
  details: {
    context:
      "Dans le cadre de mon alternance chez JRI, j’ai eu l’opportunité de mettre en place une solution de centralisation des logs basée sur l’outil open source Wazuh afin d’améliorer la supervision et la sécurité du système d’information.",

    actions: [
      "Création et validation d’un POC afin d’évaluer les fonctionnalités et les possibilités offertes par Wazuh.",
      "Déploiement de Wazuh sur l’environnement de production.",
      "Création d’alertes et de tableaux de bord personnalisés pour le suivi des événements de sécurité.",
      "Analyse et remédiation des vulnérabilités détectées par Wazuh."
    ],

    result:
  "À la suite du déploiement de Wazuh, j’ai principalement travaillé sur la remédiation des vulnérabilités présentes au sein de l’infrastructure. Grâce aux agents installés sur les serveurs, Wazuh permet d’identifier précisément les vulnérabilités (CVE) détectées sur chaque machine. En seulement quelques semaines, le nombre de vulnérabilités recensées est passé d’environ 25 000 à près de 5 000. Un suivi continu est toujours en cours afin de poursuivre les corrections et de réduire ce nombre au maximum.",

    learned:
      "Ce projet m’a permis de développer mes compétences en cybersécurité, en supervision et en administration des systèmes. " +
      "J’ai pu approfondir mes connaissances sur la centralisation des logs, la détection de vulnérabilités et l’analyse des événements de sécurité dans un environnement de production. " +
      "Cette expérience m’a également sensibilisé à l’importance de la supervision continue et de la remédiation proactive afin de renforcer la sécurité et la résilience du système d’information. " +
      "Enfin, ce projet m’a permis d’acquérir une approche méthodique dans le déploiement d’une solution de sécurité, depuis la phase de test jusqu’à la mise en production et au suivi opérationnel."
  },
  links: []
},
{
  id: "Home-lab",
  title: "Création d’un Home Lab",
  category: "systeme",
  short: "Création d’un mini lab informatique à domicile comprenant un serveur de fichiers, un NAS et un serveur multimédia Jellyfin.",
  tags: [
    "Home Lab",
    "NAS",
    "Serveur de fichiers",
    "Jellyfin"
  ],
  image: "assets/img/homelab.png",
  details: {
    context:
      "Dans ma famille, nous échangeons régulièrement de nombreux fichiers et documents. Afin de simplifier leur stockage, leur accès et leur sauvegarde, j’ai décidé de mettre en place un serveur de fichiers complet à domicile à partir d’un simple PC. L’objectif était de centraliser les données de manière sécurisée tout en proposant une solution simple d’utilisation pour toute la famille. Passionné par les films et les séries, j’ai également déployé un serveur multimédia Jellyfin afin de créer une plateforme de streaming personnelle accessible directement depuis la maison.",

    actions: [
      "Installation et configuration d’un Windows Server sur un mini PC.",
      "Mise en place d’un RAID 5 sur cinq disques durs afin de sécuriser les données.",
      "Configuration et sécurisation du serveur de fichiers.",
      "Mise en place du Wake-on-LAN afin de pouvoir démarrer le serveur à distance dans toute la maison.",
      "Déploiement et configuration du serveur multimédia Jellyfin."
    ],

    result:
      "Une fois le projet finalisé, toute la famille peut désormais accéder facilement au serveur depuis un téléphone ou un ordinateur afin de déposer, récupérer et partager des fichiers de manière centralisée. Grâce à Jellyfin, les photos, vidéos, films et séries sont directement accessibles depuis l’application sur nos différents appareils. Cela permet notamment de visionner du contenu sur la télévision sans avoir besoin d’utiliser un autre appareil pour caster les médias.",

    learned:
      "Ce projet personnel m’a permis de renforcer mes compétences en administration système, en stockage et en gestion de services réseau. " +
      "J’ai pu approfondir mes connaissances sur la mise en place d’un serveur de fichiers, la gestion du RAID, la sécurisation des données ainsi que le déploiement de services multimédias accessibles sur le réseau local. " +
      "Ce Home Lab me permet d’expérimenter librement différentes technologies et de développer mes compétences techniques au travers de projets concrets réalisés en autonomie."
  },
  links: []
},
{
      id: "ctf-cybersecurite",
  title: "Participation et création de challenges CTF",
  category: "securite",
  short: "Participation à des CTF en cybersécurité et création de challenges pédagogiques.",
  tags: [
    "CTF",
    "Cybersécurité",
    "Root.me"
  ],
  image: "assets/img/ctf.png",
  details: {
    context:
      "Dans le cadre de mon parcours en BUT Réseaux & Télécommunications, j’ai eu l’opportunité de participer à plusieurs Capture The Flag (CTF) en cybersécurité. J’ai notamment pris part au CTF de Mars@Hack en 2024, ainsi qu’au CTF SécuRT lors de ma première année de BUT R&T. Ces événements m’ont permis de me confronter à des problématiques de sécurité variées dans un environnement ludique mais exigeant.",

    actions: [
      "Participation à des épreuves de cybersécurité (web, forensic, logique, sécurité système).",
      "Analyse de vulnérabilités et exploitation de failles dans des environnements contrôlés.",
      "Recherche autonome de solutions et documentation des méthodes utilisées.",
      "Collaboration et échange avec d’autres participants lors des compétitions.",
      "Création de challenges CTF en BUT3 à destination des étudiants de première année (conception, tests et rédaction de write-ups)."
    ],

    result:
      "Montée en compétences progressive en cybersécurité, amélioration des capacités d’analyse, de raisonnement et de résolution de problèmes, ainsi qu’une meilleure compréhension des mécanismes d’attaque et de défense.",

    learned:
      "La participation régulière à des CTF sur des plateforms comme Root.me m’a permis de consolider mes connaissances en cybersécurité tout en développant une forte capacité d’analyse et d’autonomie. \n" +
      "Ces expériences font le lien entre les notions vues en BUT R&T et leur mise en application concrète, en m’amenant à comprendre les mécanismes réels des attaques et les mesures de protection associées. \n" +
      "Aujourd’hui, en BUT3, cette progression me permet à mon tour de concevoir et proposer des challenges CTF pédagogiques pour les étudiants de première année, renforçant ainsi ma compréhension des concepts et ma capacité à les transmettre.\n\n\n\n " +
      "Je m’entraîne régulièrement sur la plateforme Root-Me afin de développer et renforcer mes compétences en cybersécurité, à travers la résolution de challenges couvrant différentes catégories (réseau, web, forensic, etc.). Vous pouvez consulter ma progression ainsi que les challenges que j’ai réalisés via le lien ci-dessous."
  },
  links: [
  {
    label: "Mon profil Root-Me",
    url: "https://www.root-me.org/BCNG-861999?lang=fr#c2632043cfe7a4c61747d788cf0b5eff"
  }
]
}
  ];

  const grid = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".chip-btn");
  if (!grid) return;

  const escapeHtml = (str) =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function renderProjects(list) {
    grid.innerHTML = list
      .map((p) => {
        const tags = p.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
        const actions = p.details.actions.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
        const links = (p.links || [])
          .map(
            (l) =>
              `<a class="link" href="${escapeHtml(l.url)}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`
          )
          .join(" ");

        return `
          <article class="card project reveal" data-category="${escapeHtml(p.category)}">
            <div class="project-top">
              <div class="project-img"><img src="${escapeHtml(p.image)}" alt="" loading="lazy" /></div>
              <div>
                <h3>${escapeHtml(p.title)}</h3>
                <p class="muted">${escapeHtml(p.short)}</p>
                <div class="tags">${tags}</div>
              </div>
            </div>

            <div class="accordion">
              <button class="acc-btn" type="button" aria-expanded="false">
                <span>Détails du projet</span>
                <span class="acc-chevron" aria-hidden="true"></span>
              </button>

              <div class="acc-panel" aria-hidden="true">
                <div class="project">
                  <p class="muted"><strong>Contexte :</strong> ${escapeHtml(p.details.context)}</p>

                  ${p.details.objectives ? `
                    <p class="muted"><strong>Objectifs :</strong> ${escapeHtml(p.details.objectives)}</p>
                  ` : ""}

                  <p class="muted"><strong>Actions :</strong></p>
                  <ul class="bullets">${actions}</ul>
                  <p class="muted"><strong>Résultat :</strong> ${escapeHtml(p.details.result)}</p>

                  ${p.details.critical_learning ? `
                    <p class="muted"><strong>Apprentissages critiques :</strong> ${escapeHtml(p.details.critical_learning)}</p>
                  ` : ""}

                  <p class="muted"><strong>Conclusion :</strong> ${
  escapeHtml(p.details.learned).replaceAll("\n", "<br>")
}</p>
                  <div class="link-row">${links}</div>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    wireAccordions();
  }

  function wireAccordions() {
    grid.querySelectorAll(".project").forEach((card) => {
      const btn = card.querySelector(".acc-btn");
      const panel = card.querySelector(".acc-panel");
      if (!btn || !panel) return;

      btn.addEventListener("click", () => {
  const isOpening = !card.classList.contains("is-open");

  grid.querySelectorAll(".project.is-open").forEach((openCard) => {
    if (openCard === card) return;

    openCard.classList.remove("is-open");
    const openBtn = openCard.querySelector(".acc-btn");
    const openPanel = openCard.querySelector(".acc-panel");

    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    if (openPanel) {
      openPanel.setAttribute("aria-hidden", "true");
      openPanel.style.maxHeight = "0px";
    }
  });

  card.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", isOpening ? "true" : "false");
  panel.setAttribute("aria-hidden", isOpening ? "false" : "true");

  if (isOpening) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } else {
    panel.style.maxHeight = "0px";
  }
});
    });
  }

  let activeFilter = "all";
  let query = "";

  function applyFilters() {
    const q = query.toLowerCase().trim();
    const filtered = projects.filter((p) => {
      const byCategory = activeFilter === "all" || p.category === activeFilter;
      const haystack = [
  p.title,
  p.short,
  p.category,
  ...(p.tags || []),
  p.details.context,
  p.details.objectives,
  ...(p.details.actions || []),
  p.details.result,
  p.details.critical_learning,
  p.details.learned
]
        .join(" ")
        .toLowerCase();
      const byQuery = !q || haystack.includes(q);
      return byCategory && byQuery;
    });
    renderProjects(filtered);
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      query = searchInput.value;
      applyFilters();
    });
  }

  renderProjects(projects);
})();
