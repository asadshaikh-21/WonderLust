const Listing = require("./models/listing");
const Review = require("./models/review.js");
const ExpressError = require("./utlis/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

// module.exports.validateListing = (req, res, next) => {
//   let { error } = listingSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };

module.exports.validateListing = (req, res, next) => {
    console.log("VALIDATE LISTING BODY:", req.body);

    let { error } = listingSchema.validate(req.body);
    if (error) {
        console.log("JOI LISTING ERROR:", error.details);
        let errMsg = error.details.map((el) => el.message).join(", ");
        return next(new ExpressError(400, errMsg));
    } else {
        next();
    }
};

// Validate review
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectURL = req.originalUrl; // save original
    req.flash("error", "Login First");
    return res.redirect("/login");
  }
  next();
};

module.exports.redirecturl = (req, res, next) => {
  // safely read session
  res.locals.redirectURL = req.session?.redirectURL || "/listings";
  next();
};

module.exports.isOwner = async(req,res,next) =>{
        let {id} = req.params;
        let listing = await Listing.findById(id);
        const currentUserId = req.user._id; // best inside routes
        if (!listing.owner.equals(currentUserId)) {
          req.flash("error", "You aren't the owner!");
          return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async(req,res,next) =>{
        let {id, reviewId} = req.params;
        let review = await Review.findById(reviewId);
        const currentUserId = req.user._id; // best inside routes
        if (!review.author.equals(currentUserId)) {
          req.flash("error", "You aren't the author!");
          return res.redirect(`/listings/${id}`);
    }
    next();
}