const Listing = require("../models/listing.js");
const { geocodeOSM } = require("../utlis/geocode.js");

module.exports.index = async (req,res)=>{
    const { category } = req.query;
    let filter = {};
    if(category){
        filter.category = category;
    }
    const allListing = await Listing.find(filter);
    res.render("listings/index.ejs", { allListing, category });
}

module.exports.newForm = (req,res)=>{
  res.render("listings/new.ejs");
}

module.exports.editForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not exist!");
    return res.redirect("/listings");
  }
  return res.render("listings/edit", { listing });
};

module.exports.updateForm = async(req,res)=>{
        let {id} = req.params;
        let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
        if(typeof req.file !=="undefined"){
          let url = req.file.path;
          let filename = req.file.filename;
          listing.image = {url,filename};
          await listing.save();
        }
        req.flash("success", "Listing Upadated successfully!");
        res.redirect(`/listings/${id}`);
    }

module.exports.deleteForm = async(req,res)=>{
        let {id} = req.params;
        let deleted = await Listing.findByIdAndDelete(id);
        console.log(deleted); 
        req.flash("success","Listing Deleted!");
        res.redirect("/listings");
    }

module.exports.createListing = async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    const place = `${req.body.listing.location}, ${req.body.listing.country}`;
    const coords = await geocodeOSM(place);
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = {url,filename};
    if(coords){
        newlisting.geometry = {
            type: "Point",
            coordinates: [coords.lng, coords.lat]
        };
    }
    await newlisting.save();
    req.flash("success","New Listing created SuccessFully!");
    res.redirect("/listings");
}

module.exports.showListing = async(req,res)=>{
        let {id} = req.params;
        const listing = await Listing.findById(id)
        .populate({path:"reviews",
            populate: {path:"author"},
        })
        .populate("owner");
        if(!listing){
          req.flash("error","Listing not exist!");
          return res.redirect("/listings");
        }
        console.log(listing);
        res.render("listings/show.ejs",{listing});
    }