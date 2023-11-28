// Create a new context file named InputContext.jsx
import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedGuests, setSelectedGuests] = useState('');

  return (
    <InputContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        selectedStartDate,
        setSelectedStartDate,
        selectedEndDate,
        setSelectedEndDate,
        selectedGuests,
        setSelectedGuests,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
