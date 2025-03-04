import { Request, Response, Router } from "express";

const authRoutes = Router();

authRoutes.post("/register", (req: Request, res: Response) => {
    res.status(201).send("resgister");
});

authRoutes.post("/login", (req: Request, res: Response) => {
    res.status(200).send("login");
});

authRoutes.get("/logout", (req: Request, res: Response) => {
    res.status(200).send("logout");
});

export default authRoutes;