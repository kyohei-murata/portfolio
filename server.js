// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post('/send-email', async (req, res) => {
//   console.log('Received a request to /send-email');
//   const { name, email, message } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'kyohei.murata10@gmail.com', // あなたのgmailアドレス
//       pass: 'mwhsfpunwomisxbo', // あなたのgmailパスワード
//     },
//   });

//   let mailOptions = {
//     from: 'kyohei.murata10@gmail.com',
//     to: 'kyohei.murata10@gmail.com', // あなたのgmailアドレス
//     subject: `Message from ${name}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Message sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send message');
//   }
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
