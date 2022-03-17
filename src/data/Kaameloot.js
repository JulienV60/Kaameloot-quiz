import { v4 as uuidv4 } from "uuid";
const allQuestions = [
  {
    id: uuidv4(),
    question: "Quel est le nom de famille d'Arthur ?",
    choix: ["Peyredragon", "Pendragon", "Perredragon", "il en a pas"],
    reponse: "Pendragon",
  },
  {
    id: uuidv4(),
    question: "Qui est à l'origine du c'est pas faux ?",
    choix: ["Arthur", "Perceval", "Karadoc", "Merlin"],
    reponse: "Karadoc",
  },
  {
    id: uuidv4(),
    question: "Quel personnage est joué par Christian Clavier?",
    choix: [
      "Le duc d'Aquitaine",
      "Le Maître d'Armes",
      "Dagonet",
      "Le Jurisconsulte",
    ],
    reponse: "Le Jurisconsulte",
  },
  {
    id: uuidv4(),
    question:
      "Lionel Astier est le père d'Alexandre Astier dans la vrais vie, quel est le lien entre leurs personnages dans la série ?",
    choix: [
      "Père et fils",
      "Beau-Père et Gendre",
      "Grand-Père et Petit Fils",
      "Oncle et Neveu",
    ],
    reponse: "Beau-Père et Gendre",
  },
  {
    id: uuidv4(),
    question:
      "Qui a dit : Faut arrêter ces conneries de nord et de sud! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
    choix: ["Karadoc", "Arthur", "Lancelot", "Perceval"],
    reponse: "Perceval",
  },
  {
    id: uuidv4(),
    question: "Qui a dit : Faut pas respirer la compote,ça fait tousser ?",
    choix: ["Guethenoc", "Léodagan", "Kadoc", "Karadoc"],
    reponse: "Kadoc",
  },
  {
    id: uuidv4(),
    question: "Qui a dit : Une fois, j'ai pissé par la fenêtre !",
    choix: ["Perceval", "Arthur", "Lancelot", "Guenièvre"],
    reponse: "Guenièvre",
  },
  {
    id: uuidv4(),
    question:
      "Qui a dit : ah le printemps ! La nature se réveille, les oiseaux reviennent, on crame des mecs!",
    choix: ["Arthur", "Perceval", "Le Maître d'armes", "Bohort"],
    reponse: "Arthur",
  },
  {
    id: uuidv4(),
    question: "A quel jeu jouent Perceval et Karadoc ?",
    choix: [
      "Le Derrière de hibou",
      "Le Trou duc' du grand duc",
      "Le Cul de Chouette",
      "Le rmm rmm de Belette",
    ],
    reponse: "Le Cul de Chouette",
  },
  {
    id: uuidv4(),
    question: "De quoi a peur le Roi Arthur ?",
    choix: ["Les Chevaux", "Les Oiseaux", "Les Serpents", "Les Loups"],
    reponse: "Les Serpents",
  },
  {
    id: uuidv4(),
    question: "Quelle actice française incarne la Dame du Lac ?",
    choix: ["Léa Drucker", "Audrey Fleurot", "Marie Drucker", "Mylène Farmer"],
    reponse: "Audrey Fleurot",
  },
  {
    id: uuidv4(),
    question: "Quel objet légendaire est recherché par nos héros ?",
    choix: ["Mjöllnir", "La main de Midas", "Excalibur", "Le Graal"],
    reponse: "Le Graal",
  },
  {
    id: uuidv4(),
    question: "De quoi a peur Yvain ?",
    choix: ["Des Serpents", "Des oiseaux", "Des guêpes", "Des loups"],
    reponse: "Des guêpes",
  },
  {
    id: uuidv4(),
    question:
      "En quel année la série Kaamelott a-t-elle été diffusée pour la première fois sur M6 ?",
    choix: ["2001", "2003", "2005", "2007"],
    reponse: "2005",
  },
  {
    id: uuidv4(),
    question:
      "Avant de se lancer dans la série Kaamelott, Alexandre Astier avait écrit et réalisé un court-métrage sur la légende arthurienne. Quel en était le titre ?",
    choix: ["Le Oud", "Agnus", "Spangenhelm", "Dies irae"],
    reponse: "Dies irae",
  },
  {
    id: uuidv4(),
    question:
      "Quel étrange produit Alexandre Astier a-t-il utilisé pour paraître plus jeune dans le livre VI ?",
    choix: [
      "De la crème solaire",
      "Du talc",
      "Du gel hydroalcoolique",
      "De la crème pour hémorroïdes",
    ],
    reponse: "De la crème pour hémorroïdes",
  },
];
export { allQuestions };
