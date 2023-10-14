const allowedOrigins = require("../config/allowedOrigins");
// Define a middleware function called credentials
const credentials = (req, res, next) => {
  // Get the origin from the request headers
  const origin = req.headers.origin;
  // Check if the origin is included in the allowedOrigins array
  if (allowedOrigins.includes(origin)) {
    // If the origin is allowed, set the 'Access-Control-Allow-Credentials' header to true
    res.header("Access-Control-Allow-Credentials", true);
  }
  // Call the next middleware function
  next();
};
module.exports = credentials;

