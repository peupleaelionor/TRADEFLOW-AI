const express = require('express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const leaderboard = [
  { userId: 'trader_1', username: 'CryptoWolf', totalProfit: 45230, winRate: 72, followers: 312 },
  { userId: 'trader_2', username: 'AlphaTrader', totalProfit: 38100, winRate: 68, followers: 245 },
  { userId: 'trader_3', username: 'BullRunner', totalProfit: 29800, winRate: 65, followers: 189 },
  { userId: 'trader_4', username: 'QuantEdge', totalProfit: 22400, winRate: 61, followers: 134 },
  { userId: 'trader_5', username: 'SatoshiBot', totalProfit: 18700, winRate: 59, followers: 98 },
];

router.get('/leaderboard', authMiddleware, (req, res) => {
  res.json(leaderboard);
});

router.post('/:userId', authMiddleware, (req, res) => {
  const trader = leaderboard.find(t => t.userId === req.params.userId);
  if (!trader) return res.status(404).json({ error: 'Trader not found' });
  res.json({ message: `Now copying ${trader.username}`, trader });
});

module.exports = router;
