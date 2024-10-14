/* React */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* Components */
import ProjectCard from "@common/ProjectCard/ProjectCard";
/* Context */
import { useAppContext } from "@context/AppContext";
/* Assets */
import video from "@assets/background-waves.webm";

function Projects() {
  const { projects, lenguage } = useAppContext();

  const { projectTitle } = useParams();

  const [currentProject, setCurrentProject] = useState(projects[0]);

  useEffect(() => {
    const page = document.getElementsByTagName("body")[0];
    page.classList.add("project-page");
    if (projectTitle) {
      const selectedProject = projects.filter(
        (project) => project.mobileTitle === projectTitle
      )[0];

      setCurrentProject(selectedProject);

      document.documentElement.style.setProperty(
        "--bgImg",
        `url('../../../${selectedProject.image}')`
      );
      document.documentElement.style.setProperty(
        "--themeColor",
        selectedProject.mainColor
      );
    } else {
      setCurrentProject(projects[0]);
      document.documentElement.style.setProperty(
        "--bgImg",
        `url('../../../${currentProject.image}')`
      );
      document.documentElement.style.setProperty(
        "--themeColor",
        currentProject.mainColor
      );
    }
  }, [projectTitle, projects, currentProject.image, currentProject]);

  return (
    <>
      <section className="projects">
        <div className="projects__title">
          <h1>{currentProject.mobileTitle}</h1>
          {currentProject.technologies.map((tech, index) => (
            <React.Fragment key={index}>{tech}</React.Fragment>
          ))}
        </div>
        <div className="projects__resume">{currentProject.description}</div>
        <div>
          <img src={currentProject.logo} alt="" />
        </div>
      </section>
      <section className="projects__main-content">
        <div className="projects__main-content-row">
          <img
            src={currentProject.image}
            alt={currentProject.mobileTitle.toString()}
          />
          <div>
            <h3 className="projects__main-content-row-title">
              {lenguage === "en" && "A Problem to Solve, A Product to Build"}
              {lenguage === "es" &&
                "Un Problema para Resolver Es Un Producto por Construir"}
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nostrum ipsa at asperiores rem a ea dignissimos quis
              porro cum consequuntur veritatis, nisi, consequatur eius! Eligendi
              facere deserunt amet temporibus provident libero nulla natus,
              culpa recusandae obcaecati ratione officia ab ut neque optio
              explicabo consequuntur quasi debitis! Voluptatem, doloribus
              commodi!
            </p>
            <button
              className="projects__main-content-button"
              onClick={() => window.open(currentProject.liveLink, "_blank")}
            >
              {lenguage === "en" && "Watch it working!"}
              {lenguage === "es" && "¡Míralo en acción!"}
            </button>
          </div>
        </div>
        <div className="projects__main-content-row">
          <img
            src={currentProject.image}
            alt={currentProject.mobileTitle.toString()}
          />
          <div>
            <h3 className="projects__main-content-row-title">
              {lenguage === "en" && "How this project was built?"}
              {lenguage === "es" && "¿Cómo se construyó este proyecto?"}
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nostrum ipsa at asperiores rem a ea dignissimos quis
              porro cum consequuntur veritatis, nisi, consequatur eius! Eligendi
              facere deserunt amet temporibus provident libero nulla natus,
              culpa recusandae obcaecati ratione officia ab ut neque optio
              explicabo consequuntur quasi debitis! Voluptatem, doloribus
              commodi!
            </p>
            <button
              className="projects__main-content-button"
              onClick={() => window.open(currentProject.githubLink, "_blank")}
            >
              {lenguage === "en" && "Watch repository"}
              {lenguage === "es" && "Ver repositorio"}
            </button>
          </div>
        </div>
      </section>
      <section className="projects__bullet-points">
        <h3 className="projects__bullet-points-title">
          {lenguage === "en" && "Project Features Highlight"}
          {lenguage === "es" && "Características Destacadas del Proyecto"}
        </h3>
        <ul className="projects__bullet-points-list">
          {currentProject.mainFeatures.map((feature, index) => (
            <li className="projects__bullet-points-list-item" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </section>
      <section className="projects__showcase">
        <div className="projects__showcase-video">
          <video src={video} controls poster={currentProject.image} />
        </div>
        <div className="projects__showcase-text">
          <h4>
            {lenguage === "en" && "Great ideas coming to life!"}
            {lenguage === "es" && "¡Grandes ideas llegan a la luz!"}
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, modi sit facilis delectus odit illum neque nam aliquam
            aspernatur numquam, alias odio consectetur saepe in harum cum ea
            aliquid voluptatum?
          </p>
          <button
            className="projects__showcase-btn"
            onClick={() => window.open(currentProject.liveLink, "_blank")}
          >
            {lenguage === "en" && "Watch it live"}
            {lenguage === "es" && "¡Míralo en línea!"}
          </button>
        </div>
      </section>
      <section className="projects__header">
        <div className="projects__header-title">
          <h4>
            {lenguage === "en" && "Lastest Projects"}
            {lenguage === "es" && "Últimos Proyectos"}
          </h4>
        </div>
        <div className="projects__header-selector">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard
                project={project}
                className="rounded-corners box-shadow glass-card"
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
