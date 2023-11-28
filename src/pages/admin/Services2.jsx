import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const Services2 = () => {
    const [guestsCount, setGuestsCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedsCount, setBedsCount] = useState(1);
  const [amenities, setAmenities] = useState(['Wi-Fi', 'Parking', 'Kitchen']);
  const [newAmenity, setNewAmenity] = useState('');

  const handleIncrement = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const handleDecrement = (setter) => {
    if (setter === 0) return;
    setter((prevCount) => prevCount - 1);
  };

  const handleAddAmenity = () => {
    if (newAmenity.trim() !== '') {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity('');
    }
  };

  const handleRemoveAmenity = (index) => {
    const updatedAmenities = [...amenities];
    updatedAmenities.splice(index, 1);
    setAmenities(updatedAmenities);
  };

  return (
    <>
     <BrandName />
     <div className="flex justify-between">
    <div className="w-2/3 p-8">
         <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Share some basics about your place, you will add more details</h2>
          <div className='p-6'>
          <div className="flex justify-between items-center mb-4 font-medium">
            <p>Guests</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setGuestsCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{guestsCount}</span>
              <button onClick={() => handleIncrement(setGuestsCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 font-medium">
            <p>Bedroom</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setBedroomCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{bedroomCount}</span>
              <button onClick={() => handleIncrement(setBedroomCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 font-medium">
            <p>Bathroom</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setBathroomCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{bathroomCount}</span>
              <button onClick={() => handleIncrement(setBathroomCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 font-medium">
            <p>Beds</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setBedsCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{bedsCount}</span>
              <button onClick={() => handleIncrement(setBedsCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2 ">Tell your guest what your place has to offer</h2>
          <p className="text-sm text-gray-500 mb-2 ">Provide a list of amenities you provide to stand out:</p>
          <ul className="list-disc pl-4 mb-4">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center justify-between border rounded-lg shadow-md py-1 px-6 mb-4 mr-4" style={{ maxWidth: '200px' }}>
                {amenity}
                <button onClick={() => handleRemoveAmenity(index)} className="text-red-700">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <input
              type="text"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              className="p-2 border rounded shadow-md mr-2"
              placeholder="New Amenity"
            />
            <button onClick={handleAddAmenity} className="text-red-700 p-2 font-semibold">
            + add amenities
            </button>
          </div>
        </div>  

        <div className="mt-6">
  <h2 className="text-2xl font-bold mb-2">Your Standout Service</h2>
  <p className="text-sm text-gray-500 mb-2 ml-2">Provide a list of standout amenities you offer:</p>
  <div className="flex flex-wrap">
    {[1, 2, 3].map((kitchen, index) => (
      <div key={index} className="border rounded-lg shadow-md py-1 px-6 mb-4 mr-4" style={{ maxWidth: '200px' }}>
        <p className="font-semibold">Kitchen {kitchen}</p>
      </div>
    ))}
  </div>
</div>
    </div>
    <ChatBox />
    </div>
    </>
  )
}

export default Services2