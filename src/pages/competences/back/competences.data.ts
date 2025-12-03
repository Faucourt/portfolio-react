import type { CompetenceGroup } from "./types";

export const COMPETENCES: CompetenceGroup[] = [
  {
    title: "Hard Skills",
    categories: [
      {
        title: "Développement Web",
        skills: [
          { name: "HTML / CSS / SQL", level: 70 },
          { name: "JavaScript", level: 55 },
          { name: "Front-End", level: 75 },
          { name: "React (Native, JS)", level: 55 },
        ],
      },
      {
        title: "Back-End & API",
        skills: [
          { name: "API REST", level: 45 },
          { name: "Python", level: 60 },
          { name: "Cloud (AWS / Azure)", level: 35 },
        ],
      },
      {
        title: "Méthodes & Outils",
        skills: [
          { name: "Gestion de Projets Agile", level: 90 },
          { name: "Outils & Méthodes", level: 85 },
          { name: "Design Graphique", level: 80 },
          { name: "Git / GitHub", level: 75 },
        ],
      },
    ],
  },
  {
    title: "Soft Skills",
    categories: [
      {
        title: "Communication",
        skills: [
          { name: "Expression écrite & orale", level: 85 },
          { name: "Pédagogie / Vulgarisation", level: 80 },
        ],
      },
      {
        title: "Collaboration",
        skills: [
          { name: "Travail d’équipe", level: 90 },
          { name: "Feedback & écoute", level: 85 },
        ],
      },
      {
        title: "Autonomie & organisation",
        skills: [
          { name: "Priorisation & planification", level: 80 },
          { name: "Résolution de problèmes", level: 75 },
        ],
      },
    ],
  },
  {
    title: "Langues",
    categories: [
      {
        title: "Compétences linguistiques",
        skills: [
          { name: "Anglais", level: 60 },
          { name: "Espagnol", level: 30 },
          { name: "Japonais", level: 20 },
        ],
      },
    ],
  },
];
