const nodemailer = require("nodemailer");
require("dotenv").config();

const nodemailer_transporter = nodemailer.createTransport({
  service: process.env.EMAIL_DOMAIN,
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

module.exports = nodemailer_transporter;
