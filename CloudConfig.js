const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wonderLust_DEV",
    format: async (req, file) => "png", // or remove this line
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

module.exports = { cloudinary, storage };