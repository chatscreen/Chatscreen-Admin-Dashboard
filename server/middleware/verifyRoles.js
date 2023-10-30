// Middleware function to verify user roles
const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401); // If no roles are provided in the request, send 401 Unauthorized status
    const rolesArray = [...allowedRoles]; // Convert the allowed roles into an array
    const result = req.roles
      .map((role) => rolesArray.includes(role)) // Check if any of the user roles match the allowed roles
      .find((val) => val === true); // Find the first match
    if (!result) return res.sendStatus(401); // If no match found, send 401 Unauthorized status
    next();
  };
};
module.exports = verifyRoles;
