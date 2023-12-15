import React from "react";

const Header = ({ onCreateCustomer }) => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Customer Management Screen</h1>
      <button
        className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue transition-transform duration-300 ease-in-out transform hover:scale-105'
        onClick={onCreateCustomer}
      >
        + Create Customer
      </button>
    </div>
  );
};

export default Header;
