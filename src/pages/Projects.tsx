import { useAppContext } from "@context/AppContext";
import video from "@assets/background-waves.webm";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProjectCard from "@common/ProjectCard/ProjectCard";

function Projects() {
  const { projects } = useAppContext();
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
          <img src={currentProject.image} alt={currentProject.mobileTitle} />
          <div>
            <h3 className="projects__main-content-row-title">
              Lorem ipsum dolor
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
              Watch it working!
            </button>
          </div>
        </div>
        <div className="projects__main-content-row">
          <img src={currentProject.image} alt={currentProject.mobileTitle} />
          <div>
            <h3 className="projects__main-content-row-title">
              Lorem ipsum dolor
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
              Watch repository
            </button>
          </div>
        </div>
      </section>
      <section className="projects__bullet-points">
        <h3 className="projects__bullet-points-title">
          Project Development Highlights
        </h3>
        <ul className="projects__bullet-points-list">
          {
            currentProject.mainFeatures.map((feature, index) => (
              <li className="projects__bullet-points-list-item" key={index}>
                {feature}
              </li>
            ))
          }
          {/* <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
        </ul>
        <ul className="projects__bullet-points-list">
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor ssit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="projects__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
        </ul> */}
        </ul>
      </section>
      <section className="projects__showcase">
        <div className="projects__showcase-video">
          <video src={video} controls poster={currentProject.image} />
        </div>
        <div className="projects__showcase-text">
          <h4>Lorem ipsum dolor sit.</h4>
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
            Watch it live!
          </button>
        </div>
      </section>
      <section className="projects__header">
        <div className="projects__header-title">
          <h4>Lorem ipsum dolor sit amet.</h4>
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
