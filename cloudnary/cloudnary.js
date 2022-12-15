const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "doh91aq3h",
  api_key: "314445766937967",
  api_secret: "aoqUIWQUVyrWV1zgwRC7Ad9FkLg",
  secure: true
});

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: { folder: "UserImage", allowedFormats: ["jpeg", "png", "jpg"] },
// });

// module.exports = { cloudinary, storage };
module.exports = cloudinary;