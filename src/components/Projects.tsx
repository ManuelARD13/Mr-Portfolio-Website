/* React */
import React, { useEffect, useState } from "react";
/* Types */
import { Project } from "../types";

/*TODO: Finish Slider component:
    - adjust colored links in the slides
    - test add change slide while clicking the whole left or right side of the section
    - Complete each project data and test cards background contrast
    - add final arrow icons
    - add slide transition animations
*/
function Projects({projects}: {projects: Project[]}) {
  const [projectIndex, setprojectIndex] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const updateTheme = (themeColor: string): void => {
    const labelTheme: HTMLElement | null = document?.getElementsByClassName(
      "projects__header-label"
    )[0] as HTMLElement;
    const dividerTheme: HTMLElement | null = document?.getElementsByClassName(
      "divider"
    )[0] as HTMLElement;
    const linkTheme: HTMLElement | null = document?.getElementsByClassName(
      "projects__header-links"
    )[0] as HTMLElement;
    const descriptionTheme: HTMLElement | null =
      document?.getElementsByClassName(
        "projects__description"
      )[0] as HTMLElement;
    const asideLinkTheme: HTMLElement | null = document?.getElementsByClassName(
      "projects__aside-link"
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
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [projectIndex, isMouseOver, projects]);



  return (
    <section className="section-projects" id="projects">
      <div
        className="projects"
        style={{ backgroundImage: `url(${projects[projectIndex].image})` }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="projects__slider-controls" style={{ color: projects[projectIndex].mainColor }}>
          <div
            className="projects__slider-controls-arrow-right"
            onClick={() =>
              setprojectIndex(
                projectIndex !== 0 ? projectIndex - 1 : projects.length - 1
              )
            }
          >
            {"<"}
          </div>
          <div
            className="projects__slider-controls-arrow-right"
            onClick={() =>
              setprojectIndex(
                projectIndex !== projects.length - 1 ? projectIndex + 1 : 0
              )
            }
          >
            {">"}
          </div>
        </div>
        <div className="projects__header rounded-corners glass-card box-shadow">
          <div className="projects__header-label box-shadow">
            {projects[projectIndex].technologies.map((technology, index) => (
              <React.Fragment key={index}>{technology}</React.Fragment>
            ))}
          </div>
          <h2 className="projects__header-title">
            {projects[projectIndex].title}
          </h2>
          <p className="projects__header-subtext">
            {projects[projectIndex].subtext}
          </p>
          <div className="projects__header-links">
            <ul className="links__list">
              <li className="links__list-item">
                <a href={projects[projectIndex].pageLink} target="_blank">
                  Read More
                </a>
              </li>
              <li className="links__list-item">
                <a href={projects[projectIndex].liveLink} target="_blank">
                  Watch it live!
                </a>
              </li>
              <li className="links__list-item last-item">
                <a href={projects[projectIndex].githubLink} target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="projects__slider-markers">
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
        <div className="projects__description">
          {projects[projectIndex].description}
        </div>
        <aside className="projects__aside rounded-corners">
          <h3>LoremIpsum Lor Ipsum Lorem</h3>
          <p className="divider"></p>
          <ul className="projects__aside-details">
            {projects[projectIndex].mainFeatures.map((feature) => (
              <li
                key={feature + Math.random()}
                className="projects__aside-item"
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="projects__aside-link">
            <a href={projects[projectIndex].pageLink} target="_blank">
              Read More
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Projects;
