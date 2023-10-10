const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
const { verifyAdmin } = require("../controllers/authController");
const { handleLogin } = require("../controllers/authController");

router.post("/", handleLogin);

//router.post("/adminVerify", verifyRoles, verifyAdmin);
router.post("/adminVerify", verifyAdmin);

module.exports = router;
