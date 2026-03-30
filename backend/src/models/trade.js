const trades = [
  { id: 1, botId: 1, userId: 1, pair: 'BTC/USDT', side: 'buy', profit: 45.2, amount: 0.05, timestamp: new Date(Date.now() - 3600000).toISOString() },
  { id: 2, botId: 1, userId: 1, pair: 'BTC/USDT', side: 'sell', profit: -12.1, amount: 0.03, timestamp: new Date(Date.now() - 7200000).toISOString() },
  { id: 3, botId: 3, userId: 1, pair: 'SOL/USDT', side: 'buy', profit: 28.5, amount: 10, timestamp: new Date(Date.now() - 10800000).toISOString() },
  { id: 4, botId: 1, userId: 1, pair: 'BTC/USDT', side: 'sell', profit: 67.3, amount: 0.04, timestamp: new Date(Date.now() - 14400000).toISOString() },
  { id: 5, botId: 3, userId: 1, pair: 'SOL/USDT', side: 'sell', profit: -5.8, amount: 8, timestamp: new Date(Date.now() - 18000000).toISOString() },
];
let nextId = 6;

const TradeModel = {
  findByUserId(userId) {
    return trades.filter(t => t.userId === userId);
  },
  create({ botId, userId, pair, side, profit, amount }) {
    const trade = { id: nextId++, botId, userId, pair, side, profit, amount, timestamp: new Date().toISOString() };
    trades.push(trade);
    return trade;
  },
};

module.exports = TradeModel;
