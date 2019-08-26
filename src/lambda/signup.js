const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DBNAME;
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
  });
}

function addEmailToMailingList(db, dbName, payload) {
  return db
    .db(dbName)
    .collection("mailingList")
    .insertOne({
      selectedPlayers: payload.selectedPlayers,
      email: payload.email,
      checkboxA: payload.checkboxA,
      checkboxB: payload.checkboxB,
      timeZoneLocationString: payload.timeZoneLocationString,
      timeZoneOffset: payload.timeZoneOffset,
      created_at: new Date()
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log("=> an error occurred: ", err);
      return { statusCode: 500, body: "error" };
    });
}

/* how to get http request payload:

get requests - 
  axios.get(url, {params: {}})
  received as event.queryStringParameters
post requests -
  axios.post(url, {})
  received as event.body

  **NOTE**
  event.body is stringify'ed, and needs to be parsed!
*/

exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log(
    "=> queryStringParameters: ",
    JSON.stringify(event.queryStringParameters)
  );
  console.log("=> event.body: ", event.body);

  // const payload = JSON.parse(event.body);

  // connectToDatabase(DB_URI)
  //   .then(db => addEmailToMailingList(db, DB_NAME, payload))
  //   .then(result => {
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify(result)
  //     });
  //   })
  //   .catch(err => {
  //     console.log("=> an error occurred: ", err);
  //     callback(err);
  //   });

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg: 'hello'})
      });
};
