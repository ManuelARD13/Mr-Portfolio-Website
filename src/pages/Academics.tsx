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
  const { certifications } = useAppContext();
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
        <h2>Working code speaks more than a 1000 certifications!</h2>
        <p>
          Most of my skills i've earned them by hours and hours of coding, building, breaking and fixing back projects outside the typical tutorial apps. Most of this projects has been simple ideas or funny experiments born from the passion to code and discipline to growth better. Wanna see them?
        </p>
        <button onClick={() => (location.href = "/projects")}>Explore Live Projects</button>
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
