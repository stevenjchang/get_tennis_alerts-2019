const _getUserSubscriptionList = require('./helpers/_getUserSubscriptionList');
const _getTournamentData = require('./helpers/_getTournamentData');
const _generateEmailContexts = require('./helpers/_generateEmailContexts');
const _generateEmailTemplates = require('./helpers/_generateEmailTemplates');

const emailDailyScheduleToSubscribers = async () => {
  let userSubscriptionList = await _getUserSubscriptionList();
  let tournamentData = await _getTournamentData();
  let emailContexts = _generateEmailContexts(userSubscriptionList, tournamentData);
  let emailTemplates = await _generateEmailTemplates('alerts', emailContexts);

  console.log('emailTemplates ==>', emailTemplates);
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