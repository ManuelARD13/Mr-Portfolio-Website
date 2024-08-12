import React, { useEffect, useState } from "react";
import PortfolioWebsiteImg from "../assets/MRPWImg.jpg";
import PathfinderDemoImg from "../assets/PFQCImg.jpg";
import HiraganaShuffleImg from "../assets/HSImg.jpg";
import { BiLogoReact, BiLogoTypescript, BiLogoSass } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";

/*TODO: Finish Slider component:
    - adjust colored links in the slides
    - test add change slide while clicking the whole left or right side of the section
    - Complete each project data and test cards background contrast
    - add final arrow icons
    - add slide transition animations
*/

type Project = {
  title: string;
  subtext: string;
  technologies: JSX.Element[];
  description: JSX.Element;
  githubLink: string;
  liveLink: string;
  pageLink: string;
  mainFeatures: string[];
  image: string;
  mainColor: string;
  secondaryColor?: string;
};

const projects: Project[] = [
  {
    title:
      "Front-end Portfolio Website, o consectetur adipisicing elit. Itaque, harum.",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio facilis at necessitatibus quasi praesentium aliquam quod nam,earum exercitationem aperiam nulla dolores dolor tempora.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nobis
        saepe unde mollitia aperiam repudiandae nemo ex impedit sapiente aliquid
        accusamus ut necessitatibus harum rerum blanditiis sint delectus,
        possimus placeat molestias. Voluptatum reprehenderit doloremque
        voluptatem alias. Saepe, pariatur minima voluptatibus eaque quae culpa
        fugiat officia et odio vitae dolore magni.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/Mr-Portfolio-Website-draft",
    liveLink: "https://manuelrojas.tech",
    pageLink: "https://github.com/ManuelARD13/Mr-Portfolio-Website-draft",
    mainFeatures: [
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    ],
    image: PortfolioWebsiteImg,
    mainColor: "hsl(178, 90%, 50%)",
  },
  {
    title:
      "Videogame UI DEMO, sit amet lo consectetur adipisicing elit. Itaque, harum.",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio facilis at necessitatibus quasi praesentium aliquam quod nam,earum exercitationem aperiam nulla dolores dolor tempora.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nobis
        saepe unde mollitia aperiam repudiandae nemo ex impedit sapiente aliquid
        accusamus ut necessitatibus harum rerum blanditiis sint delectus,
        possimus placeat molestias. Voluptatum reprehenderit doloremque
        voluptatem alias. Saepe, pariatur minima voluptatibus eaque quae culpa
        fugiat officia et odio vitae dolore magni.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/pathfinders-adventures-demo",
    liveLink: "https://pathfinders-adventures-demo-6s4r.vercel.app/",
    pageLink: "https://github.com/ManuelARD13/pathfinders-adventures-demo",
    mainFeatures: [
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    ],
    image: PathfinderDemoImg,
    mainColor: "#CCAE27",
  },
  {
    title:
      "Japanese learning app, met lo consectetur adipisicing elit. Itaque, harum.",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima optio facilis at necessitatibus quasi praesentium aliquam quod nam,earum exercitationem aperiam nulla dolores dolor tempora.",
    technologies: [
      <BiLogoReact />,
      <BiLogoTypescript />,
      <BiLogoSass />,
      <TbBrandFramerMotion />,
    ],
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, nobis
        saepe unde mollitia aperiam repudiandae nemo ex impedit sapiente aliquid
        accusamus ut necessitatibus harum rerum blanditiis sint delectus,
        possimus placeat molestias. Voluptatum reprehenderit doloremque
        voluptatem alias. Saepe, pariatur minima voluptatibus eaque quae culpa
        fugiat officia et odio vitae dolore magni.
      </p>
    ),
    githubLink: "https://github.com/ManuelARD13/hiragana-shuffle-app",
    liveLink: "https://manuelard13.github.io/hiragana-shuffle-app/",
    pageLink: "https://github.com/ManuelARD13/hiragana-shuffle-app",
    mainFeatures: [
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    ],
    image: HiraganaShuffleImg,
    mainColor: "#FF5572",
  },
];

function Projects() {
  const [projectIndex, setprojectIndex] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  useEffect(() => {
    updateTheme(projects[projectIndex].mainColor);
    document.querySelector(".projects")?.addEventListener("mouseover", () => {
      setIsMouseOver(true);
    });
    document.querySelector(".projects")?.addEventListener("mouseleave", () => {
      setIsMouseOver(false);
    });
  }, [projectIndex]);

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
  }, [projectIndex, isMouseOver]);

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

  return (
    <section className="section-projects" id="projects">
      <div
        className="projects"
        style={{ backgroundImage: `url(${projects[projectIndex].image})` }}
      >
        <div className="projects__slider-controls">
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
