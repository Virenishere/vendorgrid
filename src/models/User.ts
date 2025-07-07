import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password?: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserModel extends Model<IUser> {}

const UserSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = (mongoose.models.User as IUserModel) || mongoose.model<IUser, IUserModel>('User', UserSchema);

export default User;
