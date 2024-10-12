import { Link } from "react-router-dom";

interface CardProps {
  cardInfo: {
    title: string;
    description: string;
    link: string;
    logo: string;
    techIcon: JSX.Element;
    date: string;
    institution: string;
  };
  className?: string;
}

function DescriptionCard({className, cardInfo} : CardProps) {
  return (
    <div className={`description-card ${className}`}>
      <div className="description-card__icons-container">
        <div className="description-card__icon-1">
          {cardInfo.techIcon}
        </div>
        <div className="description-card__icon-2">
          <img src={cardInfo.logo} alt="" />
        </div>
      </div>
      <div className="description-card__label">
        <p>Web Development School</p>
      </div>
      <div className="description-card__text">
        <h3 className="description-card__text-title">{cardInfo.title}</h3>
        <p className="description-card__text-description">
          {cardInfo.description.slice(0, 75) + "..."}
        </p>
        <a href="/" className="description-card__text-link">
          {`${cardInfo.date}. ${cardInfo.institution}`}
        </a>
      </div>
      <div className="description-card__button">
        <Link to={`academics/#certifications`}><button>View Details</button></Link>
      </div>
    </div>
  );
}

export default DescriptionCard;
