const mongoose = require("mongoose");
const dbdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
const OWNER_ID = "69a40d3370bc3ddfcf5a50bd";

main()
  .then(() => {
    console.log("Connected to DataBase !");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const ownerObjectId = new mongoose.Types.ObjectId(OWNER_ID);

  const listings = dbdata.data.map((obj) => ({
    ...obj,
    owner: ownerObjectId,
  }));

  await Listing.insertMany(listings);
  console.log("Inserted Successfully !");
  await mongoose.connection.close();
};