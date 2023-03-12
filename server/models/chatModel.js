const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  // needs to match the collection spun up in the database during docker compose
  message: {
    name: {
      type: "string",
      required: [true, "Please add a text value"],
    },
    text: {
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
