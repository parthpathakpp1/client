import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const PlaceSelectorPage = () => {
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
  return (
    <>
     <BrandName />

      <div className="flex justify-between">
        <div className="container w-2/3 p-8 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Which of these best describes your place?</h1>
          <div className="flex flex-wrap">{renderPlaces()}</div>
        </div>

      <ChatBox />
      </div>
    </>
  );
};

export default PlaceSelectorPage;
