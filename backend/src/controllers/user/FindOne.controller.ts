import { Request, Response } from "express";
import FindOneService from "../../services/user/FindOne.service";

class FindOneController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const findOne = await new FindOneService().execute(id);
    
            res.status(200).send(findOne);
        } catch (error) {
            res.status(500).send({ message: "Error inesperado..." });         
        }
    }
}

export default FindOneController;