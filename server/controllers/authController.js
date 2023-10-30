const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  try {
    const { user, pwd } = req.body;
    if (!user || !pwd)
      return res
        .status(400)
        .json({ message: "Username and password are required." });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
      const roles = Object.values(foundUser.roles).filter(Boolean);
      // create JWTs
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
            roles: roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      // Saving refreshToken with current user
      foundUser.refreshToken = refreshToken;
      await foundUser.save();

      // Creates Secure Cookie with refresh token
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      let userId = foundUser._id;

      // Send authorization roles and access token to user
      res.json({ roles, accessToken, userId });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const verifyAdmin = async (req, res) => {
  try {
    res.json({ isAuthenticated: true });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { handleLogin, verifyAdmin };
