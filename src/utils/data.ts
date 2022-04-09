import memotest from "../assets/images/memotest.png";
import movye from "../assets/images/movye2.png";
import piDogs from "../assets/images/pi-dogs.png";
import appClima from "../assets/images/clima02.png";
import arthub from "../assets/video/arthubEcommerce.mp4";

const projectsData = [
  {
    title: "Movye",
    description:
      'Aplicación web para buscar películas, ordenar y filtrar. También permite agregar películas a "Favorites" y "Watchlist". La información es traída de The Movie DB. El proyecto fue realizado junto con Emiliano Alfonso y las tecnologías utilizadas fueron Next.js y styled components.',
    repoLink: "https://github.com/SantiagoMartinMolina/Movye",
    demoLink: "https://movye.vercel.app/",
    image: movye,
    video: null,
  },
  {
    title: "Arthub",
    description:
      "E-commerce de venta de obras de arte. Se realizó en grupo, utilizando la metodología SCRUM. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize, Firebase, PostgreSQL y autenticación mediante JWT.",
    repoLink: "https://github.com/SantiagoMartinMolina/Arthub",
    demoLink: "https://arthub-project.vercel.app/",
    image: null,
    video: arthub,
  },
  {
    title: "Memotest",
    description:
      'Aplicación web para buscar películas, ordenar y filtrar. También permite agregar películas a "Favorites" y "Watchlist". La información es traída de The Movie DB. El proyecto fue realizado junto con Emiliano Alfonso y las tecnologías utilizadas fueron Next.js y styled components.',
    repoLink: "https://github.com/SantiagoMartinMolina/memotest",
    demoLink: "https://memotestv2.vercel.app/",
    image: memotest,
    video: null,
  },
  {
    title: "PI - Dogs",
    description:
      "Proyecto individual fullstack. Consiste en una aplicación que muestra información de todas las razas de perro, dicha información es traida de una API, tambien es posible crear nuevas razas. Las tecnologías utilizadas fueron: React, Redux, Express, Sequelize y PostgreSQL.",
    repoLink: "https://github.com/SantiagoMartinMolina/PI-Dogs-API",
    demoLink: "https://pi-dogs.vercel.app/",
    image: piDogs,
    video: null,
  },
  {
    title: "App-Clima",
    description:
      "Aplicación web realizada con React. Permite buscar los datos del tiempo meteorológico de cualquier ciudad del mundo. La información es traida de una API.",
    repoLink: "https://github.com/SantiagoMartinMolina/appClima",
    demoLink: "https://app-clima-self.vercel.app/",
    image: appClima,
    video: null,
  },
];

export default projectsData;
