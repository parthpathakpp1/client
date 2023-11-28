import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-white border-r text-black w-full md:w-1/4 text-center">
      <div className='hover:bg-gray-300'>
        <NavLink to="/profile" className="text-xl font-bold mb-3 block" activeClassName="active-link">Your Profile</NavLink>
        <p className="text-sm mb-3 text-gray-600">Manage your personal details and info</p>
        <div className="border-b border-gray-700 "></div>
      </div> 
      <div className='hover:bg-gray-300'>
        <NavLink to="/bookings" className="text-xl font-bold mb-3 block" activeClassName="active-link">Bookings</NavLink>
        <p className="text-sm mb-3 text-gray-600">Check your latest/cancelled/pending bookings</p>
        <div className="border-b border-gray-700 "></div>
      </div>

      <div className='hover:bg-gray-300'>
        <NavLink to="/other-travellers" className="text-xl font-bold mb-3 block" activeClassName="active-link">Other Travellers</NavLink>
        <p className="text-sm mb-3 text-gray-600">Add or edit the respective traveler details</p>
        <div className="border-b border-gray-700 "></div>
      </div>

      <div className='hover:bg-gray-300'>
        <NavLink to="/promo" className="text-xl font-bold mb-3 block" activeClassName="active-link">Coupons/Promo codes</NavLink>
        <p className="text-sm mb-3 text-gray-600">Save on your bookings</p>
        <div className="border-b border-gray-700 "></div>
      </div>

      <div className='hover:bg-gray-300'>
        <NavLink to="/payments" className="text-xl font-bold mb-3 block" activeClassName="active-link">Payments</NavLink>
        <p className="text-sm mb-3 text-gray-600">Securely add or remove payment methods</p>
        <div className="border-b border-gray-700 "></div>
      </div>

      <div className='hover:bg-gray-300'>
        <NavLink to="/settings" className="text-xl font-bold mb-3 block" activeClassName="active-link">Settings</NavLink>
        <p className="text-sm mb-3 text-gray-600">Manage notifications/fare alert and more</p>
        <div className="border-b border-gray-700 "></div>
      </div>

      <NavLink to="/logout" className="text-xl font-bold mb-3 block" activeClassName="active-link">Log out</NavLink>
    </div>
  )
}

export default Sidebar;
