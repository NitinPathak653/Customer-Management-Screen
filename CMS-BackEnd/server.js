// Importing all necessary modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// Creating an Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up Middleware
app.use(cors());
app.use(bodyParser.json());

// Connecting to MongoDB using Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/customerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Customer Schema and Model
const customerSchema = new mongoose.Schema({
  name: String,
  phoneNo: String,
  email: String,
  creationDate: { type: Date, default: Date.now },
});

const Customer = mongoose.model("Customer", customerSchema);

// Defining REST APIs
app.post("/api/createCustomer", async (req, res) => {
  try {
    const { name, phoneNo, email, creationDate } = req.body;
    const newCustomer = new Customer({ name, phoneNo, email, creationDate });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Implement pagination
app.get("/api/getCustomerList", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 7;
    const skip = (page - 1) * pageSize;

    const customers = await Customer.find().skip(skip).limit(pageSize);

    const totalCustomers = await Customer.countDocuments();

    res.status(200).json({ customers, totalCustomers });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
