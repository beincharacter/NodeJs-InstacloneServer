

require("dotenv").config()
const express = require("express");
const bodyparser = require("body-parser");
const postRoute = require("./routes/postRoutes");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload({
  useTempFiles: true
}))

app.use("/", postRoute);

app.listen(process.env.PORT || 8081, (err)=>{
    if(!err){
      console.log('server is connected')
    }else{
      console.log(err);
    }
  });