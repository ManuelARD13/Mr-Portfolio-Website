import { SiPlatzi } from "react-icons/si";
import reactCourseLogo from "../../assets/reactjs-removebg-preview.png";

function DescriptionCard({className, cardInfo} : {className?: string, cardInfo: {title: string}}) {
  return (
    <div className={`description-card ${className}`}>
      <div className="description-card__icons-container">
        <div className="description-card__icon-1">
          <SiPlatzi />
        </div>
        <div className="description-card__icon-2">
          <img src={reactCourseLogo} alt="" />
        </div>
      </div>
      <div className="description-card__label">
        <p>Web Development School</p>
      </div>
      <div className="description-card__text">
        <h3 className="description-card__text-title">{cardInfo.title}</h3>
        <p className="description-card__text-description">
        React Components, Props, States, and Effects. Implementing React Context, React Portals, Local Storage, and more.
        </p>
        <a href="/" className="description-card__text-link">
          july 2023. Platzi.com
        </a>
      </div>
      <div className="description-card__button">
        <button onClick={() => location.href = "/academics"}>View Details</button>
      </div>
    </div>
  );
}

export default DescriptionCard;
