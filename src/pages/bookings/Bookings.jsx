import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Bookings = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768); // Adjust the width as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row" style={{ marginTop: '285px'  }}>
      
      
      {showSidebar && <Sidebar />}

        {/* Main Content */}
        <div className="flex-grow p-6">


          {/* Booking Links */}
          <div className="flex items-center justify-around mb-6">
            <Link to="#" className="text-red-700 mr-4 font-bold text-xl hover:text-red-700 ">Current Booking</Link>
            <Link to="#" className="mr-4 font-bold text-xl hover:text-red-700">Past Booking</Link>
            <Link to="#" className="mr-4 font-bold text-xl hover:text-red-700">Cancelled Booking</Link>
          </div>
          <div className="border-b border-black mb-3"></div>

          {/* Line and Date */}
          <div className=" mb-6">
            <p className="text-black font-semibold">November 2023</p>
          </div>

          {/* Trip Details */}
          <div className="border p-6">
            <div className="flex items-center mb-4">
              {/* Placeholder for Trip image */}
              <div className="h-12 w-12 bg-gray-500 rounded-full mr-4"></div>
              <div>
                <p className="text-lg font-bold text-red-700">
                  TRIP 
                </p>
                <p className='font-semibold' >Delhi to Udaipur </p>
                <p className='font-semibold'>Full package | 5 Nov | Durgesh Nandini</p>
              </div>
              
            </div>

          </div>
          <div className="border p-6 mt-10  ">
            <div className="flex items-center mb-4">
              {/* Placeholder for Trip image */}
              <div className="h-12 w-12 bg-gray-500 rounded-full mr-4"></div>
              <div>
                <p className="text-lg font-bold text-red-700">
                  TRIP 
                </p>
                <p className='font-semibold' >Delhi to Udaipur </p>
                <p className='font-semibold'>Full package | 5 Nov | Durgesh Nandini</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Bookings;
