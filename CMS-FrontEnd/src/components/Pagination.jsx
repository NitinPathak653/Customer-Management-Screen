import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex justify-end mt-4'>
      <button
        className='bg-gray-300 px-4 py-2 mr-2'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className='text-gray-700'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className='bg-gray-300 px-4 py-2 ml-2'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
