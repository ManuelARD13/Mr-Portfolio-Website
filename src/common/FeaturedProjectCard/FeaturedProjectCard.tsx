//React
import { useEffect, useState } from "react";
// Components
import CustomIcon from "@common/CustomIcon";
//Data
import { projects } from "@data/mainData";
//Types
import { Project, ProjectName } from "@models/index";

const selectFeaturedProject = (projectName: ProjectName): Project => {
  const selectedProject = projects.find(
    (project) =>
      project.mobileTitle ===
      projectName
  );
  console.log(projectName);
  return selectedProject ? selectedProject : projects[0];
};

function FeaturedProjectCard({ projectName }: { projectName: ProjectName }) {
  const [featuredProject, setFeaturedProject] = useState<Project>(
    {} as Project
  );

  useEffect(() => {
    setFeaturedProject(selectFeaturedProject(projectName));
  }, [projectName]);

  return (
    <div
      className="featured-project-card"
      onClick={() => (location.href = `/projects/${featuredProject.title}`)}
    >
      <div className="featured-project-card__icons-container">
        <div className="featured-project-card__icon-text">
          <h3>Featured Project</h3>
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
        <p>Mobile Web App made with React/Typescript</p>
      </div>
      <div className="featured-project-card__content">
        <div className="featured-project-card__text">
          <h3 className="featured-project-card__text-title">
            {featuredProject.mobileTitle}
          </h3>
          <p className="featured-project-card__text-description">
            {featuredProject.description}
          </p>
          <a
            href={`/projects/${featuredProject.mobileTitle}`}
            target="_blank"
            className="featured-project-card__text-link"
          >
            View More!
          </a>
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
  );
}

export default FeaturedProjectCard;
