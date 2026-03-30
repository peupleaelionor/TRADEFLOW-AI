const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { apiLimiter } = require('./middleware/rateLimiter');

dotenv.config();

// Provide a default development secret if JWT_SECRET is not set
if (!process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    console.error('FATAL: JWT_SECRET environment variable is required in production');
    process.exit(1);
  }
  process.env.JWT_SECRET = 'tradeflow-dev-secret-change-in-production';
}

const authRoutes = require('./routes/auth');
const botsRoutes = require('./routes/bots');
const tradesRoutes = require('./routes/trades');
const copyRoutes = require('./routes/copy');
const settingsRoutes = require('./routes/settings');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/api/', apiLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/bots', botsRoutes);
app.use('/api/trades', tradesRoutes);
app.use('/api/copy', copyRoutes);
app.use('/api/settings', settingsRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
