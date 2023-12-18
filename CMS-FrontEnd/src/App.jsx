import React, { useState, useEffect } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

const App = () => {
  // all the required state variables
  const [customers, setCustomers] = useState([]);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);

  // Method for handling search that Fetch data based on search term
  const handleSearchChange = (searchTerm) => {
    if (searchTerm === "") {
      handleClearSearch();
      return;
    }

    fetch(
      `http://localhost:3000/api/getCustomerList?page=1&sortBy=${sortColumn}&sortOrder=${sortOrder}&searchTerm=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
        setTotalPages(Math.ceil(data.totalCustomers / 7));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Method for data fetching without search term
  const handleClearSearch = () => {
    fetch(
      `http://localhost:3000/api/getCustomerList?page=${currentPage}&sortBy=${sortColumn}&sortOrder=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
        setTotalPages(Math.ceil(data.totalCustomers / 7));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Methods for set customerForm state
  const handleCreateCustomerForm = () => {
    setShowCustomerForm(true);
  };

  const handleFormClose = () => {
    setShowCustomerForm(false);
  };

  // Method for handling sort functionality and Fetch paginated data with sorting when currentPage or sort options change
  const handleSort = (column, order) => {
    setSortColumn(column);
    setSortOrder(order);
    fetch(
      `http://localhost:3000/api/getCustomerList?page=${currentPage}&sortBy=${column}&sortOrder=${order}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Method to add newCustomer to database
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
        setTotalPages(Math.ceil(data.totalCustomers / 7));
      })
      .catch((error) => console.error("Error adding customer:", error));

    handleFormClose();
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:3000/api/getCustomerList?page=${currentPage}&sortBy=${sortColumn}&sortOrder=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
        setTotalPages(Math.ceil(data.totalCustomers / 7));
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setIsLoading(false));
  }, [currentPage, sortColumn, sortOrder]);

  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <Header onCreateCustomer={handleCreateCustomerForm} />

        <div
          className={`container mx-auto p-4 ${
            showCustomerForm ? "filter blur-md" : ""
          }`}
        >
          <SearchBar
            onSearchChange={handleSearchChange}
            onClear={handleClearSearch}
          />

          <div className='bg-white p-6 mt-4 rounded-md shadow-md'>
            <CustomerList
              customers={customers}
              onSort={handleSort}
              isLoading={isLoading}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
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
