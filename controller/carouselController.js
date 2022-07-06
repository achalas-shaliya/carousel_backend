let {carouselService} = require('../service');

async function getSlides(count) {
    return await carouselService.getSlides(count);
}

module.exports = {getSlides};
