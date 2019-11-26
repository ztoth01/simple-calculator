const express = require("express");
const dotenv = require("dotenv");
//const connectDB = require('./config/db');
const errorHandler = require("./middleware/error");
const colors = require("colors");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
// connectDB();

// Route files
const result = require("./routes/results");

const app = express();

// Body parser
app.use(express.text());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/result", result);

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Error handling
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
