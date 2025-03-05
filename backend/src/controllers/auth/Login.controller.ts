import { Request, Response } from "express";
import { userRepository } from "../../database/repositories/user.repository";
import LoginService from "../../services/auth/Login.service";

class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        if(!!email && !!password) {
            const user = await userRepository.findOne({where: { email }});
            !user && res.status(404).send("Verificar dados de acesso...");
            const hash = user?.password as string;
            const login = await new LoginService().execute(email, password, hash);
            res.status(login.status).send(login.data);
            
        }
    }
}

export default LoginController;