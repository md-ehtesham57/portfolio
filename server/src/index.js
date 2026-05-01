const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Allows your frontend (client) to talk to this backend
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[SYSTEM]: Server running on port ${PORT}`);
});