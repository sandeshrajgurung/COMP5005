const Post = require('../models/post_model');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
      } catch (error) {
        req.status(500).json({ message: error.message });
      }
};

const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const deletePost = async (req, res) => {
    try {
        const {id} = req.params;
    
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
          return res.status(404).json({ message: "Post not found" });
        }
    
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
    getPosts,
    createPost,
    deletePost
};