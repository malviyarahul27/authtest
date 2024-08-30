var express = require('express');
var router = express.Router();

const User = require('../models/userSchema')

const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(User.authenticate()));



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/signup", (req, res, next)=>{
  res.render("signup", {user: req.user})
})
router.post('/signup', async(req, res, next)=>{
  try {
    const {username, email, password} = req.body;
    await User.register({username, email}, password);
    console.log(req.body)
    res.redirect('/users/signin')
  } catch (error) {
    res.send(error)
    console.log(error.message)
  } 
})
router.get("/signin", (req, res, next)=>{
  res.render("signin", {user: req.user})
})
router.post("/signin", passport.authenticate('local', {
  successRedirect: "/profile",
  failureRedirect: "/users/signin"
}),
  (req, res, next)=>{}
);

router.get("/signout", (req, res, next)=>{
    req.logout(()=>{
      res.redirect("/")
    })
})


//middleware  for authentication

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/users/signin")
  }
};
//







module.exports = router;
