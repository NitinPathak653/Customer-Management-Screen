import React, { useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const CustomerList = ({ customers, onSort, isLoading }) => {
  const [sortDirection, setSortDirection] = useState("asc");

  // Method for handling Sorting
  const handleSort = (column) => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
    onSort(column, newSortDirection);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className='mt-5'>
      <div className='overflow-x-auto'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-gray-800 text-white'>
              <th className='border p-2'>
                Name
                <button
                  className='ml-2 focus:outline-none'
                  onClick={() => handleSort("name")}
                >
                  {sortDirection === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th className='border p-2'>Phone Number</th>
              <th className='border p-2'>Email</th>
              <th className='border p-2'>
                Creation Date
                <button
                  className='ml-2 focus:outline-none'
                  onClick={() => handleSort("creationDate")}
                >
                  {sortDirection === "asc" ? "▲" : "▼"}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id} className='bg-gray-100 hover:bg-gray-200'>
                <td className='border p-2'>{customer.name}</td>
                <td className='border p-2'>{customer.phoneNo}</td>
                <td className='border p-2'>{customer.email}</td>
                <td className='border p-2'>
                  {new Date(customer.creationDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
