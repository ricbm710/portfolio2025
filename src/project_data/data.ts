export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: {
    [key: string]: string[]; // flexible keys, values must be arrays of strings
  };
  link: string;
  repo: string;
  image?: string;
  type?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Corpmad E-commerce",
    description:
      "A demo e-commerce site showcasing product browsing and cart persistence with Local Storage.",
    features: [
      "Built product catalog from a static data file",
      "Implemented shopping cart using Local Storage",
    ],
    tech: {
      Frontend: ["React", "Vite"],
      Routing: ["React Router"],
      Styling: ["Bootstrap"],
      Notifications: ["Toastify"],
      Deployment: ["GitHub Pages"],
    },
    link: "https://ricbm710.github.io/corpmad4/",
    repo: "https://github.com/ricbm710/corpmad4",
  },
  {
    id: 2,
    title: "Marketplace.BO",
    description:
      "Marketplace.BO is a full-stack marketplace demo that showcases a complete e-commerce workflow. Users can register, log in, upload products with images, and search through listings seamlessly",
    features: [
      "Developed a full-stack marketplace enabling user registration, authentication, product uploads with images, and search functionality.",
      "Developed frontend with React, Tailwind, and backend with Node.js, Express, PostgreSQL.",
      "Implemented user authentication with JWT and image handling via Cloudinary",
    ],
    tech: {
      Frontend: ["React", "Vite"],
      Routing: ["React Router"],
      Styling: ["Tailwind"],
      Backend: ["Express", "Axios"],
      Authentication: ["JWT"],
      ImageStorage: ["Cloudinary"],
      Database: ["PostgreSQL"],
      Deployment: ["Netlify", "Fly.io"],
    },
    link: "https://marketplacebo.netlify.app/",
    repo: "https://github.com/ricbm710/Marketplace.BO",
  },
  {
    id: 3,
    title: "Synthgame",
    description:
      "Synthgame is an interactive web quiz that tests users’ knowledge of vintage synthesizers, using timers, dynamic scoring, and responsive UI elements to create an engaging and entertaining experience.",
    features: [
      "Built an interactive web game challenging users to identify randomized vintage synthesizers by manufacturer and model",
      "Implemented score tracking in a PostgreSQL database",
      "Built frontend with React, TypeScript, and Tailwind, focusing on dynamic UI rendering and responsive design",
    ],
    tech: {
      Frontend: ["React", "Vite"],
      Routing: ["React Router"],
      Styling: ["Tailwind"],
      Backend: ["Express", "Axios"],
      Database: ["PostgreSQL"],
      Deployment: ["Netlify", "Fly.io"],
    },
    link: "https://synthgame.netlify.app/",
    repo: "https://github.com/ricbm710/synth-game-frontend",
  },
];
