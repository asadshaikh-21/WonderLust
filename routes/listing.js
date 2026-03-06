const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utlis/wrapAsync.js");
const ExpressError = require("../utlis/ExpressError.js");
const passport = require("passport");
const { isLoggedin, validateListing} = require("../middleware.js");
const {isOwner} = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer  = require('multer')
const {storage} = require("../CloudConfig.js");
const upload = multer({ storage });
const { geocodeOSM } = require("../utlis/geocode.js");

// All listings route
router.get("/",wrapAsync(listingController.index)
);

// New listing Route
router.get("/new",isLoggedin,listingController.newForm);

// Edit route
router.get("/:id/edit", isLoggedin,isOwner,wrapAsync(listingController.editForm)
);

// upadate route
router.put("/:id", upload.single("listing[image]"),
validateListing,isLoggedin,
isOwner,wrapAsync(listingController.updateForm)
);

// delete route
router.delete("/:id",isLoggedin,isOwner,wrapAsync(listingController.deleteForm)
);


// router.post("/", isLoggedin, 
//     upload.single("listing[image]") ,
//     validateListing ,wrapAsync(listingController.createListing)
// );
 
//Show Route
router.get("/:id",wrapAsync(listingController.showListing)
);

// Create route
router.post(
  "/",
  isLoggedin,
  (req, res, next) => {
    console.log("LISTING STEP 1: route hit");
    next();
  },
  upload.single("listing[image]"),
  (req, res, next) => {
    console.log("LISTING STEP 2: after upload");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    next();
  },
  validateListing,
  wrapAsync(listingController.createListing)
);

module.exports = router;