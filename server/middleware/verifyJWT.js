const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware function to verify JWT token
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) return res.sendStatus(401); // If no token provided, send 401 Unauthorized status
  jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // If token is invalid, send 403 Forbidden status
    // Extracting user information from the decoded token
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    next();
  });
};

module.exports = verifyJWT;
