const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getMessages,
  createMessage,
  editMessage,
  deleteMessage,
} = require("../controllers/chatController");

//get array of messages from location
// im removing the id for now
router.get("/", getMessages);
// router.get("/:id", getMessages);

//add one message to array of messages
router.post("/", createMessage);

//update one message to array of messages (turn acess on / off)
router.put("/:id", editMessage);

//delete one message from array of messages
router.delete("/:id", deleteMessage);

module.exports = router;
