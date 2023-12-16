import React, { useState } from "react";

const CustomerForm = ({ addCustomer, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
  });

  // handling form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // event handler for submitting a form
  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(formData);
    setFormData({ name: "", phoneNo: "", email: "" });
  };

  return (
    <div>
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
            autocomplete='off'
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
            autocomplete='off'
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
            autocomplete='off'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mr-2 transition duration-300 ease-in-out transform hover:scale-105'
        >
          Save
        </button>
        <button
          type='button'
          className='bg-gray-500 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-300 ease-in-out transform hover:scale-105'
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
