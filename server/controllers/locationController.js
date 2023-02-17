const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Location = require("../models/locationModel");

//register new location
const registerLocation = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // Check if location exists
  const locationExists = await Location.findOne({ email });

  if (locationExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const location = await Location.create({
    name,
    email,
    password: hashedPassword,
  });

  if (location) {
    res.status(201).json({
      _id: location.id,
      name: location.name,
      email: location.email,
      token: generateToken(location._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid location data");
  }
});

//authenticate a location
const loginLocation = asyncHandler(async (req, res) => {
  //res.json({ message: "Login Location" });
  const { email, password } = req.body;

  //Check for location email
  const location = await Location.findOne({ email });

  if (location && (await bcrypt.compare(password, location.password))) {
    res.json({
      _id: location.id,
      name: location.name,
      email: location.email,
      token: generateToken(location._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid login credentials");
  }
});

//get location data
const getLocation = asyncHandler(async (req, res) => {
  const { _id, name, email } = await Location.findById(req.location.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerLocation, loginLocation, getLocation };
