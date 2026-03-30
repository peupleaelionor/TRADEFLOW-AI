import Link from 'next/link'

const features = [
  { icon: '🚀', title: 'One-click bot deployment', desc: 'Deploy sophisticated trading strategies instantly without any coding knowledge.' },
  { icon: '📊', title: 'Real-time analytics', desc: 'Monitor your portfolio performance with live charts and detailed trade history.' },
  { icon: '🔗', title: 'Copy trading', desc: 'Follow top-performing traders and automatically replicate their strategies.' },
  { icon: '🛡️', title: 'Risk management', desc: 'Set stop-losses, position limits and daily drawdown caps to protect your capital.' },
]

const steps = [
  { step: '01', title: 'Connect your account', desc: 'Securely link your exchange via API keys. We support Binance, Coinbase, Bybit and more.' },
  { step: '02', title: 'Launch a bot', desc: 'Choose from pre-built strategies or customise your own. Deploy in seconds.' },
  { step: '03', title: 'Monitor & scale', desc: 'Track performance in real-time and scale winning bots effortlessly.' },
]

const metrics = [
  { value: '10,000+', label: 'Active users' },
  { value: '50M+', label: 'Trades executed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '$2B+', label: 'Volume traded' },
]

const plans = [
  { name: 'Free', price: '$0', period: '/mo', features: ['1 active bot', 'Basic analytics', 'Email support', '5 trades/day'], cta: 'Get started', highlight: false },
  { name: 'Pro', price: '$49', period: '/mo', features: ['10 active bots', 'Advanced analytics', 'Copy trading', 'Priority support', 'Unlimited trades'], cta: 'Start free trial', highlight: true },
  { name: 'Advanced', price: '$149', period: '/mo', features: ['Unlimited bots', 'Custom strategies', 'API access', 'Dedicated support', 'White-label option'], cta: 'Contact sales', highlight: false },
]

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0B0B0C', color: '#fff' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <span className="text-xl font-bold" style={{ color: '#6366F1' }}>TradeFlow AI</span>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Dashboard</Link>
          <a href="#pricing" className="px-4 py-2 text-sm rounded-lg font-medium transition-all" style={{ background: '#6366F1', color: '#fff' }}>Start Free</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: '#6366F1', color: '#6366F1', background: 'rgba(99,102,241,0.1)' }}>
          ✦ Now supporting 15+ exchanges
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Automated Trading<br />
          <span style={{ color: '#6366F1' }}>Infrastructure</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Launch, manage and scale trading bots effortlessly. No code required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90" style={{ background: '#6366F1', color: '#fff' }}>
            Start Free
          </a>
          <a href="#how-it-works" className="px-8 py-4 rounded-xl font-semibold text-base border border-gray-700 text-gray-300 hover:border-gray-500 transition-all">
            See how it works
          </a>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map(m => (
            <div key={m.label}>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: '#6366F1' }}>{m.value}</div>
              <div className="text-sm text-gray-400 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything you need to trade smarter</h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Powerful tools built for both beginners and professional traders.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-all" style={{ background: '#111113' }}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6" style={{ background: '#0D0D0F' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Up and running in minutes</h2>
          <p className="text-gray-400 text-center mb-16">Three simple steps to automate your trading.</p>
          <div className="space-y-8">
            {steps.map(s => (
              <div key={s.step} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-800" style={{ background: '#111113' }}>
                <span className="text-4xl font-black shrink-0" style={{ color: '#6366F1' }}>{s.step}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-400 text-center mb-16">Start for free. Scale as you grow.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className={`p-8 rounded-2xl border flex flex-col ${p.highlight ? 'border-indigo-500' : 'border-gray-800'}`} style={{ background: p.highlight ? 'rgba(99,102,241,0.08)' : '#111113' }}>
              {p.highlight && <span className="text-xs font-semibold mb-4 inline-block px-3 py-1 rounded-full" style={{ background: '#6366F1', color: '#fff' }}>Most popular</span>}
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-400 mb-1">{p.period}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span style={{ color: '#6366F1' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${p.highlight ? 'hover:opacity-90' : 'border border-gray-700 hover:border-indigo-500'}`} style={p.highlight ? { background: '#6366F1', color: '#fff' } : { color: '#fff' }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-lg font-bold" style={{ color: '#6366F1' }}>TradeFlow AI</span>
          <p className="text-sm text-gray-500">© 2024 TradeFlow AI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
