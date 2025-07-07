'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import EditVendorWrapper from '@/components/EditVendorWrapper';
import VendorEditSkeleton from '@/components/VendorEditSkeleton';

export default function EditVendorPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [vendor, setVendor] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await fetch(`/api/vendors/${id}`, {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        setVendor(data);
      } catch (err) {
        console.error('EditVendorPage error:', err);
        setError(true);
      }
    };

    if (id) fetchVendor();
  }, [id]);

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-10">
        <Card className="bg-white/5 border border-red-400/20 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-500">Error</CardTitle>
            <CardDescription className="text-red-400">
              Failed to load vendor data.
            </CardDescription>
          </CardHeader>
          <CardContent>Please try again later.</CardContent>
        </Card>
      </div>
    );
  }

  if (!vendor) {
    return <VendorEditSkeleton />;
  }

  return (
    <div className="max-w-xl bg-gray-900 mx-auto mt-10">
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-white font-semibold border border-white/20 bg-white/10 backdrop-blur-md rounded-md transition hover:bg-white/20 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      <Card className="bg-white/5 border border-white/10 backdrop-blur-md text-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Edit Vendor</CardTitle>
          <CardDescription className="text-gray-300">
            Modify and save vendor details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditVendorWrapper vendor={vendor} id={id} />
        </CardContent>
      </Card>
    </div>
  );
}
