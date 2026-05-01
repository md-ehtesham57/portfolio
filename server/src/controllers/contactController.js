const transporter = require('../config/mail');

const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'missing_fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'invalid_email' });
  }

  const sanitize = (str) => str.replace(/[\r\n]/g, " ");
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const escapeHTML = (str) => str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]);

  // ... inside handleContactForm ...
  const safeMessage = escapeHTML(message);

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: safeEmail,
    to: process.env.EMAIL_USER,
    subject: `[PORTFOLIO_MSG] from ${safeName}`,
    text: `From: ${safeName} (${safeEmail})\n\nMessage:\n${message}`,
    html: `
    <div style="font-family: monospace; border: 1px solid #10b981; padding: 20px; border-radius: 10px;">
      <h3 style="color: #10b981;">> NEW_MESSAGE_RECEIVED</h3>
      <p><strong>NAME:</strong> ${safeName}</p>
      <p><strong>EMAIL:</strong> ${safeEmail}</p>
      <hr style="border: 0.5px solid #333;" />
      <p><strong>MESSAGE:</strong></p>
      <p style="white-space: pre-wrap;">${safeMessage}</p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail Error:', error);
    return res.status(500).json({ error: 'delivery_failed' });
  }
};

module.exports = { handleContactForm };