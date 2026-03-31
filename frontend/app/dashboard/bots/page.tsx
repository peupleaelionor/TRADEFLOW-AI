'use client'
import { useState } from 'react'

const initialBots = [
  { id: 1, name: 'BTC Scalper', strategy: 'Scalping', pair: 'BTC/USDT', status: 'running', profit: 1243.5, trades: 284 },
  { id: 2, name: 'ETH Grid Bot', strategy: 'Grid', pair: 'ETH/USDT', status: 'stopped', profit: 582.2, trades: 147 },
  { id: 3, name: 'SOL Trend', strategy: 'Trend Following', pair: 'SOL/USDT', status: 'running', profit: 324.8, trades: 93 },
  { id: 4, name: 'BNB Arbitrage', strategy: 'Arbitrage', pair: 'BNB/USDT', status: 'stopped', profit: -45.2, trades: 32 },
]

export default function BotsPage() {
  const [bots, setBots] = useState(initialBots)

  const toggle = (id: number) => {
    setBots(prev => prev.map(b => b.id === id ? { ...b, status: b.status === 'running' ? 'stopped' : 'running' } : b))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Trading Bots</h2>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90" style={{ background: '#6366F1', color: '#fff' }}>+ New Bot</button>
      </div>

      <div className="rounded-2xl border border-gray-800 overflow-x-auto" style={{ background: '#111113' }}>
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-gray-800">
              {['Bot', 'Strategy', 'Pair', 'Status', 'PnL', 'Trades', 'Action'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bots.map(bot => (
              <tr key={bot.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/30 transition-colors">
                <td className="px-4 py-4 font-medium text-sm">{bot.name}</td>
                <td className="px-4 py-4 text-sm text-gray-400">{bot.strategy}</td>
                <td className="px-4 py-4 text-sm text-gray-400">{bot.pair}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${bot.status === 'running' ? 'bg-green-900 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
                    {bot.status === 'running' ? '● Running' : '○ Stopped'}
                  </span>
                </td>
                <td className={`px-4 py-4 text-sm font-semibold ${bot.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {bot.profit >= 0 ? '+' : ''}${bot.profit.toFixed(2)}
                </td>
                <td className="px-4 py-4 text-sm text-gray-400">{bot.trades}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => toggle(bot.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${bot.status === 'running' ? 'bg-red-900 text-red-400 hover:bg-red-800' : 'bg-green-900 text-green-400 hover:bg-green-800'}`}
                  >
                    {bot.status === 'running' ? 'Stop' : 'Start'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
