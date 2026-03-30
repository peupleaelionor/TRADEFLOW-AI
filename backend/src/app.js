const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { apiLimiter } = require('./middleware/rateLimiter');
const { buildApiRouter } = require('./routes');

dotenv.config();

// Provide a default development secret if JWT_SECRET is not set
if (!process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    console.error('FATAL: JWT_SECRET environment variable is required in production');
    process.exit(1);
  }
  process.env.JWT_SECRET = 'tradeflow-dev-secret-change-in-production';
}

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/api', apiLimiter, buildApiRouter());

app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));
app.get('/', (req, res) => {
  res.json({
    name: 'TradeFlow API',
    status: 'ok',
    docs: '/api',
    health: '/health',
  });
});

app.use('/api', (req, res) => {
  res.status(404).json({
    error: 'API route not found',
    path: req.originalUrl,
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
