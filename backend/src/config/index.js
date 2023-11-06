const { connectDB } = require("./connect-db");

// * Environment variables
const { PORT, JWT_SECRET, AUTH_TOKEN_EXPIRATION, REFRESH_TOKEN_EXPIRATION } =
  process.env;

module.exports = {
  PORT,
  connectDB,
  JWT_SECRET,
  AUTH_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
};
