import { Certification, Project } from "@models/index";
/* Certifications Assets */
import AsyncJSImg from "@assets/certifications/diploma-asincronismo-js.jpg";
import GitandGithubImg from "@assets/certifications/diploma-git-y-github.jpg";
import JSBasicsImg from "@assets/certifications/diploma-javascript-fundamentos.jpg";
import APIRESTImg from "@assets/certifications/diploma-api.jpg";
import WindowsSetupImg from "@assets/certifications/diploma-configuracion-windows.jpg";
import EScriptImg from "@assets/certifications/diploma-ecmascript-6.jpg";
import FrontendImg from "@assets/certifications/diploma-frontend-developer.jpg";
import BackendBasicsImg from "@assets/certifications/diploma-backend.jpg";
import NPMImg from "@assets/certifications/diploma-npm.jpg";
import ReactBasicsImg from "@assets/certifications/diploma-react.jpg";
import ReactAndTypescriptImg from "@assets/certifications/diploma-react-typescript.jpg"
import ViteAndTailwindImg from "@assets/certifications/diploma-react-vite-tailwindcss.jpg";
import TypescriptImg from "@assets/certifications/diploma-typescript.jpg";
import OOPTypescriptImg from "@assets/certifications/diploma-typescript-poo.jpg";
import AdvancedTypesImg from "@assets/certifications/diploma-typescript-tipos-avanzados.jpg";
import ProFrontendImg from "@assets/certifications/diploma-frontend-developer-practico.jpg";
import certLogo from "@assets/reactjs-removebg-preview.png";
/* Projects Assets */
import pathfinderDemoImg from "@assets/pathfinder-Img.jpg";
import hiraganaShuffleImg from "@assets/hiragana-shuffle-Img.jpg";
import MRLOGO from "@assets/Mr-logo.png";
import HSLOGO from "@assets/hiragana-shuffle-logo.png";
import PFCQLOGO from "@assets/pathfinder-logo.png";
/* Icons */
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoReact,
  BiLogoSass,
  BiLogoWindows
} from "react-icons/bi";
import { TbBrandFramerMotion, TbBrandNpm, TbDatabaseCog  } from "react-icons/tb";

export const projects: Project[] = [
  {
    title:
      "Japanese learning app, met lo consectetur adipisicing elit. Itaque, harum.",
    mobileTitle: "Japanese Learning App",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio facilis at necessitatibus quasi praesentium aliquam quod nam,earum exercitationem aperiam nulla dolores dolor tempora.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nobis
        saepe unde mollitia aperiam repudiandae nemo ex impedit sapiente aliquid
        accusamus ut necessitatibus harum rerum blanditiis sint delectus,
        possimus placeat molestias. Voluptatum reprehenderit doloremque
        voluptatem alias. Saepe, pariatur minima voluptatibus eaque quae culpa
        fugiat officia et odio vitae dolore magni.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/hiragana-shuffle-app",
    liveLink: "https://manuelard13.github.io/hiragana-shuffle-app/",
    pageLink: "https://github.com/ManuelARD13/hiragana-shuffle-app",
    mainFeatures: [
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    ],
    image: hiraganaShuffleImg,
    logo: HSLOGO,
    mainColor: "#FF5572",
  },
  {
    title:
      "Front-end Portfolio Website, o consectetur adipisicing elit. Itaque, harum.",
    mobileTitle: "Web Dev Portfolio Website",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio facilis at necessitatibus quasi praesentium aliquam quod nam,earum exercitationem aperiam nulla dolores dolor tempora.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nobis
        saepe unde mollitia aperiam repudiandae nemo ex impedit sapiente aliquid
        accusamus ut necessitatibus harum rerum blanditiis sint delectus,
        possimus placeat molestias. Voluptatum reprehenderit doloremque
        voluptatem alias. Saepe, pariatur minima voluptatibus eaque quae culpa
        fugiat officia et odio vitae dolore magni.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/Mr-Portfolio-Website-draft",
    liveLink: "https://manuelrojas.tech",
    pageLink: "https://github.com/ManuelARD13/Mr-Portfolio-Website-draft",
    mainFeatures: [
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    ],
    image: "",
    logo: MRLOGO,
    mainColor: "hsl(178, 90%, 50%)",
  },
  {
    title:
      "Videogame UI DEMO, sit amet lo consectetur adipisicing elit. Itaque, harum.",
    mobileTitle: "Videogame UI DEMO",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio facilis at necessitatibus quasi praesentium aliquam quod nam,earum exercitationem aperiam nulla dolores dolor tempora.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nobis
        saepe unde mollitia aperiam repudiandae nemo ex impedit sapiente aliquid
        accusamus ut necessitatibus harum rerum blanditiis sint delectus,
        possimus placeat molestias. Voluptatum reprehenderit doloremque
        voluptatem alias. Saepe, pariatur minima voluptatibus eaque quae culpa
        fugiat officia et odio vitae dolore magni.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/pathfinders-adventures-demo",
    liveLink: "https://pathfinders-adventures-demo-6s4r.vercel.app/",
    pageLink: "https://github.com/ManuelARD13/pathfinders-adventures-demo",
    mainFeatures: [
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    ],
    image: pathfinderDemoImg,
    logo: PFCQLOGO,
    mainColor: "#CCAE27",
  },
];

export const certifications: Certification[] = [
  {
    title: "Javascript Basics",
    img: JSBasicsImg,
    logo: certLogo,
    description:
      "JavaScript es un lenguaje de programación con gran versatilidad para desarrollo de software. Estudio de fundamentos de JavaScript como variables, tipos de datos, estructuras de control y lógica, manipulación de arrays, funciones, this, POO y asincronismo.",
    detailsList: [
      "JavaScript Sintax",
      "Data types",
      "Conditional statements",
      "Object Oriented Programing",
      "Async programming basics",
    ],
    link: "https://platzi.com/cursos/javascript/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "API REST Fundamentals",
    img: APIRESTImg,
    logo: certLogo,
    description:
      "Consumo de API REST con JavaScript. Estudi del flujo de comunicación entre Frontend y Backend implementando solicitudes asíncronas usando fetch",
    detailsList: [
      "API REST Basic Structure",
      "HTTP Methos and Status Codes",
      "HTTP Headers and Authentication",
      "Data Handling with Fetch",
      "Async and Await"
    ],
    link: "https://platzi.com/cursos/api/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: AsyncJSImg,
    logo: certLogo,
    description:
      "Conceptos fundamentales de asincronismo con JavaScript, aplicando sus diferentes estructuras y desarrollando soluciones asíncronas. Implementacion de Landing Page con JavaScript.",
    detailsList: [
      "Event Loop",
      "Async & Await",
      "Promises",
      "Hanlding Errors",
      "Generators"
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Windows Environment Setup",
    img: WindowsSetupImg,
    logo: certLogo,
    description:
      "Instalar y usar un navegador web, manejar DevTools, configurar Visual Studio Code, y uso de Linux dentro de Windows. Instalación de Node.js y Python; y el uso de Git y GitHub para el control de versiones",
    detailsList: [
      "Browser DevTools",
      "VSCode Basics",
      "WSL Usage",
      "Git & Github Concepts"
    ],
    link: "https://platzi.com/cursos/configuracion-windows/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoWindows />
  },
  {
    title: "ECMAScript: History of JavaScript Versions",
    img: EScriptImg,
    logo: certLogo,
    description:
      "JavaScript es el lenguaje más utilizado para desarrollo de aplicaciones web, principalmente en el frontend. Cada año, ECMA International publica una nueva edición de ECMAScript, la especificación a la cual se ajusta JavaScript",
    detailsList: [
      "TC39",
      "ECMAScript 6 - ES6",
      "ES7 to RS13 features"
    ],
    link: "https://platzi.com/cursos/ecmascript-6/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Front-end Development",
    img: FrontendImg,
    logo: certLogo,
    description:
      "Dominando las bases de HTML y CSS. Esudio de la anatomía de un documento HTML, sus elementos y las propiedades de CSS. Maquetado de pantallas principales de una página web con responsive design",
    detailsList: [
      "Markup",
      "HTML Basics",
      "CSS Basics",
      "CSS Architecture Basics",
      "Responsive Design"
    ],
    link: "https://platzi.com/cursos/frontend-developer/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Back-end Development Basics",
    img: BackendBasicsImg,
    logo: certLogo,
    description:
      "Funcionanamiento del mundo del backend y las aplicaciones web del lado de los servidores. Un primer vistazo a los lenguajes, tecnologías y tareas que construyen silenciosamente al internet.",
    detailsList: [
      "Development Rols",
      "HTTP",
      "API REST",
      "Back-end Development",
      "Scalability",
    ],
    link: "https://platzi.com/cursos/backend/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <TbDatabaseCog />,
  },
  {
    title: "NPM: Packages & Dependencies",
    img: NPMImg,
    logo: certLogo,
    description:
      "NPM es el gestor de paquetes y dependencias más usado para desarrollar con JavaScript. Puede Administrar módulos, distribuir paquetes y agregar dependencias a proyectos",
    detailsList: [
      "Dependencies Installation",
      "NPM Commands",
      "Packages Updates and Management",
      "Security and Best Practices",
      "Create and Pusblish Packages"
    ],
    link: "https://platzi.com/cursos/npm/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <TbBrandNpm />,
  },
  {
    title: "React.js Basics",
    img: ReactBasicsImg,
    logo: certLogo,
    description:
      "Creacion de aplicaciones web interactivas con React.js. Uso de componentes, props, estilos CSS, estados y efectos de React. Implementacion de React Context, React Portals y almacenamiento con Local Storage",
    detailsList: [
      "Components and Usability",
      "State and Props",
      "Rendering",
      "Persistence with Local Storage",
      "Deploy",
    ],
    link: "https://platzi.com/cursos/react/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact/>,
  },
  {
    title: "React with Typescript",
    img: ReactAndTypescriptImg,
    logo: certLogo,
    description:
      "Potencia proyectos de React.js usando TypeScript. Mejora la experiencia de desarrollo del equipo de desarrollo tipando componentes, estados y librerías",
    detailsList: [
      "Typing System",
      "Typescript in Front-end Development",
      "Components, State and Props Typing",
      "Callbacks and References Typing",
      "Extending DOM Elements Types"
    ],
    link: "https://platzi.com/cursos/react-typescript/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Vite.js and TailwindCSS",
    img: ViteAndTailwindImg,
    logo: certLogo,
    description:
      "Construyendo una Tienda Online con React.js, integrando Vite.js para el entorno de desarrollo, TailwindCSS para el manejo de estilos y React Router DOM para las rutas y navegación. Transformamos prototipos de Figma en aplicaciones web profesionales y desplegadas a producción",
    detailsList: [
      "Vite and Tailwind Installation",
      "React Router DOM",
      "Global State with Context",
      "E-commerce Website Development",
      "Deploy with Netlify",
    ],
    link: "https://platzi.com/cursos/react-vite-tailwindcss/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Typescript",
    img: TypescriptImg,
    logo: certLogo,
    description:
      "TypeScript, el superset de Microsoft para agregar tipado fuerte a tu código JavaScript. Estudiando los datos primitivos y especiales del lenguaje para programar aplicaciones web, agilizar su mantenimiento y evitar la mayoría de errores.",
    detailsList: [
      "Typescript vs Javascript",
      "Typescript Compiler",
      "Primitive Types",
      "Special Types",
      "Libraries with and without Typing"
    ],
    link: "https://platzi.com/cursos/typescript/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async and OOP with TypeScript",
    img: OOPTypescriptImg,
    logo: certLogo,
    description:
      "Estudiando programación orientada a objetos con TypeScript. Implementando los pilares de la POO y patrones de diseño como el Singleton. Trabajando con promesas para consumir APIs REST y aplicando Generics en tus clases y métodos.",
    detailsList: [
      "Object Oriented Programming",
      "Advanced OOP Concepts",
      "Async and APIs",
      "Generics"
    ],
    link: "https://platzi.com/cursos/typescript-poo/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Typescript: Advanced Types and Functions",
    img: AdvancedTypesImg,
    logo: certLogo,
    description:
      "Características avanzadas de TypeScript. Trabajando con interfaces, tuplas y enums. Solucion de problemas complejos como la sobrecarga de funciones.",
    detailsList: [
      "Tuples, Enunms, Unkown and Never Types",
      "Functions",
      "Interfaces",
      "CRUD Examples"
    ],
    link: "https://platzi.com/cursos/typescript-tipos-avanzados/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Professional Front-end Development",
    img: ProFrontendImg,
    logo: certLogo,
    description:
      "Desarrollo frontend con responsive design. Uso práctico de maquetación con HTML y CSS construyendo las páginas y componentes de un e-commerce profesional",
    detailsList: [
      "Mockup",
      "Layouts",
      "Responsive Design",
      "Best Practices"
    ],
    link: "https://platzi.com/cursos/frontend-developer-practico/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Git & Github",
    img: GitandGithubImg,
    logo: certLogo,
    description:
      "Git, el sistema de control de versiones por excelencia que utiliza la industria tecnológica. Trabajando con git, conceptos básicos, clonando repositorios y gestionando proyectos alojándolos en repositorio local y/o en GitHub.",
    detailsList: [
      "Git Basics",
      "Git Commands",
      "Professional Workflow",
      "Error Handling",
      "Github Funcionalities",
    ],
    link: "https://platzi.com/cursos/git-github/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoGithub />,
  }
];