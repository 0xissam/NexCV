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

// Function to send a welcome email
const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to NEXCV!',
    text: `Hi ${name},\n\nWelcome to NEXCV! We are excited to have you on board.\n\nBest regards,\nThe NEXCV Team`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendWelcomeEmail;
