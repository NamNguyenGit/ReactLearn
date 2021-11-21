const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// @route POST api/auth/posts
// @desc Create posts
// @@access Private

router.post("/", async (req, res) => {
  const { ServiceName, ServicePrice } = req.body;

  //Simple validate
  if (!ServiceName)
    return res
      .status(400)
      .json({ success: false, message: "Missing Service Name" });
  try {
    const newPost = new Post({
      ServiceName,
      ServicePrice,
      user: "6199c42eafaa9988655963f3",
    });
    await newPost.save();

    res.json({
      success: true,
      message: "Woah! New trend budyy!",
      post: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
