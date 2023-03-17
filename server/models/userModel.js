const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  // in the mobile app, if the users name is already taken in a chat, there will be an option for them to choose another name
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Admin: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
