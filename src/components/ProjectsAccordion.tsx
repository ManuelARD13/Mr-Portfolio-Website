import { useEffect, useState } from "react";
import Accordion from "@common/Accordion/Accordion";
import certification1 from "@assets/certifications/diploma-asincronismo-js.jpg";

const projects = [
  {
    title: "Async with Typescript",
    content: (
      <>
        <img src={certification1} alt="Async with Javascript" />
        <p>
          "Apropia los conceptos fundamentales de asincronismo con JavaScript,
          aplica sus diferentes estructuras y desarrolla soluciones asíncronas.
          ¡Amplía tus conocimientos de programación creando una landing page!",
        </p>
      </>
    ),
  },
  {
    title: "Async with Javascript",
    content: (
      <>
        <img src={certification1} alt="Async with Javascript" />
        <p>
          "Apropia los conceptos fundamentales de asincronismo con JavaScript,
          aplica sus diferentes estructuras y desarrolla soluciones asíncronas.
          ¡Amplía tus conocimientos de programación creando una landing page!",
        </p>
      </>
    ),
  },
  {
    title: "Async with Github",
    content: (
      <>
        <img src={certification1} alt="Async with Javascript" />
        <p>
          "Apropia los conceptos fundamentales de asincronismo con JavaScript,
          aplica sus diferentes estructuras y desarrolla soluciones asíncronas.
          ¡Amplía tus conocimientos de programación creando una landing page!",
        </p>
      </>
    ),
  },
  {
    title: "Async with Node.js",
    content: (
      <>
        <img src={certification1} alt="Async with Javascript" />
        <p>
          "Apropia los conceptos fundamentales de asincronismo con JavaScript,
          aplica sus diferentes estructuras y desarrolla soluciones asíncronas.
          ¡Amplía tus conocimientos de programación creando una landing page!",
        </p>
      </>
    ),
  },
];

function ProjectsAccordion() {
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) => project.title.toLowerCase().includes(search))
    );
  }, [search]);

  return (
    <section className="projects-accordion">
      <h2>All Certificactions</h2>
      <div className="projects-accordion__search">
        <input
          type="text"
          className="projects-accordion__search-input glass-card box-shadow"
          onChange={handleSearch}
          value={search}
          placeholder="Search"
        />
      </div>
      <Accordion items={filteredProjects} className="glass-card box-shadow" />
    </section>
  );
}

export default ProjectsAccordion;
