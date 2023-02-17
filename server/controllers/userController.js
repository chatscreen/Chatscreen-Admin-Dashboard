const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

//multer for user profile image storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images/userImages/"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter }).single("image");

// Promise wrapping the Multer upload
const multerPromise = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, (err) => {
      if (!err) resolve();
      reject(err);
    });
  });
};

//register new user
const registerUser = asyncHandler(async (req, res) => {
  await multerPromise(req, res);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    profileImage: req.file.filename,
  });

  if (user) {
    res.status(201).json({
      userId: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//authenticate a user
const loginUser = asyncHandler(async (req, res) => {
  //res.json({ message: "Login User" });
  const { email, password } = req.body;

  //Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid login credentials");
  }
});

//get user data
const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
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

//get all users
const getUsers = asyncHandler(async (req, res) => {
  //res.json(dummyUsers);
  //const chat = dummyUsers; //temporary until I load up the db
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = { registerUser, loginUser, getUser, getUsers };
