import React from "react";

const CustomerList = ({ customers }) => {
  return (
    <div className='mt-5'>
      <h2 className='text-2xl text-center font-bold mb-4'>Customer List</h2>
      <table className='w-full border'>
        <thead>
          <tr>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Phone Number</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
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
  );
};

export default CustomerList;
