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
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = obj => {
  return transporter.sendMail(obj);
};

const fakeSendEmail = obj => {
  console.log('email ==>', obj)
}

// let users = [
//   {
//     name: "name 1",
//     email: process.env.EMAIL_ADDRESS_2,
//     selectedPlayers: [
//       {
//         player1: "Federer"
//       },
//       {
//         player1: "Nedal"
//       },
//       {
//         player1: "Joker"
//       }
//     ]
//   },
//   {
//     name: "name 2",
//     email: process.env.EMAIL_ADDRESS_2,
//     selectedPlayers: [
//       {
//         player1: "Federer 2"
//       }
//     ]
//   },
//   {
//     name: "name 3",
//     email: process.env.EMAIL_ADDRESS_2,
//     selectedPlayers: [
//       {
//         player1: "Federer 3"
//       }
//     ]
//   }
// ];

const loadTemplate = (templateName, contexts) => {
  let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
  return Promise.all(contexts.map((context) => {
    return new Promise((resolve, reject) => {
      template.render(context, (err, result) => {
        if (err) reject(err);
        else resolve({
          email: result,
          context,
        });
      })
    })
  }))
};

const customEmailContexts = _generateCustomEmailContexts(mockMailingList, tournament, 1);


loadTemplate("alerts", customEmailContexts)
  .then(results => {
    console.log("results ==>", JSON.stringify(results, null, 4));
    return Promise.all(results.map((result) => {
      fakeSendEmail({
        // to: result.context.email,
        // from: 'me',
        // subject: result.email.subject,
        html: result.email.html,
        // text: result.email.text,
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



