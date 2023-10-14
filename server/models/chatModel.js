const mongoose = require("mongoose");

// Creating a chat schema

const chatSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Unique identifier for the chat
  text: { type: String, required: true }, // Text of the chat message
  sender: { type: String, required: true }, // Sender of the chat message
  timestamp: { type: Date, default: Date.now }, // Timestamp of when the chat message was sent
});

module.exports = mongoose.model("Chat", chatSchema);
