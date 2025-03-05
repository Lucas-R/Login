import { Request, Response } from "express";
import FindService from "../../services/user/Find.service";

class FindController {
    async handle(req: Request, res: Response) {
        try {
            const find = await new FindService().execute();
    
            res.status(200).send(find);
        } catch (error) {
            res.status(500).send({ message: "Error inesperado..." });           
        }
    }
}

export default FindController;  