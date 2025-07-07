import { Skeleton } from "@/components/ui/skeleton";

export default function VendorEditSkeleton() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg p-6">
        <Skeleton className="h-6 w-1/3 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-3/4 mb-6" />
        <Skeleton className="h-10 w-1/3" />
      </div>
    </div>
  );
}
