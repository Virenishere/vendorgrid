'use client';

import VendorForm from './VendorForm';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

export default function EditVendorWrapper({ vendor, id }) {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch(`/api/vendors/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Vendor updated successfully");
        router.push("/vendors"); 
        router.refresh(); 
      } else {
        toast.error("Failed to update vendor");
      }
    } catch (error) {
      console.error("Edit error:", error);
      toast.error("Something went wrong while updating");
    }
  };

  return <VendorForm initialData={vendor} onSubmit={handleSubmit} />;
}
