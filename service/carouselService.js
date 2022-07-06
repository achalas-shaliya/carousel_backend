let {carouselRepository} = require('../repository');


async function getSlides(count) {
    count >= 10 ? count = 10 : undefined;
    return await carouselRepository.getSlides(count);
}

module.exports = {getSlides};
