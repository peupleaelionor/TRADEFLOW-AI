const express = require('express');
const authMiddleware = require('../middleware/auth');
const TradeModel = require('../models/trade');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  const trades = TradeModel.findByUserId(req.user.id);
  res.json(trades);
});

module.exports = router;
