import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const Profile = () => {
  const [passportCopy, setPassportCopy] = useState(null);
  const [aadharCopy, setAadharCopy] = useState(null);
  const [panCopy, setPanCopy] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    setFile(file);
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
      <div className="flex flex-col md:flex-row" style={{ marginTop: '275px' }}>
      
      {showSidebar && <Sidebar />}

        <div className="flex-grow p-6">
          {/* Hello and Name */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-700">Hello, Garima!</h1>
            <p className="font-base">Helooo dghfgfh gdhjfgvhd ghcjhfghjfgf hjdfhghjfk ghjdshghdfjh dhjdh.</p>
          </div>

          {/* Address */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Address</h2>
            <div className="grid grid-cols-4 gap-4">
              <input type="text" className="border p-2" placeholder="House No" />
              <input type="text" className="border p-2" placeholder="Address" />
              <input type="text" className="border p-2" placeholder="City" />
              <input type="text" className="border p-2" placeholder="Pincode" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Contact Details</h2>
            <div className="grid grid-cols-4 gap-4">
              <input type="text" className="border p-2" placeholder="Email Id" />
              <input type="date" className="border p-2" placeholder="Date of Birth" />
              <input type="text" className="border p-2" placeholder="Nationality" />
              <input type="text" className="border p-2" placeholder="Contact Number" />

            </div>
          </div>


        

          {/* Document Upload */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Document Upload</h2>
            <p className="text-gray-600 text-sm mb-3">(*mandatory for international travel)</p>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" className="border p-2" placeholder="Passport" />
              <input type="text" className="border p-2" placeholder="Passport expiry date" />
              <input
                type="file"
                className="border p-2"
                onChange={(e) => handleFileChange(e, setPassportCopy)}
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-3 gap-4">
              <input type="text" className="border p-2" placeholder="Aadhar id number" />
              <input
                type="file"
                className="border p-2"
                onChange={(e) => handleFileChange(e, setAadharCopy)}
              />
              <Link to='/'>View Your Aadhar Copy</Link>
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-3 gap-4">
              <input type="text" className="border p-2" placeholder="PAN number" />
              <input
                type="file"
                className="border p-2"
                onChange={(e) => handleFileChange(e, setPanCopy)}
              />
              <Link to='/'>View Your PAN Copy</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
