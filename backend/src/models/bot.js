const bots = [
  { id: 1, userId: 1, name: 'BTC Scalper', strategy: 'scalping', status: 'running', pair: 'BTC/USDT', profit: 1243.5, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 2, userId: 1, name: 'ETH Grid Bot', strategy: 'grid', status: 'stopped', pair: 'ETH/USDT', profit: 582.2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 3, userId: 1, name: 'SOL Trend', strategy: 'trend_following', status: 'running', pair: 'SOL/USDT', profit: 324.8, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];
let nextId = 4;

const BotModel = {
  findByUserId(userId) {
    return bots.filter(b => b.userId === userId);
  },
  findById(id) {
    return bots.find(b => b.id === id) || null;
  },
  create({ userId, name, strategy, pair }) {
    const bot = { id: nextId++, userId, name, strategy, pair, status: 'stopped', profit: 0, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    bots.push(bot);
    return bot;
  },
  updateStatus(id, status) {
    const bot = bots.find(b => b.id === id);
    if (bot) { bot.status = status; bot.updatedAt = new Date().toISOString(); }
    return bot;
  },
};

module.exports = BotModel;
