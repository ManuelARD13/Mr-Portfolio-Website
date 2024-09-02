import React, { useEffect, useState } from "react";
// import certification1 from "../../assets/diploma-asincronismo-js.jpg";
// import certification2 from "../../assets/tipos-avanzados-y-funciones-TS.jpg";
// import certification3 from "../../assets/git-y-github.jpg";

type Slide = {
  img: string;
  title: string;
  description: string;
  detailsList: string[];
};

// const slides: Slide[] = [
//   {
//     title: "Async with Javascript",
//     img: certification1,
//     description:
//       "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
//     detailsList: [
//       "Asincronismo en JavaScript",
//       "Promesas",
//       "Async Await",
//       "Event Loop",
//       "Promise.all",
//     ],
//   },
//   {
//     title: "Advanced Types and Functions",
//     img: certification2,
//     description:
//       "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
//     detailsList: [
//       "Tipos avanzados",
//       "Funciones",
//       "Generics",
//       "Interfaces",
//       "Clases",
//     ],
//   },
//   {
//     title: "Professional Git & Github",
//     img: certification3,
//     description:
//       "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
//     detailsList: ["Git", "Github", "Git Flow"],
//   },
//   {
//     title: "Async with Javascript",
//     img: certification1,
//     description:
//       "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
//     detailsList: [
//       "Asincronismo en JavaScript",
//       "Promesas",
//       "Async Await",
//       "Event Loop",
//       "Promise.all",
//     ],
//   },
//   {
//     title: "Advanced Types and Functions",
//     img: certification2,
//     description:
//       "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
//     detailsList: [
//       "Tipos avanzados",
//       "Funciones",
//       "Generics",
//       "Interfaces",
//       "Clases",
//     ],
//   },
//   {
//     title: "Professional Git & Github",
//     img: certification3,
//     description:
//       "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
//     detailsList: ["Git", "Github", "Git Flow"],
//   },
//   {
//     title: "Async with Javascript",
//     img: certification1,
//     description:
//       "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
//     detailsList: [
//       "Asincronismo en JavaScript",
//       "Promesas",
//       "Async Await",
//       "Event Loop",
//       "Promise.all",
//     ],
//   },
//   {
//     title: "Advanced Types and Functions",
//     img: certification2,
//     description:
//       "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
//     detailsList: [
//       "Tipos avanzados",
//       "Funciones",
//       "Generics",
//       "Interfaces",
//       "Clases",
//     ],
//   },
//   {
//     title: "Professional Git & Github",
//     img: certification3,
//     description:
//       "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
//     detailsList: ["Git", "Github", "Git Flow"],
//   },
//   {
//     title: "Async with Javascript",
//     img: certification1,
//     description:
//       "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
//     detailsList: [
//       "Asincronismo en JavaScript",
//       "Promesas",
//       "Async Await",
//       "Event Loop",
//       "Promise.all",
//     ],
//   },
//   {
//     title: "Advanced Types and Functions",
//     img: certification2,
//     description:
//       "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
//     detailsList: [
//       "Tipos avanzados",
//       "Funciones",
//       "Generics",
//       "Interfaces",
//       "Clases",
//     ],
//   },
//   {
//     title: "Professional Git & Github",
//     img: certification3,
//     description:
//       "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
//     detailsList: ["Git", "Github", "Git Flow"],
//   },
//   {
//     title: "Async with Javascript",
//     img: certification1,
//     description:
//       "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
//     detailsList: [
//       "Asincronismo en JavaScript",
//       "Promesas",
//       "Async Await",
//       "Event Loop",
//       "Promise.all",
//     ],
//   },
//   {
//     title: "Advanced Types and Functions",
//     img: certification2,
//     description:
//       "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
//     detailsList: [
//       "Tipos avanzados",
//       "Funciones",
//       "Generics",
//       "Interfaces",
//       "Clases",
//     ],
//   },
//   {
//     title: "Professional Git & Github",
//     img: certification3,
//     description:
//       "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
//     detailsList: ["Git", "Github", "Git Flow"],
//   },
//   {
//     title: "Async with Javascript",
//     img: certification1,
//     description:
//       "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplía tus conocimientos de programación creando una landing page!",
//     detailsList: [
//       "Asincronismo en JavaScript",
//       "Promesas",
//       "Async Await",
//       "Event Loop",
//       "Promise.all",
//     ],
//   },
//   {
//     title: "Advanced Types and Functions",
//     img: certification2,
//     description:
//       "Aprende los conceptos de tipos avanzados y funciones de TypeScript y crea aplicaciones de escritorio y web de forma sencilla.",
//     detailsList: [
//       "Tipos avanzados",
//       "Funciones",
//       "Generics",
//       "Interfaces",
//       "Clases",
//     ],
//   },
//   {
//     title: "Professional Git & Github",
//     img: certification3,
//     description:
//       "Aprende a trabajar con Git y Github, un sistema de control de versiones de software para el desarrollo de código.",
//     detailsList: ["Git", "Github", "Git Flow"],
//   },
// ];

function CarouselSlider({
  slides,
  className
}: {
  slides: Slide[];
  className?: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [slicedSlides, setSlicedSlides] = useState(slides.slice(0, 6));
  const [indexBounderies, setIndexBounderies] = useState({
    indexMin: 0,
    indexMax: 6,
  });
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  
  const handleSelectSlide = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const elementId = target.id;
    const index = slides.findIndex((slide) => slide.title === elementId);
    setCurrentSlide(slides[index]);
  };

  const moveSlides = (direction: "left" | "right") => {
    if (direction === "left" && indexBounderies.indexMin !== 0) {
      setIndexBounderies({
        ...indexBounderies,
        indexMin: indexBounderies.indexMin - 1,
        indexMax: indexBounderies.indexMax - 1,
      });
    } else if (direction === "right") {
      indexBounderies.indexMax < slides.length - 1 &&
        setIndexBounderies({
          ...indexBounderies,
          indexMin: indexBounderies.indexMin + 1,
          indexMax: indexBounderies.indexMax + 1,
        });
    }
  };

  useEffect(() => {
    if (!isMouseOver) {
      const changeSlide = () => {
        if (indexBounderies.indexMax < slides.length) {
          setIndexBounderies({
            ...indexBounderies,
            indexMin: indexBounderies.indexMin + 1,
            indexMax: indexBounderies.indexMax + 1,
          });
        } else {
          setIndexBounderies({
            ...indexBounderies,
            indexMin: 0,
            indexMax: 6,
          });
        }
      };
      const interval = setInterval(() => {
        changeSlide();
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [indexBounderies, isMouseOver, slides.length]);

  useEffect(() => {
    setSlicedSlides(
      slides.slice(indexBounderies.indexMin, indexBounderies.indexMax)
    );
  }, [indexBounderies, slides]);

  return (
    <div className={`slider-carousel__container ${className}`}>
      <div className="slider-carousel__display">
        <div className="slider-carousel__display-left">
          <img src={currentSlide.img} alt={currentSlide.title} />
        </div>
        <div className="slider-carousel__display-right">
          <h3 className="slider-carousel__display-title">
            {currentSlide.title}
          </h3>
          <p className="slider-carousel__display-description">
            {currentSlide.description}
          </p>
          <ul className="slider-carousel__display-details-list">
            {currentSlide.detailsList.map((detail) => (
              <li
                key={detail}
                className="slider-carousel__display-details-item"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="slider-carousel__selector"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {slicedSlides.map((slide, index) => (
          <div key={index} className={`slider-carousel__selector-slide`}>
            <img
              src={slide.img}
              alt={slide.title}
              onClick={handleSelectSlide}
              id={`${slide.title}`}
            />
          </div>
        ))}
      </div>
      <div className="slider-carousel__selector-controls">
        <div
          className="slider-carousel__selector-controls-arrow"
          onClick={() => moveSlides("left")}
        >
          {"<"}
        </div>
        <div className="slider-carousel__selector-controls-markers">
          {slides.map((_slide, index) => (
            <div
              key={index}
              className={`slider-carousel__selector-controls-marker ${
                indexBounderies.indexMax >= index &&
                indexBounderies.indexMin <= index &&
                "active"
              }`}
            ></div>
          ))}
        </div>
        <div
          className="slider-carousel__selector-controls-arrow"
          onClick={() => moveSlides("right")}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

export default CarouselSlider;
