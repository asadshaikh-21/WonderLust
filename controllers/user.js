const User = require("../models/user.js");

module.exports.singup = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err)=>{
        if(err){
          return next(err);
        }
        req.flash("success", "Registered Successfully! Welcome to WonderLust!");
        res.redirect("/listings");
      })

    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");  
    }
  }

  module.exports.login = (req, res) => {
    req.flash("success", "Welcome back to WonderLust!");
    const redirect = res.locals.redirectURL || "/listings";
    delete req.session.redirectURL; 
    res.redirect(redirect);
  }

  module.exports.logout = (req,res,next)=>{
  req.logOut((err)=>{
    if(err){
      return next(err);
    }
    req.flash("success","You are logged out!");
    res.redirect("/listings");
  })
}