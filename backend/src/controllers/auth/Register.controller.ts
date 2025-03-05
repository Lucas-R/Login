import { Request, Response } from "express";
import { UserProps } from "../../schemas/user";
import RegisterService from "../../services/auth/Register.service";
import { errorClerk } from "../../utils/errorClerk";

class RegisterController {
    async handle(req: Request, res: Response) {
        const body: UserProps = req.body;
        try {
            const user = await new RegisterService().execute(body);
            res.status(201).send(user);
        } catch (err) {
            errorClerk(res, err);
        }
    }
}

export default RegisterController;