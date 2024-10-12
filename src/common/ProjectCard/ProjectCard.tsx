import CustomIcon from "@common/CustomIcon";
import { Project } from "@models/index";
import { Link } from "react-router-dom";
// import { CgFileDocument } from "react-icons/cg";
// import { BiLogoGithub } from "react-icons/bi";

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      to={`/projects/${project.mobileTitle}`}>
    <div
      className={`project-card ${className}`}
      style={{
        borderColor: project.mainColor,
        backgroundImage: `url(${project.image})`,
      }}
    >
      <Link to={`/projects/${project.mobileTitle}`}>
        <div className="project-card__img">
          <img src={project.logo} alt={project.mobileTitle} />
        </div>
        <div className="project-card__text">
          <h3
            className="project-card__text-title"
            style={{ borderColor: project.mainColor }}
          >
            {project.mobileTitle}
          </h3>
          <div className="project-card__text-description">
            {project.description}
          </div>
        </div>
        {/* <div className="project-card__links">
              <button
                className="project-card__links-btn"
                onClick={() =>
                  window.open(
                    `${project.liveLink}`,
                    "_blank"
                  )
                }
              >
                Watch it live
              </button>
              <a
                href="https://github.com/ManuelARD13/hiragana-shuffle-app"
                className="project-card__links-link"
              >
                <CustomIcon color={project.mainColor}>
                  <BiLogoGithub />
                </CustomIcon>
              </a>
              <a
                href={`/projects/${project.mobileTitle}`}
                className="project-card__links-link"
              >
                <CustomIcon color={project.mainColor}>
                  <CgFileDocument />
                </CustomIcon>
              </a>
            </div> */}
        <div
          className="project-card__icons"
          style={{ backgroundColor: project.mainColor }}
        >
          {project.technologies.map((tech, index) => (
            <CustomIcon key={index} color="#FAFAFA">
              {tech}
            </CustomIcon>
          ))}
        </div>
      </Link>
    </div>
    </Link>
  );
}

export default ProjectCard;
