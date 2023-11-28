import React, { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Rectangle from '../../assets/Rectangle.png'
import bookingimage from '../../assets/bookingimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar ,faTimes,faFileAlt,faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const  Booking =({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDOB,setSelectedDOB]= useState(null);
  const [passengers, setPassengers] = useState([]);
  const [itinerary, setItinerary] = useState(null);
  const [activities, setActivities] = useState([]);
  const [giftExperience, setGiftExperience] = useState(false);
  const [personalMessage, setPersonalMessage] = useState('');
  const [selectedSlots, setSelectedSlots] = useState({});
    const [selectedTimings, setSelectedTimings] = useState({});

    
  const handleTimingChange = (activityId, newTiming) => {
    setSelectedTimings((prevSelectedTimings) => ({
      ...prevSelectedTimings,
      [activityId]: newTiming,
    }));
  };


  const handleCountIncrement = (activityId) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.activity_id === activityId
          ? { ...activity, count: (activity.count || 0) + 1 }
          : activity
      )
    );
  };

  const handleCountDecrement = (activityId) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.activity_id === activityId && activity.count > 0
          ? { ...activity, count: activity.count - 1 }
          : activity
      )
    );
  };
   
  const addPassenger = () => {
    setPassengers([...passengers, { firstName: '', lastName: '', dob: null }]);
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const removePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };




  const handleSlotTimeChange = (activityId, newSlotTime) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.activity_id === activityId ? { ...activity, slotTime: newSlotTime } : activity
      )
    );
  };

  const handleGiftExperienceChange = () => {
    setGiftExperience(!giftExperience);
  };

  const handlePersonalMessageChange = (e) => {
    setPersonalMessage(e.target.value);
  };
  
  const fetchItinerary = async () => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.travelbeem.in/itinerary/getItinerary?date=2023-11-12T00:00:00Z&user_count=9&activity_ids=6547e0060f25e5bdfa53b6b6&activity_ids=6547dec90f25e5bdfa53b6b4&activity_ids=6547dffc0f25e5bdfa53b6b5', 
        {
          headers: {
            api_key: 'test_key',
          },
        });

        const result = await response.json();
        setItinerary(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  };

    useEffect(() => {
    // Fetch itinerary when the component mounts or selectedDate changes
    fetchItinerary();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleSlotSelection = (activityId, scheduleId) => {
    setSelectedSlots((prevSelectedSlots) => ({
      ...prevSelectedSlots,
      [activityId]: scheduleId,
    }));
  };

  const renderTimeSlots = (activityId) => {
    const activity = itinerary?.itinerary_schedules.find((schedule) => schedule.activity_id === activityId);

    if (!activity || !activity.activity_schedules || activity.activity_schedules.length === 0) {
      return null;
    }

    return (
      <div className="mt-3 ml-10">
      <div className="flex">
        {activity.activity_schedules.map((schedule) => (
          <div
            key={schedule.id}
            className={`border border-gray-500 p-0 md:p-1 mr-2 ${selectedSlots[activityId] === schedule.id ? 'bg-red-700 text-white' : ''}`}
            onClick={() => handleSlotSelection(activityId, schedule.id)}
          >
            <p className="text-center text-sm">{`${new Date(schedule.start_time).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}`}</p>
            <p className="text-center text-sm">{selectedSlots[activityId] === schedule.id ? 'Slot selected' : `${schedule.available_seats} slots left`}</p>
          </div>
        ))}
      </div>
    </div>
    );
  };

  useEffect(() => {
    if (itinerary) {
      const updatedActivities = itinerary.itinerary_schedules.map((schedule) => ({
        activity_id: schedule.activity_id,
        activity_type: schedule.activity_type,
        checked: false,
      }));
      setActivities(updatedActivities);
    }
  }, [itinerary]);
  
  

  return (
    <div className="modal">
    <div className="modal-content">
    <span className="close" onClick={onClose}>
          &times;
        </span>
    <div className="mt-10 overflow-x-hidden  ">
    <div className="flex justify-top items-top h-100 ml-16 mr-16">
  <div className="container mx-auto pl-4 border border-gray-30 rounded-lg">
  <button onClick={onClose}>Close</button>
    <div className="mb-4 ml-4 ">
      {/* <!-- Date Picker --> */}
      <div className="mb-4 mt-10 flex justify-center items-center mr-7 md:mr-0 ">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleDateChange(new Date(selectedDate.getTime() - 86400000))} // Subtract one day
                    className="cursor-pointer "
                  />
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => handleDateChange(date)}
                    className="border rounded-md p-2 shadow-lg text-center text-gray-700 "
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleDateChange(new Date(selectedDate.getTime() + 86400000))} // Add one day
                    className="cursor-pointer ml-2"
                  />
                </div>

     
     
 <div className="mb-4 ml-4 md:ml-12 font-bold text-lg  md:text-2xl">Activities book</div>
 
 {activities.map((activity) => (
  <div key={activity.activity_id} className="mb-4 ml-10 font-semibold flex flex-col md:flex-row items-center justify-between">
    <div className="">
      <div className='flex flex-col popup-container'>
        <label className="inline-block font-bold text-sm md:text-xl">
          {activity.activity_type.charAt(0).toUpperCase() + activity.activity_type.slice(1)}
        </label>
        {renderTimeSlots(activity.activity_id)}
      </div>
    </div>

    <div className=" mt-5 md:mt-0 mr-24 flex items-center ">
      <button onClick={() => handleCountDecrement(activity.activity_id)} className="border-2 rounded-md border-solid border-black-800 pl-1 pr-1">-</button>
      <span className="mx-2">{activity.count || 0}</span>
      <button onClick={() => handleCountIncrement(activity.activity_id)} className="border-2 rounded-md border-solid border-black-800 pl-1 pr-1">+</button>

      <div className="ml-6">
      
        <select
          value={selectedTimings[activity.activity_id] || ''}
          onChange={(e) => handleTimingChange(activity.activity_id, e.target.value)}
          className="border-2 rounded-md border-solid border-black-800 p-1"
        >
          <option value="" disabled>
            Slot Timings
          </option>
          {activity.activity_schedules ? (
            activity.activity_schedules.map((schedule) => (
              <option key={schedule.id} value={schedule.id}>
              {`${new Date(schedule.start_time).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}`}
              </option>
            ))
          ) : (
            <option value="" disabled>
              Loading...
            </option>
          )}
        </select>
      </div>
      
    </div>
  </div>
))}
{/* 
      <!-- Gift Experience Section --> */}
      <div className="mb-4 ml-20 font-semibold">
        <input
          type="checkbox"
          checked={giftExperience}
          onChange={handleGiftExperienceChange}
          className="mr-2 mt-8"
        />
        <label className="inline-block">Gift this experience</label>
      </div>

      {/* <!-- Personal Message Section --> */}
      {giftExperience && (
        <div>
          <div className="mb-2 ml-20 font-semibold">Send your personal message</div>
          <textarea
            value={personalMessage}
            onChange={handlePersonalMessageChange}
            className="w-72 h-32 ml-20 p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
      )}
    </div>
  </div>
</div>
<div className="mt-4 ml-16 mr-16  ">
<div className="flex items-center">

              <p className=" text-2xl font-semibold text-red-700">Contact Information</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <p className="text-xs">*Your hotel voucher will be sent to this email address</p>
              </div>
            </div>

          
          <div className="w-full">
          <label className="text-xs font-semibold">Email*</label>
          <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your email" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
          <label className="text-xs font-semibold">Contact Number*</label>
          <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. +91 9876543210" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
          <label className="text-lg text-red-700 font-semibold mr-5">Travelers</label>
          {passengers.map((passenger, index) => (
            <div key={index} className="flex items-center mt-2">
              <div className="mr-4 w-1/2">
                <label className="text-xs font-semibold">First Name*</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your first name"
                  value={passenger.firstName}
                  onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="text-xs font-semibold">Last Name*</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your last name"
                  value={passenger.lastName}
                  onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <p className="text-xs font-semibold ml-16 mr-16 ">Date of Birth*</p>
                {/* <!-- Date Picker --> */}
                <div className=" mt-3 flex justify-center items-center">
                  <DatePicker
                    selected={passenger.dob}
                    onChange={(date) => handlePassengerChange(index, 'dob', date)}
                    className="border rounded-md p-2 shadow-lg text-gray-700"
                  />
                </div>
              </div>
              <button
                className="text-red-700 font-bold text-sm py-2 px-4 rounded-md ml-2"
                onClick={() => removePassenger(index)}
              >
                Remove 
              </button>
            </div>
          ))}
          <button
            className="text-red-700 font-bold text-sm py-2 px-4 rounded-md mt-2"
            onClick={addPassenger}
          >
           + Add Passenger
          </button>
          <p className="text-sm text-gray-400 font-light">Name should be the same as in Government ID proof</p>
        </div>

  </div>
        
        <hr className="my-4 border ml-16 mr-16" />
        <div className="bg-white rounded-xl p-4 ml-16 mr-16">
  <h2 className="text-xl font-semibold text-red-700">Travel Insurance</h2>
  <p className="text-xs">Secure your travel with just Rs 267 per traveler</p>
  <div className="flex items-center space-x-2 mt-4">
    <img src={Rectangle} alt="Reactangle" className='w-40 h-40 images-booking' />
    <img src={Rectangle} alt="Reactangle" className='w-40 h-40 images-booking' />
    <img src={Rectangle} alt="Reactangle" className='w-40 h-40 images-booking' />
  </div>

  <div className="flex flex-col  justify-between mt-4">
    <div>
      <label className="inline-flex items-center">
        <input type="radio" className="form-radio text-red-700 h-4 w-4" name="secureTrip" checked />
        <span className="ml-2">Yes, secure my trip</span>
      </label>
    </div>
    <div>
      <label className=" items-center">
        <input type="radio" className="form-radio text-red-700 h-4 w-4" name="secureTrip" />
        <span className="ml-2">I am willing to risk my trip</span>
      </label>
    </div>
  </div>
    
    <div className="flex booking-last-media ">
      
      <div className="bg-white rounded-xl ">
      <div className="bg-white rounded-xl ">
    <div className="flex items-center space-x-4 mt-4">
        <img src={bookingimage} alt="Activity Thumbnail" className=" rounded-md" />
      
    </div>
    <p className="text-3xl font-semibold">Activity Name</p>
    <div className="text-lg flex items-center">
        <FontAwesomeIcon icon={faFileAlt} className="h-6 w-4 mr-4 text-primary" /> {/* Replace faCalendar with faFileAlt */}
        <p className="text-sm">2 X General</p>
      </div>

    <div className=" text-lg flex items-center">
        <FontAwesomeIcon icon={faCalendar} className="h-6 w-4 mr-4 text-primary" />
        <p className="text-sm">Oct 15, 2023 | 1:00 PM - 4:00 PM</p>
      </div>

      <div className="flex items-center mt-2">
                           <FontAwesomeIcon icon={faTimes} className="text-black mr-2 h-6 w-4" />
                                          <p className="text-sm">CancellationPolicy: 24 hrs before  <span className='text-gray-400'>Learn more</span></p>
                                </div>
</div>

<div className="bg-white max-w-2xl ">
<div className="mt-2">
        <div className="flex justify-between">
          <p className="text-sm md:text-lg font-bold">Tickets</p>
          <p className="text-sm md:text-lg">Rs1899</p>
        </div>
        <p className="text-sm md:text-lg font-bold">Additional Service charges</p>
        <div className='flex justify-between'>
        <p>Food</p>
        <p className="">Rs699</p>
        </div>
        <div className='flex justify-between'>
        <p>Personal Trainer</p>
        <p className="">Rs699</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Discount</p>
          <p className="text-base font">Rs 7282</p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Taxes</p>
          <p className="text-base ">Rs 37837</p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-300 pt-4">
        <div className="flex justify-between">
          <p className="text-lg md:text-xl font-bold">Total </p>
          <p className="text-lg md:text-xl font-bold">20005</p>
        </div>
      </div>
      
    </div>
    
      </div>
      
      <div className='flex flex-col justify-end items-center ml-12 '>
<h2 className="text-lg md:text-xl font-semibold text-black mb-5 select-preferred-text">Select Preferred Payment to Pay</h2>
<div className="border border-gray-300 bg-gray-300 p-4 rounded-lg w-96 h-96"> 
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">UPI</p>
    <p className="text-sm">Paytm, Google Pay, PhonePe</p>
  </div>
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">Wallets</p>
    <p className="text-sm">Netbanking, Credit Card</p>
  </div>
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">Wallets</p>
    <p className="text-sm">Netbanking, Credit Card</p>
  </div>
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">Wallets</p>
    <p className="text-sm">Netbanking, Credit Card</p>
  </div>
</div>
<div className='pt-10'>
<button className='bg-red-700 hover:bg-red-800 text-white font-bold text-2xl py-3 px-12 rounded-md'>
  Confirm Booking
</button>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
);
}

export default Booking;