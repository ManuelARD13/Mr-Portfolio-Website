import { useEffect, useState } from "react";

import CustomIcon from "../common/CustomIcon";
import DescriptionCard from "../common/DescriptionCard/DescriptionCard";
import ProjectCard from "../common/ProjectCard/ProjectCard";

import { LuArrowDownCircle } from "react-icons/lu";
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

type IndexBounderies = {
  indexMin: number;
  indexMax: number;
};

/* Courses List. Keep it in a 2 to 20 items range. */
const cards = [
  { title: "React.js" },
  { title: "TypeScript" },
  { title: "Front-end Development" },
  { title: "Sass" },
  { title: "React.js" },
  { title: "TypeScript" },
  { title: "Front-end Development" },
  { title: "Sass" },
  { title: "React.js" },
  { title: "TypeScript" },
  { title: "Front-end Development" },
  { title: "Sass" },
  { title: "React.js" },
  { title: "TypeScript" },
  { title: "Front-end Development" },
  { title: "Sass" },
  { title: "React.js" }
];

const features = [
  {
    icon: <BiLogoReact />,
    title: "React.js Development",
    link: "Lorem Ipsum",
  },
  {
    icon: <BiLogoTypescript />,
    title: "TypeScript Developer",
    link: "Lorem Ipsum",
  },
  {
    icon: <BiLogoJavascript />,
    title: "JavaScript Fundamentals",
    link: "Lorem Ipsum",
  },
  {
    icon: <BiLogoSass />,
    title: "Sass proficiency",
    link: "Lorem Ipsum",
  },
  {
    icon: <BiLogoHtml5 />,
    title: "HTML & CSS Fundamentals",
    link: "Lorem Ipsum",
  },
  {
    icon: <BiLogoGit />,
    title: "Git Basics Knowledge",
    link: "Lorem Ipsum",
  },
  {
    icon: <RiHomeGearFill />,
    title: "Home Office Experience",
    link: "Lorem Ipsum",
  },
];

const socialMediaIcons: { icon: JSX.Element; link: string }[] = [
  {
    icon: <BiLogoGithub />,
    link: "https://github.com/manuelard13",
  },
  {
    icon: <BiLogoLinkedinSquare />,
    link: "https://www.linkedin.com/in/manuel-a-rojas/",
  },
  {
    icon: <BiLogoTelegram />,
    link: "https://t.me/ManuelARD13",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:duranalejandro661@gmail",
  },
];

function Hero() {
  /* TODO: add scroll behavior to features aside list */

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
          indexMin: indexBounderies.indexMin + 1,
          indexMax: indexBounderies.indexMax + 1,
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
  }, [indexBounderies]);

  useEffect(() => {
    setSlicedCards(
      cards.slice(indexBounderies.indexMin, indexBounderies.indexMax)
    );
  }, [indexBounderies]);

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
          <div className="hero__features-bottom" onClick={() => (location.href = "/academics")}>
            <p>Explore More</p>
          </div>
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
          <a href="#projects">
            <button className="hero__img-button">Live Projects</button>
          </a>
          <a href="/academics" className="hero__img-link">
            Academics {<MdKeyboardDoubleArrowRight />}
          </a>
        </div>
      </div>
      <div className="hero__cards-container">
        <div className="hero__cards-container-left rounded-corners box-shadow">
          <ProjectCard />
        </div>
        <div className="hero__cards-container-right">
          {slicedCards.map((_card, index) => (
            <DescriptionCard
              key={Math.random() + `${index}`}
              className="hero__card rounded-corners box-shadow"
              cardInfo={slicedCards[index]}
            />
          ))}
          <div className="hero-cards__slider-markers">
            {cards.map((_card, index) => {
              return (
                <div
                  key={index}
                  className={`hero-cards__slider-marker box-shadow}
                       ${
                         index === indexBounderies.indexMax - 1 ? "active" : ""
                       }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <a href="#about" className="hero__down-btn">
        <LuArrowDownCircle />
      </a>
    </section>
  );
}

export default Hero;
