import { Schema } from "mongoose";
import { User } from "./user.model.js";

const investorSchema = new Schema(
    {
        totalInvested: { type: Number, default: 0 },
        portfolio: [
            {
                businessId: { type: Schema.Types.ObjectId, ref: "business" },
                amountInvested: { type: Number, required: true },
                dateOfInvestment: { type: Date, default: Date.now },
            },
        ],
    },

    { timestamps: true }
);

export const Investor = User.discriminator(
    "investor",
    investorSchema
);