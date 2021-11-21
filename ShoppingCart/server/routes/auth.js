const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @route POST api/auth/register
// @desc Resiter user
// @@access Public
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //simple validate
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }
  try {
    //check for existing user
    const user = await User.findOne({ username }).exec();
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username has already taken" });
    //all good
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashPassword,
    });
    await newUser.save();
    //Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res
      .status(201)
      .json({ success: true, message: "Register succesfully", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/auth/login
// @desc login user
// @@access Public

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //simple validate

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });

  try {
    //check user existing
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username" });

    // username found
    const passwordValid = await bcrypt.compareSync(password,user.password );
    if (!passwordValid) {
      return console.log(user.password, password);
      // return res
      //   .status(400)
      //   .json({ success: false, message: "Incorrect password" });
    }

    //ALl good
    //Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ success: true, message: "Login succesfully", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
