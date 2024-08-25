// pages/api/contact.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "coutinhosean1@gmail.com",
        pass: "hlhj jzcq vfhn kqrw",
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'coutinhosean1.gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
