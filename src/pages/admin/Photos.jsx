import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const PhotoUploadPage = () => {
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = () => {
    // For simplicity, you can implement file input logic here to handle photo upload.
    // For now, we'll just use an empty object to represent a photo.
    setPhotos([...photos, {}]);
  };

  return (
    <>
    <BrandName />
    <div className="flex justify-between">
      <div className="w-2/3 p-8">
        <h1 className="text-3xl font-bold mb-4">Add some photos of your service</h1>
        <p className="text-sm text-gray-500 mb-4">
          In case of multiple addresses or locations, add here or change gfhffy fuygyfjhg hhdjd hyjfhcgh ujdhghdj ghjhgdx yhsjhdgd yhjdhghd gtyhfdgyh gtydujhgdyujdh ujdhghujd ghjfcghfjhg yhujdhyhd
        </p>
        <p className="mb-4">
          <a href="#learn-more" className="text-black underline">
            Learn more about photos
          </a>
        </p>

        <div className="flex flex-wrap -mx-2 mb-4">
          {photos.map((photo, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4">
              <div className="border overflow-hidden">
                {/* Display your photo here */}
                <img
                  src="https://via.placeholder.com/300"
                  alt={`Photo ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleAddPhoto} className="border border-gray-500 p-10 font-bold shadow-lg">
          + Add More 
        </button>
      </div>

     <ChatBox />
    </div>
    </>
  );
};

export default PhotoUploadPage;
