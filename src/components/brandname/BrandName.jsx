import React from 'react'

const BrandName = () => {
  return (
    <div className="flex items-center justify-between p-4 w-1/4 pt-1 ">
    <div className="flex items-center flex-col">
    <img
      src="https://via.placeholder.com/50"
      alt="Logo"
      className="w-12 h-12 border rounded-full object-contain"
    />
      <span className="text-lg font-bold">Your Name</span>  {/* Replace with your actual name */}
    </div>
  </div>
  )
}

export default BrandName