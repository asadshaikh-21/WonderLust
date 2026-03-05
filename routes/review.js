const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utlis/wrapAsync.js");
const ExpressError = require("../utlis/ExpressError.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { reviewSchema } = require("../schema.js");
const {validateReview} = require("../middleware.js");
const {isLoggedin,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// Create review
router.post("/", validateReview,isLoggedin, wrapAsync(reviewController.createReview));

// Delete Review
router.delete("/:reviewId",isLoggedin,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router;