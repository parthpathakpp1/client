import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const Services1 = () => {
    const [addresses, setAddresses] = useState([{ houseNumber: '', pincode: '', location: '' }]);
  const [cancellationPolicy, setCancellationPolicy] = useState(false);
  const [reschedulePolicy, setReschedulePolicy] = useState(false);

  const handleAddAddress = () => {
    setAddresses([...addresses, { houseNumber: '', pincode: '', location: '' }]);
  };
  return (
    <> 
     <BrandName />
    <div className="flex justify-between">
        <div className="w-2/3 p-8">
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
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
          <div className="p-2 ">
            <input
              type="checkbox"
              id="cancellationPolicy"
              className="mr-2"
              checked={cancellationPolicy}
              onChange={() => setCancellationPolicy(!cancellationPolicy)}
            />
            <label htmlFor="cancellationPolicy">Share your exact location</label>
          </div>
          <div className="p-2 ">
            <input
              type="checkbox"
              id="cancellationPolicyOther"
              className="mr-2"
              checked={cancellationPolicy}
              onChange={() => setCancellationPolicy(!cancellationPolicy)}
            />
            <label htmlFor="cancellationPolicyOther">Share your exact location</label>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Reschedule Policy</h2>
          <div className="p-2 ">
            <input
              type="checkbox"
              id="reschedulePolicy"
              className="mr-2"
              checked={reschedulePolicy}
              onChange={() => setReschedulePolicy(!reschedulePolicy)}
            />
            <label htmlFor="reschedulePolicy">Share your exact location</label>
          </div>
          <div className="p-2">
            <input
              type="checkbox"
              id="reschedulePolicyOther"
              className="mr-2"
              checked={reschedulePolicy}
              onChange={() => setReschedulePolicy(!reschedulePolicy)}
            />
            <label htmlFor="reschedulePolicyOther">Share your exact location</label>
          </div>
        </div>
        </div>
        <ChatBox />
        </div>
    </>
  )
}

export default Services1