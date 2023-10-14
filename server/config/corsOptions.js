const allowedOrigins = require("./allowedOrigins");
const corsOptions = {
  // Define the origin function that checks if the request origin is allowed
  origin: (origin, callback) => {
    // Check if the request origin is in the allowedOrigins array or if it is null
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // If the origin is allowed or null, call the callback function with no error
      callback(null, true);
    } else {
      // If the origin is not allowed, call the callback function with an error
      callback(new Error("Not allowed by CORS"));
    }
  },
  // Set the optionsSuccessStatus to 200 to indicate a successful response
  optionsSuccessStatus: 200,
};
module.exports = corsOptions;

