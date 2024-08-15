import {
  BiLogoReact,
  BiLogoSass,
  BiLogoTypescript,
  BiLogoGithub,
} from "react-icons/bi";
import CustomIcon from "../common/CustomIcon";
import { TbBrandFramerMotion } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";

import MRPWImg from "../assets/MRPWImg.jpg";
import MRPWLogo from "../assets/Mr-logo-removebg-preview.png";
import PFQCImg from "../assets/PFQCImg.jpg";
import PFQCLogo from "../assets/pathfinderLogo.png";
import HSImg from "../assets/HSImg.jpg";
import HSLogo from "../assets/hiragana-shuffle-logo-removebg-preview.png";

type MobileProject = {
  title: string;
  subtext: string;
  technologies: JSX.Element[];
  description: JSX.Element;
  githubLink: string;
  liveLink: string;
  pageLink: string;
  mainFeatures: string[];
  image: string;
  logo: string;
  mainColor: string;
  secondaryColor?: string;
};

const mobileProjects: MobileProject[] = [
  {
    title: "Web Dev Portfolio Website",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptates voluptatum, aperiam earum voluptatem consequuntur
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptates voluptatum, aperiam earum voluptatem consequuntur doloribus.
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
    image: MRPWImg,
    logo: MRPWLogo,
    mainColor: "hsl(178, 90%, 50%)",
  },
  {
    title: "Videogame Interface DEMO",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptates voluptatum, aperiam earum voluptatem consequuntur
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptates voluptatum, aperiam earum voluptatem consequuntur doloribus.
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
    image: PFQCImg,
    logo: PFQCLogo,
    mainColor: "#CCAE27",
  },
  {
    title: "Japanese Learning App",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptates voluptatum, aperiam earum voluptatem consequuntur
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptates voluptatum, aperiam earum voluptatem consequuntur doloribus.
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
    image: HSImg,
    logo: HSLogo,
    mainColor: "#FF5572",
  },
];

function MobileProjects() {
  //TODO: style description scrollbar
  return (
    <section className="mobile-projects" id="projects">
      <div className="mobile-projects__container">
        {mobileProjects.map((project, index) => (
          <div
            key={index}
            className="mobile-projects__card rounded-corners box-shadow glass-card"
            style={{ borderColor: project.mainColor, backgroundImage: `url(${project.image})` }}
          >
            <div className="mobile-projects__card-img">
              <img src={project.logo} alt={project.title} />
            </div>
            <div className="mobile-projects__card-text">
              <h3
                className="mobile-projects__card-text-title"
                style={{ borderColor: project.mainColor }}
              >
                {project.title}
              </h3>
              <div className="mobile-projects__card-text-description">
                {project.description}
              </div>
            </div>
            <div className="mobile-projects__card-links">
              <button
                className="mobile-projects__card-links-btn"
                onClick={() =>
                  window.open(
                    "https://manuelard13.github.io/hiragana-shuffle-app/",
                    "_blank"
                  )
                }
              >
                Watch it live
              </button>
              <a
                href="https://github.com/ManuelARD13/hiragana-shuffle-app"
                className="mobile-projects__card-links-link"
              >
                <CustomIcon color={project.mainColor}>
                  <BiLogoGithub />
                </CustomIcon>
              </a>
              <a href="#" className="mobile-projects__card-links-link">
                <CustomIcon color={project.mainColor}>
                  <CgFileDocument />
                </CustomIcon>
              </a>
            </div>
            <div
              className="mobile-projects__icons"
              style={{ backgroundColor: project.mainColor }}
            >
              {project.technologies.map((tech, index) => (
                <CustomIcon key={index} color="#FAFAFA">
                  {tech}
                </CustomIcon>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileProjects;
