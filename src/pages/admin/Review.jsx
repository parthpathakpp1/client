import React from 'react';
import reviewRectangleImage from '../../assets/reviewrectangle.png'
import whiteReviewRectangleImage from '../../assets/whitereviewrectangle.png'
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const Review = () => {
  return (
    <>
      <BrandName />
    <div className="flex justify-between">
    <div className="p-8 w-2/3">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Review your listing</h1>
      <p className="text-sm mb-4">Here’s what we’ll show to guests. Make sure everything looks good.</p>
      <div className='flex'>
        {/* Left Section */}
        <div className="border rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 w-72 h-80">Preview</h2>
          {/* Your content for preview */}
          <p className="text-lg  font-bold">Brand Name</p>
          <p className="text-black text-sm    mb-2">Rs 567/night/activity</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-4">
          <h2 className="text-xl font-bold mb-4">What’s next?</h2>

          {/* Include the image for the three points */}
          <div className='flex '> 
          <div>
          <img src={reviewRectangleImage} alt="Review Rectangle" className="mb-4 h-5 w-5 mt-1 mr-4" />
          </div>
          <div>
          <h2 className="text-xl font-bold mb-2">Confirm few details and publish</h2>
          <p className="text-sm mb-4">Make sure it matches the name on your govt ID</p>
          </div>
          </div>
       
          <div className='flex'>
          <div>
          <img src={whiteReviewRectangleImage} alt="Review Rectangle" className="mb-4 h-7 w-7 mt-1 mr-2" />
          </div>
          <div>
          <h2 className="text-xl font-bold mb-2">Setup your calendar</h2>
          <p className="text-sm mb-4">Make sure it matches the name on your govt ID</p>
          </div>
          </div>
   
          <div className='flex'>
          <div>
          <img src={whiteReviewRectangleImage} alt="Review Rectangle" className="mb-4 h-7 w-7 mt-1 mr-2" />
          </div>
          <div>
          <h2 className="text-xl font-bold mb-2">Adjust your settings</h2>
          <p className="text-sm mb-4">Make sure it matches the name on your govt ID</p>
          </div>
          </div>

        </div>
      </div>
    </div>
    <ChatBox />
    </div>
    </>
  );
};

export default Review;
