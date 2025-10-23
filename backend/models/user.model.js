import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true },
        role: { 
        type: String, 
            enum: ["investor", "business"], 
            required: true 
        },
        verified: { type: Boolean, default: false },
    },
    { 
        timestamps: true, 
        discriminatorKey: "role"
    }
);

export const User = mongoose.model("User", userSchema);