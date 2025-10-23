import express from "express";
import { globalErrorHandler } from "./middlewares/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(globalErrorHandler);

export default app;
