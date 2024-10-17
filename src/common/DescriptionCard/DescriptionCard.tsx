/* Components */
import { Link } from "react-router-dom";
/* Context */
import { useAppContext } from "@context/AppContext";
/* Framer */
import { motion } from "framer-motion";

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

function DescriptionCard({ className, cardInfo }: CardProps) {
  const { lenguage } = useAppContext();
  return (
    <motion.div
      initial={{rotateY: -90, opacity: 0}}
      animate={{rotateY: 0, opacity: 1}}
      transition={{duration: 0.5}} 
      className={`description-card ${className}`}
    >
      <div className="description-card__icons-container">
        <div className="description-card__icon-1">{cardInfo.techIcon}</div>
        <div className="description-card__icon-2">
          <img src={cardInfo.logo} alt="Certification Logo" />
        </div>
      </div>
      <div className="description-card__label">
        <p>
          {lenguage === "en" && "Web Development School"}
          {lenguage === "es" && "Escuela de Desarrollo Web"}
        </p>
      </div>
      <div className="description-card__text">
        <h3 className="description-card__text-title">
          {cardInfo.title.length > 36
            ? cardInfo.title.slice(0, 35) + "..."
            : cardInfo.title}
        </h3>
        <p className="description-card__text-description">
          {cardInfo.description.slice(0, 75) + "..."}
        </p>
        <Link to={cardInfo.link} className="description-card__text-link">
          {`${cardInfo.date}. ${cardInfo.institution}`}
        </Link>
      </div>
      <div className="description-card__button">
        <Link to={`academics/#certifications`}>
          <button>
            {lenguage === "en" && "View Details"}
            {lenguage === "es" && "Ver Detalles"}
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default DescriptionCard;
