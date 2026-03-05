const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingmodel = new Schema({
    title : 
    {
        type : String,
        required : true
    },
    description : String,
    image: {
    url: String,
    filename:String
    },
    price : Number,
    location : String,
    country : String,
    reviews : [{
        type : Schema.Types.ObjectId,
        ref : "Review",
    }],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    geometry: {
  type: {
    type: String,
    enum: ["Point"],
    default: "Point",
  },
  coordinates: {
    type: [Number], // [lng, lat]
    default: [72.8777, 19.0760], // fallback Mumbai
    },
    }, 
    category: {
    type: String,
    enum: ["Trending","Room","City","Mountain","Castle","Pool","Camping","Farms","Morden","Snow","Artic"],
    default: "Trending"
    }
});

listingmodel.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingmodel);
module.exports = Listing;