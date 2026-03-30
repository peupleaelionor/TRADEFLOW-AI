const express = require('express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const userSettings = {};

router.get('/', authMiddleware, (req, res) => {
  const settings = userSettings[req.user.id] || {
    exchange: '',
    apiKey: '',
    apiSecret: '',
    maxDailyLoss: 5,
    maxPositionSize: 10,
    stopLossPercent: 2,
  };
  res.json(settings);
});

router.put('/', authMiddleware, (req, res) => {
  const { exchange, apiKey, apiSecret, maxDailyLoss, maxPositionSize, stopLossPercent } = req.body;
  userSettings[req.user.id] = { exchange, apiKey, apiSecret, maxDailyLoss, maxPositionSize, stopLossPercent };
  res.json({ message: 'Settings updated', settings: userSettings[req.user.id] });
});

module.exports = router;
