import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const Services3 = () => {
    const [activityName, setActivityName] = useState("");
    const [duration, setDuration] = useState("");
    const [timeSlots, setTimeSlots] = useState([]);

    const handleTimeSlot = (e) => {
        e.preventDefault();
    
        // Add the time slot to the list
        const newTimeSlots = [...timeSlots, { time: "4:00 PM" }];
    
        // Set the state
        setTimeSlots(newTimeSlots);
      };
    
      const handleTimeDuration = (e) => {
        e.preventDefault();
    
        // Add the activity to the list
        const activities = [
          {
            name: activityName,
            duration,
          },
        ];
    
        // Set the state
        setActivityName("");
        setDuration("");
      };
      
  return (
    <>
    <BrandName />
     <div className="flex justify-between">
    <div className="w-2/3 p-8">
        <div className="mt-6">
  <h2 className="text-2xl font-bold mb-4">Share some basics about your service/activity</h2>
  <div className="flex flex-col space-y-4">
    <div className="flex flex-row space-x-4">
      <input
        type="text"
        placeholder="Activity name"
        className="border border-gray-300 rounded-md px-2 py-1"
        value={activityName}
        onChange={(e) => setActivityName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration in minutes"
        className="border border-gray-300 rounded-md px-2 py-1"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
    </div>
    <button
      type="submit"
      className="text-red-700 font-bold "
      onClick={handleTimeDuration}
    >
      + Add More
    </button>
  </div>

  <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">Add time slots</h1>
        <div className="flex flex-row space-x-4">
        <ul className="list-disc">
          {timeSlots.map((timeSlot) => (
            <div  key={timeSlot.time} className="border rounded-lg  shadow-md py-1 px-6 mb-4 mr-4 w-32">
            <li className='font-bold'>{timeSlot.time}</li>
            </div>
            
          ))}
        </ul>
          <button
            type="submit"
            className="text-red-700 font-bold"
            onClick={handleTimeSlot}
          >
            +Add time slot
          </button>
        </div>
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

export default Services3