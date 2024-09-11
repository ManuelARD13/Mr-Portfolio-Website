/* Components */
import GroupedSlider from "@common/GroupSlider/GroupSlider";
import CarouselSlider from "@common/CarouselSlider/CarouselSlider";
/* Mobile Components */
import ProjectsAccordion from "@components/ProjectsAccordion";
/* Context */
import { useAppContext } from "@context/AppContext";
/* Type Casting Functions */
import { filterPropertiesOfObjsInArray } from "../types/functions";



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
