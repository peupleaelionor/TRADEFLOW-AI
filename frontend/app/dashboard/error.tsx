'use client'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4 max-w-md px-6">
        <div className="text-4xl mb-2">⚠️</div>
        <h2 className="text-xl font-bold">Dashboard Error</h2>
        <p className="text-gray-400 text-sm">
          {error.message || 'Failed to load dashboard data. Please try again.'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: '#6366F1', color: '#fff' }}
        >
          Retry
        </button>
      </div>
    </div>
  )
}
