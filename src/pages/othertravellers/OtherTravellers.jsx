import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const OtherTravellers = () => {
    const [travelers, setTravelers] = useState([]);
    const [newTraveler, setNewTraveler] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
  
    const handleAddTravellerClick = () => {
      setShowAddForm(true);
    };
  
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
      <div className="flex flex-col md:flex-row w-fit md:w-full" style={{ marginTop: '285px' }}>
        {/* Sidebar */}
        {showSidebar && <Sidebar />}
        {/* Main Content */}
        <div className="flex-grow p-6">
          {/* Display Travellers */}
          <div className="mb-6">
            <div className="flex items-center mb-4 border-b border-gray-300 pb-4">

              <div className='border-2 border-gray-400  rounded-lg shadow-lg w-full pl-10 p-2 '>

              <div className="h-12 w-12 bg-gray-500 rounded-full mr-4"></div>
                <p className="text-lg font-bold text-red-700">Durgesh Nandani</p>
                <p className="text-sm text-black font-semibold">Female</p>
                <Link to="#">
              <FontAwesomeIcon icon={faEdit} className="mr-1 w-4 h-4" />
                  <span className='text-sm'>Edit</span>
            </Link>
             
              </div>
              <FontAwesomeIcon
              icon={faChevronRight}
              className="text-gray-500 cursor-pointer text-xl  "

            />
            </div>
          </div>

          {/* Add Traveller Form */}
          {showAddForm && (
            <div className="border rounded-md p-6 mb-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Mandatory Fields</h2>

              {/* Mandatory Field Section */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Title*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Mr/Mrs" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">First Name*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter first name" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Last Name*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter last name" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Date of Birth*</p>
                  <input type="date" className="border p-2 w-full" />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Optional Fields</h2>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Email ID*</p>
                  <input type="email" className="border p-2 w-full" placeholder="Enter email" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Issuing Country*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter issuing country" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Contact Number*</p>
                  <input type="tel" className="border p-2 w-full" placeholder="Enter contact number" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Passport Number*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter passport number" />
                </div>
              </div>

              {/* Add Traveller Button */}
              <button
                className="bg-red-700 text-white py-2 px-4 mt-6 rounded-lg hover:bg-red-600"
                onClick={() => setShowAddForm(false)}
              >
                + Add Traveller
              </button>
            </div>
          )}

          {/* Button to Add Traveller */}
          {!showAddForm && (
            <button
              className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              onClick={handleAddTravellerClick}
            >
               + Add Traveller
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OtherTravellers;
