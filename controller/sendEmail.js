const nodemailer = require('nodemailer');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'sheldon22@ethereal.email',
      pass: 'CxRKtKcNDn1VzNeEWx', 
    },
  });

  let info = await transporter.sendMail({
    from: '"Lian Sun" <liansun0203@gmail.com>',
    to: 'shoke@example.com',
    subject: 'Testing Nodemailer',
    html: '<h2>Sending Emails with Node.js</h2>',
  });

  res.json(info);
};

module.exports = sendEmailEthereal