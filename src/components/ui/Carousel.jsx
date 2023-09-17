import React, { useState } from "react";

export const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <>
          <i
            className="fas fa-chevron-left arrow arrow-left"
            onClick={prevSlide}
          ></i>

          <i
            className="fas fa-chevron-right arrow arrow-right"
            onClick={nextSlide}
          ></i>

          <span className="indicator">
            {slide + 1} / {images.length}
          </span>
        </>
      )}

      {images.map((item, index) => {
        return (
          <img
            src={item}
            alt={"carousel image " + item}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
    </div>
  );
};
