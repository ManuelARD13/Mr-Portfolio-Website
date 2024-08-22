import { useEffect, useState } from "react";

type SliderImage = {
  src: string;
  alt: string;
};

function GroupedSlider({
  images,
  containerClassName
}: {
  images: SliderImage[];
  containerClassName?: string;
}) {
  const [currentSlides, setCurrentSlides] = useState<SliderImage[]>(images);

  const reorderSlides = (slides: SliderImage[]) => {
    const newSlides = [...slides];
    const firstItem = newSlides.shift();
    if (!firstItem) return [{ src: "", alt: "" }];
    newSlides.push(firstItem);
    return newSlides;
  };

  useEffect(() => {
      const interval = setInterval(() => {
      setCurrentSlides(slides => reorderSlides(slides));
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={`grouped-slider ${containerClassName}`}>
      {currentSlides
        .slice(currentSlides.length - 3, currentSlides.length)
        .map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`grouped-slider__item box-shadow slide-${index+1}`}
          />
        ))}
    </div>
  );
}

export default GroupedSlider;
