'use client';

import { useState, useEffect } from 'react';
import VendorForm from '@/components/VendorForm';
import VendorEditSkeleton from '@/components/VendorEditSkeleton';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

export default function NewVendorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600); 
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch('/api/vendors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Vendor created successfully");
        router.push('/vendors');
        router.refresh();
      } else {
        toast.error("Failed to create vendor");
      }
    } catch (error) {
      console.error("Create error:", error);
      toast.error("Something went wrong while creating");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-white font-semibold border border-white/20 bg-white/10 backdrop-blur-md rounded-md transition hover:bg-white/20 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      {loading ? (
        <VendorEditSkeleton />
      ) : (
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Create Vendor</h2>
          <VendorForm onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
}
