/* React */
import React, { useEffect, useState } from "react";
/* Types */
import { Project } from "@models/index";
import { Link } from "react-router-dom";
import { useAppContext } from "@context/AppContext";
/* Framer */
import { motion } from "framer-motion";

/*TODO: Finish Slider component:
    - add slide transition animations
*/

function ProjectSlider({ projects }: { projects: Project[] }) {
  const { lenguage } = useAppContext();
  const [projectIndex, setprojectIndex] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const updateTheme = (themeColor: string): void => {
    const labelTheme: HTMLElement | null = document?.getElementsByClassName(
      "project-slider__header-label"
    )[0] as HTMLElement;
    const dividerTheme: HTMLElement | null = document?.getElementsByClassName(
      "divider"
    )[0] as HTMLElement;
    const linkTheme: HTMLElement | null = document?.getElementsByClassName(
      "project-slider__header-links"
    )[0] as HTMLElement;
    const descriptionTheme: HTMLElement | null =
      document?.getElementsByClassName(
        "project-slider__description"
      )[0] as HTMLElement;
    const asideLinkTheme: HTMLElement | null = document?.getElementsByClassName(
      "project-slider__aside-link"
    )[0] as HTMLElement;
    const boxShadowTheme: HTMLElement | null = document?.getElementsByClassName(
      "glass-card"
    )[0] as HTMLElement;
    descriptionTheme?.style.setProperty("--accent-color", `${themeColor}`);
    linkTheme?.style.setProperty("--accent-color", `${themeColor}`);
    asideLinkTheme?.style.setProperty("--accent-color", `${themeColor}`);
    dividerTheme?.style.setProperty("--accent-color", `${themeColor}`);
    labelTheme?.style.setProperty("--accent-color", `${themeColor}`);
    boxShadowTheme?.style.setProperty("--accent-color", `${themeColor}`);
  };

  useEffect(() => {
    updateTheme(projects[projectIndex].mainColor);
  }, [projectIndex, projects]);

  useEffect(() => {
    if (!isMouseOver) {
      const changeSlide = (projectIndex: number) => {
        if (projectIndex < projects.length - 1) {
          setprojectIndex(projectIndex + 1);
        } else {
          setprojectIndex(0);
        }
      };
      const interval = setInterval(() => {
        changeSlide(projectIndex);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [projectIndex, isMouseOver, projects]);

  return (
    <section className="project-slider">
      <motion.div
        className="project-slider__container"
        style={{ backgroundImage: `url(${projects[projectIndex].image})`, borderColor: projects[projectIndex].mainColor }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div
          className="project-slider__slider-controls"
          style={{ color: projects[projectIndex].mainColor }}
        >
          <div
            className="project-slider__slider-controls-arrow-right"
            onClick={() =>
              setprojectIndex(
                projectIndex !== 0 ? projectIndex - 1 : projects.length - 1
              )
            }
          >
            {"<"}
          </div>
          <div
            className="project-slider__slider-controls-arrow-right"
            onClick={() =>
              setprojectIndex(
                projectIndex !== projects.length - 1 ? projectIndex + 1 : 0
              )
            }
          >
            {">"}
          </div>
        </div>
        <div className="project-slider__header rounded-corners glass-card box-shadow">
          <div className="project-slider__header-label box-shadow">
            {projects[projectIndex].technologies.map((technology, index) => (
              <React.Fragment key={index}>{technology}</React.Fragment>
            ))}
          </div>
          <h2 className="project-slider__header-title">
            {projects[projectIndex].title}
          </h2>
          <p className="project-slider__header-subtext">
            {projects[projectIndex].subtext}
          </p>
          <div className="project-slider__header-links">
            <ul className="links__list">
              <li className="links__list-item">
                <Link to={`/projects/${projects[projectIndex].mobileTitle}`}>
                  {lenguage === "en" && "Read More"}
                  {lenguage === "es" && "Saber Más"}
                </Link>
              </li>
              <li className="links__list-item">
                <a href={projects[projectIndex].liveLink} target="_blank">
                  {lenguage === "en" && "Watch it live!"}
                  {lenguage === "es" && "App en vivo!"}
                </a>
              </li>
              <li className="links__list-item last-item">
                <a href={projects[projectIndex].githubLink} target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="project-slider__slider-markers">
            {projects.map((_project, index) => {
              return (
                <div
                  key={index}
                  className={`slider-marker box-shadow ${
                    index === projectIndex ? "active" : ""
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="project-slider__description">
          {projects[projectIndex].description}
        </div>
        <aside className="project-slider__aside rounded-corners">
          <h3>
            {lenguage === "en" && "Development Highlights"}
            {lenguage === "es" && "Caracteristicas Destacadas"}
          </h3>
          <p className="divider"></p>
          <ul className="project-slider__aside-details">
            {projects[projectIndex].mainFeatures.slice(0, 4).map((feature) => (
              <li
                key={feature + Math.random()}
                className="project-slider__aside-item"
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="project-slider__aside-link">
            <a href={`/projects/${projects[projectIndex].mobileTitle}`}>
              {lenguage === "en" && "Read More"}
              {lenguage === "es" && "Saber Más"}
            </a>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}

export default ProjectSlider;
