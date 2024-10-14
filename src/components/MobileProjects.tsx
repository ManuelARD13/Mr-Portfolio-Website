/* Components */
import CustomIcon from "@common/CustomIcon";
/*Icons*/
import { BiLogoGithub } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
/* Types */
import { Project } from "@models/index";
import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";

function MobileProjects({
  mobileProjects,
  className,
}: {
  mobileProjects: Project[];
  className?: string;
}) {
  //TODO: style description scrollbar
  const { lenguage } = useAppContext();
  return (
    <div className={`mobile-projects ${className}`}>
      {mobileProjects.map((project, index) => (
        <div
          key={index}
          className="mobile-projects__card rounded-corners box-shadow glass-card"
          style={{
            borderColor: project.mainColor,
            backgroundImage: `url(${project.image})`,
          }}
        >
          <Link to={`/projects/${project.mobileTitle}`}>
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
                style={{ background: project.mainColor }}
                onClick={() =>
                  window.open(
                    "https://manuelard13.github.io/hiragana-shuffle-app/",
                    "_blank"
                  )
                }
              >
               { lenguage === "en" && "Watch it live"}
             { lenguage === "es" && "Ver en vivo"}
              </button>
              <a
                href="https://github.com/ManuelARD13/hiragana-shuffle-app"
                className="mobile-projects__card-links-link"
              >
                <CustomIcon color={project.mainColor}>
                  <BiLogoGithub />
                </CustomIcon>
              </a>
              <Link
                to={`/projects/${project.mobileTitle}`}
                className="mobile-projects__card-links-link"
              >
                <CustomIcon color={project.mainColor}>
                  <CgFileDocument />
                </CustomIcon>
              </Link>
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
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MobileProjects;
