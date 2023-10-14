const mongoose = require("mongoose");
const chatSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  text: { type: String, required: true },
  sender: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Chat", chatSchema);
