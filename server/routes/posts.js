import express, { Router } from "express";
import Post from "../models/Post";

const router = Router();

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json({
      posts
    });
  });
});

// @route   GET api/posts/:_id
// @desc    Get post
// @access  Public
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Post.findOne({ _id }, req.body, (err, post) => {
    if (err) return res.status(400).send(err);
    res.json({
      post
    });
  });
});

// @route   POST api/posts
// @desc    Create post
// @access  Public
router.post("/", (req, res) => {
  let post = new Post(req.body);
  post.save().then((err, post) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      created: true,
      post
    });
  });
});

// @route   UPDATE api/posts/:_id
// @desc    Update post
// @access  Public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Post.findOneAndUpdate({ _id }, req.body, { new: true }, (err, post) => {
    if (err) return res.status(400).send(err);
    res.json({
      updated: true,
      post
    });
  });
});

// @route   DELETE api/posts/:_id
// @desc    Delete post
// @access  Public
router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  Post.findOneAndDelete({ _id }, (err, post) => {
    if (err) return res.status(400).send(err);
    res.json({
      deleted: true,
      post
    });
  });
});

export default router;
