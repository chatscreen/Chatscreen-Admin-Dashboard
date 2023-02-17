const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  message: {
    text: {
      type: "string",
      required: [true, "Please add a text value"],
    },
    name: {
      type: "string",
      required: [true, "Please add a text value"],
    },
    email: {
      type: "string",
      required: [true, "Please add a text value"],
    },
    id: {
      type: "string",
      required: [true, "Please add a text value"],
    },
    time: { type: Number, default: new Date().getTime() },
  },
});

module.exports = mongoose.model("Chat", chatSchema);
