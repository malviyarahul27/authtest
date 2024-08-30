var express = require('express');
var router = express.Router();
const { isLoggedIn } = require('../middleware/auth');
const passport = require("passport")

const User = require('../models/userSchema');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});

router.get('/profile', isLoggedIn,(req,res,next)=>{
  console.log(req.user);
  res.render("profile", {user: req.user});
})
module.exports = router;
