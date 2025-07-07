export default function VendorListSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 animate-pulse space-y-4">
      <div className="h-6 bg-white/20 rounded w-1/4" />
      {[...Array(4)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <div className="h-4 bg-white/10 rounded col-span-1" />
          <div className="h-4 bg-white/10 rounded col-span-1" />
          <div className="h-4 bg-white/10 rounded col-span-1" />
          <div className="h-4 bg-white/10 rounded col-span-1" />
        </div>
      ))}
    </div>
  );
}
