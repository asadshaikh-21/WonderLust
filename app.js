if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utlis/wrapAsync.js");
const ExpressError = require("./utlis/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
const session = require("express-session");
const ConnectMongo = require("connect-mongo");
const MongoStore = ConnectMongo.default || ConnectMongo
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const port = process.env.PORT || 8080;

const atlas_url = process.env.ATLAS_URL;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.engine("ejs" , ejsMate);

app.use(express.urlencoded({extended : true})); 
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

main()
.then(()=>{
    console.log("Connected to DataBase !");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect(atlas_url);
}

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

const store = MongoStore.create({
  mongoUrl: process.env.ATLAS_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("SESSION STORE ERROR", err);
});

const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true ,
    cookie : {
        expires: Date.now() + 7 *24*60*60*1000,
        maxAge: 7 *24*60*60*1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.CurrentUser = req.user;
  next();
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.use(flash());

app.get("/demouser",async(req,res)=>{
    let fakeuser = new User({
        email : "student@gmail.com",
        username : "student1"
    })
    let reguser = await User.register(fakeuser,"password"); 
    res.send(reguser);
})

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.all("/{*any}",(req,res,next)=>{
    next(new ExpressError(404,"Page not Found"));
});

app.use((err,req,res,next)=>{
    let {status = 500, message = "Something Went Wrong"} = err;
    res.status(status).render("error.ejs", {message});
    // res.status(status).send(message);
});