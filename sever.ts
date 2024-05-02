// import nodemailer from 'nodemailer';
// import express from 'express';
// import { Request, Response } from 'express';
// const app = express();

// app.use(express.json());

// // Gmail用のトランスポーターの作成
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kyohei.murata10@gmail.com',
//     pass: 'mwhsfpunwomisxbo',
//   },
// });

// // メール送信のルートを作成
// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   // メールの設定
//   const mailOptions = {
//     from: 'kyohei.murata10@gmail.com', // sender address
//     to: 'kyohei.murata10@gmail.com', // list of receivers
//     subject: `Message from ${name}`, // Subject line
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}
//     `, // plain text body
//   };

//   // メールの送信
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending message.');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Message sent successfully!');
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
