import React from "react";

const LoadingSkeleton = () => (
  <div className='animate-pulse'>
    <div className='bg-gray-300 h-6 w-2/3 mb-4 rounded-md'></div>
    <div className='bg-gray-300 h-6 w-1/2 mb-4 rounded-md'></div>
    <div className='bg-gray-300 h-6 w-3/4 mb-4 rounded-md'></div>
    <div className='bg-gray-300 h-6 w-2/3 mb-4 rounded-md'></div>
    <div className='bg-gray-300 h-6 w-1/2 mb-4 rounded-md'></div>
    <div className='bg-gray-300 h-6 w-3/4 mb-4 rounded-md'></div>
  </div>
);

export default LoadingSkeleton;
