const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = process.env.ATLAS_URL;
const OWNER_ID = "69aa7755acbd26aa85bbeb51"; // priti user id

if (!MONGO_URL) {
  throw new Error("ATLAS_URL is missing in .env");
}

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DataBase !");
}

const initDB = async () => {
  await Listing.deleteMany({});

  const ownerObjectId = new mongoose.Types.ObjectId(OWNER_ID);

  const newData = initData.data.map((obj) => ({
    ...obj,
    owner: ownerObjectId,
  }));

  await Listing.insertMany(newData);
  console.log("Inserted Successfully !");
};

main()
  .then(async () => {
    await initDB();
    await mongoose.connection.close();
    console.log("Connection closed.");
  })
  .catch(async (err) => {
    console.error("Seeder Error:", err);
    try {
      await mongoose.connection.close();
    } catch {}
  });