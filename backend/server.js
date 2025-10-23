import express from "express";
import { globalErrorHandler } from "./middlewares/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";
import ConnectDB from "./configs/db.js";
import { config } from "./configs/configuration.js";

const app = express();

ConnectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(globalErrorHandler);

app.listen(config.port || 5000, () => {
    console.log(`Server is running on port ${config.port || 5000}`);
});

export default app;
