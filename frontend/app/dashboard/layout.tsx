'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: '📊' },
  { href: '/dashboard/bots', label: 'Bots', icon: '🤖' },
  { href: '/dashboard/copy-trading', label: 'Copy Trading', icon: '🔗' },
  { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#0B0B0C', color: '#fff' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 w-56 shrink-0 flex flex-col border-r border-gray-800 py-6 h-full transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{ background: '#0D0D0F' }}
      >
        <div className="px-6 mb-8 flex items-center justify-between">
          <span className="text-lg font-bold" style={{ color: '#6366F1' }}>TradeFlow AI</span>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href}
              onClick={() => setSidebarOpen(false)}
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
        <header className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-800" style={{ background: '#0D0D0F' }}>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-gray-400 hover:text-white p-1"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              </svg>
            </button>
            <h1 className="text-sm font-medium text-gray-400">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-400 hidden sm:inline">demo@tradeflow.ai</span>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
