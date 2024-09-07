/* Components */
import CustomIcon from "@common/CustomIcon";
/*Icons*/
import { BiLogoGithub } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
/* Types */
import { Project } from "../types";

function MobileProjects({
  mobileProjects,
}: {
  mobileProjects: Project[];
}) {
  //TODO: style description scrollbar
  return (
    <div className="mobile-projects">
      {mobileProjects.map((project, index) => (
        <div
          key={index}
          className="mobile-projects__card rounded-corners box-shadow glass-card"
          style={{
            borderColor: project.mainColor,
            backgroundImage: `url(${project.image})`,
          }}
          onClick={() => (location.href = `/projects/${project.mobileTitle}`)}
        >
          <div className="mobile-projects__card-img">
            <img src={project.logo} alt={project.mobileTitle} />
          </div>
          <div className="mobile-projects__card-text">
            <h3
              className="mobile-projects__card-text-title"
              style={{ borderColor: project.mainColor }}
            >
              {project.mobileTitle}
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
            <a
              href={`/projects/${project.mobileTitle}`}
              className="mobile-projects__card-links-link"
            >
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
  );
}

export default MobileProjects;
