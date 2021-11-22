const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const verifyToken = require("../middleware/auth");

// @route GET api/posts
// @desc GET posts
// @@access Private
router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userId }).populate("user", [
      "username",
      "createdAt",
    ]);
    res.json({ success: true, posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/posts
// @desc Create posts
// @@access Private

router.post("/", verifyToken, async (req, res) => {
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
      message: "Woah! New trend buddy!",
      post: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/posts
// @desc Update posts
// @@access Private

router.put("/:id", verifyToken, async (req, res) => {
  const { ServiceName, ServicePrice } = req.body;

  //Simple validate
  if (!ServiceName)
    return res
      .status(400)
      .json({ success: false, message: "Missing Service Name" });

  try {
    let updatedPost = {
      ServiceName,
      ServicePrice,
    };

    const postUpdateCondition = { _id: req.params.id, user: req.userId };
    updatedPost = await Post.findOneAndUpdate(
      postUpdateCondition,
      updatedPost,
      { new: true }
    );
    //User not authorise to update post or post not found
    if (!updatedPost)
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorised",
      });

    res.json({
      success: true,
      message: "Updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
