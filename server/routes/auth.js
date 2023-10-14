const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
const { verifyAdmin } = require("../controllers/authController");
const { handleLogin } = require("../controllers/authController");

router.post("/", handleLogin); // log in route

router.post("/adminVerify", verifyJWT, verifyRoles, verifyAdmin); // verify user is admin through localStorage token

module.exports = router;
