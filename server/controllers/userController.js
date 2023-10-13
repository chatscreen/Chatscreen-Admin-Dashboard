const asyncHandler = require("express-async-handler");

const Users = require("../models/userModel");

//multer for user profile image storage

//register new user

//authenticate a user

//get user data

//get all users
const getUsers = asyncHandler(async (req, res) => {
  console.log("hi from users controller");
  const users = await Users.find();
  res.status(200).json(users);
});

module.exports = { getUsers };
