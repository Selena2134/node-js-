/* tache 05 */
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'selenaboutaoui@gmail.com',
    pass: 'selena@'
  }
});


const mailOptions = {
  from: 'selenaboutaoui@gmail.com',
  to: 'selenaboutaoui@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
