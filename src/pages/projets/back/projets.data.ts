import type { Project } from "./types";

const PORTFOLIO_DESCRIPTION = `
Ce projet est mon portfolio web complet, pensé comme un vrai projet professionnel :
- architecture de fichiers claire
- composants réutilisables (header, footer, navigation)
- pages spécialisées (projets, compétences, expériences, veilles, centres d’intérêts)
- CSS modulaires (base, components, pages)
- JS centralisé (utils, debug, header/footer, navigation).

L’objectif est de présenter mes compétences avec un code propre, structuré et facilement réutilisable.
`;

export const PROJECTS: Project[] = [
  
    {
    title: "Portfolio Web v2.0 (React + TypeScript)",
    year: "2025",
    state: "En cours de finalisation",
    image: "/images/projets/portfolioProject.jpg",
    alt: "Portfolio moderne développé en React et TypeScript",
    sections: {
      contexte: `
        Refonte complète de mon portfolio v1.0 (HTML, CSS, JS) en une Single Page Application 
        avec React et TypeScript. 

        L’objectif est de transformer un projet personnel en un véritable template professionnel :
        arborescence propre, découpage clair par pages, composants réutilisables, 
        et configuration facilement modifiable par n’importe quel utilisateur (débutant ou avancé).
      `,
      objectif: `
        - Proposer une version moderne, maintenable et évolutive du portfolio v1.0.
        - Structurer le projet comme un template prêt à l’emploi (React + TSX).
        - Séparer clairement la logique en trois couches : back (data), front (UI), styles (CSS).
        - Intégrer un Dark Mode accessible avec gestion du thème (localStorage + prefer-color-scheme).
        - Assurer une expérience mobile-first, responsive et accessible (ARIA, navigation clavier).
        - Simplifier la personnalisation : textes, données, images, liens, couleurs, etc.
      `,
      fonctionnement: `
        Le projet est basé sur React + TypeScript avec Vite.

        🌐 Structure globale :
        - /src/router/AppRouter.tsx : gestion des routes (accueil, parcours, compétences, projets, veilles, expériences, intérêts).
        - /src/components/layout/MainLayout.tsx : layout principal (Header, Footer, <Outlet />).
        - /src/context/ThemeContext.tsx : gestion du thème clair/sombre (hook + provider).

        🧩 Organisation par pages (exemple) :
        - /src/pages/home/
          - home.data.ts       → contenu textuel (hero, à propos, projet en vedette)
          - css/home.css       → styles spécifiques à la page d’accueil
          - front/Hero.tsx     → section Hero dynamique
          - front/About.tsx    → bloc À propos
          - front/FeaturedProjectCard.tsx → carte du projet en vedette
          - homepage.tsx       → composition de la page

        - /src/pages/competences/
          - back/competences.data.ts → structure des groupes (Hard / Soft / Langues)
          - back/types.ts            → types TypeScript (Skill, Category, Group, etc.)
          - css/competences.css      → styles (accordéons + jauges de progression)
          - front/SkillGroup.tsx, SkillCategory.tsx, SkillRow.tsx
          - competencespage.tsx      → page complète

        - /src/pages/parcours/
          - back/parcours.data.ts    → cartes d’étapes académiques
          - css/parcours.css         → cartes “flip” + animations
          - front/ParcoursGrid.tsx   → rendu des cartes
          - parcourspage.tsx

        - /src/pages/projets/
          - back/projects.data.ts    → tableau PROJECTS (dont cette entrée v2.0)
          - back/types.ts            → types Project, ProjectSection, TechBadge, Version…
          - css/projets.css          → styles de la page projets
          - front/ProjectCard.tsx    → carte principale
          - front/ProjectDetails.tsx → bloc détails (sections, versions, tests, tech)
          - projetspage.tsx

        - /src/pages/veilles/, /src/pages/experiences/, /src/pages/interets/
          → même logique : back (data + types), css, composants front, fichier page TSX.

        🎨 Styles :
        - /src/styles/base/reset.css       → reset CSS + base accesibilité
        - /src/styles/base/variables.css   → design system (couleurs, radio, ombres, etc.)
        - /src/styles/base/base.css        → typographie, body, paragraphes
        - /src/styles/base/layout.css      → header, main, footer
        - /src/styles/components/*.css     → boutons, cards, sections, titres, médias
        - /src/styles/main.css             → point d’entrée qui importe tout le reste.

        🔁 Données & configuration :
        - Les textes, listes, liens, images et niveaux de compétences sont centralisés dans des fichiers *.data.ts.
        - Tout est typé via des interfaces TypeScript, ce qui limite les erreurs et aide à la complétion IDE.
        - Pour adapter le template, il suffit principalement de modifier :
          - les fichiers *.data.ts
          - quelques images dans /public/images
          - éventuellement le USER_CONFIG (si tu ajoutes une config globale plus tard).
      `,
    },
    versions: [
      {
        version: "v1.0 (HTML / CSS / JS)",
        description:
          "Première version du portfolio, codée en HTML, CSS et JavaScript modulaire, sans framework ni dark mode.",
      },
      {
        version: "v2.0 (version actuelle)",
        description:
          "Réécriture complète en React + TypeScript : routing client, architecture par pages, data typées, dark mode, et styles centralisés.",
      },
      {
        version: "v2.1 (à venir)",
        description:
          "Ajout d’internationalisation (FR/EN).",
      },
    ],
    tests: `
      - Prérequis :
        - Node.js et npm ou pnpm installés.
        - Un navigateur moderne (Chrome, Edge, Firefox).

      - Installation :
        - Cloner le dépôt Git.
        - Installer les dépendances : npm install (ou pnpm install).
        - Lancer le serveur de dev : npm run dev.

      - Vérifications principales :
        - Navigation :
          - Tester toutes les pages via le menu : Accueil → Parcours → Compétences → Projets → Veilles → Expériences → Intérêts.
          - Vérifier que l’état actif du menu est correct.
        - Accueil :
          - Vérifier l’affichage du Hero (nom, intro) et du projet en vedette.
        - Compétences :
          - Ouvrir/fermer les groupes (Hard / Soft / Langues).
          - Ouvrir/fermer les sous-catégories et observer l’animation des barres de progression.
          - Tester le tri des compétences si présent (par niveau).
        - Projets :
          - Ouvrir les détails de chaque projet (sections, versions, tests, technologies).
          - Vérifier les liens GitHub.
        - Parcours :
          - Tester le flip des cartes et l’animation d’apparition.
        - Veilles :
          - Vérifier l’animation d’apparition des cartes et les liens vers les ressources.
        - Expériences :
          - Vérifier la liste des missions, les badges de contexte et les badges techniques.
        - Intérêts :
          - Vérifier la carte Leaflet (zoom, déplacements, popups).
          - Tester les carrousels d’images dans les popups et dans les cartes de sports.

      - Dark Mode :
        - Cliquer sur le bouton de thème dans le header (ou où il est placé).
        - Vérifier que le thème est bien mémorisé au rechargement (localStorage).
        - Vérifier le contraste et la lisibilité en mode clair et en mode sombre.

      - Build :
        - Lancer : npm run build puis npm run preview.
        - Vérifier que toutes les routes sont accessibles et que les images provenant de /public/images s’affichent correctement (y compris en production / déploiement).
    `,
    tech: [
      {
        name: "React",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Vite",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "React Router",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Leaflet (carte)",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "CSS (architecture custom)",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "Git",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
    ],
    github: "https://github.com/Faucourt/portfolio-react",
  },

  {
    title: "Portfolio Web v1.0 (HTML, CSS, JS modulaire)",
    year: "2025",
    state: "Terminé",
    image: "/images/projets/portfolioProject.jpg",
    alt: "Portfolio web interactif et modulable",
    sections: {
      contexte: PORTFOLIO_DESCRIPTION,
      objectif: `
        - Proposer une vitrine claire de mon profil (projets, compétences, expériences).
        - Avoir une arborescence professionnelle, prête à devenir un template réutilisable.
        - Centraliser le comportement JS (navigation, injections dynamiques, utils).
        - Intégrer un mode debug interne (console type devtools custom).
        - Assurer une expérience responsive et accessible (mobile first, ARIA, clavier).
      `,
      fonctionnement: `
        L’architecture se découpe en plusieurs blocs :

        - /index.html : page d’accueil (hero, à propos, projet en vedette).
        - /pages/... : une page par section (projets, compétences, expériences, etc.), chaque dossier de page contient un fichier HTML, un fichier CSS et un fichier JS spécifiques.
        - /assets/css/base : reset, variables, layout, typographie, darkmode.
        - /assets/css/components : boutons, cards, sections, titres.

        JavaScript :
        - /backend/header.js & footer.js : injection automatique du header/footer sur chaque page.
        - /backend/navigation.js : gestion du menu, état actif, navigation cohérente.
        - /backend/utils.js : fonctions utilitaires (ex: convertRichText pour les textes riches).
        - /backend/debug.js : panneau de debug custom (logs, tests rapides, événements).

        Le contenu (projets, compétences, veilles...) est majoritairement centralisé dans des objets JS,
        puis injecté dynamiquement dans le HTML.
              `,
    },
    versions: [
      {
        version: "v1.0",
        description:
          "Codé en HTML, CSS et Centralisation JS basique (header, footer, navigation et contenu).",
      },
      {
        version: "v2.0",
        description:
          "Prochaine version : refonte complète en React + TypeScript.",
      },
    ],
    tests: `
        - Prérequis :
          - Navigateur moderne (Chrome, Edge, Firefox).
          - (Optionnel) Un petit serveur local type Live Server ou Python (http.server).

        - Lancement :
          - Ouvrir index.html dans le navigateur
          - Vérifier le header/footer sur chaque page
          - Tester la navigation : accueil → projets → compétences → expériences → veilles → intérêts.

        - Vérifications :
          - Sur la page Projets : ouvrir/fermer les sections, vérifier l’affichage des listes et icônes.
          - Sur la page Compétences : tester les boutons “ouvrir tout/fermer tout”.
          - Sur la page Intérêts : vérifier la carte Leaflet et les carrousels d’images.
          - Sur la page Parcours : tester le flip des cartes + animation d’apparition.

        - Debug :
          - Activer le mode debug via le raccourci clavier (ex: Ctrl + Alt + D selon la config).
          - Observer :
            - les logs de chargement
            - les tests basiques (header, footer, main présents)
            - les événements (clics, scroll, mutations DOM).
            `,
    tech: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Leaflet (carte)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    github: "https://github.com/Faucourt/portfolio",
  },

  {
    title: "Todolist React – Gestion avancée des tâches",
    year: "2025",
    state: "En Pause",
    image: "/images/projets/todolistProject.jpg",
    alt: "Application TodoList moderne en React",
    sections: {
      contexte: `
          Cette ToDoList est une application complète développée en React, intégrant
          une gestion avancée des tâches avec :
          - filtres dynamiques,
          - création, édition, suppression,
          - priorités,
          - statuts,
          - sélection multiple,
          - persistance locale via localStorage.

          L'objectif était de produire un outil ergonomique, rapide et totalement
          modulable, basé sur une architecture React moderne et découpée en composants.
                `,
      objectif: `
        - Fournir une interface simple mais puissante permettant d’organiser des tâches.
        - Assurer la persistance avec localStorage (sans backend).
        - Séparer proprement l’application :
          - composants (TodoList, TodoItem, Modal…)
          - hooks custom (useTodos)
          - UI (DaisyUI + TailwindCSS).
        - Gérer :
          - Création de tâche
          - Edition
          - Suppression
          - Filtrage par priorité
          - Statuts
          - Sélection multiple + action groupée.
              `,
      fonctionnement: `
          L'application repose sur un hook central : "useTodos()".

          Il gère :
          - la liste des tâches,
          - les filtres,
          - les statistiques,
          - les sélections multiples,
          - l'ajout, modification, suppression,
          - la sauvegarde automatique dans localStorage.

          Architecture React :
          - App.jsx : cœur de l’application, gestion des modales + logique globale.
          - components/
            - Filters : boutons dynamiques avec décompte.
            - TodoList : affichage des tâches filtrées.
            - TodoItem : chaque tâche avec badge priorité.
            - CreateTodo : modal de création.
            - EditTodo : modal d’édition.
            - DeleteTodo : suppression rapide.
            - Modal : composant générique.
          - hooks/
            - useTodos.js → toute la logique de gestion + stats.

          UI :
          - TailwindCSS
          - DaisyUI
          - Icônes Lucide (React).
                `,
    },
    versions: [
      {
        version: "v1.0",
        description: "Création / suppression de tâches + interface simple.",
      },
      {
        version: "v1.2",
        description: "Ajout des priorités + filtres dynamiques.",
      },
      {
        version: "v1.5",
        description: "Sélection multiple + action finir la sélection.",
      },
      {
        version: "v2.0",
        description: "Système de modales pour création et édition des tâches.",
      },
      {
        version: "Version actuelle",
        description:
          "Architecture propre en composants + hook useTodos + stats dynamiques + persistance locale.",
      },
    ],
    tests: `
      - Installer le projet : npm install
      - Lancer le serveur : npm run dev
      - Tester les fonctions :
        - Création d’une tâche : titre obligatoire
        - Mise à jour d’une tâche : vérifier startDate avant endDate
        - Suppression d’une tâche
        - Filtres : Tous / Urgente / Moyenne / Basse
        - Sélection multiple : cochez plusieurs tâches → "Finir la sélection"
        - Vérifier la persistance : recharger la page
      - Vérifier que :
        - les statistiques se mettent à jour en temps réel
        - les modales se ferment bien
        - aucune erreur React n’apparaît en console.
          `,
    tech: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "DaisyUI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Lucide Icons",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    github: "https://github.com/Faucourt/todolist-React",
  },

  {
    title: "Analyse Couleur de l’Iris (Python)",
    year: "2024",
    state: "Terminé",
    image: "/images/projets/irisProject.jpg",
    alt: "Application d'analyse de couleurs d'iris en Python",
    sections: {
      contexte: `
          Ce projet explore la détection et l’analyse précise des couleurs de l’iris à partir d’une photo d’œil.
          Il combine vision par ordinateur, clustering couleur et interface utilisateur Tkinter pour créer un outil complet.
                `,
      objectif: `
        - Détecter automatiquement la zone de l’iris grâce à HoughCircles.
        - Nettoyer l’image et filtrer la pupille / les reflets.
        - Extraire les couleurs dominantes avec KMeans.
        - Afficher un résumé clair (graphique + rendu pixelisé).
        - Fournir une interface simple pour charger, analyser et sauvegarder.
              `,
      fonctionnement: `
          L’application utilise OpenCV pour détecter l’iris, applique un filtrage HSV pour isoler les teintes
          et un clustering KMeans pour déterminer les couleurs principales.

          Elle génère ensuite :
          - Une version propre de l’iris
          - Une version pixelisée
          - Un graphique des couleurs dominantes

          Tout est affiché dans une interface Tkinter ergonomique.
                `,
    },
    versions: [
      {
        version: "v1.0",
        description: "Interface Tkinter + chargement d’image + détection HoughCircles + affichage des couleurs.",
      },
      {
        version: "v2.0",
        description: "A venir : En cours de réflexion pour des améliorations futures.",
      },
    ],
    tests: `
      - Préalable : Avoir Python installé sur un IDE (ex: PyCharm, VSCode); une image d'iris (Google Images: "Image Iris Oeil", Option de Taille d'image: Grande).
      - Installer les dépendances : OpenCV, NumPy, Scikit-Learn, Matplotlib.
      - Lancer le script principal : python iris_analyse_projet.py
      - Charger : image d'iris via l’interface Tkinter.
      - Comparer : les graphiques générés à la détection réelle.
      - Tester : avec différentes résolutions et luminosités.
          `,
    tech: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      },
      {
        name: "Scikit-Learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Matplotlib",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      },
      {
        name: "Tkinter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
    ],
    github: "https://github.com/Faucourt/iris-color-analysis",
  },

  {
    title: "Simulateur de probabilités de matchs de football (Python)",
    year: "2023",
    state: "En pause",
    image: "/images/projets/soccerProject.jpg",
    alt: "Simulateur avancé de matchs de football en Python",
    sections: {
      contexte: `
          Ce projet est un simulateur complet basé sur un moteur statistique réaliste.
          Il repose sur 50 000 simulations par match, des distributions Poisson ajustées
          et des données réelles d'équipes/pays.
                `,
      objectif: `
        - Simuler des matchs réalistes.
        - Générer probabilités : victoire / nul / défaite.
        - Comparer clubs et pays.
        - Proposer des phases de groupes et matchs aller-retour.
        - Fournir un outil d'analyse statistique du football.
              `,
      fonctionnement: `
        Le moteur SoccerSim repose sur :
        - Poisson ajusté
        - Forces d’attaque/défense
        - Facteur de domination
        - 50 000 simulations par match

        Fonctionnalités :
        - Comparaison de clubs
        - Comparaison de pays
        - Groupes & classement
        - Aller-retour
        - CLI ergonomique
              `,
    },
    versions: [
      {
        version: "v1.0",
        description: "Première version finie avec simulation club vs club et comparaison (clubs, pays).",
      },
    ],
    tests: `
      - Installer NumPy / Pandas / Matplotlib.
      - Lancer : python main_menu.py
      - Tester un match simple (Club A vs Club B).
      - Lancer un match aller-retour.
      - Comparer des stats entre clubs et pays.
      - Vérifier cohérence des probabilités (somme ≈ 100%).
          `,
    tech: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      },
      {
        name: "Scikit-Learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Matplotlib",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      },
    ],
    github: "https://github.com/utilisateur/football-simulator",
  },
];
