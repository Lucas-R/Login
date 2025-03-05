import { Request, Response } from "express";
import DeleteService from "../../services/user/Delete.service";
import { userRepository } from "../../database/repositories/user.repository";

class DeleteController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await userRepository.findOne({ where: { id } });

            if(!!user) {
                const userID = user.id as string;
                const clerkID = user.login_id as string;
                const del = await new DeleteService().execute(userID, clerkID);

                res.status(200).send({ message: del });
            } else {
                res.status(404).send({ message: "User id não encontrado..." });
            }
            
        } catch (error) {
            res.status(500).send({ message: "Error inesperado..." });   
        }
    }
}

export default DeleteController;