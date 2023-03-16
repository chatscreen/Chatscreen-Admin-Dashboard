const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  message: {
    text: { type: String, required: true },
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // this default type of string is probably incorrect and may also need to be rounded down
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatSchema);
