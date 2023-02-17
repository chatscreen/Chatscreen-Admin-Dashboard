const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getUsers,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

//const { imageUpload } = require("../middleware/imageUpload");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.get("/", getUsers);
//router.get("/photos", async (req, res) => {
//need to get all images from user images folder and serve it as an object to react
//OR
//serve single image based on request?
//console.log(hi);
//});

module.exports = router;
