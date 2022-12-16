const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("../models/postSchema");
const cloudinary = require("../cloudnary/cloudnary");

const uri = process.env.MONGODB_URI;
// const uri = "mongodb://localhost/postsdb";


mongoose.connect(uri, (err)=>{
  if(!err){
    console.log('DB is connected')
  }else{
    console.log(err);
  }
});


const router = express.Router();

const cors = require('cors');
router.use(cors({
    origin: '*'
}));




router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/posts", async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(e) {
        res.status(400).send("Request Failed");
    }
});

router.post("/posts", (req, res) => {
  try {
  const file = req.files.postimage
    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
      
        let date = new Date;
        let finalDate = date + "";
        let today = finalDate.split(" ").splice(1, 3).join(" ");

        const { author, description, location} = req.body;
    
        const user = await Post.create({
          author,
          description,
          location,
          likes: 35,
          date: today,
          postimage: result.url
        });
        res.send(user);
      })
    } catch (e) {
      console.log(e)
    }
});


module.exports = router;

