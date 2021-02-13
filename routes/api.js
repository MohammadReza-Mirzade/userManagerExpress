const express = require('express');
const router = express.Router();
const home = require("./home");
const signIn = require("./signIn");
const signUp = require("./signUp");
const about = require("./about");
const contactUs = require("./contactUs");
const error = require("./error")


router.get('/', function (req, res){
    res.redirect('/home');
});
router.get("/home", home);
router.get("/signIn", signIn);
router.get("/signUp", signUp);
router.get("/about", about);
router.get("/contactUs", contactUs);
router.use(error);

module.exports = router;