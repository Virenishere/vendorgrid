'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DeleteButton from '@/components/DeleteButton';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import VendorListSkeleton from '@/components/VendorListSkeleton';

const getVendors = async () => {
  const res = await fetch("http://localhost:3000/api/vendors", {
    cache: "no-store",
  });

  if (!res.ok) return [];
  return res.json();
};

export default function VendorListPage() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = await getVendors();
      setVendors(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-white font-semibold border border-white/20 bg-white/10 backdrop-blur-md rounded-md transition hover:bg-white/20 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)] cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-xl font-bold mb-4 text-white">Vendors</h1>

      {loading ? (
        <VendorListSkeleton />
      ) : (
        <table className="w-full bg-white/5 text-white rounded shadow-md backdrop-blur-md border border-white/10">
          <thead className="bg-white/10">
            <tr>
              <th className="p-3 text-left">Vendor Name</th>
              <th className="p-3 text-left">Bank Account No</th>
              <th className="p-3 text-left">Bank Name</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(vendors) && vendors.length > 0 ? (
              vendors.map((vendor) => (
                <tr
                  key={vendor._id}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-3">{vendor.vendorName}</td>
                  <td className="p-3">{vendor.bankAccountNo}</td>
                  <td className="p-3">{vendor.bankName}</td>
                  <td className="p-3 space-x-4">
                    <Link
                      href={`/vendors/edit/${vendor._id}`}
                      className="text-blue-400 hover:underline"
                    >
                      Edit
                    </Link>
                    <DeleteButton id={vendor._id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="p-3 text-center text-gray-400"
                  colSpan={4}
                >
                  No vendors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
