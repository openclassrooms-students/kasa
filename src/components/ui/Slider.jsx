import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider__container">
      <div className="slider__arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={prevSlide}
        >
          <g clip-path="url(#clip0_197250_22)">
            <path
              d="M17.51 3.87003L15.74 2.10003L5.83995 12L15.7399 21.9L17.5099 20.13L9.37995 12L17.51 3.87003Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_197250_22">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(24 24) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={nextSlide}
        >
          <g clip-path="url(#clip0_197250_19)">
            <path
              d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.09998L6.48999 3.86998L14.62 12L6.48999 20.13Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_197250_19">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {slides.map((image, index) => {
        return (
          <div className="slider" key={index}>
            {index === current && <img className="slider__img" src={image} />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
