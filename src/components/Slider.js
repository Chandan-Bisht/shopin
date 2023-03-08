import React, { useEffect, useState } from "react";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );
    return () => {};
  }, [currentIndex]);

  // const goToSlide = slideIndex => {
  //   setCurrentIndex(slideIndex)
  // }

  return (
    <div className="relative h-full group">
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-2/4 left-8 text-2xl text-black z-10 cursor-pointer">
        <ArrowBackIosNewOutlined onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-2/4 right-8 text-2xl text-black z-10 cursor-pointer">
        <ArrowForwardIosOutlined onClick={nextSlide} />
      </div>
      <div
        style={{
          backgroundImage: `url(${items[currentIndex].img})`,
        }}
        className="w-full h-full bg-cover"
      >
        <div className="absolute inset-y-0 left-[15%] transform translate-y-2/4">
          <p className="text-2xl font-medium text-gray-500 animate-slideintop delay-1000">
            {items[currentIndex].title}
          </p>
          <h2 className="text-6xl font-bold text-gray-800 pt-3 pb-6 animate-slideinright delay-1000">
            {items[currentIndex].description}
          </h2>
          <button className="bg-violet-400 text-white animate-slideinbottom uppercase font-semibold px-10 py-3 rounded-full hover:bg-black">
            Shop Now
          </button>
        </div>
      </div>
      {/* <div className='flex justify-center'>
        {items.map((slide, slideIndex) => (
          <div className='mx-[3px] my-0 cursor-pointer text-xl' onClick={() => goToSlide(slideIndex)} key={slideIndex}>&#9679;</div>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
