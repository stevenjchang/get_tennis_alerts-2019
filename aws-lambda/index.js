// const transporter
// const mongoDbMailingList
const _getUserSubscriptionList = require('./helpers/_getUserSubscriptionList')



const emailDailyScheduleToSubscribers = async () => {
// _getUserSubscriptionList + _getTournamentData(name)
// _generateCustomEmailContexts
// generateTemplates
// sendEmail
let result =
await _getUserSubscriptionList();

console.log('result ==>', result);
}

emailDailyScheduleToSubscribers()

exports.handler = async (event, context) => {

  try {
    const emailSuccessfullySentMessage = await emailDailyScheduleToSubscribers();


    const response = {
      statusCode: 200,
      body: JSON.stringify(emailSuccessfullySentMessage)
    };
    return response;
  } catch (err) {

  }


};

/*
handler
  input:  ???
  output:  confirmation message of all the users

  calls emailDailyScheduleToSubscribers

*/