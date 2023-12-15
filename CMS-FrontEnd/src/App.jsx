import React, { useState, useEffect } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import Header from "./components/Header";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const handleCreateCustomerForm = () => {
    setShowCustomerForm(true);
  };

  const handleFormClose = () => {
    setShowCustomerForm(false);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/getCustomerList")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addCustomer = (formData) => {
    fetch("http://localhost:3000/api/createCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setCustomers([...customers, data]))
      .catch((error) => console.error("Error adding customer:", error));

    handleFormClose();
  };

  return (
    <>
      <div>
        <Header onCreateCustomer={handleCreateCustomerForm} />
        <div className={` ${showCustomerForm ? "blur" : ""}`}>
          <CustomerList customers={customers} />
        </div>
        {showCustomerForm && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            <div className='bg-white p-6 rounded-md shadow-md'>
              <CustomerForm
                addCustomer={addCustomer}
                onClose={handleFormClose}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
