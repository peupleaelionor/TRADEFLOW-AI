'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const AreaChart = dynamic(
  () => import('recharts').then(mod => mod.AreaChart),
  { ssr: false }
)
const Area = dynamic(
  () => import('recharts').then(mod => mod.Area),
  { ssr: false }
)
const ResponsiveContainer = dynamic(
  () => import('recharts').then(mod => mod.ResponsiveContainer),
  { ssr: false }
)
const XAxis = dynamic(
  () => import('recharts').then(mod => mod.XAxis),
  { ssr: false }
)
const YAxis = dynamic(
  () => import('recharts').then(mod => mod.YAxis),
  { ssr: false }
)
const Tooltip = dynamic(
  () => import('recharts').then(mod => mod.Tooltip),
  { ssr: false }
)

const pnlData = [
  { date: 'Jan', pnl: 1200 }, { date: 'Feb', pnl: 1800 }, { date: 'Mar', pnl: 1400 },
  { date: 'Apr', pnl: 2200 }, { date: 'May', pnl: 1900 }, { date: 'Jun', pnl: 2800 },
  { date: 'Jul', pnl: 3200 }, { date: 'Aug', pnl: 2900 }, { date: 'Sep', pnl: 3600 },
  { date: 'Oct', pnl: 4100 }, { date: 'Nov', pnl: 3800 }, { date: 'Dec', pnl: 4500 },
]

const recentTrades = [
  { pair: 'BTC/USDT', side: 'buy', profit: 45.2, time: '2h ago' },
  { pair: 'BTC/USDT', side: 'sell', profit: -12.1, time: '4h ago' },
  { pair: 'SOL/USDT', side: 'buy', profit: 28.5, time: '6h ago' },
  { pair: 'BTC/USDT', side: 'sell', profit: 67.3, time: '8h ago' },
  { pair: 'SOL/USDT', side: 'sell', profit: -5.8, time: '10h ago' },
]

const statCards = [
  { label: 'Portfolio Balance', value: '$24,582.40', change: '+12.4%', up: true },
  { label: 'Total PnL', value: '+$4,500', change: '+8.2%', up: true },
  { label: 'Active Bots', value: '2', change: '1 paused', up: null },
  { label: 'Win Rate', value: '68%', change: '+3% this month', up: true },
]

function ChartSkeleton() {
  return (
    <div className="h-[220px] w-full rounded-lg animate-pulse" style={{ background: '#1a1a1c' }} />
  )
}

function PnlChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={pnlData}>
        <defs>
          <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={{ fill: '#9ca3af', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ background: '#1a1a1c', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} />
        <Area type="monotone" dataKey="pnl" stroke="#6366F1" fill="url(#pnlGrad)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Overview</h2>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(s => (
          <div key={s.label} className="p-5 rounded-2xl border border-gray-800" style={{ background: '#111113' }}>
            <p className="text-xs text-gray-400 mb-1">{s.label}</p>
            <p className="text-2xl font-bold mb-1">{s.value}</p>
            <p className={`text-xs ${s.up === true ? 'text-green-400' : s.up === false ? 'text-red-400' : 'text-gray-400'}`}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Chart + trades */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl border border-gray-800" style={{ background: '#111113' }}>
          <h3 className="font-semibold mb-4">PnL Over Time</h3>
          <Suspense fallback={<ChartSkeleton />}>
            <PnlChart />
          </Suspense>
        </div>

        <div className="p-6 rounded-2xl border border-gray-800" style={{ background: '#111113' }}>
          <h3 className="font-semibold mb-4">Recent Trades</h3>
          <div className="space-y-3">
            {recentTrades.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <div>
                  <p className="text-sm font-medium">{t.pair}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.side === 'buy' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>{t.side.toUpperCase()}</span>
                  <p className={`text-sm font-semibold mt-0.5 ${t.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>{t.profit >= 0 ? '+' : ''}${t.profit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
