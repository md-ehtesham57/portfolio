import transporter from "../config/mail.js";
import { contactSchema } from "../validators/contactSchema.js";

// helpers
const sanitize = (str) => str.replace(/[\r\n]/g, " ");

const escapeHTML = (str) =>
  str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[m]);

export const handleContactForm = async (req, res) => {
  try {
    const parsed = contactSchema.parse(req.body);

    // Honeypot: if company field is filled, it's likely a bot
    // Always return success to avoid tipping off bots
    if (parsed.company) {
      // Silently accept - don't reveal bot detection
      return res.status(200).json({ success: true });
    }

    const { name, email, message } = parsed;

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
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

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });

  } catch (err) {
    if (err.name === "ZodError") {
      return res.status(400).json({
        error: "validation_failed",
      });
    }

    console.error("Mail Error:", err);
    return res.status(500).json({ error: "delivery_failed" });
  }
};