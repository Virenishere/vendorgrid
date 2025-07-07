import mongoose, { Document, Schema, model, models, Model } from 'mongoose';

export interface IVendor extends Document {
  vendorName: string;
  bankAccountNo: string;
  bankName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  zipcode: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const VendorSchema: Schema<IVendor> = new Schema(
  {
    vendorName: { type: String, required: true },
    bankAccountNo: { type: String, required: true },
    bankName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  { timestamps: true }
);

const Vendor = (models.Vendor as Model<IVendor>) || model<IVendor>('Vendor', VendorSchema);
export default Vendor;
