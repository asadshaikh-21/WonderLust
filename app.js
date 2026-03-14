if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

if (!process.env.ATLAS_URL) {
    throw new Error("ATLAS_URL is missing in environment variables");
}

if (!process.env.SECRET) {
    throw new Error("SECRET is missing in environment variables");
}

const express = require("express");
const app = express();

if(process.env.NODE_ENV === "production"){
    app.set("trust proxy", 1);
}

const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utlis/ExpressError.js");
const session = require("express-session");
const ConnectMongo = require("connect-mongo");
const MongoStore = ConnectMongo.default || ConnectMongo;
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
app.set("views", path.join(__dirname,"views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => {
    console.log("Connected to DataBase !");
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR:", err);
  });

async function main() {
    await mongoose.connect(atlas_url);
}

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
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.CurrentUser = req.user;
    next();
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.all("/{*any}", (req, res, next) => {
    next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
    console.log("========== GLOBAL ERROR ==========");
    console.log(err);
    console.log("Message:", err.message);
    console.log("Stack:", err.stack);

    let { status = 500, message = "Something Went Wrong" } = err;
    res.status(status).render("error.ejs", { message });
});


