import React, { useState } from 'react';
import slided from '../../assets/popular.png';
import smallslided from '../../assets/topactivities.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Second() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
  };

  return (
    <div className="max-w-full overflow-hidden relative flex justify-center items-center mt-4 md:pb-10 ml-10 md:ml-7">
      <div className="w-full overflow-hidden flex flex-col items-center pr-6">
        <h1 className="text-red-700 text-lg font-bold text-left mb-2 md:text-4xl">POPULAR PLACES</h1>
        <div className="flex flex-col justify-center items-center md:flex md:flex-row ">
          {currentSlide !== 0 && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-black cursor-pointer text-xl mb-6"
              onClick={handlePrev}
            />
          )}
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-90 h-auto"
              src={slided}
              alt="Slider"
            />
            <p className="text-center text-lg font-semibold ">CITY MUMBAI </p>
            <p className="text-center font-semibold">874 activities (234 reviews)</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-90 h-auto"
              src={slided}
              alt="Slider"
            />
            <p className="text-center text-lg font-semibold ">CITY MUMBAI </p>
            <p className="text-center font-semibold">874 activities (234 reviews)</p>
          </div>
          {currentSlide !== 4 && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-black cursor-pointer text-xl mb-6 "
              onClick={handleNext}
            />
          )}
        </div>
        <h1 className="text-red-700 text-lg font-bold mt-2 md:mr-0 md:mt-8 mb-2 md:text-4xl">Top Activities</h1>
        <div className="flex justify-center items-center mr-4 md:mr-0">
          {currentSlide !== 1 && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-black cursor-pointer mb-4"
              onClick={handlePrev}
            />
          )}
          <div className="flex flex-col items-center  mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto shadow-lg"
              src={smallslided}
              alt="Activity 1"
            />
            <p className="text-center text-lg font-bold mt-2">Surfing</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto shadow-lg"
              src={smallslided}
              alt="Activity 2"
            />
            <p className="text-center text-lg font-bold mt-2">Surfing</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto shadow-lg"
              src={smallslided}
              alt="Activity 3"
            />
            <p className="text-center text-lg font-bold mt-2">Surfing</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto shadow-lg"
              src={smallslided}
              alt="Activity 4"
            />
            <p className="text-center text-lg font-bold mt-2">Surfing</p>
          </div>
          {currentSlide !== 4 && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-black cursor-pointer mb-4"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Second;
