const nodemailer = require("nodemailer");
const EmailTemplate = require("email-templates").EmailTemplate;
const { _generateCustomEmailContexts } = require("./utils/_generateCustomEmailContexts");
const path = require("path");
const { mockMailingList } = require('../src/components/Email/mockMailingListData');
const { tournament } = require('../src/tennisData/wimbledonOpen0702');
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = obj => {
  return transporter.sendMail(obj);
};

const fakeSendEmail = obj => {
  // console.log('email ==>', obj)
}

const loadTemplate = (templateName, contexts) => {
  let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
  return Promise.all(contexts.map((context) => {
    return new Promise((resolve, reject) => {
      template.render(context, (err, result) => {
        if (err) reject(err);
        else resolve({
          body: result,
          context,
        });
      })
    })
  }))
};

const customEmailContexts = _generateCustomEmailContexts(mockMailingList, tournament, 1);

// console.log('customEmailContexts ==>', JSON.stringify(customEmailContexts));


loadTemplate("alerts", customEmailContexts)
  .then(results => {
    // console.log("results ==>", JSON.stringify(results, null, 4));
    return Promise.all(results.map((result) => {
      fakeSendEmail({
        to: result.context.email,
        from: process.env.EMAIL_ADDRESS,
        subject: result.body.subject,
        html: result.body.html,
        text: result.body.text,
      })
    }))
  })
  .then(() => {
    console.log("email sent ==>");
  });













// Main function
// const sendAlert = (email) => {
//   let mailOptions = _generateMailOptions(email);

//   return
//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) console.log('Error in transport.sendMail ==>', err);
//     console.log('email sent! ==>', info.response);
//   })
// };



