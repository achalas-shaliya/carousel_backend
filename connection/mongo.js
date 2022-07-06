const {MongoClient} = require('mongodb');
let config = require('../config.json');

const url = config.mongo.uri;
const client = new MongoClient(url);

const dbName = config.mongo.database;

async function getConnection() {
    await client.connect();
    console.log('Connected successfully to server');
    return client.db(dbName);
}

module.exports = {getConnection};
