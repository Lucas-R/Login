import { Request, Response } from "express";
import { UserProps } from "../../schemas/user";
import RegisterService from "../../services/auth/Register.service";
import { userRepository } from "../../database/repositories/user.repository";

class RegisterController {
    private async checkInputs(req: Request) {
        const body: UserProps = req.body;
        let check = true;
        let message;
        let data = body;

        if(!body.name || !body.email || !body.password){
            check = false;
            message = { 
                message: "Verifique as informações enviadas...",
                required: {
                    name: !!body.name           ? "OK..." : "Falta preencher...",
                    email: !!body.email         ? "OK..." : "Falta preencher...",
                    password: !!body.password   ? "OK..." : "Falta preencher..."
                }
            };
        } else {
            if(!!await userRepository.findOne({where: {email: body.email}})){
                check = false;
                message = `email ${body.email} já cadastrado...`;
            }
        }

        return { status: check, message, data };
    }

    async handle(req: Request, res: Response) {
        try {
            const check = await this.checkInputs(req);

            if(check.status) {
                const user = await new RegisterService().execute(check.data);
                res.status(201).send(user);
            } else {
                res.status(409).send({ message: check.message });
            }
        } catch (err) {
            res.status(500).send({ message: "Error inesperado..." });
        }
    }
}

export default RegisterController;