import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;

    // If total pages are less than or equal to maxVisiblePages then show all page numbers
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If total pages are more than maxVisiblePages then show a subset of pages
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className='flex justify-end mt-4'>
      <button
        className='bg-gray-300 px-4 py-2 mr-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-110'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`mx-1 p-2 border ${
            page === "..."
              ? "bg-gray-300 text-gray-700"
              : currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          } rounded-lg transition duration-300 ease-in-out transform hover:scale-110`}
          onClick={() =>
            onPageChange(typeof page === "number" ? page : currentPage)
          }
        >
          {page}
        </button>
      ))}

      <button
        className='bg-gray-300 px-4 py-2 ml-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-110'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
