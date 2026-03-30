'use client'
import { useState } from 'react'

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    exchange: 'binance',
    apiKey: '',
    apiSecret: '',
    maxDailyLoss: '5',
    maxPositionSize: '10',
    stopLossPercent: '2',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }))

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* API Keys */}
        <div className="p-6 rounded-2xl border border-gray-800 space-y-4" style={{ background: '#111113' }}>
          <h3 className="font-semibold text-base">Exchange API Keys</h3>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Exchange</label>
            <select value={form.exchange} onChange={e => set('exchange', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-700 focus:border-indigo-500 focus:outline-none"
              style={{ background: '#1a1a1c', color: '#fff' }}>
              <option value="binance">Binance</option>
              <option value="coinbase">Coinbase</option>
              <option value="bybit">Bybit</option>
              <option value="kraken">Kraken</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">API Key</label>
            <input type="text" placeholder="Enter your API key" value={form.apiKey} onChange={e => set('apiKey', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-700 focus:border-indigo-500 focus:outline-none"
              style={{ background: '#1a1a1c', color: '#fff' }} />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">API Secret</label>
            <input type="password" placeholder="Enter your API secret" value={form.apiSecret} onChange={e => set('apiSecret', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-700 focus:border-indigo-500 focus:outline-none"
              style={{ background: '#1a1a1c', color: '#fff' }} />
          </div>
        </div>

        {/* Risk Settings */}
        <div className="p-6 rounded-2xl border border-gray-800 space-y-4" style={{ background: '#111113' }}>
          <h3 className="font-semibold text-base">Risk Management</h3>
          {[
            { key: 'maxDailyLoss', label: 'Max Daily Loss (%)', placeholder: '5' },
            { key: 'maxPositionSize', label: 'Max Position Size (%)', placeholder: '10' },
            { key: 'stopLossPercent', label: 'Stop Loss (%)', placeholder: '2' },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-xs text-gray-400 mb-1.5">{f.label}</label>
              <input type="number" placeholder={f.placeholder} value={form[f.key as keyof typeof form]} onChange={e => set(f.key, e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-700 focus:border-indigo-500 focus:outline-none"
                style={{ background: '#1a1a1c', color: '#fff' }} min="0" max="100" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90" style={{ background: '#6366F1', color: '#fff' }}>
            Save Settings
          </button>
          {saved && <span className="text-sm text-green-400">✓ Settings saved</span>}
        </div>
      </form>
    </div>
  )
}
