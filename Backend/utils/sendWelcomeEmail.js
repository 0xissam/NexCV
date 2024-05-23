const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const sendWelcomeEmail = async (email, name) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'outlook', // Use your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password
      }
    });

    // Read the HTML template file
    const templatePath = path.join(__dirname, 'welcome.html');
    const template = fs.readFileSync(templatePath, 'utf-8');

    // Replace placeholders with user data
    const html = template.replace('{{ name }}', name);

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your email address
      to: email,
      subject: 'Welcome to NEXCV!',
      html: html
    });

    console.log('Custom welcome email sent successfully');
  } catch (error) {
    console.error('Error sending custom welcome email:', error);
  }
};

module.exports = sendWelcomeEmail;
