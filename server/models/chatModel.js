const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  mesages: {
    message: {
      type: "string",
      required: [true, "Please add a text value"],
    },
    timestamp: { type: "string", default: new Date().getTime() },
  },
});

module.exports = mongoose.model("Chat", chatSchema);
