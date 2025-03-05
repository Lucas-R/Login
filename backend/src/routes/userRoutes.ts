import { Request, Response, Router } from "express";
import FindController from "../controllers/user/Find.controller";
import DeleteController from "../controllers/user/Delete.controller";
import FindOneController from "../controllers/user/FindOne.controller";

const userRoutes = Router();

userRoutes.get("/", async (req: Request, res: Response) => {
    return await new FindController().handle(req, res);
});

userRoutes.get("/:id", async (req: Request, res: Response) => {
    return await new FindOneController().handle(req, res);
});

userRoutes.delete("/:id", async (req: Request, res: Response) => {
    return await new DeleteController().handle(req, res);
});

export default userRoutes;