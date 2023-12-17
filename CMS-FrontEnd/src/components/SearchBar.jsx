import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearchChange, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearchChange(searchTerm);
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm("");
    onClear();
  };

  return (
    <div className='flex items-center space-x-4'>
      <input
        type='text'
        placeholder='Search by name...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border px-2 py-1'
      />
      <button
        onClick={handleClear}
        className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue transition-transform duration-300 ease-in-out transform hover:scale-105'
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
