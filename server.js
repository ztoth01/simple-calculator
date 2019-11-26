const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");
const colors = require("colors");
const morgan = require("morgan");
const path = require("path");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Route files
const result = require("./routes/results");

const app = express();

// Body parser
app.use(express.text());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Add routers
app.use("/api/v1/result", result);

// Error middleware
app.use(errorHandler);

// Server static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

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
