import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0B0B0C', color: '#fff' }}>
      <div className="text-center space-y-4 max-w-md px-6">
        <div className="text-6xl font-black" style={{ color: '#6366F1' }}>404</div>
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="text-gray-400 text-sm">The page you are looking for does not exist or has been moved.</p>
        <div className="flex gap-3 justify-center pt-2">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: '#6366F1', color: '#fff' }}
          >
            Go Home
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold border border-gray-700 hover:border-indigo-500 transition-all"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
