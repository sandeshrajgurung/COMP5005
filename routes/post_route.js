const express = require("express");
const router = express.Router();
const {getPosts, createPost, deletePost} = require('../controllers/post_controller.js');

router.get("/", getPosts);

router.post("/", createPost);

router.delete("/:id", deletePost);

module.exports = router;