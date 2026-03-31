export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0B0B0C' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-gray-700 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
