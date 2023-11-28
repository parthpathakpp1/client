import React from 'react';
import discover from '../../assets/travel.png';

const Discover = () => {
  return (
    <div className="bg-gray-300 w-1049 h-430 rounded-lg p-4 pt-10 pb-10">
      <div className="flex justify-center items-center h-full">
        <p className="font-inter text-lg font-bold leading-7 text-left md:text-2xl ">
          DISCOVER YOUR TRAVEL PERSONALITY
        </p>
      </div>
      <p className="text-center py-1 font-medium text-gray-600 text-sm md:text-xl">Select an image</p>
      <div className="flex justify-center mt-4 pr-5">
        <div className="p-2 rounded hover:shadow-lg transition duration-300 transform hover:scale-105">
          <img src={discover} alt="Discover" className='cursor-pointer h-36 md:h-48' />
        </div>
        <p className="flex justify-center font-medium text-gray-500 items-center text-2xl m-0 mx-4">OR</p>
        <div className="p-2 rounded hover:shadow-lg transition duration-300 transform hover:scale-105">
          <img src={discover} alt="Discover" className='cursor-pointer h-36 md:h-48' />
        </div>
      </div>
    </div>
  );
};

export default Discover;
