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
    if (projectTitle) {

      const selectedProject = projects.filter(
        (project) => project.mobileTitle === projectTitle
      )[0]

      setCurrentProject(
        selectedProject
      );

      const page = document.getElementsByTagName("body")[0];
      page.classList.add("project-page");
      document.documentElement.style.setProperty("--bgImg", `url('../../../${selectedProject.image}')`);
      document.documentElement.style.setProperty("--themeColor", selectedProject.mainColor);
      
    }
  }, [projectTitle, projects, currentProject.image]);

  return (
    <>
      <section className="project">
        <div className="project__title">
          <h1>{currentProject.mobileTitle}</h1>
          {currentProject.technologies.map((tech, index) => (
            <React.Fragment key={index}>{tech}</React.Fragment>
          ))}
        </div>
        <div className="project__resume">{currentProject.description}</div>
        <div><img src={currentProject.logo} alt="" /></div>
      </section>
      <section className="project__main-content">
        <div className="project__main-content-row">
          <img src={currentProject.image} alt={currentProject.mobileTitle} />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nostrum ipsa at asperiores rem a ea dignissimos quis
              porro cum consequuntur veritatis, nisi, consequatur eius! Eligendi
              facere deserunt amet temporibus provident libero nulla natus,
              culpa recusandae obcaecati ratione officia ab ut neque optio
              explicabo consequuntur quasi debitis! Voluptatem, doloribus
              commodi!
            </p>
          </div>
        </div>
        <div className="project__main-content-row">
          <img src={currentProject.image} alt={currentProject.mobileTitle} />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nostrum ipsa at asperiores rem a ea dignissimos quis
              porro cum consequuntur veritatis, nisi, consequatur eius! Eligendi
              facere deserunt amet temporibus provident libero nulla natus,
              culpa recusandae obcaecati ratione officia ab ut neque optio
              explicabo consequuntur quasi debitis! Voluptatem, doloribus
              commodi!
            </p>
          </div>
        </div>
      </section>
      <section className="project__bullet-points">
        <h3 className="project__bullet-points-title">
          Lorem ipsum dolor sit amet.
        </h3>
        <ul className="project__bullet-points-list">
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
        </ul>
        <ul className="project__bullet-points-list">
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
          <li className="project__bullet-points-list-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            ullam?
          </li>
        </ul>
      </section>
      <section className="project__showcase">
        <div className="project__showcase-video">
          <video src={video} controls />
        </div>
        <div className="project__showcase-text">
          <h4>Lorem ipsum dolor sit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, modi sit facilis delectus odit illum neque nam aliquam
            aspernatur numquam, alias odio consectetur saepe in harum cum ea
            aliquid voluptatum?
          </p>
        </div>
      </section>
      <section className="project__header">
        <div className="project__header-title">
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
        <div className="project__header-selector">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard project={project} className="rounded-corners box-shadow glass-card" />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
