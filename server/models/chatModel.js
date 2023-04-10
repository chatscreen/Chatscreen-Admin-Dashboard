const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  text: { type: String, required: true },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatSchema);
