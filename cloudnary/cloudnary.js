const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: { folder: "UserImage", allowedFormats: ["jpeg", "png", "jpg"] },
// });

// module.exports = { cloudinary, storage };
module.exports = cloudinary;
