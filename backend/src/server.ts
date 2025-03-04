import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes";

const HOST = process.env.SERVER_HOST! || "0.0.0.0";
const PORT = Number(process.env.SERVER_PORT)! || 3000;

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

export const server = app.listen(PORT, HOST, () => console.log("server is running..."));