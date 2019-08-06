const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let cachedDb = null;

// this pattern comes from:
// https://docs.atlas.mongodb.com/best-practices-connecting-to-aws-lambda/

function connectToDatabase(uri) {
  console.log("=> connect to database");
  if (cachedDb) {
    console.log("=> using cached database instance");
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(uri).then(db => {
    cachedDb = db;
    return cachedDb;
  })
  .catch(err => console.log('ERROR in mongoDb.js -> connectToDatabase ==>', err))
  ;
}

module.exports = connectToDatabase;