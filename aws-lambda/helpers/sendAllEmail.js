const nodemailer_transporter = require('./nodemailer_transporter');
require("dotenv").config();

const fakeSendEmail = (obj) => {
  console.log('fake sending Email ==>');
  console.log('obj.to ******** ==>', obj.to)
}

const sendAllEmail = (emailTemplates) => {
  return Promise.all(emailTemplates.map((template) => {
    return nodemailer_transporter.sendMail({
    // fakeSendEmail({
      to: template.context.email,
      from: process.env.EMAIL_ADDRESS,
      subject: template.body.subject,
      html: template.body.html,
      text: template.body.text,
    }, (err, success) => {
      if (err) {
        console.log(`Error sending email to ${template.context.email}`, err);
        return new Error(`Error sending email to ${template.context.email}`, err)
      } else {
        console.log(`email was sent to ${template.context.email} ==>`, success);
        return `email was sent to ${template.context.email}: ${success}`;
      }
    }
    )
  }))
};

module.exports = sendAllEmail;
