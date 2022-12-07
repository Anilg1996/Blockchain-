const express = require('express');
const router = express.Router();
const coinController = require("../controller/coinController")


router.get("/test-me", function(req, res){
    console.log("My first ever API")
})


router.get("/coin", coinController.coin)






module.exports = router