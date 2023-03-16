const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  // there will be a bunch of other stuff in here also, like config, images, metadata for phone apps location info etc.
});

module.exports = mongoose.model("Location", locationSchema);
