const express = require("express");
const router = express.Router();
const { getMessages } = require("../controllers/chatController");

//get array of messages from location
router.get("/", getMessages);

module.exports = router;
