const express = require('express');
const authMiddleware = require('../middleware/auth');
const BotModel = require('../models/bot');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  const bots = BotModel.findByUserId(req.user.id);
  res.json(bots);
});

router.post('/', authMiddleware, (req, res) => {
  const { name, strategy, pair } = req.body;
  if (!name || !strategy || !pair) return res.status(400).json({ error: 'name, strategy, and pair are required' });
  const bot = BotModel.create({ userId: req.user.id, name, strategy, pair });
  res.status(201).json(bot);
});

router.post('/:id/start', authMiddleware, (req, res) => {
  const bot = BotModel.findById(Number(req.params.id));
  if (!bot || bot.userId !== req.user.id) return res.status(404).json({ error: 'Bot not found' });
  const updated = BotModel.updateStatus(bot.id, 'running');
  res.json(updated);
});

router.post('/:id/stop', authMiddleware, (req, res) => {
  const bot = BotModel.findById(Number(req.params.id));
  if (!bot || bot.userId !== req.user.id) return res.status(404).json({ error: 'Bot not found' });
  const updated = BotModel.updateStatus(bot.id, 'stopped');
  res.json(updated);
});

module.exports = router;
