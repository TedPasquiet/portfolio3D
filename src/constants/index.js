const navLinks = [
  {
    name: "Travail",
    link: "#travail",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Compétence",
    link: "#compétence",
  },
  {
    name: "Témoignage",
    link: "#temoignage",
  },
];

const words = [
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Années d'expérience" },
  { value: 600, suffix: "+", label: "Litres de café englouti" },
  { value: 100, suffix: "%", label: "A l'écoute" },
  { value: 1, suffix: "", label: "Chien à nourrir" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/brain-process.png",
    title: "Logique",
    desc: "Je structure ma pensée avec rigueur pour résoudre les problèmes de manière claire, efficace et méthodique.",
  },
  {
    imgPath: "/images/question.png",
    title: "Curieux",
    desc: "Toujours avide d’apprendre, je m’intéresse à ce qui m’entoure et je cherche à comprendre en profondeur chaque nouveau sujet.",
  },
  {
    imgPath: "/images/livre-ouvert.png",
    title: "Pédagogue",
    desc: "J’aime transmettre, expliquer avec clarté, et adapter mon discours à mon interlocuteur pour qu’il comprenne facilement.",
  },
  {
    imgPath: "/images/endurance.png",
    title: "Tenace",
    desc: "Je ne lâche rien facilement : quand un défi se présente, je persévère jusqu’à trouver la solution.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  // TODO Node, symfony, go
  {
    name: "Node",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Symfony",
    imgPath: "/images/logos/node.png",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Golang",
    modelPath: "/models/go.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Symfony",
    modelPath: "/models/elephpant.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  
];

const expCards = [
  {
    // Todo avis de Colomban?
    // review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    // Todo revoir image dimension
    imgPath: "/images/agrumeRh.png",
    logoPath: "/images/logos/logoAgrume.png",
    title: "Developpeur Full-Stack",
    date: "Janvier 2022 - Aujourd'hui",
    responsibilities: [
      "Developpement et maintenant de l'interface utilisateur",
      "Conversion de la logique métier juridique en algorithme sur divers produits (vote, signature, procédure etc.)",
      "Maintenance de l'application sur la précédente stack technique",
      "Réecriture de l'application sur une nouvelle stack (React, Symfony, PostgreSQL)",
    ],
  }
  // TODO si besoin rajouter expérience
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    // TODO avoir l'avis de mes collègues?
    name: "Cédric Bouillon",
    mentions: "@cedricBouillon",
    review:
      "A remplir",
    imgPath: "/images/cedricBouillon.jpeg",
  },
  {
    name: "Colomban de la Monneraie",
    mentions: "@colombanMonneraie",
    review:
      "A remplir",
    imgPath: "/images/colombanMonneraie.jpeg",
  },
  {
    name: "Antoni Varesano",
    mentions: "@antoniVaresano",
    review:
      "A remplir",
    imgPath: "/images/antoniVaresano.jpeg",
  },
  {
    name: "Jéremy Cauchois",
    mentions: "@jeremeyCauchois",
    review:
      "A remplir",
    imgPath: "/images/photoInconnue.jpg",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    imgHref: "https://www.linkedin.com/in/ted-pasquiet-a0a04722b/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    imgHref: "https://github.com/TedPasquiet",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
