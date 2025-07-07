'use client';

import { useState } from 'react';

const requiredFields = ['vendorName', 'bankAccountNo', 'bankName'];

const fieldLabels: Record<string, string> = {
  vendorName: "Vendor Name",
  bankAccountNo: "Bank Account Number",
  bankName: "Bank Name",
  addressLine1: "Address Line 1",
  addressLine2: "Address Line 2",
  city: "City",
  country: "Country",
  zipcode: "Zip Code",
};

type VendorFormData = {
  vendorName: string;
  bankAccountNo: string;
  bankName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  zipcode: string;
};

type Props = {
  initialData?: Partial<VendorFormData>;
  onSubmit: (data: VendorFormData) => Promise<void>;
};

export default function VendorForm({ initialData = {}, onSubmit }: Props) {
  const [formData, setFormData] = useState<VendorFormData>({
    vendorName: initialData.vendorName || '',
    bankAccountNo: initialData.bankAccountNo || '',
    bankName: initialData.bankName || '',
    addressLine1: initialData.addressLine1 || '',
    addressLine2: initialData.addressLine2 || '',
    city: initialData.city || '',
    country: initialData.country || '',
    zipcode: initialData.zipcode || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white"
    >
      {Object.entries(formData).map(([key, value]) => (
        <input
          key={key}
          name={key}
          placeholder={fieldLabels[key]}
          value={value}
          onChange={handleChange}
          required={requiredFields.includes(key)}
          className="bg-white/10 border border-white/20 backdrop-blur-md text-white placeholder-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
