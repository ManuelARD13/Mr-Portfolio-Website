/* React */
import { useEffect, useState } from "react";
/* Types */
import { FeaturedCertification } from "@models/index";
/* Context */
import { useAppContext } from "@context/AppContext";

function GroupSlider({
  slides,
  className,
  withDescription = false,
}: {
  slides: FeaturedCertification[];
  className?: string;
  withDescription?: boolean;
}) {
  const { lenguage } = useAppContext();
  const [currentSlides, setCurrentSlides] =
    useState<FeaturedCertification[]>(slides);

  const reorderSlides: <T>(slides: T[]) => T[] = (slides) => {
    if (slides.length > 2) {
      const newSlides = [...slides];
      const firstItem = newSlides.shift();
      newSlides.push(firstItem!);
      return newSlides;
    } else {
      return slides;
    }
  };

  useEffect(() => {
    setCurrentSlides(slides);
  }, [slides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(() => reorderSlides(currentSlides));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlides]);

  return (
    <section className={`grouped-slider ${className}`}>
      <div className="grouped-slider__mobile-title">
        {lenguage === "en" && <h1>Featured Certifications</h1>}
        {lenguage === "es" && <h1>Certificaciones Destacadas</h1>}
      </div>
      <div className={`grouped-slider__img-slider grouped-slider__left`}>
        {currentSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt={slide.title}
            className={`grouped-slider__img-slider-item slide-${index + 1}`}
          />
        ))}
      </div>
      {withDescription ? (
        <div className="grouped-slider__right">
          <div className="grouped-slider__right-title">
            <h2>{currentSlides[0].title}</h2>
            {currentSlides[0].techIcon}
          </div>
          <div className="grouped-slider__right-description">
            <p>{currentSlides[0].description}</p>
          </div>
          <a href={currentSlides[0].link} target="_blank">
            <button className="grouped-slider__right-button">
              {lenguage === "en" && "Go to Course Content"}
              {lenguage === "es" && "Ir al contenido del curso"}
            </button>
          </a>
          <div className="grouped-slider__right-slide-arrow">{">"}</div>
        </div>
      ) : null}
    </section>
  );
}

export default GroupSlider;
