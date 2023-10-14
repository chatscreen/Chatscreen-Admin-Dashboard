const asyncHandler = require("express-async-handler");

const Users = require("../models/userModel");

//get all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find();
  res.status(200).json({ users });
});

module.exports = { getUsers };
