import React, { useContext,useState, useEffect } from 'react';
import { InputContext } from '../../context/InputContext';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import arrowImage from '../../assets/arrow.png'
import smallrectangle from '../../assets/flightrectangle.png'


const Flights = () => {
  const {
    selectedCity,
    selectedStartDate,
    selectedEndDate,
    selectedGuests,
  } = useContext(InputContext);
  

 
  const [selectedActivityTypes, setSelectedActivityTypes] = useState([]);
 
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  
 
  
  const handleActivityTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedActivityTypes([...selectedActivityTypes, value]);
    } else {
      setSelectedActivityTypes(selectedActivityTypes.filter((type) => type !== value));
    }
  };

  const handlePriceRangeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, value]);
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter((range) => range !== value));
    }
  };
  
  const [tripType, setTripType] = useState('oneWay');
  const [classType, setClassType] = useState('economy');
  const [adults, setAdults] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search clicked');
  };


  return (
    <>
      <Header />
      <div className="container mx-auto p-8" style={{marginTop:'240px'}}>
      <div className="flex mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="oneWay"
            checked={tripType === 'oneWay'}
            onChange={() => setTripType('oneWay')}
            className="rounded-md border mr-2"
          />
          <label htmlFor="oneWay">One Way</label>
        </div>
        <div className="flex items-center mx-4">
          <input
            type="checkbox"
            id="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={() => setTripType('roundTrip')}
            className="rounded-md border mr-2"
          />
          <label htmlFor="roundTrip">Round Trip</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="directFlights"
            checked={tripType === 'directFlights'}
            onChange={() => setTripType('directFlights')}
            className="rounded-md border mr-2"
          />
          <label htmlFor="directFlights">Direct Flights Only</label>
        </div>
        <div className="flex items-center ml-auto">
          <label htmlFor="classType" className="block text-sm font-medium text-gray-700 mr-2">
            Class
          </label>
          <select
            id="classType"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First Class</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mx-2">
            Adults
          </label>
          <select
            id="adults"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Adults
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-grow">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">
            From
          </label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className='flex items-center ml-5'>
        <svg width="20" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.11 6.739a.842.842 0 0 1-.842-.842V4.844a.21.21 0 0 0-.21-.211H4.543a1.264 1.264 0 1 1 0-2.527h8.515a.21.21 0 0 0 .21-.21V.841A.843.843 0 0 1 14.544.12l4.212 2.528a.842.842 0 0 1 0 1.444L14.544 6.62a.843.843 0 0 1-.433.12ZM.409 10.26l4.212-2.527a.842.842 0 0 1 1.276.723v1.053c0 .116.095.21.21.21h8.516a1.264 1.264 0 1 1 0 2.528H6.108a.21.21 0 0 0-.21.21v1.053a.842.842 0 0 1-1.277.722L.409 11.705a.842.842 0 0 1 0-1.445Z" fill="#2276E3"></path></svg>
        </div>
        <div className="flex-grow mx-4">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">
            To
          </label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex-grow pr-5">
          <label htmlFor="departDate" className="block text-sm font-medium text-gray-700">
            Depart
          </label>
          <input
            type="date"
            id="departDate"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex-grow pr-5">
          <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
            Return
          </label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex items-center pt-5">
          <button
            onClick={handleSearch}
            className="bg-red-700 text-white py-2 px-6 rounded-full focus:outline-none hover:bg-red-600"
          >
            Search
          </button>
        </div>
      </div>
      <button> + Add Another Flight (upto 3)</button>
    </div>

      <div className="flex" >
      {/* Left section for filters and sorting */}
        <div className="w-8/12 bg-gray-100 p-4 md:w-1/4">
          <div className="mb-4 ">
            <h2 className="text-xl font-bold mb-2">Filters</h2>
            <hr className="my-4" />
            <div className="mb-4">
  <h3 className="text-lg font-bold mb-2">Airlines</h3>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Indigo"
        onChange={handleActivityTypeChange}
      />
      Indigo
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Air India"
        onChange={handleActivityTypeChange}
      />
      Air India
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Spicejet"
        onChange={handleActivityTypeChange}
      />
      Spicejet
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Vistara"
        onChange={handleActivityTypeChange}
      />
      Vistara
    </label>
  </div>
</div>

<hr className="my-4" />

<div className="mb-4">
  <h3 className="text-lg font-bold mb-2">Deals</h3>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Best"
        onChange={handleActivityTypeChange} // Update this function as needed
      />
      Best
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Cheapest"
        onChange={handleActivityTypeChange} // Update this function as needed
      />
      Cheapest
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="Fast"
        onChange={handleActivityTypeChange} // Update this function as needed
      />
      Fast
    </label>
  </div>
</div>
            <hr className="my-4" />
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Price</h3>
            <div className="mt-2">
    <Slider
      range
      min={500}
      max={2000}
      defaultValue={[500, 2000]}
      onChange={handlePriceRangeChange} // Update this function as needed
    />
  </div>
            </div>
            <hr className="my-4" />
        
            <div className="mb-4">
  <h3 className="text-lg font-bold mb-2">Stops</h3>
  <div className="flex items-center">
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        value="1"
        onChange={handleActivityTypeChange}
      />
      <div className="border border-gray-300 rounded-md p-2 hover:bg-red-700 hover:text-white cursor-pointer">
        1
      </div>
    </label>
    <label className="ml-4 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        value="2"
        onChange={handleActivityTypeChange}
      />
      <div className="border border-gray-300 rounded-md p-2 hover:bg-red-700 hover:text-white cursor-pointer">
        2
      </div>
    </label>
    <label className="ml-4 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        value="3"
        onChange={handleActivityTypeChange}
      />
      <div className="border border-gray-300 rounded-md p-2 hover:bg-red-700 hover:text-white cursor-pointer">
        3
      </div>
    </label>
  </div>
   
</div>
</div>
</div>
      

        {/* Right section for activity details */}
        <div className="w-full md:w-3/4 p-4">
  <h2 className="text-2xl font-bold mb-4 text-red-700">Activities</h2>
  <div className="flex flex-row mt-5">
    <div className="flex items-center justify-evenly border border-gray rounded-md w-9/12">
      <div className="mx-2">
        <img src={smallrectangle} alt='Logo' className='w-8 h-8 ' />
        <div className='text-xs font-semibold'>INDIGO</div>
        <div className='text-xs font-semibold'>6525353</div>
      </div>
      <div className="flex mx-2 text-sm font-bold flex-col">
        <span>20:35</span>
        <span>DEL :12 Nov</span>
      </div>
      <div className="flex mx-2 flex-col text-xs font-bold justify-center items-center">
        <div className="flex">Direct</div>
        <div>
          <img src={arrowImage} alt="Flight Logo" className="w-36 h-10" />
        </div>
        <div className="flex">Non-stop</div>
      </div>
      <div className="flex text-sm font-bold mx-2 flex-col">
        <span>4:25</span>
        <span>MUL :12 Nov</span>
      </div>
    </div>
    <div className="border border-gray rounded-md mx-3 p-2 items-center flex flex-col">
      <div>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Book now
        </button>
      </div>
      <div className="font-semibold">Rs.4587</div>
      <div>
        <span className="rounded-3xl border border-gray p-1 font-semibold">
          + more facility
        </span>
      </div>
    </div>
  </div>
  
  <div className="flex flex-row mt-5">
    <div className="flex items-center justify-evenly border border-gray rounded-md w-9/12">
      <div className="mx-2">
        <img src={smallrectangle} alt='Logo' className='w-8 h-8 ' />
        <div className='text-xs font-semibold'>INDIGO</div>
        <div className='text-xs font-semibold'>6525353</div>
      </div>
      <div className="flex mx-2 text-sm font-bold flex-col">
        <span>20:35</span>
        <span>DEL :12 Nov</span>
      </div>
      <div className="flex mx-2 flex-col text-xs font-bold justify-center items-center">
        <div className="flex">Direct</div>
        <div>
          <img src={arrowImage} alt="Flight Logo" className="w-36 h-10" />
        </div>
        <div className="flex">Non-stop</div>
      </div>
      <div className="flex text-sm font-bold mx-2 flex-col">
        <span>4:25</span>
        <span>MUL :12 Nov</span>
      </div>
    </div>
    <div className="border border-gray rounded-md mx-3 p-2 items-center flex flex-col">
      <div>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Book now
        </button>
      </div>
      <div className="font-semibold">Rs.4587</div>
      <div>
        <span className="rounded-3xl border border-gray p-1 font-semibold">
          + more facility
        </span>
      </div>
    </div>
  </div>
  
  
  <div className="flex flex-row mt-5">
    <div className="flex items-center justify-evenly border border-gray rounded-md w-9/12">
      <div className="mx-2">
        <img src={smallrectangle} alt='Logo' className='w-8 h-8 ' />
        <div className='text-xs font-semibold'>INDIGO</div>
        <div className='text-xs font-semibold'>6525353</div>
      </div>
      <div className="flex mx-2 text-sm font-bold flex-col">
        <span>20:35</span>
        <span>DEL :12 Nov</span>
      </div>
      <div className="flex mx-2 flex-col text-xs font-bold justify-center items-center">
        <div className="flex">Direct</div>
        <div>
          <img src={arrowImage} alt="Flight Logo" className="w-36 h-10" />
        </div>
        <div className="flex">Non-stop</div>
      </div>
      <div className="flex text-sm font-bold mx-2 flex-col">
        <span>4:25</span>
        <span>MUL :12 Nov</span>
      </div>
    </div>
    <div className="border border-gray rounded-md mx-3 p-2 items-center flex flex-col">
      <div>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Book now
        </button>
      </div>
      <div className="font-semibold">Rs.4587</div>
      <div>
        <span className="rounded-3xl border border-gray p-1 font-semibold">
          + more facility
        </span>
      </div>
    </div>
  </div>
  
  <div className="flex flex-row mt-5">
    <div className="flex items-center justify-evenly border border-gray rounded-md w-9/12">
      <div className="mx-2">
        <img src={smallrectangle} alt='Logo' className='w-8 h-8 ' />
        <div className='text-xs font-semibold'>INDIGO</div>
        <div className='text-xs font-semibold'>6525353</div>
      </div>
      <div className="flex mx-2 text-sm font-bold flex-col">
        <span>20:35</span>
        <span>DEL :12 Nov</span>
      </div>
      <div className="flex mx-2 flex-col text-xs font-bold justify-center items-center">
        <div className="flex">Direct</div>
        <div>
          <img src={arrowImage} alt="Flight Logo" className="w-36 h-10" />
        </div>
        <div className="flex">Non-stop</div>
      </div>
      <div className="flex text-sm font-bold mx-2 flex-col">
        <span>4:25</span>
        <span>MUL :12 Nov</span>
      </div>
    </div>
    <div className="border border-gray rounded-md mx-3 p-2 items-center flex flex-col">
      <div>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Book now
        </button>
      </div>
      <div className="font-semibold">Rs.4587</div>
      <div>
        <span className="rounded-3xl border border-gray p-1 font-semibold">
          + more facility
        </span>
      </div>
    </div>
  </div>
  
  

  
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Flights;
