import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    brandName: '',
    companyName: '',
    companyPhone: '',
    companyEmail: '',
    agreementChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
       <div className="flex items-center justify-between w-full mb-4 p-6 bg-white rounded shadow-md">
  <div className="flex items-center ml-32">
    <FontAwesomeIcon icon={faChevronLeft} className="text-xl " />
    <h2 className="text-xl font-bold ml-24">Finish SignUp</h2>
  </div>
  
  <img
    src="https://via.placeholder.com/50"
    alt="Logo"
    className="w-12 h-12 object-contain rounded-full"
  />
</div>

    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded w-6/12">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

          <p className="text-xs text-gray-500 mb-2">Make sure it matches the name on your govt ID</p>

          <div className="mb-4">
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Brand Name"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

          <p className="text-xs text-gray-500 mb-2">Make sure it matches the name on your govt ID</p>

          {/* Company Details */}
          <div className="mb-4 space-y-2">
  <div className="relative">
    <input
      type="text"
      name="companyName"
      value={formData.companyName}
      onChange={handleChange}
      placeholder="Company Name"
      className="w-full p-3 border rounded shadow-md mb-5"
    />
    <span className="absolute right-3 top-14 font-semibold text-xs text-red-700 cursor-pointer">
      Verify
    </span>
  </div>

  <div className="relative">
    <input
      type="tel"
      name="companyPhone"
      value={formData.companyPhone}
      onChange={handleChange}
      placeholder="Company Phone"
      className="w-full p-3 border rounded shadow-md mb-5"
    />
    <span className="absolute right-3 top-14 font-semibold text-xs text-red-700 cursor-pointer">
      Verify
    </span>
  </div>

  <div className="relative">
    <input
      type="email"
      name="companyEmail"
      value={formData.companyEmail}
      onChange={handleChange}
      placeholder="Company Email"
      className="w-full p-3 border rounded shadow-md mb-5"
    />
    <span className="absolute right-3 top-14 font-semibold text-xs text-black cursor-pointer">
      Verified
    </span>
  </div>
</div>


   

          <p className="text-sm text-black font-bold mt-4 text-center">
            We will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and conditions of service, payment terms of service, non-discrimination policy, and acknowledge the privacy policy.
          </p>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreementChecked"
                checked={formData.agreementChecked}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-black text-center font-base">
                I don’t want to receive any gdjg vdvhdv gdjdghf ghddghd vhsdvdghdf vhdsgdfh gvjsgd gjdhfj gdjgfhfh gjdshg ghjdhgujf
              </span>
            </label>
          </div>
          
          <div className='flex items-center justify-center'>
          <button
            type="submit"
            className={`bg-red-700 text-white p-3 mt-4 ${
              !formData.agreementChecked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!formData.agreementChecked}
          >
            Agree and Continue
          </button>
          </div>

        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
