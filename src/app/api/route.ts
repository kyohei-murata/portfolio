import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  console.log(email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kyohei.murata10@gmail.com',
      pass: 'mwhsfpunwomisxbo',
    },
  });

  const mailOptions: Mail.Options = {
    from: name,
    to: 'kyohei.murata10@gmail.com',
    subject: name,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
