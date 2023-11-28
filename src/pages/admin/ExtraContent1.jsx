import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const ExtraContent1 = () => {

  const [cancellationPolicy, setCancellationPolicy] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

    
      const handleCancellationPolicyChange = (e) => {
        setCancellationPolicy(e.target.value);

      };
      
      const handleAgreeTermsChange = () => {
        setAgreeTerms(!agreeTerms);
      };
  return (
    <>
     <BrandName />
    <div className="flex justify-between">
    <div className="w-2/3 p-8">
        <h2 className="text-2xl font-bold mb-1">What to bring</h2>
      <p className="text-gray-500 mb-4 text-sm">kjhhdg dduhhgdjfh yhjshddj ghhdhjdjd hyhdhjdh</p>
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

      <h2 className="text-2xl font-bold mb-1">Essential information</h2>
      <p className="text-gray-500 mb-4 text-sm">HJ uifkjhff yhkdjhff ufhufjhf ufkjfhf yhdjhfjjhfhf</p>
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
           <h2 className="text-2xl font-bold mb-6">Language by agent</h2>
      <p className="text-sm text-gray-500 mb-2">
        Make sure it matches the name on your govt ID{' '}
        <a href="#learnMore" className="text-blue-500 underline">
          Learn more
        </a>
      </p>

      <div className="mb-4 border rounded shadow-md p-2">
  <input type="checkbox" id="welcomeChildren" className="mr-2" />
  <label htmlFor="welcomeChildren">English</label>
</div>
   <h2 className="text-2xl font-bold mb-2">Important Things to Know</h2>
          <p className="text-sm text-gray-500 mb-2">
            Make sure to comply with local law and review our Non-discrimination policy and guest and host fees
          </p>
          <div className="mb-4  ">
            <input
              type="checkbox"
              id="agreeTerms"
              className="mr-2"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
            />
            <label htmlFor="agreeTerms">I agree with terms and condition gdjgf ghujshdghj cfghfjkhfjffghi hjdkfhghjfk ghjdhghfdjf ishgdhjdfk yhdjhfghujfh ghdgf dyhudyhufd uy</label>
          </div>
    </div>
    <ChatBox />
    </div>
    </>
  )
}

export default ExtraContent1