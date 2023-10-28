const nodemailer = require('nodemailer');

// Function to generate a random six-digit verification code
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send the verification email
function sendEmail() {
  // Create a Nodemailer transporter using Gmail's SMTP settings
  const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'emirak3456',
          pass: 'Agg123456' // Use your Gmail password or an application-specific password if you have 2-factor authentication enabled
      }
  });

  // Generate a random verification code
  const verificationCode = generateVerificationCode();

  // Define the email data
  const mailOptions = {
      from: 'emirak3456',
      to: 'recipient@example.com', // Replace with the recipient's email address
      subject: 'Email Verification',
      text: `Your verification code is: ${verificationCode}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error sending email: ' + error);
      } else {
          console.log('Email sent: ' + info.response);
      }
  });
}

// Export the sendEmail function
module.exports = {
  sendEmail
};
