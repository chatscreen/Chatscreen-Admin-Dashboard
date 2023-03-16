const asyncHandler = require("express-async-handler");

const Chat = require("../models/chatModel");

//multer for user profile image storage

//register new user

//authenticate a user

//get user data

//get all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await Chat.find();
  res.status(200).json(users);
});

module.exports = { getUsers };
