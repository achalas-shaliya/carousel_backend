var express = require('express');
var router = express.Router();

let {carouselService} = require('../service');

/* GET home page. */
router.get('/', async function (req, res, next) {
    let {slides} = req.query;
    let slidesArray = await carouselService.getSlides(slides);
    res.status(200).json({slides: slidesArray});
});

module.exports = router;
