import dotenv from "dotenv";
dotenv.config();

const env = process.env;
export const config = {
    port: env.PORT,
    jwtSecret: env.JWT_SECRET,
    databaseUrl: env.DATABASE_URL,
    jwtExpiresIn: env.JWT_EXPIRES_IN,
}