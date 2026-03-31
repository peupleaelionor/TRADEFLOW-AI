'use client'
import { useState } from 'react'

const traders = [
  { id: 'trader_1', username: 'CryptoWolf', totalProfit: 45230, winRate: 72, followers: 312, monthReturn: 18.4, copying: false },
  { id: 'trader_2', username: 'AlphaTrader', totalProfit: 38100, winRate: 68, followers: 245, monthReturn: 14.2, copying: true },
  { id: 'trader_3', username: 'BullRunner', totalProfit: 29800, winRate: 65, followers: 189, monthReturn: 11.8, copying: false },
  { id: 'trader_4', username: 'QuantEdge', totalProfit: 22400, winRate: 61, followers: 134, monthReturn: 9.5, copying: false },
  { id: 'trader_5', username: 'SatoshiBot', totalProfit: 18700, winRate: 59, followers: 98, monthReturn: 7.1, copying: false },
]

export default function CopyTradingPage() {
  const [list, setList] = useState(traders)

  const toggleCopy = (id: string) => {
    setList(prev => prev.map(t => t.id === id ? { ...t, copying: !t.copying } : t))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Copy Trading</h2>
      <p className="text-sm text-gray-400">Follow top-performing traders and automatically replicate their strategies.</p>

      <div className="rounded-2xl border border-gray-800 overflow-x-auto" style={{ background: '#111113' }}>
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-800">
              {['Rank', 'Trader', 'Total Profit', 'Win Rate', '30d Return', 'Followers', 'Action'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((trader, i) => (
              <tr key={trader.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/30 transition-colors">
                <td className="px-4 py-4 text-sm font-bold text-gray-400">#{i + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: '#6366F1' }}>{trader.username[0]}</div>
                    <span className="text-sm font-medium">{trader.username}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-green-400">${trader.totalProfit.toLocaleString()}</td>
                <td className="px-4 py-4 text-sm text-gray-300">{trader.winRate}%</td>
                <td className="px-4 py-4 text-sm text-green-400">+{trader.monthReturn}%</td>
                <td className="px-4 py-4 text-sm text-gray-400">{trader.followers}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => toggleCopy(trader.id)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${trader.copying ? 'border border-indigo-500 text-indigo-400 hover:bg-indigo-900' : 'hover:opacity-90'}`}
                    style={trader.copying ? {} : { background: '#6366F1', color: '#fff' }}
                  >
                    {trader.copying ? 'Copying ✓' : 'Copy'}
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
