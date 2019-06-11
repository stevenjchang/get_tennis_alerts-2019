// 'use strict';
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DBNAME;
let cachedDb = null;

// this pattern comes from:
// https://docs.atlas.mongodb.com/best-practices-connecting-to-aws-lambda/

function errorResponse(callback, err) {
  console.error('there was an error in mongoInsert.js  ==>', err);
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({ error: err })
  })
}

function successResponse(callback, res) {
  console.log('successResponse sent successfully from mongoInsert.js');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res)
  });
}

function add(callback, res) {
  console.log(' ==>', );
}

function connectToDatabase (uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri)
    .then(db => {
      cachedDb = db;
      return cachedDb;
    });
}

function queryDatabase (db, dbName) {
  console.log('=> query database');

  return db.db(dbName).collection('testing')
    // .find({}).toArray()
    .insertOne({
      name: 'persons_name2',
      round: 5,
    })
    .then((data) => {
      console.log('data  ==>', data )
      return data
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}

exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('event[queryStringParameters] ==>',
    JSON.stringify(event['queryStringParameters'])
  );

  connectToDatabase(DB_URI)
    .then(db => queryDatabase(db, DB_NAME))
    .then(result => {
      console.log("=> returning result: ", result);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    })
    .catch(err => {
      console.log("=> an error occurred: ", err);
      callback(err);
    });
}
