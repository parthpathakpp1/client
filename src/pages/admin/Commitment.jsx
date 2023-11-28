import React, { useState } from 'react';
import BrandName from '../../components/BrandName/BrandName';

const Commitment = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    // You can add logic here for what happens when the user agrees.
    // For example, you might want to redirect to the next page or perform other actions.
    console.log("User agreed");
  };

  const handleDecline = () => {
    // You can add logic here for what happens when the user declines.
    // For example, you might want to redirect to a different page or show a message.
    console.log("User declined");
  };

  return (
    <>
    
    <BrandName />
    <div className="flex items-center justify-center ">
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-6 ml-10 text-left text-red-700">Our Community Commitment</h1>
        <p className="mb-4 ml-10 mr-10">
          We will send you hjff ghfghfjhjfhfjf. By selecting Agree and Continue, I agree to TravelBeem's Terms and Conditions of Service, Payment Terms of Service, Non-discrimination Policy, and acknowledge the Privacy Policy.
          We will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, 
          I agree to travelbeem Terms and condition of service, payment terms of service, non discrimination policy aWe will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and condition of service, payment terms of service, non discrimination policy and acknowledge the privacy policy nd acknowledge the privacy polWe will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and condition of service, payment terms of service, 
          non discrimination policy aWe will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and condition of service, payment terms of service, non discrimination policy and acknowledge the prWe will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and condition of service, payment terms of service, non discrimination policy aWe will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and condition of service, payment terms of service, non discrimination policy and acknowledge the privacy policy nd acknowledge the privacy polWe will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, 
          I agree to travelbeem Terms and condition of service, payment terms of service, 
          non discrimination poliivacy policy nd acknowledge the privacy policy icy
        </p>
        {/* Repeat the above paragraph as needed */}
         <div className='flex flex-col'>
        <div>
        <button
          className={`bg-red-700 text-white px-4 py-2 rounded-md font-bold mb-4 ${!agreed && 'cursor-not-allowed opacity-50'}`}
          onClick={() => {
            setAgreed(true);
            handleAgree();
          }}
          disabled={!agreed}
        >
          Agree and Continue
        </button>
        </div>

       <div>
        <button
          className="bg-red-700 text-white px-16 py-2 rounded-md font-bold"
          onClick={() => {
            handleDecline();
          }}
        >
          Decline
        </button>
        </div>

        </div>
      </div>
    </div>

    </>
  );
};

export default Commitment;
