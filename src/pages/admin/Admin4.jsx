import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PlaceSelectorPage1 = () => {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const handlePlaceClick = (index) => {
    const updatedSelectedPlaces = [...selectedPlaces];
    const placeIndex = updatedSelectedPlaces.indexOf(index);

    if (placeIndex === -1) {
      updatedSelectedPlaces.push(index);
    } else {
      updatedSelectedPlaces.splice(placeIndex, 1);
    }

    setSelectedPlaces(updatedSelectedPlaces);
  };

  const renderPlaces = () => {
    const places = [];
    for (let i = 1; i <= 20; i++) { // Change the loop limit to the desired number of boxes (e.g., 10)
      const isSelected = selectedPlaces.includes(i);
      places.push(
        <div
          key={i}
          onClick={() => handlePlaceClick(i)}
          className={`flex-shrink-0 p-4 border rounded-md mr-4 mt-5 cursor-pointer ${
            isSelected ? 'bg-red-700' : ''
          }`}
        >
          <div className="w-24 h-24 bg-gray-300"></div>
          <p className={`text-center mt-2 font-bold ${isSelected ? 'text-white' : ''}`}>Place {i}</p>
        </div>
      );
    }
    return places;
  };

  const buttonList = [
    'Water Sports',
    'Water Sports',
    'Water Sports',
    'Water Sports',
   
  ];
  return (
    <>
     <BrandName />
   
      <div className="flex justify-between">
        <div className="container w-2/3 p-8 mx-auto">
        <div className="flex justify-center items-center flex-wrap activities-button-media mb-6 ">
  <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-gray-300 text-2xl cursor-pointer mr-10"
            
          />

    {buttonList.map((button, index) => (
      <button
        key={index}
        className="border border-red-700 text-white bg-red-700 px-2 text-lg md:px-4 py-2 m-2 rounded-lg font-semibold"
      >
        {button}
      </button>
    ))}

    <FontAwesomeIcon
            icon={faChevronRight}
            className="text-gray-300 text-2xl cursor-pointer ml-10"
            
          />
  </div> 
          <div className='pl-4'>
          <h1 className="text-3xl font-bold mb-6">Which of these best describes your place?</h1>
          <div className="flex flex-wrap">{renderPlaces()}</div>
          </div>
        </div>

      <ChatBox />
      </div>
    </>
  );
};

export default PlaceSelectorPage1;
