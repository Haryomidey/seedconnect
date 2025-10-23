import { Schema } from "mongoose";
import { User } from "./user.model.js";

const businessOwnerSchema = new Schema(
    {
        businessName: { type: String, required: true },
        businessAddress: { type: String, required: true },
        businessType: { type: String, required: true },
        industry: { type: String, required: true },
        website: { type: String },
        businessDescription: { type: String, required: true },
    },
    { timestamps: true }
);

export const BusinessOwner = User.discriminator(
    "business",
    businessOwnerSchema
);