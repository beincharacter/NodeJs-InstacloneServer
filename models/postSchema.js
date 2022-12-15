const mongoose = require("mongoose");
const { url } = require("../cloudnary/cloudnary");
const Schema = mongoose.Schema;

const Post = new Schema({
    author: {type: String},
    location: {type: String},
    postimage: {type: String},
    likes: {type: Number, default: 0},
    date: {type: String},
    description: {type: String}
});

const PostModel = mongoose.model("Posts", Post);

module.exports = PostModel;
