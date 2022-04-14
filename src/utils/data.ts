import memotest from "../assets/images/memotest.png";
import movye from "../assets/images/movye2.png";
import piDogs from "../assets/images/pi-dogs.png";
import appClima from "../assets/images/clima02.png";
import arthub from "../assets/video/arthubEcommerce.mp4";

import NextIcon from "./icons/NextIcon";
import StyledComponentsIcon from "./icons/StyledComponentsIcon";
import ExpressIcon from "./icons/ExpressIcon";
import PostgresIcon from "./icons/PostgresIcon";
import ReactIcon from "./icons/ReactIcon";
import ReactQueryIcon from "./icons/ReactQueryIcon";
import ReduxIcon from "./icons/ReduxIcon";
import TSIcon from "./icons/TSIcon";

const projectsData = [
  {
    title: "Movye",
    description:
      'Aplicación web para buscar películas, ordenar y filtrar. También permite agregar películas a "Favorites" y "Watchlist". La información es traída de The Movie DB. Las tecnologías utilizadas fueron Next.js y styled components.',
    repoLink: "https://github.com/SantiagoMartinMolina/Movye",
    demoLink: "https://movye.vercel.app/",
    image: movye,
    video: null,
    icons: [
      ["Next.js", NextIcon],
      ["Styled components", StyledComponentsIcon],
    ],
  },
  {
    title: "Arthub",
    description:
      "E-commerce de venta de obras de arte. Se realizó en grupo, utilizando la metodología SCRUM. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize, Firebase, PostgreSQL y autenticación mediante JWT.",
    repoLink: "https://github.com/SantiagoMartinMolina/Arthub",
    demoLink: "https://arthub-project.vercel.app/",
    image: null,
    video: arthub,
    icons: [
      ["React", ReactIcon],
      ["Redux", ReduxIcon],
      ["Express", ExpressIcon],
      ["PostgreSQL", PostgresIcon],
    ],
  },
  {
    title: "Memotest",
    description:
      "Clásico juego Memotest, con la posibilidad de elegir 2 temáticas. Las tecnologías utilizadas fueron: typescript y styled components",
    repoLink: "https://github.com/SantiagoMartinMolina/memotest",
    demoLink: "https://memotestv2.vercel.app/",
    image: memotest,
    video: null,
    icons: [
      ["Typescript", TSIcon],
      ["React query", ReactQueryIcon],
      ["Styled components", StyledComponentsIcon],
    ],
  },
  {
    title: "PI - Dogs",
    description:
      "Proyecto individual fullstack. Consiste en una aplicación que muestra información de todas las razas de perro, dicha información es traida de una API, tambien es posible crear nuevas razas. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize y PostgreSQL.",
    repoLink: "https://github.com/SantiagoMartinMolina/PI-Dogs-API",
    demoLink: "https://pi-dogs.vercel.app/",
    image: piDogs,
    video: null,
    icons: [
      ["React", ReactIcon],
      ["Redux", ReduxIcon],
      ["Express", ExpressIcon],
      ["PostgreSQL", PostgresIcon],
    ],
  },
  {
    title: "App-Clima",
    description:
      "Aplicación web realizada con React. Permite buscar los datos del tiempo meteorológico de cualquier ciudad del mundo. La información es traida de una API.",
    repoLink: "https://github.com/SantiagoMartinMolina/appClima",
    demoLink: "https://app-clima-self.vercel.app/",
    image: appClima,
    video: null,
    icons: [
      ["React", ReactIcon],
      ["Styled components", StyledComponentsIcon],
    ],
  },
];

export default projectsData;
