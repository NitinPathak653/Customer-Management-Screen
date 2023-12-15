import React, { useState, useEffect } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleCreateCustomerForm = () => {
    setShowCustomerForm(true);
  };

  const handleFormClose = () => {
    setShowCustomerForm(false);
  };

  const handleSort = (column, order) => {
    setSortColumn(column);
    setSortOrder(order);
    // Fetch paginated data with sorting when currentPage or sort options change
    fetch(
      `http://localhost:3000/api/getCustomerList?page=${currentPage}&sortBy=${column}&sortOrder=${order}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    // Fetch initial page
    fetch(
      `http://localhost:3000/api/getCustomerList?page=${currentPage}&sortBy=${sortColumn}&sortOrder=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
        setTotalPages(Math.ceil(data.totalCustomers / 7));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage, sortColumn, sortOrder]);

  const addCustomer = (formData) => {
    fetch("http://localhost:3000/api/createCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the total pages based on the total customers
        setTotalPages(Math.ceil(data.totalCustomers / 7));
      })
      .catch((error) => console.error("Error adding customer:", error));

    handleFormClose();
  };

  return (
    <>
      <div>
        <Header onCreateCustomer={handleCreateCustomerForm} />
        <div className={` ${showCustomerForm ? "blur" : ""}`}>
          <CustomerList customers={customers} onSort={handleSort} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
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
