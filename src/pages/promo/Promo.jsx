import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import couponImage from '../../assets/couponimage.png';

const CouponItem = ({ title, amount }) => (

  <div className="border flex items-center justify-between bg-gray-300 border-black rounded-lg p-2 pl-8 pr-8 mb-4">
    <div className='flex items-center'>
      <img src={couponImage} alt="Coupon Image" className="w-8 h-8 mr-2" />
      <p className='font-bold'>{title}</p>
    </div>
    <div className='flex'>
      <p className='font-bold'>{amount}</p>
    </div>
  </div>
);

const Promo = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const couponsData = [
    { title: 'Total flight booking', amount: 'Rs 677' },
    { title: 'Coupon 2', amount: 'Rs 200' },
    { title: 'Coupon 3', amount: 'Rs 150' },
    { title: 'Coupon 4', amount: 'Rs 100' },
  ];
    
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

      <div className="flex flex-col md:flex-row w-fit md:w-full" style={{ marginTop: '285px'  }}>
       
      {showSidebar && <Sidebar />}

        {/* Main Content */}
        <div className="flex-grow p-6">
          {/* Promo Code Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Promo Code</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-1">Promo Code</p>
                <input type="text" className="border p-2 w-full md:w-1/2 shadow-md" placeholder="Enter promo code" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Share Link</p>
                <input type="text" className="border p-2 w-full md:w-1/2 shadow-md" placeholder="Enter share link" />
              </div>
            </div>
          </div>

          {/* Share Among Friends Section */}
          <div className="mb-6 mt-5">
            <p className="text-lg md:text-xl font-bold text-red-700">
              SHARE AMONG FRIENDS, EARN MONEY ON YOUR WALLET WITH EVERY BOOKING
            </p>
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Placeholder for Trip image */}
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="w-1/2">
                  <p className="font-semibold text-lg ">Flight booked by friends</p>
                  <p className="font-semibold text-xs md:text-sm">
                    You will get Rs 124 on flight, Rs 263 on rent, Rs 837 on bus, Rs 637 on bus, Rs 579 on car
                  </p>
                </div>
                <button className="px-8 text-black border-2 border-gray-200 rounded-lg cursor-pointer transition duration-300">
                  Invite
                </button>
              </div>
            </div>
          </div>

          {/* Your Coupons Section */}
          <div className="mb-6">
            <h2 className="text-xl font-base text-black mb-4">Your Coupons</h2>
            <div className='flex justify-between mb-4'>
              <p className="text-red-700">Coupon code:</p>
              <p className="text-sm text-red-700 font-base">Total savings: Rs 56/-</p>
            </div>
            
            {couponsData.map((coupon, index) => (
              <CouponItem key={index} title={coupon.title} amount={coupon.amount} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Promo;
