const { request, response } = require("express");
const { getNewStarried } = require("../helpers/rating");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");
const Website = require("../models/websiteModel");

const createComment = async (req = request, res = response) => {
  try {
    const { user, stars, content = null, website } = req.body;

    const commentBefore = await Comment.findOne({ user, website });
    if (commentBefore) {
      return res.status(400).json({
        ok: false,
        msg: "you have already comment this website, try to update it",
      });
    }
    const [userExist, websiteExist] = await Promise.all([
      User.findById(user),
      Website.findById(website),
    ]);
    if (!userExist || !websiteExist) {
      return res.status(404).json({
        ok: false,
        msg: "user or website not found, try again",
      });
    }
    const newComment = new Comment({ user, stars, content, website });
    const commentCreated = await newComment.save();

    // update website stars
    const { error, stars: newStars } = await getNewStarried(website);
    if (!error) {
      await Website.findByIdAndUpdate(website, { stars: newStars });
    }

    res.status(201).json({
      ok: true,
      comment: commentCreated,
      msg: "comment created correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  createComment,
};
