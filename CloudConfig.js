const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: "H_A-NZgRT4j0sUhD_mwBRMf2XPs"
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wonderLust_DEV',
    allowerdformat: [
        "png","jpg","jpeg"
    ]
  },
});

module.exports ={
   cloudinary,
    storage
}