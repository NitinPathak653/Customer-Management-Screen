import React, { useState } from "react";

const CustomerList = ({ customers, onSort }) => {
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column) => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
    onSort(column, sortDirection);
  };

  return (
    <div className='mt-5'>
      <h2 className='text-3xl font-extrabold text-center text-indigo-700 mb-6'>
        Explore Our Customers
      </h2>

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
