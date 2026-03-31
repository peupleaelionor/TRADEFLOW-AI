export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-32 bg-gray-800 rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-5 rounded-2xl border border-gray-800" style={{ background: '#111113' }}>
            <div className="h-3 w-20 bg-gray-700 rounded mb-3" />
            <div className="h-6 w-28 bg-gray-700 rounded mb-2" />
            <div className="h-3 w-16 bg-gray-700 rounded" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl border border-gray-800 h-[300px]" style={{ background: '#111113' }} />
        <div className="p-6 rounded-2xl border border-gray-800 h-[300px]" style={{ background: '#111113' }} />
      </div>
    </div>
  )
}
