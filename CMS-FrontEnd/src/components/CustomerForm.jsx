import React, { useState } from "react";

const CustomerForm = ({ addCustomer }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(formData);
    setFormData({ name: "", phoneNo: "", email: "" });
  };

  return (
    <div className='max-w-md mx-auto mt-5 p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name:
          </label>
          <input
            className='w-full p-2 border rounded-md'
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='phoneNo'
          >
            Phone Number:
          </label>
          <input
            className='w-full p-2 border rounded-md'
            type='text'
            id='phoneNo'
            name='phoneNo'
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='w-full p-2 border rounded-md'
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button
          className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
          type='submit'
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
