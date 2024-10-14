//React
import { useEffect, useState } from "react";
// Components
import CustomIcon from "@common/CustomIcon";
//Types
import { Project, ProjectName } from "@models/index";
//Context
import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";

const selectFeaturedProject = (
  projectName: ProjectName,
  projects: Project[]
): Project => {
  const selectedProject = projects.find(
    (project) => project.mobileTitle === projectName
  );
  return selectedProject ? selectedProject : projects[0];
};

function FeaturedProjectCard({ projectName }: { projectName: ProjectName }) {
  const { projects, lenguage } = useAppContext();
  const [featuredProject, setFeaturedProject] = useState<Project>(
    {} as Project
  );

  useEffect(() => {
    setFeaturedProject(selectFeaturedProject(projectName, projects));
  }, [projectName, projects]);

  return (
    <Link to={`/projects/${featuredProject.mobileTitle}`}>
      <div className="featured-project-card">
        <div className="featured-project-card__icons-container">
          <div className="featured-project-card__icon-text">
            <h3>
              {lenguage === "en" && "Featured Project"}
              {lenguage === "es" && "Proyecto Destacado"}
            </h3>
          </div>
          <div className="featured-project-card__icons">
            {featuredProject?.technologies?.map((tech, index) => (
              <CustomIcon key={index} color="#FAFAFA">
                {tech}
              </CustomIcon>
            ))}
          </div>
        </div>
        <div className="featured-project-card__label">
          <p>
            {lenguage === "en" && "Mobile Web App made with React/Typescript"}
            {lenguage === "es" &&
              "Aplicación Web Móvil desarrollada con React/Typescript"}
          </p>
        </div>
        <div className="featured-project-card__content">
          <div className="featured-project-card__text">
            <h3 className="featured-project-card__text-title">
              {featuredProject.mobileTitle}
            </h3>
            <p className="featured-project-card__text-description">
              {featuredProject?.subtext?.slice(0, 175) + " ..."}
            </p>
            <Link
              to={`/projects/${featuredProject.mobileTitle}`}
              target="_blank"
              className="featured-project-card__text-link"
            >
              {lenguage === "en" && "View More"}
              {lenguage === "es" && "Conocer Más"}
            </Link>
          </div>
          <div className="featured-project-card__logo">
            <img
              src={featuredProject.logo}
              alt="hiragana shuffle"
              className="featured-project-card__logo-img"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;
