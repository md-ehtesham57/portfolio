
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors()); // Allows your frontend (client) to talk to this backend
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Check User:", process.env.EMAIL_USER);
  console.log("Check Pass Length:", process.env.EMAIL_PASS?.length);
  console.log(`[SYSTEM]: Server running on port ${PORT}`);
});