const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/userController");

router.get("/", getUsers); // get all the users from the database

module.exports = router;
