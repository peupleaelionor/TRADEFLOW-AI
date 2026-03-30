const express = require('express');

const authRoutes = require('./auth');
const botsRoutes = require('./bots');
const tradesRoutes = require('./trades');
const copyRoutes = require('./copy');
const settingsRoutes = require('./settings');

function buildApiRouter() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.json({
      name: 'TradeFlow API',
      version: 'v1',
      routes: {
        auth: '/api/v1/auth',
        bots: '/api/v1/bots',
        trades: '/api/v1/trades',
        copy: '/api/v1/copy',
        settings: '/api/v1/settings',
      },
      legacyRoutes: {
        auth: '/api/auth',
        bots: '/api/bots',
        trades: '/api/trades',
        copy: '/api/copy',
        settings: '/api/settings',
      },
    });
  });

  const v1Router = express.Router();
  v1Router.use('/auth', authRoutes);
  v1Router.use('/bots', botsRoutes);
  v1Router.use('/trades', tradesRoutes);
  v1Router.use('/copy', copyRoutes);
  v1Router.use('/settings', settingsRoutes);

  router.use('/v1', v1Router);

  // Backward-compatible aliases
  router.use('/auth', authRoutes);
  router.use('/bots', botsRoutes);
  router.use('/trades', tradesRoutes);
  router.use('/copy', copyRoutes);
  router.use('/settings', settingsRoutes);

  return router;
}

module.exports = { buildApiRouter };
