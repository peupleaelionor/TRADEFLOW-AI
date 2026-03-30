'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: '📊' },
  { href: '/dashboard/bots', label: 'Bots', icon: '🤖' },
  { href: '/dashboard/copy-trading', label: 'Copy Trading', icon: '🔗' },
  { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#0B0B0C', color: '#fff' }}>
      {/* Sidebar */}
      <aside className="w-56 shrink-0 flex flex-col border-r border-gray-800 py-6" style={{ background: '#0D0D0F' }}>
        <div className="px-6 mb-8">
          <span className="text-lg font-bold" style={{ color: '#6366F1' }}>TradeFlow AI</span>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
              style={pathname === item.href ? { background: 'rgba(99,102,241,0.15)', color: '#6366F1' } : {}}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 pt-4 border-t border-gray-800">
          <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors">← Back to site</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800" style={{ background: '#0D0D0F' }}>
          <h1 className="text-sm font-medium text-gray-400">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-400">demo@tradeflow.ai</span>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
