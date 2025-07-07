export default function VendorChartSkeleton() {
  return (
    <div className="rounded-xl p-6 w-full max-w-md text-white shadow-lg border border-white/10 bg-white/5 backdrop-blur-md animate-pulse space-y-4">
      <div className="h-6 bg-white/20 rounded w-1/2" />
      <div className="h-4 bg-white/10 rounded w-2/3" />
      <div className="h-32 bg-white/10 rounded w-full" />
      <div className="flex justify-between text-xs text-white/30">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-3 w-6 bg-white/10 rounded" />
        ))}
      </div>
    </div>
  );
}
