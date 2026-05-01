const transporter = require('../config/mail');

const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (payload.err)' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio: Message from ${name}`,
    text: `From: ${name} (${email})\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'payload_delivered' });
  } catch (error) {
    console.error('Mail Error:', error);
    res.status(500).json({ success: false, error: 'delivery_failed' });
  }
};

module.exports = { handleContactForm };