import React, { useState, useEffect } from 'react';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const Logout = () => {
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

          {/* Log in your account section */}
          <div className="mb-6">
            <h2 className="text-sm md:text-xl font-bold mb-4 text-center">Log in your account</h2>

            {/* Contact Number with border */}
            <div className="border p-4 mb-3">
              <p className="text-sm md:text-lg font-bold">Contact Number</p>
            </div>

            {/* Enter OTP Section */}
            <p className="text-xs md:text-sm mb-3 text-black text-center">
              Enter the code we have sent via SMS to +91 98367447883
            </p>
            <div className="mb-4 text-center">
              <input
                type="text"
                className="border  p-2 w-1/3"
                placeholder="Enter OTP"
              />
            </div>

            {/* Additional content can be added here */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Logout;
