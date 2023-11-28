import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from '../../assets/details1.png';
import image2 from '../../assets/details2.png';
import image3 from '../../assets/details3.png';
import smallslided from '../../assets/topactivities.png'
import calendar from '../../assets/calendar.png'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import otheractivity from '../../assets/otheractivities.png'
import map from '../../assets/map.png'
import map2 from '../../assets/map2.png'
import { Link } from 'react-router-dom';
import rectangle from '../../assets/Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTimes,faBookmark,faShare,faCheck } from '@fortawesome/free-solid-svg-icons';
import Booking from '../booking/Booking';
import tickImage from '../../assets/bluecheck.png'

    const ActivitiesDetailsPage = () => {
        const [showExperience, setShowExperience] = useState(true);
        const [selectedImages, setSelectedImages] = useState([]);
        const [agencyData, setAgencyData] = useState(null); 
        const [isBookingPopupVisible, setBookingPopupVisibility] = useState(false); 
        const [isPopupVisible, setPopupVisibility] = useState(false);


     
        useEffect(() => {
            // Fetch data from the API when the component mounts
            const fetchData = async () => {
              try {
                const headers = {
                  'api_key': 'test_key',
                };
        
                const response = await axios.get('http://api.travelbeem.in/agency/getAgency?id=654920bd5bf68bf1aabc88f0', { headers });
                setAgencyData(response.data);
              } catch (error) {
                console.error('Error fetching data from API', error);
              }
            };
        
            fetchData();
          }, []);

          const handleImageClick = (image) => {
            const index = selectedImages.indexOf(image);
            if (index === -1) {
              // Image not selected, add it to the selected images
              setSelectedImages([...selectedImages, image]);
            } else {
              // Image already selected, remove it from the selected images
              const updatedImages = [...selectedImages];
              updatedImages.splice(index, 1);
              setSelectedImages(updatedImages);
            }
          };
        
        const handleExperienceClick = () => {
            setShowExperience(true);
        };

        const handleHostClick = () => {
            setShowExperience(false);
        };

        const togglePopup = () => {
          setPopupVisibility(!isPopupVisible);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        

        // Sample data for the room
        const roomData = {
        images: [image1,image2,image3],
        propertyName: 'Sample Property Name',
        location: 'Kerala ',
        rating: 4.5,
        reviews: 10,
        description:
            'This elegant property offers stunning views of the surrounding mountains and is located in the heart of Icson. It features modern amenities, spacious rooms, and a tranquil atmosphere. Perfect for couples and families looking for a peaceful getaway.',
        duration: '30 min',
        cancellationPolicy: '24 hrs before ',
        highlights: [
            '1- Stunning mountain views',
            '2- Modern amenities',
            '3- Spacious rooms',
            '4- Tranquil atmosphere',
        ],
    };

        return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 details-container " >
            <div className="mt-10">
  <div className='shadow-lg p-5'>
    <div className="carousel flex items-center justify-center relative">
    <button
        className="absolute m-4 bg-black text-white px-2 py-2 rounded text-sm save-button  " 
        onClick={() => alert('View Gallery Clicked')} // Add your gallery viewing logic here
      >
         <FontAwesomeIcon icon={faBookmark} /> Save
      </button>
      <button
        className="absolute m-4 bg-black text-white px-2 py-2 rounded text-sm share-button " 
        onClick={() => alert('View Gallery Clicked')} // Add your gallery viewing logic here
      >
        <FontAwesomeIcon icon={faShare} />Share
      </button>

      <img src={roomData.images[0]} alt="Room 1" className='media-larger-image ' />

      {/* "View Gallery" button */}
      <button
        className="absolute m-4 bg-black text-white px-4 py-2 text-sm md:text-lg gallery-button hidden md:block " 
        onClick={() => alert('View Gallery Clicked')} // Add your gallery viewing logic here
      >
        View Gallery(12)
      </button>

      <div className="w-1/3 flex flex-col items-center">
        {roomData.images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Room ${index + 2}`}
            className={`w-full ml-6 ${index === 0 ? 'mb-4' : 'mt-4'}`}
          />
        ))}
      </div>
    </div>



    <div className="mt-3 flex items-center justify-between ">
      {agencyData && (
        <>
          <h1 className="text-lg pl-2 md:pl-20 mr-8 md:mr-0 font-bold text-red-700 md:text-3xl">{agencyData.name}</h1>
          <p></p>
        </>
      )}
      <div className='pr-5 md:pr-10 '> 
        <button className="bg-red-700 hover:bg-red-500 text-white font-bold text-xl py-2 px-6 rounded media-book-now" onClick={togglePopup}>
          Continue Booking
        </button>
      </div>
      
    </div>
    <div className="flex items-center mt-2 pl-0 md:pl-20">
      <FontAwesomeIcon icon={faMapMarker} className="h-4 w-6 text-black mr-2" />
      <p>{roomData.location}</p>
      {agencyData && (
        <div className="flex items-center ml-4">
          <FontAwesomeIcon icon={faStar} className="text-black mr-2 h-4" />
          <p className="font-semibold">{agencyData.rating}(125 reviews) </p>
        </div>
      )}
    </div>
  </div>
                   
                    <div className="mt-4 pl-4 md:pl-24">
                    {agencyData && (
                        <div className="mt-4">
                        <p className="text-lg ">{agencyData.description}</p>
                    </div>
                    )}
                        <div className="flex items-center mt-5">
                        <FontAwesomeIcon icon={faClock} className="text-black mr-4 h-4" />
                         <p>Duration : {roomData.duration}</p>
                            
                        </div>
                        <div className="flex items-center mt-5">
                           <FontAwesomeIcon icon={faTimes} className="text-black mr-4 h-6 w-4" />
                                          <p>CancellationPolicy: {roomData.cancellationPolicy}<span className='text-gray-400'>Learn more</span></p>
                                </div>
                    </div>
                   
                    

                    <hr className="my-8" />
                    <div className="mt-4 flex items-center justify-center">
        <div className="border-2 border-grey  rounded-full border-opacity-50 flex justify-center media-switch-thing">
            <button
                onClick={handleExperienceClick}
                className={`text-red-700 font-bold py-2 px-4 rounded-full ${
                    showExperience ? 'bg-red-700 text-white' : ''
                } transition-all duration-300`}
            >
                The Experience
            </button>
            <button
                onClick={handleHostClick}
                className={`text-red-700 font-bold py-2 px-4 rounded-full ml-4 ${
                    !showExperience ? 'bg-red-700 text-white': ''
                } transition-all duration-300`}
            >
                The Host
            </button>
        </div>
    </div>

    {showExperience ? (
      <div className="flex flex-wrap justify-center mt-5 media-details-images">
      {[1, 2, 3].map((index) => (
        <div key={index} className="relative flex flex-col items-center mx-4 mt-4 w-48 md:w-ful sm:w-72 l">
          <img
            className='transition-transform duration-300 ease-in-out block w-48 h-56 cursor-pointer shadow-lg'
            src={smallslided}
            alt={`Activity ${index}`}
            onClick={() => handleImageClick(`Activity ${index}`)}
          />
          <img
            src={tickImage} 
            alt="Tick"
            className="absolute top-5 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-10 h-10"
            style={{ display: selectedImages.includes(`Activity ${index}`) ? 'block' : 'none' }}
          />

          <p className="text-center text-lg font-bold mt-2">Activity {index}</p>
          <div className="border border-gray-400 text-center mt-2 py-2 p-5 shadow-md">
            <p className="text-lg text-red-700 font-bold">Zip line (30 min)</p>
            <p className="text-sm text-black font-bold">Below Rs 3456/guest</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center mt-5 p-6 border-2 border-gray-300 rounded-md shadow-lg">
      <div className="flex justify-evenly w-full">
        <div className="text-center">
          <img src={calendar} alt="Calendar" className='pl-7' />
          <p className="text-lg text-black text-center">IMP Feature</p>
        </div>
        <div className="text-center">
          <img src={calendar} alt="Calendar" className='pl-7' />
          <p className="text-lg text-black text-center">IMP Feature</p>
        </div>
        <div className="text-center">
          <img src={calendar} alt="Calendar" className='pl-7' />
          <p className="text-lg text-black text-center">IMP Feature</p>
        </div>
        <div className="text-center">
          <img src={calendar} alt="Calendar" className='pl-7' />
          <p className="text-lg text-black text-center">IMP Feature</p>
        </div>
      </div>

      {/* Provider Name Section */}
      <div className="mt-5 flex items-center" style={{paddingRight:'375px'}}>
        <div className="bg-gray-500 w-8 h-8 rounded-full mr-3"></div>
        <h2 className="text-xl font-bold pr-96 text-red-700 ">Provider Name</h2>
      </div>

      {/* Highlights Section */}
      <div className="mt-3 pl-24">
        <p className="text-sm">
          Highlights ghhd hjujhgd ujuheh hghdhdh ujshhgd hghdhfhf hghdhdhd hgshdgd yhjdhdfjf
          hhdgdhdfg uyuifhfifh isguikshj hujfgfujd hsjgksjs ghssjjd hsjjsjuu jsjhsh jjsjssu
          js Pet friendly jhjdjdd ukdjhjdh hjddjh hajshjshjdbhj hhjdhjhdhjj hghjdxcghjdhghfj
          hghjshdghujdh gshsghdgdh hyujshghjdhgd hyujdhjfkh ghyujshdjd ghdghdfcjh ghsjdghdj
          ghjdshj ghjdshd ghhjsghdfh ghjshdj hjdkkdhkdjhcdjhdj ghjfghjvhfj hdjdhjdkdf
          hjdjdjkdkdkdkdkkdkd hjjjs hjjj
        </p>
      </div>

      {/* Certifications Section */}
      <div className="mt-5 " style={{paddingRight:'575px'}}>
        <h2 className="text-xl font-bold text-rose-700">Certifications</h2>
        <div className="flex justify-evenly">
        <img src={rectangle} alt="Rectangle Image" className="w-20 h-20" />
          <img src={rectangle} alt="Rectangle Image" className="w-20 h-20" />
        </div>
        <p className="text-sm mt-2">
          Khhhdhd ghdh ghfhf gdghdhdghd ghfjf hhh
        </p>
      </div>
    </div>
    )}    
    
    <hr className="my-8" />
   
    <div className='pl-20'>
    <h2 className="text-3xl font-bold mt-8">Highlights</h2>
<div className="mt-4">
    <ul className="list-inside">
        {roomData.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-gray-700 mb-2">
               <span className="text-lg text-black font-medium">{highlight}</span>
            </li>
        ))}
    </ul>
</div>
</div>


                    <hr className="my-8" />



                        <div className='pl-20'>

                    <h2 className="text-3xl font-bold mt-8">Location</h2>
                    <div className="mt-4  w-full media-map" >
                      <img src={map} alt='Map' />
                      <img src={map2} alt='Map' />
                    </div>

                    <div className="max-w-7xl mx-auto border-t border-gray-300 p-8">
</div>
                    <hr  />

                    <div className="flex flex-col mt-5  ">
        <h2 className="text-3xl font-bold mb-8">Reviews and Ratings</h2>
      
      <div className='flex justify-around items-center flex-col md:flex-row mr-24 md:mr-0'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-4xl font-bold text-center text-red-700 pt-2'>4.2</h2>
        <div className='flex items-center justify-center'>
 
    {[...Array(5)].map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className='text-black h-4 w-4 pt-2' />
    ))}
  </div>
        <p className='text-gray-400 font-semibold text-xl pt-2'>(148 reviews)</p>
      </div>

        <div className="flex flex-col items-end">
          
        <div className="flex items-center justify-center">
            <div className="mr-2">Staff</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-80 bg-red-700 rounded"></div>
            
            </div>
        </div>

        <div className="flex items-center justify-center">
            <div className="mr-2">Facilites</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-80 bg-red-700 rounded"></div>
            
            </div>
        </div>

        <div className="flex items-center justify-center">
            <div className="mr-2">Value for money</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-80 bg-red-700 rounded"></div>
            
            </div>
        </div>

        <div className="flex items-center justify-center">
            <div className="mr-2">Cleanliness</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-80 bg-red-700 rounded"></div>
            
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="mr-2">Comfort</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-80 bg-red-700 rounded"></div>
            
            </div>
        </div>

        </div>
        </div>
    </div>
    <div className="mt-8">
    <div className="border-t border-gray-300 py-4 flex flex-col items-start md:flex md:flex-row">
        <div className="rounded-full h-14 overflow-hidden bg-gray-500 flex items-center justify-center w-14 md:w-20 ">
            {/* You can add an icon or initials inside the circle if you want */}
        </div>
        <div className="ml-4">
            <h3 className="text-2xl font-bold">Vibhore</h3>
            <div className="flex items-center ">
            <p className='mt-2 mr-2'>New Delhi</p>
            <div className='flex items-center'>
 
             {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className='text-black h-4 w-4 pt-2' />
          ))}
           </div>
                <span className="ml-2 mt-2 text-gray-700 ">4.5</span>
            </div>
            <p className="mt-2">The place is a 10/10 and Nilesh is a great host. The location, the view, and the interior are beyond amazing. The photos don't do justice to the view, which is mesmerizing. Definitely recommend staying here if available!</p>
        </div>
    </div>
</div>

<div className="mt-8">
    <div className="border-t border-gray-300 py-4 flex flex-col items-start md:flex md:flex-row">
        <div className="rounded-full h-14 overflow-hidden bg-gray-500 flex items-center justify-center w-14 md:w-20">
          
        </div>
        <div className="ml-4">
            <h3 className="text-2xl font-bold">Bharti</h3>
            <div className="flex items-center ">
            <p className='mt-2 mr-2'>New Delhi</p>
            <div className='flex items-center'>
 
             {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className='text-black h-4 w-4 pt-2' />
          ))}
           </div>
                <span className="ml-2 mt-2 text-gray-700">5.0</span>
            </div>
            <p className="mt-2">The place is a 10/10 and Nilesh is a great host. The location, the view, and the interior are beyond amazing. The photos don't do justice to the view, which is mesmerizing. Definitely recommend staying here if available!</p>
        </div>
    </div>
</div>



    </div>
    <hr className="my-8" />
    <div className='pl-20'>
    <h2 className="text-xl font-bold mb-8 ">Other Activities by Provider</h2>
    <div className="flex mt-5 space-x-4 mb-8">
                                {/* Activity card 1 */}
                                <div className="flex flex-col items-center">
                                
                                    <img
                                        className="transition-transform duration-300 ease-in-out block w-72 h-auto"
                                        src={otheractivity}
                                        alt="Activity 1"
                                    />
                                    <p className="text-center text-lg font-bold mt-2">Activity 1</p>
                                    <p className="text-black font-bold mt-1 text-sm">Rs 6745/guest</p>
                                    <p className="text-center text-sm text-gray-700 mt-1 font-semibold">4.5 (24 Reviews)</p>
                                  
                                </div> 
                            </div>
                            </div>
                            {isPopupVisible && <Booking onClose={togglePopup} />}

{/* Continue Booking button */}
<div className="flex items-center justify-end mt-4 space-x-4 mb-6 md:text-sm">
  <button
    className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-5"
    style={{ backgroundColor: "#b91c1c", color: "white" }}
  >
    Save and Share
  </button>

  <div className="flex items-center justify-end mt-4 space-x-4 mb-6 md:text-sm">
    <button
      className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-5 mt-2"
      style={{ backgroundColor: "#b91c1c", color: "white" }}
      onClick={togglePopup}
    >
      Continue Booking
    </button>
  </div>
</div>
        </div>
    </div>
    <Footer />
    </>
        );
    };

    export default ActivitiesDetailsPage;
