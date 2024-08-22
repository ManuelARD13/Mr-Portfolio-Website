import certification1 from "../assets/diploma-asincronismo-js.jpg";
import certification2 from "../assets/tipos-avanzados-y-funciones-TS.jpg";
import certification3 from "../assets/git-y-github.jpg";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGithub,
} from "react-icons/bi";
import GroupedSlider from "../common/GroupedSlider/GroupedSlider";
import { useEffect, useState } from "react";
import CarouselSlider from "../common/CarouselSlider/CarouselSlider";

type Certification = {
  title: string;
  img: string;
  description: string;
  link: string;
  techIcon: JSX.Element;
};

const featuredCertifications: Certification[] = [
  {
    title: "Async with Javascript",
    img: certification1,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Advanced Types and Functions",
    img: certification2,
    description:
      "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
    link: "https://platzi.com/cursos/typescript-tipos-avanzados/",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Professional Git & Github",
    img: certification3,
    description:
      "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
    link: "https://platzi.com/cursos/git-github/",
    techIcon: <BiLogoGithub />,
  },
];

const certifications = [
  {
    title: "Async with Javascript",
    img: certification1,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
  },
  {
    title: "Advanced Types and Functions",
    img: certification2,
    description:
      "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
    detailsList: [
      "Tipos avanzados",
      "Funciones",
      "Generics",
      "Interfaces",
      "Clases",
    ],
  },
  {
    title: "Professional Git & Github",
    img: certification3,
    description:
      "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
    detailsList: ["Git", "Github", "Git Flow"],
  },
];

function Academics() {
  const [currentSlides, setCurrentSlides] = useState<Certification[]>(
    featuredCertifications
  );

  const reorderSlides = (slides: Certification[]) => {
    const newSlides = [...slides];
    const firstItem = newSlides.shift();
    if (!firstItem)
      return [
        { title: "", img: "", description: "", link: "", techIcon: <></> },
      ];
    newSlides.push(firstItem);
    return newSlides;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides((slides) => reorderSlides(slides));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlides]);

  return (
    <>
      <section className="academics__header">
        <GroupedSlider
          images={featuredCertifications.map((cert) => {
            return { src: cert.img, alt: cert.title };
          })}
          containerClassName="academics__header-left"
        />
        <div className="academics__header-right">
          <div className="academics__header-title">
            <h1>{currentSlides[0].title}</h1>
            {currentSlides[0].techIcon}
          </div>
          <div className="academics__header-description">
            <p>{currentSlides[0].description}</p>
          </div>
          <a href={currentSlides[0].link} target="_blank">
            <button className="academics__header-button">
              Go to Course Content
            </button>
          </a>
          <div className="academics__header-slide-arrow">{">"}</div>
        </div>
      </section>
      <section className="academics__projects box-shadow">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non
          aperiam laudantium doloribus nobis labore necessitatibus, sit
          reprehenderit dolorem sint et, est dolores enim dolore deserunt sequi.
          Officiis ipsum quis ut esse fugit, laboriosam delectus?
        </p>
        <button>Explore Live Projects</button>
      </section>
      <CarouselSlider
        slides={certifications}
        className="academics__certifications"
      />
    </>
  );
}

export default Academics;
