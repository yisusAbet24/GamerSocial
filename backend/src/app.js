const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config");
const { errorHandler, notFound } = require("./middlewares");

// * Import routes
const { authRoutes } = require("./routes");

// * Connect to the database
connectDB();

// * Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// * Routes
app.use("/api/auth", authRoutes);

// * Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
