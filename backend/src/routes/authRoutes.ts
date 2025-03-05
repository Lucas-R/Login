import { Request, Response, Router } from "express";
import RegisterController from "../controllers/auth/Register.controller";
import LoginController from "../controllers/auth/Login.controller";

const authRoutes = Router();

authRoutes.post("/register", async (req: Request, res: Response) => {
    return await new RegisterController().handle(req, res);
});

authRoutes.post("/login", async (req: Request, res: Response) => {
    return await new LoginController().handle(req, res);
});

authRoutes.get("/logout", (req: Request, res: Response) => {
    res.status(200).send("logout");
});

export default authRoutes;