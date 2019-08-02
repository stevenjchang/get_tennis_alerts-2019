const mongoDbInteractor = require('../interactor/mongoDB');
require("dotenv").config();

const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DBNAME;

/**

 */
const _getUserSubscriptionList = async () => {
  try {
    let mongoDb = await mongoDbInteractor(DB_URI)
    return mongoDb
      .db(DB_NAME)
      .collection("mailingList")
      .find()
      .toArray()
  } catch (err) {
      console.log("ERROR in _getUserSubscriptionList:", err);
  }
}

module.exports = _getUserSubscriptionList;
