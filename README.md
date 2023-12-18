# Customer Management App

Customer Management App is a web application designed to help users manage and organize customer data efficiently. It includes features such as adding new customers, sorting, searching, and paginating through the customer list.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Deployment](#Deployment)

## Introduction

Customer Management App is a web-based solution for businesses to manage customer information. It allows users to add new customers, search for specific customers by name, and sort the customer list based on different criteria. The application provides a user-friendly interface for efficient customer data management.

## Features

- Add new customers with details such as name, phone number, and email.
- Search for customers by name to quickly find specific records.
- Sort the customer list based on different criteria, such as name or creation date.
- Paginate through the customer list for easy navigation.

## Prerequisites

Before running the application, ensure you have the following prerequisites:

- Node.js
- npm (Node Package Manager)
- MongoDB server

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NitinPathak653/customer-management-app.git


2. Navigate to the project directory:
   ```bash
    cd CMS-FrontEnd
    cd CMS-BackEnd

3. Install dependencies:
   ```bash
    npm install

4. Start the application:
   ```bash
   for server - node server.js
   for client - npm run dev


## Usage

1. **Access the Application:** Open the application through the provided URL.
   
2. **Add New Customers:**
   - Click the "Create Customer" button to add new customers to the database.

3. **Search Functionality:**
   - Utilize the search bar to efficiently find customers by their names.

4. **Sort Customer List:**
   - Click on column headers to sort the customer list based on different parameters.

5. **Navigate Through Pages:**
   - Utilize the pagination controls to smoothly navigate through different pages.

## API Endpoints

The application leverages the following API endpoints:

- `POST /api/createCustomer:` Adds a new customer to the database.
  
- `GET /api/getCustomerList:` Retrieves the list of customers based on specified parameters.

## Technologies Used

The application is built using the following technologies:

- **Frontend:**
  - [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.

- **Backend:**
  - [Node.js](https://nodejs.org/): A JavaScript runtime for building scalable network applications.
  - [Express.js](https://expressjs.com/): A web application framework for Node.js.

- **Database:**
  - [MongoDB](https://www.mongodb.com/): A NoSQL database for storing customer data.

- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling the application.

## Deployment

The application is deployed and accessible at the following URL:

[https://cmsfrontend-gi26pkte9-nitinpathak7.vercel.app/](https://cmsfrontend-gi26pkte9-nitinpathak7.vercel.app)
