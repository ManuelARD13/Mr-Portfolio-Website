import { Certification, Project } from "@models/index";
/* Certifications Assets */
import AsyncJSImg from "@assets/certifications/diploma-asincronismo-js.jpg";
import AsyncJSLogo from "@assets/certifications/diploma-asincronismo-js-logo.png";
import GitandGithubImg from "@assets/certifications/diploma-git-y-github.jpg";
import GitandGithubLogo from "@assets/certifications/diploma-git-y-github-logo.png";
import JSBasicsImg from "@assets/certifications/diploma-javascript-fundamentos.jpg";
import JSBasicsLogo from "@assets/certifications/diploma-javascript-fundamentos-logo.png";
import APIRESTImg from "@assets/certifications/diploma-api.jpg";
import APIRESTLogo from "@assets/certifications/diploma-api-logo.png";
import WindowsSetupImg from "@assets/certifications/diploma-configuracion-windows.jpg";
import WindowsSetupLogo from "@assets/certifications/diploma-configuracion-windows-logo.png";
import EScriptImg from "@assets/certifications/diploma-ecmascript-6.jpg";
import EScriptLogo from "@assets/certifications/diploma-ecmascript-6-logo.png";
import FrontendImg from "@assets/certifications/diploma-frontend-developer.jpg";
import FrontendLogo from "@assets/certifications/diploma-frontend-developer-logo.png";
import BackendBasicsImg from "@assets/certifications/diploma-backend.jpg";
import BackendBasicsLogo from "@assets/certifications/diploma-backend-logo.png";
import NPMImg from "@assets/certifications/diploma-npm.jpg";
import NPMLogo from "@assets/certifications/diploma-npm-logo.png";
import ReactBasicsImg from "@assets/certifications/diploma-react.jpg";
import ReactBasicsLogo from "@assets/certifications/diploma-react-logo.png";
import ReactAndTypescriptImg from "@assets/certifications/diploma-react-typescript.jpg";
import ReactAndTypescriptLogo from "@assets/certifications/diploma-react-typescript-logo.png";
import ViteAndTailwindImg from "@assets/certifications/diploma-react-vite-tailwindcss.jpg";
import ViteAndTailwindLogo from "@assets/certifications/diploma-react-vite-tailwindcss-logo.png";
import TypescriptImg from "@assets/certifications/diploma-typescript.jpg";
import TypescriptLogo from "@assets/certifications/diploma-typescript-logo.png";
import OOPTypescriptImg from "@assets/certifications/diploma-typescript-poo.jpg";
import OOPTypescriptLogo from "@assets/certifications/diploma-typescript-poo-logo.png";
import AdvancedTypesImg from "@assets/certifications/diploma-typescript-tipos-avanzados.jpg";
import AdvancedTypesLogo from "@assets/certifications/diploma-typescript-tipos-avanzados-logo.png";
import ProFrontendImg from "@assets/certifications/diploma-frontend-developer-practico.jpg";
import ProFrontendLogo from "@assets/certifications/diploma-frontend-developer-practico-logo.png";
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
  BiLogoWindows,
} from "react-icons/bi";
import { TbBrandFramerMotion, TbBrandNpm, TbDatabaseCog } from "react-icons/tb";

export const projects: Project[] = [
  {
    title:
      "Japanese Learning App: Keep your daily practices with you at any time with Hiragana Shuffle!",
    mobileTitle: "Japanese Learning App",
    subtext:
      "This app satisfies the need of a tool to practice the japanese lenguage characters and their combinations. Some of these where not available to practice by phonetic asociation in other apps, they just mention and highlight them grammatically.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        This web app was builded using React.js powerful capabilities of
        component-based architecture, and Typescript for code quality and
        readability. It works with a system of 'screen views' to navigate
        throught a mode selection process. Practice or play with 4 different
        main modes using a base logic of user input and displayed data
        comparison.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/hiragana-shuffle-app",
    liveLink: "https://manuelard13.github.io/hiragana-shuffle-app/",
    pageLink: "https://github.com/ManuelARD13/hiragana-shuffle-app",
    mainFeatures: [
      "React.js and Typescript",
      "Screen views system to simulate mobile app behavior",
      "Non-desctructive array manipulation",
      "Data and state shared via React Context",
      "User input and displayed data comparison",
      "Sass for styling",
      "Framer Motion for animations",
    ],
    image: hiraganaShuffleImg,
    logo: HSLOGO,
    mainColor: "#FF5572",
  },
  {
    title:
      "Front-end Portfolio Website: Display your professional front end skills in a modern and elegant space",
    mobileTitle: "Web Dev Portfolio Website",
    subtext:
      "Show a fundamental knowledge of front-end development applying the best practices, common patterns, responsive design and a theme based logic switching color palettes and even lenguages, showcasing good architecture and code quality.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Using Vite and Typescript taking adventage of React and Sass features,
        this site displayed the developer front-end skills using common patterns
        and responsive design. The site was build thinking in a centralized
        source of profile data that customizes the entire content of the page
        from a single file, making it reusable across different developers.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/Mr-Portfolio-Website-draft",
    liveLink: "https://manuelrojas.tech",
    pageLink: "https://github.com/ManuelARD13/Mr-Portfolio-Website-draft",
    mainFeatures: [
      "Vite and Typescript",
      "Theme based architecture enabling switching color palettes and languages",
      "Common front end patterns",
      "Responsive design",
      "Easy content customization through a single main data file",
      "Sass for styling",
      "Framer Motion for animations"
    ],
    image: "",
    logo: MRLOGO,
    mainColor: "hsl(178, 90%, 50%)",
  },
  {
    title:
      "Videogame UI DEMO: Create a playable character for a fantasy role playing game like Pathfinders",
    mobileTitle: "Videogame UI DEMO",
    subtext:
      "A simple role playing game character creator based on classic role games system like Pathfinder's or Dungeons and Dragon's. Throw the dices, select your raze and favorite class, and get ready to role pley in a fantasy world.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        This app works building a character Object assignin its properties from user input throught a features selection process. Use randomized values to achive different results each time and giving different character options depending on them. Keep the created characters data persistent implementing Local Storage
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/pathfinders-adventures-demo",
    liveLink: "https://pathfinders-adventures-demo-6s4r.vercel.app/",
    pageLink: "https://github.com/ManuelARD13/pathfinders-adventures-demo",
    mainFeatures: [
      "Developed with React.js",
      "Based in a board game system",
      "Basic knowledge of complex user data obtaining and manipulation",
      "Switching stages and screens via conditional rendering",
      "Data persistency with Local Storage"
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
    logo: JSBasicsLogo,
    description:
      "JavaScript is a versatile programming language widely used in software development. This course covers core concepts, including variables, data types, control structures, array manipulation, functions, 'this', object-oriented programming (OOP), and asynchronous programming",
    detailsList: [
      "JavaScript Sintax",
      "Data types",
      "Conditional statements",
      "Object Oriented Programing",
      "Async programming basics",
    ],
    link: "https://platzi.com/cursos/javascript/",
    date: "July 2024",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "API REST Fundamentals",
    img: APIRESTImg,
    logo: APIRESTLogo,
    description:
      "API consumption with JavaScript. Study of the communication flow between Frontend and Backend, implementing asynchronous requests using fetch",
    detailsList: [
      "API REST Basic Structure",
      "HTTP Methos and Status Codes",
      "HTTP Headers and Authentication",
      "Data Handling with Fetch",
      "Async and Await",
    ],
    link: "https://platzi.com/cursos/api/",
    date: "September 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: AsyncJSImg,
    logo: AsyncJSLogo,
    description:
      "Core concepts of asynchronous programming in JavaScript, utilizing different structures to develop asynchronous solutions. Hands-on implementation of a Landing Page using JavaScript",
    detailsList: [
      "Event Loop",
      "Async & Await",
      "Promises",
      "Hanlding Errors",
      "Generators",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    date: "April 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Windows Environment Setup",
    img: WindowsSetupImg,
    logo: WindowsSetupLogo,
    description:
      "Install and use a web browser, work with DevTools, configure Visual Studio Code, and run Linux within Windows. Set up Node.js and Python, and use Git and GitHub for version control",
    detailsList: [
      "Browser DevTools",
      "VSCode Basics",
      "WSL Usage",
      "Git & Github Concepts",
    ],
    link: "https://platzi.com/cursos/configuracion-windows/",
    date: "March 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoWindows />,
  },
  {
    title: "ECMAScript: History of JavaScript Versions",
    img: EScriptImg,
    logo: EScriptLogo,
    description:
      "JavaScript is the most widely used language for web application development, primarily on the frontend. Each year, ECMA International releases a new edition of ECMAScript, the specification that JavaScript follows",
    detailsList: ["TC39", "ECMAScript 6 - ES6", "ES7 to RS13 features"],
    link: "https://platzi.com/cursos/ecmascript-6/",
    date: "April 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Front-end Development",
    img: FrontendImg,
    logo: FrontendLogo,
    description:
      "Mastering the fundamentals of HTML and CSS. Study of the anatomy of an HTML document, its elements, and CSS properties. Layout design for key screens of a web page with responsive design",
    detailsList: [
      "Markup",
      "HTML Basics",
      "CSS Basics",
      "CSS Architecture Basics",
      "Responsive Design",
    ],
    link: "https://platzi.com/cursos/frontend-developer/",
    date: "March 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Back-end Development Basics",
    img: BackendBasicsImg,
    logo: BackendBasicsLogo,
    description:
      "Understanding the backend world and server-side web applications. An introduction to the languages, technologies, and tasks that quietly power the internet",
    detailsList: [
      "Development Rols",
      "HTTP",
      "API REST",
      "Back-end Development",
      "Scalability",
    ],
    link: "https://platzi.com/cursos/backend/",
    date: "April 2023",
    institution: "Platzi.com",
    techIcon: <TbDatabaseCog />,
  },
  {
    title: "NPM: Packages & Dependencies",
    img: NPMImg,
    logo: NPMLogo,
    description:
      "NPM is the most widely used package and dependency manager for JavaScript development. It manages modules, distributes packages, and adds dependencies to projects",
    detailsList: [
      "Dependencies Installation",
      "NPM Commands",
      "Packages Updates and Management",
      "Security and Best Practices",
      "Create and Pusblish Packages",
    ],
    link: "https://platzi.com/cursos/npm/",
    date: "April 2023",
    institution: "Platzi.com",
    techIcon: <TbBrandNpm />,
  },
  {
    title: "React.js Basics",
    img: ReactBasicsImg,
    logo: ReactBasicsLogo,
    description:
      "Creating interactive web applications with React.js. Utilizing components, props, CSS styles, state, and effects in React. Implementation of React Context, React Portals, and Local Storage",
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
    techIcon: <BiLogoReact />,
  },
  {
    title: "React with Typescript",
    img: ReactAndTypescriptImg,
    logo: ReactAndTypescriptLogo,
    description:
      "Enhance React.js projects using TypeScript. Improve the development experience by typing components, states, and libraries",
    detailsList: [
      "Typing System",
      "Typescript in Front-end Development",
      "Components, State and Props Typing",
      "Callbacks and References Typing",
      "Extending DOM Elements Types",
    ],
    link: "https://platzi.com/cursos/react-typescript/",
    date: "Febrary 2024",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Vite.js and TailwindCSS",
    img: ViteAndTailwindImg,
    logo: ViteAndTailwindLogo,
    description:
      "Building an Online Store with React.js, the most in-demand tool for frontend developers. Integrate Vite.js for the development environment, TailwindCSS for styling, and React Router DOM for routing and navigation. Transform Figma prototypes into professional, production-ready web applications",
    detailsList: [
      "Vite and Tailwind Installation",
      "React Router DOM",
      "Global State with Context",
      "E-commerce Website Development",
      "Deploy with Netlify",
    ],
    link: "https://platzi.com/cursos/react-vite-tailwindcss/",
    date: "January 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Typescript",
    img: TypescriptImg,
    logo: TypescriptLogo,
    description:
      "TypeScript, Microsoft's superset for adding strong typing to your JavaScript code. Study the primitive and special data types of the language to develop web applications, streamline maintenance, and prevent most errors",
    detailsList: [
      "Typescript vs Javascript",
      "Typescript Compiler",
      "Primitive Types",
      "Special Types",
      "Libraries with and without Typing",
    ],
    link: "https://platzi.com/cursos/typescript/",
    date: "April 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async and OOP with TypeScript",
    img: OOPTypescriptImg,
    logo: OOPTypescriptLogo,
    description:
      "Studying object-oriented programming with TypeScript. Implementing the pillars of OOP and design patterns such as Singleton. Working with promises to consume REST APIs and applying generics in your classes and methods",
    detailsList: [
      "Object Oriented Programming",
      "Advanced OOP Concepts",
      "Async and APIs",
      "Generics",
    ],
    link: "https://platzi.com/cursos/typescript-poo/",
    date: "January 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Typescript: Advanced Types and Functions",
    img: AdvancedTypesImg,
    logo: AdvancedTypesLogo,
    description:
      "Advanced features of TypeScript. Working with interfaces, tuples, and enums. Solving complex problems such as function overloading",
    detailsList: [
      "Tuples, Enunms, Unkown and Never Types",
      "Functions",
      "Interfaces",
      "CRUD Examples",
    ],
    link: "https://platzi.com/cursos/typescript-tipos-avanzados/",
    date: "January 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Professional Front-end Development",
    img: ProFrontendImg,
    logo: ProFrontendLogo,
    description:
      "Frontend development with a focus on responsive design. Gain practical experience in using HTML and CSS to create pages and components for a professional e-commerce website",
    detailsList: ["Mockup", "Layouts", "Responsive Design", "Best Practices"],
    link: "https://platzi.com/cursos/frontend-developer-practico/",
    date: "March 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Git & Github",
    img: GitandGithubImg,
    logo: GitandGithubLogo,
    description:
      "Git, the leading version control system in the tech industry. Master the fundamentals of Git, including how to clone repositories and manage projects by hosting them on local repositories and GitHub",
    detailsList: [
      "Git Basics",
      "Git Commands",
      "Professional Workflow",
      "Error Handling",
      "Github Funcionalities",
    ],
    link: "https://platzi.com/cursos/git-github/",
    date: "October 2022",
    institution: "Platzi.com",
    techIcon: <BiLogoGithub />,
  },
];

export const certificaciones: Certification[] = [
  {
    title: "Javascript desde cero",
    img: JSBasicsImg,
    logo: JSBasicsLogo,
    description:
      "JavaScript es un lenguaje de programación con gran versatilidad para desarrollo de software. Estudio de fundamentos de JavaScript como variables, tipos de datos, estructuras de control y lógica, manipulación de arrays, funciones, this, POO y asincronismo.",
    detailsList: [
      "Sintaxis de JavaScript",
      "Tipos de datos",
      "Declaraciones condicionales",
      "Programacion orientada a objetos (POO)",
      "Fundamentos de programacion asincrona",
    ],
    link: "https://platzi.com/cursos/javascript/",
    date: "Julio 2024",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Consumo de API REST con JavaScript",
    img: APIRESTImg,
    logo: APIRESTLogo,
    description:
      "Consumo de API REST con JavaScript. Estudi del flujo de comunicación entre Frontend y Backend implementando solicitudes asíncronas usando fetch",
    detailsList: [
      "Estructura de una API",
      "Metodos HTTP y codigos de estado",
      "HTTP Headers y autenticacion",
      "Manejo de datos con Fetch",
      "Async y Await",
    ],
    link: "https://platzi.com/cursos/api/",
    date: "Septiembre 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Asincronismo con Javascript",
    img: AsyncJSImg,
    logo: AsyncJSLogo,
    description:
      "Conceptos fundamentales de asincronismo con JavaScript, aplicando sus diferentes estructuras y desarrollando soluciones asíncronas. Implementacion de Landing Page con JavaScript.",
    detailsList: [
      "Event Loop",
      "Async y Await",
      "Promesas",
      "Manejo de errores",
      "Generators",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    date: "Abril 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Configuracion de entorno de desarrollo en Windows",
    img: WindowsSetupImg,
    logo: WindowsSetupLogo,
    description:
      "Instalar y usar un navegador web, manejar DevTools, configurar Visual Studio Code, y uso de Linux dentro de Windows. Instalación de Node.js y Python; y el uso de Git y GitHub para el control de versiones",
    detailsList: [
      "DevTools en Navegador",
      "Uso basico de VSCode",
      "WSL",
      "Conceptos de Git y Github",
    ],
    link: "https://platzi.com/cursos/configuracion-windows/",
    date: "Marzo 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoWindows />,
  },
  {
    title: "ECMAScript: Historia y versiones de JavaScript",
    img: EScriptImg,
    logo: EScriptLogo,
    description:
      "JavaScript es el lenguaje más utilizado para desarrollo de aplicaciones web, principalmente en el frontend. Cada año, ECMA International publica una nueva edición de ECMAScript, la especificación a la cual se ajusta JavaScript",
    detailsList: [
      "TC39",
      "ECMAScript 6 - ES6",
      "Caracteristicas desde ES7 hasta RS13",
    ],
    link: "https://platzi.com/cursos/ecmascript-6/",
    date: "Abril 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Front-end Development",
    img: FrontendImg,
    logo: FrontendLogo,
    description:
      "Dominando las bases de HTML y CSS. Esudio de la anatomía de un documento HTML, sus elementos y las propiedades de CSS. Maquetado de pantallas principales de una página web con responsive design",
    detailsList: [
      "Maquetado",
      "Fundamentos de HTML",
      "Fundamentos de CSS",
      "Arquitectura basica en CSS",
      "Responsive Design",
    ],
    link: "https://platzi.com/cursos/frontend-developer/",
    date: "Marzo 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Introduccion al desarrollo Back-end",
    img: BackendBasicsImg,
    logo: BackendBasicsLogo,
    description:
      "Funcionanamiento del mundo del backend y las aplicaciones web del lado de los servidores. Un primer vistazo a los lenguajes, tecnologías y tareas que construyen silenciosamente al internet.",
    detailsList: [
      "Roles en el desarrollo",
      "HTTP",
      "API REST",
      "Desarrollo Back-end",
      "Escalabilidad",
    ],
    link: "https://platzi.com/cursos/backend/",
    date: "Abril 2023",
    institution: "Platzi.com",
    techIcon: <TbDatabaseCog />,
  },
  {
    title: "NPM: Gestion de paquetes y dependencias",
    img: NPMImg,
    logo: NPMLogo,
    description:
      "NPM es el gestor de paquetes y dependencias más usado para desarrollar con JavaScript. Puede Administrar módulos, distribuir paquetes y agregar dependencias a proyectos",
    detailsList: [
      "Instalacion de dependencias",
      "Comandos NPM",
      "gestion y actualizacion de paquetes",
      "Seguridad y buenas practicas",
      "Crear y publicar paquetes",
    ],
    link: "https://platzi.com/cursos/npm/",
    date: "Abril 2023",
    institution: "Platzi.com",
    techIcon: <TbBrandNpm />,
  },
  {
    title: "React.js",
    img: ReactBasicsImg,
    logo: ReactBasicsLogo,
    description:
      "Creacion de aplicaciones web interactivas con React.js. Uso de componentes, props, estilos CSS, estados y efectos de React. Implementacion de React Context, React Portals y almacenamiento con Local Storage",
    detailsList: [
      "Components",
      "State y Props",
      "Renderizado",
      "Persistencia con Local Storage",
      "Despliegue",
    ],
    link: "https://platzi.com/cursos/react/",
    date: "July 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "React.js con Typescript",
    img: ReactAndTypescriptImg,
    logo: ReactAndTypescriptLogo,
    description:
      "Potencia proyectos de React.js usando TypeScript. Mejora la experiencia de desarrollo del equipo de desarrollo tipando componentes, estados y librerías",
    detailsList: [
      "Sistema de tipado",
      "Typescript en desarrollo Front-end",
      "Tipado de componentes, State y Props",
      "Tipado de callbacks y referencias",
      "Extendiendo tipos de los elementos del DOM",
    ],
    link: "https://platzi.com/cursos/react-typescript/",
    date: "Febrero 2024",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "React.js con Vite.js y TailwindCSS",
    img: ViteAndTailwindImg,
    logo: ViteAndTailwindLogo,
    description:
      "Construyendo una Tienda Online con React.js, la herramienta de mayor demanda para frontend developers. Integrando Vite.js para el entorno de desarrollo, TailwindCSS para el manejo de estilos y React Router DOM para las rutas y navegación. Transforma prototipos de Figma en aplicaciones web profesionales y desplegadas a producción",
    detailsList: [
      "Instalacion de Vite y Tailwind",
      "React Router DOM",
      "Estado global con Context",
      "Desarrollo de sitio E-commerce",
      "Deploy con Netlify",
    ],
    link: "https://platzi.com/cursos/react-vite-tailwindcss/",
    date: "Agosto 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Fundamentos de Typescript",
    img: TypescriptImg,
    logo: TypescriptLogo,
    description:
      "TypeScript, el superset de Microsoft para agregar tipado fuerte a tu código JavaScript. Estudiando los datos primitivos y especiales del lenguaje para programar aplicaciones web, agilizar su mantenimiento y evitar la mayoría de errores.",
    detailsList: [
      "Typescript vs Javascript",
      "Typescript Compiler",
      "Tipos primitivos",
      "Tipos especiales",
      "Librerias tipadas y no tipadas",
    ],
    link: "https://platzi.com/cursos/typescript/",
    date: "Abril 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Programacion orientada a objetos con TypeScript",
    img: OOPTypescriptImg,
    logo: OOPTypescriptLogo,
    description:
      "Estudiando programación orientada a objetos con TypeScript. Implementando los pilares de la POO y patrones de diseño como el Singleton. Trabajando con promesas para consumir APIs REST y aplicando Generics en tus clases y métodos.",
    detailsList: [
      "Programacion orientada a objetos",
      "Conceptos avanzados de POO",
      "Asincronismo y APIs",
      "Generics",
    ],
    link: "https://platzi.com/cursos/typescript-poo/",
    date: "Enero 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Typescript: Tipos avanzados y funciones",
    img: AdvancedTypesImg,
    logo: AdvancedTypesLogo,
    description:
      "Características avanzadas de TypeScript. Trabajando con interfaces, tuplas y enums. Solucion de problemas complejos como la sobrecarga de funciones.",
    detailsList: [
      "Tipos Tuples, Enunms, Unkown y Never",
      "Funciones",
      "Interfaces",
      "Ejemplos con CRUD",
    ],
    link: "https://platzi.com/cursos/typescript-tipos-avanzados/",
    date: "Enero 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Desarrollo Front-end practico",
    img: ProFrontendImg,
    logo: ProFrontendLogo,
    description:
      "Desarrollo frontend con responsive design. Uso práctico de maquetación con HTML y CSS construyendo las páginas y componentes de un e-commerce profesional",
    detailsList: [
      "Maquetación",
      "Layouts",
      "Responsive Design",
      "Buenas practicas",
    ],
    link: "https://platzi.com/cursos/frontend-developer-practico/",
    date: "Marzo 2023",
    institution: "Platzi.com",
    techIcon: <BiLogoReact />,
  },
  {
    title: "Git & Github",
    img: GitandGithubImg,
    logo: GitandGithubLogo,
    description:
      "Git, el sistema de control de versiones por excelencia que utiliza la industria tecnológica. Trabajando con git, conceptos básicos, clonando repositorios y gestionando proyectos alojándolos en repositorio local y/o en GitHub.",
    detailsList: [
      "Fundamentos de Git",
      "Comnados de Gi",
      "Flujo de trabajo profesional",
      "Manejo de errores",
      "Funcionalidades de Github",
    ],
    link: "https://platzi.com/cursos/git-github/",
    date: "Octubre 2022",
    institution: "Platzi.com",
    techIcon: <BiLogoGithub />,
  },
];

export const sobreMiInfo = {
  descriptionSobreMi: (
    <>
      <p>
        Soy un desarrollador Front-end con 2 años de experiencia. Me especializo
        en la creación de aplicaciones web dinámicas y de alto rendimiento
        utilizando React y TypeScript. Competente en el desarrollo de interfaces
        de usuario responsivas e intuitivas trabajando estilos profesionales y
        mantenibles
      </p>
      <br />
      <p>
        {" "}
        Domino los flujos de trabajo modernos donde la meta en cada proyecto es
        construir un código limpio, escalable y fácilmente mantenible
        <br />
        <br /> Con el compromiso firme de hacer valer lo invertido y generar el
        mayor beneficio posible en la superacion de los retos más exigentes de
        nuestros clientes.
      </p>
    </>
  ),
};

export const aboutInfo = {
  aboutInfo: (
    <>
      <p>
        I am a Front-End Developer with 2 years of experience, specializing in
        building dynamic, high-performance web applications using React and
        TypeScript. I am skilled in creating responsive and intuitive user
        interfaces, focusing on professional and maintainable styling
      </p>
      <br />
      <p>
        {" "}
        I excel in modern development workflows, where the goal of every project
        is to produce clean, scalable, and easily maintainable code by and for
        the team
        <br />
        <br /> I am committed to maximizing the value of investments and
        delivering the best possible outcomes to meet the most demanding
        challenges of our clients
      </p>
    </>
  ),
};

// export const sobreMiInfo = {
//   descriptionSobreMi: (
//     <>
//       <p>
//         Soy un desarrollador Front-end con 2 años de experiencia. Me especializo en la creación de aplicaciones web
//         dinámicas y de alto rendimiento utilizando React y TypeScript.
//         Competente en el desarrollo de interfaces de usuario responsivas e
//         intuitivas trabajando estilos profesionales y mantenibles
//       </p>
//       <br />
//       <p>
//         {" "}
//         Domino los flujos de trabajo modernos, enfocados en
//         la escalabilidad, mantenibilidad y compatibilidad. La meta en cada proyecto es construir un código limpio y fácilmente mantenible por el equipo de trabajo
//         <br />
//         <br /> Con un compromiso firme para hacer valer lo invertido y generar el mayor beneficio posible en la superacion de los retos más exigentes de nuestros clientes.
//       </p>
//     </>
//   ),
// };

// const JPLApp = {
//   cardTitle:
//     "Japanese Learning App: Keep your hiragana and katakana practices with you at any time with Hiragana Shuffle! Only a few minutes per day of quiet study or an exciting challenge to improve your japanese lenguage skills.",
//   cardSubtext:
//     "A Mobile-first web app builded with React.js and Typescript. This app satisfies the need of a tool to practice the japanese lenguage characters and their combinations while forming complete words. Some of these where not available to practice by phonetic asociation in other apps, they just mention and highlight them grammatically",
//   cardDescription:
//     "This web app was builded using React.js powerful capabilities to create modular code and reusable easy-mantainable components, while using Typescript for type safety and code quality. It uses a system of 'screen views' to navigate throught a mode selection process. You can practice or play with 4 main modes that use the basic logic of user input and displayed data comparison, each of them sightly modified. Non-desctructive array manipulation, data and state shared via React Context, API Request simulation, mobile app UI behavior simulation, and other features has been implemented in this project",
//   features: [
//     "React.js and Typescript",
//     "Screen views system to simulate mobile app behavior",
//     "Non-desctructive array manipulation",
//     "Data and state shared via React Context",
//     "User input and displayed data comparison",
//     "Sass for styling",
//     "Framer Motion for animations",
//   ],
// };
