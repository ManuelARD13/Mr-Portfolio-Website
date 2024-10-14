/* Components */
import GroupedSlider from "@common/GroupSlider/GroupSlider";
import CarouselSlider from "@common/CarouselSlider/CarouselSlider";
/* Mobile Components */
import ProjectsAccordion from "@components/CertificationsAccordion";
/* Context */
import { useAppContext } from "@context/AppContext";
/* Type Casting Functions */
import { filterPropertiesOfObjsInArray } from "@models/functions";
import { Link } from "react-router-dom";

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
              tutorial apps, starting from a simple idea or little experiments,
              impulsed by the passion for coding. See them in action!
            </p>
            <Link to="/projects">
              <button>Explore Live Projects</button>
            </Link>
          </>
        )}
        {lenguage === "es" && (
          <>
            <h2>¡El código en acción habla más que mil certificaciones!</h2>
            <p>
              Muchas de mis habilidades han sido adquiridas tras horas y
              horas de programar, construir, romper y arreglar proyectos más
              allá de los típicos tutoriales, iniciando desde
              simples ideas o experimentos y una gran pasión
              por programar ¡Míralos en acción!
            </p>
            <Link to="/projects">
              <button>Proyectos Desplegados</button>
            </Link>
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
