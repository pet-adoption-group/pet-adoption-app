import nodemailer from 'nodemailer';

 const sendEmail = async (to, subject, text) => {
  try {
    // Create transporter (configure with your SMTP details or email service provider like Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or use any other email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env
        pass: process.env.EMAIL_PASS, // Your email password from .env
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
  }
};
export default sendEmail;