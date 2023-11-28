// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex flex-wrap justify-around gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#" className="block hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#" className="block hover:text-gray-400">
            Career
          </a>
           <a href="#" className="block hover:text-gray-400">
            Product
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="block hover:text-gray-400">
            Portfolio
          </a>
          <a href="#" className="block hover:text-gray-400">
            Testimonials
          </a>
          <a href="#" className="block hover:text-gray-400">
            Blog
          </a>
          <a href="#" className="block hover:text-gray-400">
            Career
          </a>
           <a href="#" className="block hover:text-gray-400">
            Product
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: garima@okaru.in</p>
          <p>Phone: +91 9762728878</p>
        </div>
      </div>
      <div className="mt-4 text-center">
      © 2023 Travalio
      </div>
    </footer>
  );
};

export default Footer;
