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
  const loss = Number(maxDailyLoss);
  const position = Number(maxPositionSize);
  const stopLoss = Number(stopLossPercent);
  if (
    (maxDailyLoss !== undefined && (isNaN(loss) || loss < 0 || loss > 100)) ||
    (maxPositionSize !== undefined && (isNaN(position) || position < 0 || position > 100)) ||
    (stopLossPercent !== undefined && (isNaN(stopLoss) || stopLoss < 0 || stopLoss > 100))
  ) {
    return res.status(400).json({ error: 'Risk values must be numbers between 0 and 100' });
  }
  userSettings[req.user.id] = { exchange, apiKey, apiSecret, maxDailyLoss: loss, maxPositionSize: position, stopLossPercent: stopLoss };
  res.json({ message: 'Settings updated', settings: userSettings[req.user.id] });
});

module.exports = router;
