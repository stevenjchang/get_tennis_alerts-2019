var nodemailer = require("nodemailer");
require("dotenv").config();

const _generateTransporter = () => {
  return nodemailer.createTransport({
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
};

const _generateMailOptions = (userEmail) => {
  return {
    from: process.env.EMAIL_ADDRESS,
    to: userEmail,
    subject: `Tennis Alerts - Wimbledon round 1 - 07/01`,
    text: "Here are your daily alerts"
  };
};

// Main function
const sendAlert = (email) => {
  let transporter = _generateTransporter();
  let mailOptions = _generateMailOptions(email);

  // return

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log('Error in transport.sendMail ==>', err);
    console.log('email sent! ==>', info.response);
  })
};
