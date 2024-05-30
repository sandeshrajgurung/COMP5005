const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "Please enter username"]
        },

        userPost: {
            type: String,
            required: true,

        },

        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;