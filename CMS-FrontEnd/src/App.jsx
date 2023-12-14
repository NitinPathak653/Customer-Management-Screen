import React, { useState, useEffect } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";

const App = () => {
  const [customers, setCustomers] = useState([]);

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
  };

  return (
    <div className='container mx-auto mt-5'>
      <CustomerForm addCustomer={addCustomer} />
      <CustomerList customers={customers} />
    </div>
  );
};

export default App;
