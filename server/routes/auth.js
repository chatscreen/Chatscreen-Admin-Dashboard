const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles"); // this is for when we have user app and admin on same routes
const { verifyAdmin } = require("../controllers/authController");
const { handleLogin } = require("../controllers/authController");

router.post("/", handleLogin); // login route

router.post("/adminVerify", verifyJWT, verifyAdmin); // verify user is admin through localStorage token

module.exports = router;
