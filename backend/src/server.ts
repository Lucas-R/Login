import "dotenv/config";
import express from "express";
import { clerkMiddleware } from '@clerk/express';
import { connectionDB } from "./database/config/config";

import initialRoutes from "./routes/initialRoutes";
import authRoutes from "./routes/authRoutes";

export function server() {
    const HOST = process.env.SERVER_HOST! || "0.0.0.0";
    const PORT = Number(process.env.SERVER_PORT)! || 3000;
    const app = express();
    
    app.use(express.json());
    app.use(clerkMiddleware());
    
    app.use("/", initialRoutes);
    app.use("/auth", authRoutes);
    
    return app.listen(PORT, HOST, () => console.log("server is running..."));
}

connectionDB.initialize()
    .then(() => server())
    .catch((err) => console.error("Error during Data Source initialization", err));