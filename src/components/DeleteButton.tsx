'use client';
import { toast } from "sonner";


export default function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this vendor?");
    if (!confirmDelete) return;

    const res = await fetch(`/api/vendors/${id}`, {
      method: 'DELETE',
    });

     if (res.ok) {
      toast.success("Vendor deleted successfully");
      window.location.reload();
    } else {
      toast.error("Failed to delete vendor");
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:underline">
      Delete
    </button>
  );
}
