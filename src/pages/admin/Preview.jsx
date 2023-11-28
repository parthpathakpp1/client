import React from 'react';

const Preview = () => {
  return (
    
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Review your listing</h1>
      <p className="text-sm text-gray-500 mb-4">
        Here’s what we’ll show to guests. Make sure everything looks good.
      </p>

      <div className="border rounded-lg p-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="flex items-center space-x-8">
          <p className="text-lg font-semibold">Brand Name Rs 567/night/activity</p>
          {/* Add any other content or components you need here */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
