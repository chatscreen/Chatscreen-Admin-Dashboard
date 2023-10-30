const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    // Username of the user
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  roles: {
    // Roles assigned to the user
    User: {
      type: Number,
      default: 2001,
    },
    Admin: Number,
  },
  password: {
    // Password of the user
    type: String,
    required: true,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false, // Flag indicating if the user has set an avatar image (default value: false)
  },
  avatarImage: {
    type: String,
    default: "",
  }, // URL of the user's avatar image (default value: empty string)
  refreshToken: String, // Refresh token for authentication
  default: "",
});

module.exports = mongoose.model("User", userSchema);
