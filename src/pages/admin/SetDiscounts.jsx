import React from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const SetDiscounts = () => {
  return (
    <>
     <BrandName />
    <div className="flex justify-between">
   <div className="w-2/3 p-8">
      <h1 className="text-3xl font-bold text-red-700 mb-4 text-center">Add DISCOUNTS! (optional)</h1>
      <p className="text-sm text-black mb-4 text-center">
      Help your place stand out to get booked faster and earn your first review hjf ghdjdf hghjfgb juksjh hjdhbff hjkjsh dhjkdfhj fhjkjhj dhjdghdfjhf hjhdd ujhfhjf
      </p>

      <div className="border rounded-lg p-4 shadow-md mb-4  border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <div className="bg-red-700 text-white rounded-lg py-1 px-4 p-2 mr-6">
              10%
            </div>
            <div className='flex flex-col'>
            <p className="text-sm font-semibold">New List Promotion</p>
             <p className="text-sm font-semibold">Offer 20% off on first 3 bookings</p>
             </div>
          </div>
         
        </div>
        
      </div>

      <div className="border rounded-lg p-4 shadow-md mb-4 border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-700 text-white rounded-lg py-1 px-4 p-2 mr-6">
              10%
            </div>
            <div className='flex flex-col'>
            <p className="text-sm font-semibold">New List Promotion</p>
             <p className="text-sm font-semibold">Offer 20% off on first 3 bookings</p>
             </div>
          </div>
         
        </div>
        
      </div>

      <div className="border rounded-lg p-4 shadow-md mb-4 border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-700 text-white rounded-lg py-1 px-4 p-2 mr-6">
              10%
            </div>
            <div className='flex flex-col'>
            <p className="text-sm font-semibold">New List Promotion</p>
             <p className="text-sm font-semibold">Offer 20% off on first 3 bookings</p>
             </div>
          </div>
         
        </div>
        
      </div>
      <p className="text-sm text-black mb-4 text-right">
      Only one discount per service is applicable
      </p>
    </div>
    <ChatBox />
    </div>
    </>
  );
};

export default SetDiscounts;
