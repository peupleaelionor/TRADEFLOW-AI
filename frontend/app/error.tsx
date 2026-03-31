'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0B0B0C', color: '#fff' }}>
      <div className="text-center space-y-4 max-w-md px-6">
        <div className="text-5xl mb-2">⚠️</div>
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-gray-400 text-sm">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: '#6366F1', color: '#fff' }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
