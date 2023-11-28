import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const AdminExtra = () => {
  const [description, setDescription] = useState('');
  const [cancellationPolicy, setCancellationPolicy] = useState('');
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCancellationPolicyChange = (e) => {
    setCancellationPolicy(e.target.value);
  };



  return (
    <>
    <BrandName />
    <div className="flex justify-between">
    <div className="w-2/3 p-8">
      <h1 className="text-2xl font-bold mb-1">Short title, keyword, description</h1>
      <p className="text-gray-500 mb-4 text-sm">Make sure it matches the name on your govt ID</p>
      <div className="mb-6">
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          className="p-2 w-full border rounded shadow-md"
          placeholder="Enter description"
          rows="4"
        />
      </div>

      <h2 className="text-2xl font-bold mb-1">Cancellation and Refund Policy</h2>
      <p className="text-gray-500 mb-4 text-sm">Make sure it matches the name on your govt ID</p>
      <div className="mb-6">
        <textarea
          id="cancellationPolicy"
          name="cancellationPolicy"
          value={cancellationPolicy}
          onChange={handleCancellationPolicyChange}
          className="p-2 w-full border rounded shadow-md"
          placeholder="Enter cancellation and refund policy"
          rows="4"
        />

      </div>

           <h2 className="text-2xl font-bold mb-6">Choose who you welcome as a guest</h2>
      <p className="text-sm text-gray-500 mb-2">
        Make sure it matches the name on your govt ID{' '}
        <a href="#learnMore" className="text-blue-500 underline">
          Learn more
        </a>
      </p>

      <div className="mb-4 border rounded shadow-md p-2">
  <input type="checkbox" id="welcomeAdults" className="mr-2" />
  <label htmlFor="welcomeAdults">An experienced guest</label>
</div>

<div className="mb-4 border rounded shadow-md p-2">
  <input type="checkbox" id="welcomeChildren" className="mr-2" />
  <label htmlFor="welcomeChildren">An experienced guest</label>
</div>



    </div>

    <ChatBox />
    </div>
    </>
  );
};

export default AdminExtra;
