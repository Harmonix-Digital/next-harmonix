import mongoose, { Schema, Document } from "mongoose";

export interface IToken extends Document {
  locationId: string; // GHL sub-account/agency ID
  userId: string; // Harmonix user ID
  accessToken: string;
  refreshToken: string;
  clientId: string;
  clientSecret: string;
  createdAt: Date;
  updatedAt: Date;
}

const TokenSchema = new Schema<IToken>(
  {
    locationId: { type: String, required: true, unique: true },
    userId: { type: String,unique: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    clientId: { type: String, required: true },
    clientSecret: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev hot reload
export default mongoose.models.Token || mongoose.model<IToken>("Token", TokenSchema);