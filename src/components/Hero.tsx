import { LuArrowDownCircle } from "react-icons/lu";
import DescriptionCard from "../common/DescriptionCard/DescriptionCard";
import { RiHomeGearFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoSass,
  BiLogoGit,
} from "react-icons/bi";
import CustomIcon from "../common/CustomIcon";
import { useEffect, useState } from "react";
import ProjectCard from "../common/ProjectCard/ProjectCard";

// const cards = [
//   {
//     img: "../assets/react.svg",
//     title: "Lorem",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloremque?",
//     button: "Lorem",
//     button2: "Lorem",
//   },
//   {
//     img: "../assets/react.svg",
//     title: "Lorem",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloremque?",
//     button: "Lorem",
//     button2: "Lorem",
//   },
// ];

const cards = [
  { title: "React.js" },
  { title: "TypeScript" },
  { title: "Front-end Development" },
  { title: "Sass" },
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

type IndexBounderies = {
  indexMin: number;
  indexMax: number;
};

function Hero() {
  /* TODO: add scroll behavior to features aside list */
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [indexBounderies, setIndexBounderies] = useState<IndexBounderies>({
    indexMin: 0,
    indexMax: 2,
  });
  const [slicedCards, setSlicedCards] = useState(cards.slice(1, 3));

  useEffect(() => {
    document.querySelector(".cardss")?.addEventListener("mouseover", () => {
      setIsMouseOver(true);
    });
    document.querySelector(".cardss")?.addEventListener("mouseleave", () => {
      setIsMouseOver(false);
    });
  }, []);

  useEffect(() => {
    if (!isMouseOver) {
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
    }
  }, [indexBounderies, isMouseOver]);

  useEffect(() => {
    setSlicedCards(
      cards.slice(indexBounderies.indexMin, indexBounderies.indexMax)
    );
    console.log("hey");
  }, [indexBounderies]);
  return (
    <section className="hero">
      <aside className="hero__header">
        <div className="hero__features rounded-corners box-shadow">
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
          <div className="hero__features-bottom">
            <p>Explore More</p>
          </div>
        </div>
        <div className="hero__img rounded-corners box-shadow">
          <h1 className="hero__img-title">
            Manuel <br /> Rojas Duran
          </h1>
          <p className="hero__img-subtitle">Front-end Engineer</p>
          <a href="#projects">
            <button className="hero__img-button">Live Projects</button>
          </a>
          <a className="hero__img-link">
            Academics {<MdKeyboardDoubleArrowRight />}
          </a>
        </div>
      </aside>
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
                  className={`hero-cards__slider-marker box-shadow}
                       ${index === 3 ? "active" : ""}`}
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
