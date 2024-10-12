/*Components*/
import Hero from "@components/Hero";
import About from "@components/About";
import ProjectSlider from "@components/ProjectSlider";
import MobileProjects from "@components/MobileProjects";
import Contact from "@components/Contact";
import BacktoTopBtn from "@common/BackToTopBtn/BacktoTopBtn";
/* Context */
import { useAppContext } from "@context/AppContext";
/* Type Casting Functions */
import { filterPropertiesOfObjsInArray } from "@models/functions";

function Home() {
  const { projects, certifications } = useAppContext();

  return (
    <>
      <BacktoTopBtn anchorId="#top" />
      {/* <VideoBackground /> */}

      {/* Main Estructure */}

      {/*Section #1*/}
      <Hero
        cards={filterPropertiesOfObjsInArray(
          certifications,
          "title",
          "description",
          "link",
          "logo",
          "techIcon",
          "date",
          "institution"
        )}
      />
      <About />
      {/*Section #2*/}

      {window.innerWidth < 850 ? (
        <section id="projects">
          <MobileProjects mobileProjects={projects} />
        </section>
      ) : (
        <div id="projects">
          <ProjectSlider projects={projects} />
        </div>
      )}
      {/*Section #3*/}
      <Contact />
    </>
  );
}

export default Home;
