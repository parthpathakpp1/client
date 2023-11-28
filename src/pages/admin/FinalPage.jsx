import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVolumeMute, faComments } from '@fortawesome/free-solid-svg-icons';
import largerectangle from '../../assets/lastrectangle.png';

const FinalPage = () => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/2 relative">
        <img
          src={largerectangle}
          alt="Large Rectangle"
          className="w-full h-screen"
        />
        <div className="absolute bottom-0 left-0 w-full p-2">
          <button className="text-white p-2 ">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button className="text-white p-2">
            <FontAwesomeIcon icon={faVolumeMute} />
          </button>
          <button className="text-white p-2">
            <FontAwesomeIcon icon={faComments} />
          </button>
        </div>
        <div className="absolute bottom-0 left-full w-full text-center p-4">
          <button className="bg-red-700 border-2 px-4 py-4 border-white rounded-lg text-white p-2 ">
            Let's Get Started
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-36 text-center border-l border-red-700 ml-5">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Congratulations</h1>
        <p className="text-2xl mb-4 text-red-700 font-bold">GARIMA!</p>
        <p className="text-sm text-black font-semibold mb-4">
          Here’s what we’ll show to guests. Make sure everything looks like what we’ll show to guests.
        </p>
      </div>
    </div>
  );
};

export default FinalPage;
