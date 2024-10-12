/* Components */
import GroupedSlider from "@common/GroupSlider/GroupSlider";
import CarouselSlider from "@common/CarouselSlider/CarouselSlider";
/* Mobile Components */
import ProjectsAccordion from "@components/CertificationsAccordion";
/* Context */
import { useAppContext } from "@context/AppContext";
/* Type Casting Functions */
import { filterPropertiesOfObjsInArray } from "@models/functions";

function Academics() {
  const { certifications, lenguage } = useAppContext();

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
        {lenguage === "en" && (
          <>
            <h2>Working code speaks more than a 1000 certifications!</h2>
            <p>
              Most of my skills have been earned through countless hours of
              coding, building, breaking, and fixing projects beyond the typical
              tutorial apps. Many of these started as simple ideas or fun
              experiments, fueled by a passion for coding and a commitment to
              continuous growth. Want to check them out?
            </p>
            <button onClick={() => (location.href = "/projects")}>
              Explore Live Projects
            </button>
          </>
        )}
        {lenguage === "es" && (
          <>
            <h2>¡El código en acción habla más que mil certificaciones!</h2>
            <p>
              La mayoría de mis habilidades han sido adquiridas tras horas y
              horas de programar, construir, romper y arreglar proyectos más
              allá de las típicas apps de tutoriales. Muchos comenzaron como
              simples ideas o experimentos divertidos, impulsados por la pasión
              por programar y un compromiso continuo con el crecimiento.
              ¡Míralos en acción!
            </p>
            <button onClick={() => (location.href = "/projects")}>
              Proyectos Desplegados
            </button>
          </>
        )}
      </section>

      <ProjectsAccordion />

      <div id="certifications">
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
      </div>
    </>
  );
}

export default Academics;
