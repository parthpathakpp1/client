import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';
const ServicePage = () => {
  const [addresses, setAddresses] = useState([{ houseNumber: '', pincode: '', location: '' }]);
  
  const handleAddAddress = () => {
    setAddresses([...addresses, { houseNumber: '', pincode: '', location: '' }]);
  };

return (
    <>
   <BrandName />
 <div className="flex justify-between">
      <div className="w-2/3 p-8">
        <h1 className="text-3xl font-bold mb-6">What type of service will guests have?</h1>

        <div className="flex flex-col mb-6">
          <div className="mb-2">
            <div className="p-2 border border-gray-300 rounded-lg">
              <input type="checkbox" id="entirePlace" className="mr-2" />
              <label htmlFor="entirePlace">An entire place</label>
            </div>
          </div>

          <div className="mb-2">
            <div className="p-2 border border-gray-300 rounded-lg">
              <input type="checkbox" id="room" className="mr-2" />
              <label htmlFor="room">A room</label>
            </div>
          </div>

          <div>
            <div className="p-2 border border-gray-300 rounded-lg">
              <input type="checkbox" id="sharedPlace" className="mr-2" />
              <label htmlFor="sharedPlace">A shared place</label>
            </div>
          </div>
        </div>

        {addresses.map((address, index) => (
          <div key={index} className="mb-6">
          <h2 className='text-xl font-bold'>Your Address</h2>
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`houseNumber-${index}`}>
                  House Number
                </label>
                <input
                  type="text"
                  id={`houseNumber-${index}`}
                  name={`houseNumber-${index}`}
                  value={address.houseNumber}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].houseNumber = e.target.value;
                    setAddresses(updatedAddresses);
                  }}
                  className="p-2 w-full border rounded shadow-md"
                  placeholder="House number"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`pincode-${index}`}>
                  Pincode
                </label>
                <input
                  type="text"
                  id={`pincode-${index}`}
                  name={`pincode-${index}`}
                  value={address.pincode}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].pincode = e.target.value;
                    setAddresses(updatedAddresses);
                  }}
                  className="p-2 w-full border rounded shadow-md"
                  placeholder="Pincode"
                />
              </div>
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`houseNumber-${index}`}>
                  Share your exact location
                </label>
            <input
              type="text"
              id={`location-${index}`}
              name={`location-${index}`}
              value={address.location}
              onChange={(e) => {
                const updatedAddresses = [...addresses];
                updatedAddresses[index].location = e.target.value;
                setAddresses(updatedAddresses);
              }}
              className="mt-1 p-2 block w-full border rounded shadow-md mb-2"
              placeholder="Share your exact location"
            />

            {index === addresses.length - 1 && (
              <p className="text-xs text-gray-500 mb-4">In case of multiple addresses or locations, add here.</p>
            )}
          </div>
        ))}

        <button onClick={handleAddAddress} className="bg-red-700 text-white p-2 hover:bg-red-600">
         + Add Another Address
        </button>
        </div>

          <ChatBox />

    </div>
    
    </>
  );
};

export default ServicePage;
