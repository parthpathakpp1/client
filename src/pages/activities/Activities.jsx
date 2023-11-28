import React, { useContext,useState, useEffect } from 'react';
import { InputContext } from '../../context/InputContext';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Activities = () => {
  const {
    selectedCity,
    selectedStartDate,
    selectedEndDate,
    selectedGuests,
  } = useContext(InputContext);
  
  const [activities, setActivities] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('price_low_to_high');
  const [selectedActivityTypes, setSelectedActivityTypes] = useState([]);
  const [activityTypes, setActivityTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedActivityNames, setSelectedActivityNames] = useState([]);
  const [activityNames, setActivityNames] = useState([]);

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleActivityNameChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedActivityNames([...selectedActivityNames, value]);
    } else {
      setSelectedActivityNames(selectedActivityNames.filter((name) => name !== value));
    }
  };
  const sortActivities = () => {
    if (selectedSortOption === 'price_low_to_high') {
      activities.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'price_high_to_low') {
      activities.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === 'rating_low_to_high') {
      activities.sort((a, b) => a.rating - b.rating);
    } else if (selectedSortOption === 'rating_high_to_low') {
      activities.sort((a, b) => b.rating - a.rating);
    }
  };

  useEffect(() => {
    const fetchActivityTypes = async () => {
      try {
        const response = await axios.get('http://api.travelbeem.in/activity/getAllActivitiesTypes',
        {
          headers: {
            api_key: 'test_key',
          },
        });
        setActivityTypes(response.data);
      } catch (error) {
        console.error('Error fetching activity types:', error);
      }
    };

    fetchActivityTypes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://api.travelbeem.in/activity/getActivities?price_min=10&sort_by=price&sort_by_order=inc&page_no=1&page_size=10&rating=0',
          {
            headers: {
              api_key: 'test_key',
            },
          }
        );
        setActivities(response.data.activities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  
  }, [selectedCity, selectedStartDate, selectedEndDate, selectedGuests]);

  useEffect(() => {
    // Assuming you have the activities data available
    const names = activities.map(activity => activity.name);
    setActivityNames(names);
  }, [activities]);

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
    sortActivities();
  };

  const applyPriceFilter = async () => {
    try {
      // Update the API call to include the selected price range
      const response = await axios.get(
        `http://api.travelbeem.in/activity/getActivities?price_min=${minPrice}&price_max=${maxPrice}&sort_by=price&sort_by_order=inc&page_no=1&page_size=10&rating=0&agency_id=654920bd5bf68bf1aabc88f0`,
        {
          headers: {
            api_key: 'test_key',
          },
        }
      );
      setActivities(response.data.activities);
    } catch (error) {
      console.error('Error fetching activities with price filter:', error);
    }
  };
 
  
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
  
  const handleRatingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedRatings([...selectedRatings, value]);
    } else {
      setSelectedRatings(selectedRatings.filter((rating) => rating !== value));
    }
  };
  
  const filteredActivities = activities.filter((activity) => {
    if (selectedActivityTypes.length === 0 && selectedPriceRanges.length === 0 && selectedRatings.length === 0) {
      return true;
    }
    const typeCondition = selectedActivityTypes.length === 0 || selectedActivityTypes.includes(activity.type);
    const activityNameCondition =
    selectedActivityNames.length === 0 || selectedActivityNames.includes(activity.name);
    const priceCondition =
      selectedPriceRanges.length === 0 ||
      (selectedPriceRanges.includes("Under 500") && activity.price < 500) ||
      (selectedPriceRanges.includes("500 - 1000") && activity.price >= 500 && activity.price <= 1000) ||
      (selectedPriceRanges.includes("1000 - 2000") && activity.price >= 1000 && activity.price <= 2000) ||
      (selectedPriceRanges.includes("2000 or more") && activity.price >= 2000);
    
      const ratingCondition =
  selectedRatings.length === 0 ||
  selectedRatings.some((selectedRating) => {
    const nextRating = parseFloat(selectedRating) + 1;
    return (
      parseFloat(activity.rating) >= parseFloat(selectedRating) &&
      parseFloat(activity.rating) < nextRating
    );
  });

    const priceRangeCondition =
    (minPrice === '' && maxPrice === '') ||
    (minPrice !== '' && maxPrice !== '' && activity.price >= parseInt(minPrice) && activity.price <= parseInt(maxPrice));

    return (
      typeCondition &&
      priceCondition &&
      ratingCondition &&
      priceRangeCondition &&
      activityNameCondition
    );
  });


  const buttonList = [
    'Water Sports',
    'Experiences',
    'Hiking ',
    'Classes',
    'Mountain Biking',
    ' Destinations',
    'Air Sports',
  ];

  

  return (
    <>
      <Header />
      <div className="bg-white activities-container" >
    
  <div className="flex justify-center items-center flex-wrap activities-button-media ">
  <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-gray-300 text-2xl cursor-pointer mr-10"
            
          />

    {buttonList.map((button, index) => (
      <button
        key={index}
        className="border border-red-700 text-red-700 bg-transparent px-2 text-sm md:px-4 py-2 m-2 rounded-lg font-semibold"
      >
        {button}
      </button>
    ))}

    <FontAwesomeIcon
            icon={faChevronRight}
            className="text-gray-300 text-2xl cursor-pointer ml-10"
            
          />
  </div>
</div>
<div className="mt-4 pl-4 flex justify-end mr-5">
  <select
    value={selectedSortOption}
    onChange={handleSortOptionChange}
    className="px-4 py-2 border rounded-md"
    style={{ paddingLeft: '10px' }}
  >
    <option value="price_low_to_high">Price : Low to High</option>
    <option value="price_high_to_low">Price : High to Low</option>
    <option value="rating_low_to_high">Rating : High to Low</option>
    <option value="rating_high_to_low">Rating : Low to High</option>
  </select>
</div>
      <div className="flex" >
      {/* Left section for filters and sorting */}
        <div className="w-8/12 bg-gray-100 p-4 md:w-1/4 mt-6">
          <div className="mb-4 ">
            <h2 className="text-2xl font-bold mb-2 leading-8">FILTERS</h2>
            <hr className="my-4" />
            <div className="mb-4">
  <h3 className="text-xl font-bold mb-2 leading-8">Activity Name</h3>
  <div className="overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100  font-medium">
    {activityNames.map((name, index) => (
      <div key={index} className="mb-2 cursor-pointer leading-8">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            value={name}
            onChange={handleActivityNameChange}
          />
          {name}
        </label>
      </div>
    ))}
  </div>
</div>
 <hr className="my-4" />
            <div className="mb-4">
              <h3 className="text-xl font-bold leading-8 mb-2">Price</h3>
              <div className="mb-2 cursor-pointer leading-8 font-medium">
              <label>
                <input
                  type="checkbox"
                  className="mr-2"
                  value="500 - 1000"
                  onChange={handlePriceRangeChange}
                />
                ₹500 - ₹1000
              </label>
            </div>
            <div className="mb-2 cursor-pointer leading-8 font-medium">
              <label>
                <input
                  type="checkbox"
                  className="mr-2"
                  value="1000 - 2000"
                  onChange={handlePriceRangeChange}
                />
                ₹1000 - ₹2000
              </label>
            </div>
            <div className="mb-2 cursor-pointer leading-8 font-medium">
              <label>
                <input
                  type="checkbox"
                  className="mr-2"
                  value="2000 or more"
                  onChange={handlePriceRangeChange}
                />
                ₹2000 or more
              </label>
            </div>
            </div>
            <hr className="my-4" />
            <div>
              <h3 className="text-xl font-bold leading-8 mb-2">Your Budget</h3>
              <div className="flex flex-col mb-2 md:flex md:flex-row ">
        <input
          type="text"
          placeholder="Min"
          className="border-2 border-gray-400 px-2 py-1 mr-2 rounded-lg w-16 md:w-16 md:h-8"
          onChange={handleMinPriceChange}
          value={minPrice}
        />
        <span className='flex items-center ml-6 md:ml-0 font-bold mr-1'>to</span>
        <input
          type="text"
          placeholder="Max"
          className="border-2 border-gray-400 px-2 py-1 mr-2 rounded-lg w-16 md:w-16 md:h-8"
          onChange={handleMaxPriceChange}
          value={maxPrice}
        />
        <button className="bg-black text-white py-1 px-1 rounded-xl w-16 mt-4 md:mt-0 md:w-12 md:h-8" onClick={applyPriceFilter}>
          Go
        </button>
      </div>
            
            </div>
            <hr className="my-4" />
            <div className="mb-4">
  <h3 className="text-xl font-bold leading-8 mb-2">Activity Type</h3>
  <div className="overflow-y-auto max-h-32">
    {activityTypes.map((type, index) => (
      <div key={index} className="mb-2 cursor-pointer leading-8 font-medium">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            value={type}
            onChange={handleActivityTypeChange}
          />
          {type}
        </label>
      </div>
    ))}
  </div>
</div>
            <hr className="my-4" />
            <div className='font-medium'>
        <h3 className="text-xl font-bold leading-8 mb-2">Star Rating</h3>
        <div className="mb-2 leading-8 cursor-pointer">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 rounded-full"
              value="5"
              onChange={handleRatingChange}
            />
            4+ Stars
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              value="4"
              onChange={handleRatingChange}
            />
            3+ Stars
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              value="3"
              onChange={handleRatingChange}
            />
            2+ Stars
          </label>
        </div>
      </div>

           
          </div>
        </div>

        {/* Right section for activity details */}
        <div className="w-full md:w-3/4 p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {filteredActivities.map(activity => (
      <div key={activity.id} className="p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          {activity.photos && activity.photos.length > 0 ? (
            <Link key={activity.id} to={`/activitiesdetails/${activity.id}`}>
              <img
                src={activity.photos[0].url}
                alt={activity.name}
                className="w-full h-48 md:h-64 mb-4 object-cover rounded-lg"
              />
            </Link>
          ) : (
            <div>No Photo Available</div>
          )}

          <div className="font-bold text-sm md:text-lg mb-2  pl-5 overflow-hidden overflow-ellipsis">
  {activity.name}-<span className='font-medium'>{activity.description}</span>
</div>
<div className="text-center text-base font-semibold"> Rs{activity.price}/guest</div>
<div className="flex items-center justify-center ">
  <div className='text-center text-sm font-semibold '>
    {Array.from({ length: Math.floor(activity.rating) }).map((_, index) => (
      <FontAwesomeIcon icon={faStar} key={index} className="text-black text-sm" />
    ))}
    {activity.rating}(125 reviews)
  </div>
</div>

        </div>
      </div>
    ))}
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default Activities;
