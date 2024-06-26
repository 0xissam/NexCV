const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Create transporter using your email service
const transporter = nodemailer.createTransport({
  service: 'outlook', // Use your email service provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password
  }
});

// Route to handle contact form submission
router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Authenticated email address
    replyTo: email, // The email of the user who filled the contact form
    to: process.env.EMAIL_USER, // Your email address where you want to receive the contact form submissions
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new contact form submission from ${name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
});

module.exports = router;
