const express = require("express");
const router = express.Router();
const wrapAsync = require("../utlis/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const {redirecturl} = require("../middleware.js");
const userController = require("../controllers/user.js");

router.get("/signup",(req,res)=>{
    res.render("user/signup.ejs")
})

router.get("/login",(req,res)=>{
    res.render("user/login.ejs")
})

router.post(
  "/signup",
  wrapAsync(userController.singup)
);

router.post(
  "/login",
  redirecturl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),userController.login
);

router.get("/logout",userController.logout);

module.exports = router;