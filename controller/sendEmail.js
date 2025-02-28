const nodemailer = require('nodemailer');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: '	turner.dietrich@ethereal.email',
      pass: 'B2QTCDBfGmy7Fm6DDs', 
    },
  });

  let info = await transporter.sendMail({
    from: '"Toe Tet Aung" <toetetaung0203@gmail.com>',
    to: 'testingetherealmail@example.com',
    subject: 'Testing Ethereal Mail With Nodemailer',
    html: '<h1>Yoooo this is testing ethereal mail with nodemailer...</h1>',
  });

  res.json(info);
};

module.exports = sendEmailEthereal