import { v4 as uuidv4 } from "uuid";
const allQuestions = [
  {
    id: uuidv4(),
    question: "Quel est le nom de famille d'Arthur ? ",
    choix: ["Peyredragon", "Pendragon", "Perredragon", "il en a pas"],
    reponse: "Pendragon",
  },
  {
    id: uuidv4(),
    question: "Qui est à l'origine du : c'est pas faux ? ",
    choix: ["Arthur", "Perceval", "Karadoc", "Merlin"],
    reponse: "Karadoc",
  },
  {
    id: uuidv4(),
    question: "Quel personnage est joué par Christian Clavier ? ",
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
      "Lionel Astier est le père d'Alexandre Astier dans la vrai vie, quel est le lien entre leurs personnages dans la série ? ",
    choix: [
      "Pere et fils",
      "Beau-pere et gendre",
      "Grand-pere et getit Fils",
      "Oncle et neveu",
    ],
    reponse: "Beau-pere et gendre",
  },
  {
    id: uuidv4(),
    question:
      "Qui a dit : Faut arrêter ces conneries de nord et de sud! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout ! ",
    choix: ["Karadoc", "Arthur", "Lancelot", "Perceval"],
    reponse: "Perceval",
  },
  {
    id: uuidv4(),
    question: "Qui a dit : Faut pas respirer la compote,ça fait tousser ? ",
    choix: ["Guethenoc", "Léodagan", "Kadoc", "Karadoc"],
    reponse: "Kadoc",
  },
  {
    id: uuidv4(),
    question: "Qui a dit : Une fois, j'ai pissé par la fenêtre ! ",
    choix: ["Perceval", "Arthur", "Lancelot", "Guenievre"],
    reponse: "Guenievre",
  },
  {
    id: uuidv4(),
    question:
      "Qui a dit : Ah le printemps ! La nature se réveille, les oiseaux reviennent, on crame des mecs ! ",
    choix: ["Arthur", "Perceval", "Le Maître d'armes", "Bohort"],
    reponse: "Arthur",
  },
  {
    id: uuidv4(),
    question: "A quel jeu jouent Perceval et Karadoc ? ",
    choix: [
      "Le derrière de hibou",
      "Le trou duc' du grand duc",
      "Le cul de chouette",
      "Le rmm rmm de Belette",
    ],
    reponse: "Le cul de chouette",
  },
  {
    id: uuidv4(),
    question: "De quoi a peur le Roi Arthur ? ",
    choix: ["Les chevaux", "Les oiseaux", "Les serpents", "Les loups"],
    reponse: "Les serpents",
  },
  {
    id: uuidv4(),
    question: "Quelle actice française incarne la Dame du Lac ? ",
    choix: ["Lea drucker", "Audrey fleurot", "Marie drucker", "Mylene farmer"],
    reponse: "Audrey fleurot",
  },
  {
    id: uuidv4(),
    question:
      "Quel objet légendaire est recherché par nos héros de la table ronde ? ",
    choix: ["Mjollnir", "La main de midas", "Excalibur", "Le graal"],
    reponse: "Le graal",
  },
  {
    id: uuidv4(),
    question: "De quoi a peur Yvain ? ",
    choix: ["Des serpents", "Des oiseaux", "Des guepes", "Des loups"],
    reponse: "Des guepes",
  },
  {
    id: uuidv4(),
    question:
      "En quel année la série Kaamelott a-t-elle été diffusée pour la première fois sur M6 ? ",
    choix: ["2001", "2003", "2005", "2007"],
    reponse: "2005",
  },
  {
    id: uuidv4(),
    question:
      "Avant de se lancer dans la série Kaamelott, Alexandre Astier avait écrit et réalisé un court-métrage sur la légende arthurienne. Quel en était le titre ? ",
    choix: ["Le Oud", "Agnus", "Spangenhelm", "Dies irae"],
    reponse: "Dies irae",
  },
  {
    id: uuidv4(),
    question:
      "Quel étrange produit Alexandre Astier a-t-il utilisé pour paraître plus jeune dans le livre VI ? ",
    choix: [
      "De la creme solaire",
      "Du talc",
      "Du gel hydroalcoolique",
      "De la creme pour hemorroides",
    ],
    reponse: "De la creme pour hemorroides",
  },
];
export { allQuestions };
