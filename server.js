const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// Middleware to parse JSON
app.use(express.json());

// Log middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error: ", err.message));

// Routes
const itemRoutes = require("./routes/items");
app.use("/items", itemRoutes);

// Base routes
app.get("/", (req, res) => res.send("Inventory API is Running"));

app.get("/health", (req, res) => 
  res.json({ status: "Server is healthy", uptime: process.uptime() })
);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
