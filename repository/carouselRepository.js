let {connection} = require('../connection');


async function getSlides(count) {
    return await connection.getConnection().then(async db => {
        let dataArray = await db.collection('slide').find({}).toArray();
        // console.log(dataArray);
        return dataArray.slice(0, count);
    });
}

async function saveSlide() {
    await connection.getConnection().then(async db => {
        for (let i = 0; i < 10; i++) {
            await db.collection('slide').insertOne({
                image: `${i}.jpg`,
                title: `Image ${i}`,
                subTitle: `Image ${i}`
            });
        }
    });
}

// (async () => {
//     await saveSlide();
// })();

module.exports = {getSlides};
