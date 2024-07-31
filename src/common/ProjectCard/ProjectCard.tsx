// Components
import CustomIcon from "../CustomIcon";
// Icons
import { BiLogoReact, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
// Images
import projectoLogo from "../../assets/hiragana-shuffle-logo-removebg-preview.png";
//Types

type ProjectCard = {
  title: string;
  description: string;
  logo: string;
  technologies: JSX.Element[];
  liveLink: string;
};

const projectTechs: JSX.Element[] = [
  <BiLogoReact />,
  <BiLogoTypescript />,
  <BiLogoSass />,
  <TbBrandFramerMotion />,
];

const featuredProjectInfo: ProjectCard = {
  title: "Japanese Learning App",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloremque?",
  logo: projectoLogo,
  technologies: projectTechs,
  liveLink: "https://manuelard13.github.io/hiragana-shuffle-app/",
};

function ProjectCard() {
  return (
    <div className="project-card" onClick={() => (location.href = "#projects")}>
      <div className="project-card__icons-container">
        <div className="project-card__icon-text">
          <h3>Featured Project</h3>
        </div>
        <div className="project-card__icons">
          {featuredProjectInfo.technologies.map((tech, index) => (
            <CustomIcon key={index} color="#FAFAFA">
              {tech}
            </CustomIcon>
          ))}
        </div>
      </div>
      <div className="project-card__label">
        <p>Mobile Web App made with React/Typescript</p>
      </div>
      <div className="project-card__content">
        <div className="project-card__text">
          <h3 className="project-card__text-title">
            {featuredProjectInfo.title}
          </h3>
          <p className="project-card__text-description">
            {featuredProjectInfo.description}
          </p>
          <a
            href={featuredProjectInfo.liveLink}
            target="_blank"
            className="project-card__text-link"
          >
            Watch it live!
          </a>
        </div>
        <div className="project-card__logo">
          <img
            src={featuredProjectInfo.logo}
            alt="hiragana shuffle"
            className="project-card__logo-img"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
