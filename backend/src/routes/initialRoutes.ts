import { Request, Response, Router } from "express";

const initialRoutes = Router();

initialRoutes.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: "Testing..." });
});

export default initialRoutes;