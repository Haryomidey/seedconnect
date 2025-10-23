import jwt from "jsonwebtoken";
import { config } from "../configs/configuration.js";

export const generateToken = (userId, role) => {
    const secret = config.jwtSecret || "rehferketkw4h34534ewdedew";
    const expiresIn = config.jwtExpiresIn || "7d";

    return jwt.sign(
        { id: userId, role },
        secret,
        { expiresIn }
    );
};