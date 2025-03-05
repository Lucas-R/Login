import { Request, Response } from "express";
import { userRepository } from "../../database/repositories/user.repository";
import UpdateService from "../../services/user/Update.service";
import { z } from "zod";

class UpdateController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const body = req.body;
            const user = await userRepository.findOne({where: { id }});

            if(!!user) {
                const findOne = await new UpdateService().execute(user, body);
                res.status(200).send(findOne);
            } else {
                res.status(404).send({ message: "Usuário não encontrado..." });
            }
    
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).send({ message: 'Dados inválidos', errors: error.errors });
            } else {
                res.status(500).send({ message: "Error inesperado..." });         
            }
        }
    }
}

export default UpdateController;