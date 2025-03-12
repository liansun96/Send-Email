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

  // let msg = await transporter.sendMail({
  //   from: '"Toe Tet Aung" <toetetaung0203@gmail.com>',
  //   to: 'testingetherealmail@example.com',
  //   subject: 'Testing Ethereal Mail With Nodemailer',
  //   html: '<h2>Yoooo this is testing ethereal mail with nodemailer</h2>',
  // });

  res.json(msg);


};

module.exports = sendEmailEthereal