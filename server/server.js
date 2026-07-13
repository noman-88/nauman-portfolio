const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

connectDB();

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
const allowedOrigins = [CLIENT_URL, 'http://localhost:5173'].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Portfolio API Running 🚀');
});

app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
