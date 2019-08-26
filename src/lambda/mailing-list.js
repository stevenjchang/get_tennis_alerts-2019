var nodemailer = require("nodemailer");
require("dotenv").config();

export async function handler(event, context) {
  var transporter = nodemailer.createTransport({
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

  console.log(
    "event.queryStringParameters.email ==>",
    event.queryStringParameters.email
  );

  var mailOptions = {
    from: event.body.email, //TODO: not used
    to: process.env.EMAIL_ADDRESS_2,
    subject: `Subscribe by ${event.body.email}`,
    text: "Please add me to the mailing list"
  };

  try {
    const response = { success: "you are now subscribed" };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(response)
    };
  } catch (err) {
    console.log("Error inside mailinglist.js lambda handler", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
}
