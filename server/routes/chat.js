const express = require("express");
const router = express.Router();
const { getMessages, createMessage } = require("../controllers/chatController");

//get array of messages from location
router.get("/", getMessages);

//add one message to array of messages
router.post("/", createMessage);

module.exports = router;
