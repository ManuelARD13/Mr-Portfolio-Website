/* Certifications List assets (Move to a Global Context) */
import certification1 from "../assets/diploma-asincronismo-js.jpg";
import certification2 from "../assets/tipos-avanzados-y-funciones-TS.jpg";
import certification3 from "../assets/git-y-github.jpg";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGithub,
} from "react-icons/bi";
/* React */
import { useEffect, useState } from "react";
/* Components */
import GroupedSlider from "../common/GroupedSlider/GroupedSlider";
import CarouselSlider from "../common/CarouselSlider/CarouselSlider";
/* Mobile Components */
import ProjectsAccordion from "../components/ProjectsAccordion";


const filterPropertiesOfObjsInArray = <T, K extends keyof T>(
  objsArray: T[],
  ...keys: K[]
): Pick<T, K>[] => {
  const filteredObjsArray = objsArray.reduce((acc: Pick<T, K>[], item) => {
    const newObj = {} as Pick<T, K>;
    keys.forEach((key) => (newObj[key] = item[key]));
    acc.push(newObj);
    return acc;
  }, [] as Pick<T, K>[]);

  return filteredObjsArray;
};

interface Certification {
  title: string;
  img: string;
  description: string;
  detailsList: string[];
  link: string;
  techIcon: JSX.Element;
}

interface FeaturedCertification extends Omit<Certification, "detailsList"> {}

const certifications: Certification[] = [
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: certification2,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async with Javascript",
    img: certification3,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoGithub />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: certification2,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async with Javascript",
    img: certification3,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoGithub />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: certification2,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async with Javascript",
    img: certification3,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoGithub />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: certification2,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async with Javascript",
    img: certification3,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoGithub />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
  {
    title: "Async with Javascript",
    img: certification2,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoTypescript />,
  },
  {
    title: "Async with Javascript",
    img: certification3,
    description:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
    detailsList: [
      "Asincronismo en JavaScript",
      "Promesas",
      "Async Await",
      "Event Loop",
      "Promise.all",
    ],
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoGithub />,
  },
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
    link: "https://platzi.com/cursos/asincronismo-js/",
    techIcon: <BiLogoJavascript />,
  },
];

function Academics() {
  const [currentSlides, setCurrentSlides] = useState<FeaturedCertification[]>(
    filterPropertiesOfObjsInArray(certifications, "title", "img", "link", "techIcon", "description").slice(0, 3)
  );

  const reorderSlides: <T>(slides: T[]) => T[] = (slides) => {
    if(slides.length > 2){const newSlides = [...slides];
    const firstItem = newSlides.shift();
    newSlides.push(firstItem!);
    return newSlides;
    } else {
      return slides
    }
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
        <div className="academics__header-mobile-title"><h1>Featured Certifications</h1></div>
        <GroupedSlider
          images={currentSlides.map((cert) => {
            return { src: cert.img, alt: cert.title };
          }).slice(0, 3)}
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
      <ProjectsAccordion />
     
      <CarouselSlider
        slides={filterPropertiesOfObjsInArray(
          certifications,
          "title",
          "description",
          "img", 
          "detailsList"
        )}
        className="academics__certifications"
      />
    </>
  );
}

export default Academics;
