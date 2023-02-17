const express = require("express");
const router = express.Router();
const {
  registerLocation,
  loginLocation,
  getLocation,
} = require("../controllers/locationController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerLocation);
router.post("/login", loginLocation);
router.get("/locationData", protect, getLocation);

module.exports = router;
