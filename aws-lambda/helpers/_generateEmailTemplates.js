const EmailTemplate = require("email-templates").EmailTemplate;
const path = require("path");

const _generateEmailTemplates = (templateName, contexts) => {
  let template = new EmailTemplate(path.join(__dirname, '../templates', templateName));
  return Promise.all(contexts.map((context) => {
    return new Promise((resolve, reject) => {
      template.render(context, (err, result) => {
        if (err) reject(err);
        else resolve({
          body: result,
          context,
        });
      });
    });
  }));
};

module.exports = _generateEmailTemplates;
