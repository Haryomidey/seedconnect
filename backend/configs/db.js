import mongoose from "mongoose";
import { config } from "./configuration.js";

const Connect = async () => {
    try {
        const conn = await mongoose.connect(config.databaseUrl);
        console.log("Database connected successfully", conn.connection.host);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

export default Connect;