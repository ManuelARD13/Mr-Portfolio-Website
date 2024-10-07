/*React*/
import { useEffect, useState } from "react";
/*Components*/
import CustomIcon from "@common/CustomIcon";
import DescriptionCard from "@common/DescriptionCard/DescriptionCard";
import ProjectCard from "@common/FeaturedProjectCard/FeaturedProjectCard";
/* Icons */
import { RiHomeGearFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoSass,
  BiLogoGit,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLogoGmail,
} from "react-icons/bi";
/*Types*/
import { ProjectName } from "@models/index";

interface HeroFeatures {
  title: string;
  icon: JSX.Element;
}

interface HeroCard {
  title: string;
  description: string;
  link: string;
  logo: string;
  techIcon: JSX.Element;
  date: string;
  institution: string;
}

interface IndexBounderies {
  indexMin: number;
  indexMax: number;
}
/*Data*/
const features: HeroFeatures[] = [
  {
    icon: <BiLogoReact />,
    title: "React.js Development",
  },
  {
    icon: <BiLogoTypescript />,
    title: "TypeScript Developer",
  },
  {
    icon: <BiLogoJavascript />,
    title: "JavaScript Fundamentals",
  },
  {
    icon: <BiLogoSass />,
    title: "Sass proficiency",
  },
  {
    icon: <BiLogoHtml5 />,
    title: "HTML & CSS Fundamentals",
  },
  {
    icon: <BiLogoGit />,
    title: "Git Basics Knowledge",
  },
  {
    icon: <RiHomeGearFill />,
    title: "Home Office Experience",
  },
];

const socialMediaIcons: { icon: JSX.Element; link: string }[] = [
  {
    icon: <BiLogoGithub />,
    link: "https://github.com/manuelard13",
  },
  {
    icon: <BiLogoLinkedinSquare />,
    link: "https://www.linkedin.com/in/manuelard13/",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:duranalejandro661@gmail",
  },
  {
    icon: <BiLogoTelegram />,
    link: "https://t.me/ManuelARD13",
  },
];

function Hero({ cards }: { cards: HeroCard[] }) {
  const [indexBounderies, setIndexBounderies] = useState<IndexBounderies>({
    indexMin: 0,
    indexMax: 2,
  });
  const [slicedCards, setSlicedCards] = useState(cards.slice(1, 3));

  useEffect(() => {
    const changeSlide = () => {
      if (indexBounderies.indexMax < cards.length) {
        setIndexBounderies({
          ...indexBounderies,
          indexMin: indexBounderies.indexMin + 2,
          indexMax: indexBounderies.indexMax + 2,
        });
      } else {
        setIndexBounderies({
          ...indexBounderies,
          indexMin: 0,
          indexMax: 2,
        });
      }
    };
    const interval = setInterval(() => {
      changeSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [indexBounderies, cards.length]);

  useEffect(() => {
    setSlicedCards(
      cards.slice(indexBounderies.indexMin, indexBounderies.indexMax)
    );
  }, [indexBounderies, cards]);

  return (
    <section className="hero">
      <div className="hero__header">
        <aside className="hero__features rounded-corners box-shadow">
          <h3 className="hero__features-title">Main Skills</h3>
          <div className="hero__features-top">
            <p>+2 Years Experience in Front-end Development Technologies:</p>
          </div>
          <ul className="hero__features-list">
            {features.map((feature) => (
              <li
                key={feature.title + Math.random()}
                className="hero__features-item"
              >
                <div className="hero__features-icon">
                  <CustomIcon>{feature.icon}</CustomIcon>
                </div>
                <p>{feature.title}</p>
                <div className="hero__features-arrow">
                  <MdKeyboardDoubleArrowRight />
                </div>
              </li>
            ))}
          </ul>
          <a href="/academics" className="hero__features-bottom">
            Explore More
          </a>
        </aside>
        <div className="hero__img rounded-corners box-shadow">
          <div className="hero__img-social-media">
            {socialMediaIcons.map(({ icon, link }) => (
              <a href={link} target="_blank" key={link}>
                <CustomIcon color="#FAFAFA">{icon}</CustomIcon>
              </a>
            ))}
          </div>
          <h1 className="hero__img-title">
            Manuel <br /> Rojas Duran
          </h1>
          <p className="hero__img-subtitle">Front-end Engineer</p>
          <a href="#about">
            <button className="hero__img-button">My Experience</button>
          </a>
          <a href="#projects" className="hero__img-link">
            Live Projects {<MdKeyboardDoubleArrowRight />}
          </a>
        </div>
      </div>
      <div className="hero__cards-container">
        <div className="hero__cards-container-left rounded-corners box-shadow">
          <ProjectCard projectName={ProjectName.JapaneseLearningApp} />
        </div>
        <div className="hero__cards-container-right">
          {slicedCards.map((card, index) => (
            <DescriptionCard
              key={card.description + `${index}`}
              className="hero__card rounded-corners box-shadow"
              cardInfo={card}
            />
          ))}
          <div className="hero-cards__slider-markers">
            {cards.slice(0, 20).map((_card, index) => {
              return (
                <div
                  key={index}
                  className={`hero-cards__slider-marker box-shadow}
                       ${
                         index < indexBounderies.indexMax &&
                         index >= indexBounderies.indexMin
                           ? "active"
                           : ""
                       }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
