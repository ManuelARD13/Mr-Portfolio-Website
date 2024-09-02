/* Certifications List assets (Move to a Global Context) */
import certification1 from "../assets/diploma-asincronismo-js.jpg";
import certification2 from "../assets/tipos-avanzados-y-funciones-TS.jpg";
import certification3 from "../assets/git-y-github.jpg";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGithub,
} from "react-icons/bi";
/* Components */
import GroupedSlider from "../common/GroupSlider/GroupSlider";
import CarouselSlider from "../common/CarouselSlider/CarouselSlider";
/* Mobile Components */
import ProjectsAccordion from "../components/ProjectsAccordion";
/* Types */
import { Certification } from "../types";
/* Type Casting Functions */
import { filterPropertiesOfObjsInArray } from "../types/functions";

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
  return (
    <>
      <GroupedSlider
        slides={filterPropertiesOfObjsInArray(
          certifications,
          "title",
          "img",
          "link",
          "techIcon",
          "description"
        ).slice(0, 3)}
        className="academics__header"
        withDescription
      />

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
