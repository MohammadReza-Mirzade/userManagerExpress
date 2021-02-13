const express = require('express');
const router = express.Router();
const fs = require("fs");

router.use("/", function (req, res){
    res.render("pages/about");
});

module.exports = router;