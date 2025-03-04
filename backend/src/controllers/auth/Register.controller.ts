import { Request, Response } from "express";
import { UserProps } from "../../schemas/user";
import RegisterService from "../../services/auth/Register.service";

class RegisterController {
    async handle(req: Request, res: Response) {
        const body: UserProps = req.body;

        const user = await new RegisterService().execute(body);

        res.status(201).send(user);
    }
}

export default RegisterController;