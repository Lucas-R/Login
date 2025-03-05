import { comparePassword } from "../../utils/password";

class LoginService {
    async execute(email: string, password: string, hash: string) {
        let login = {
            status: 200,
            data: "successfully"
        }
        if(await comparePassword(password, hash)){
            return login;
        } else {
            return login = {
                status: 404,
                data: "failed"
            }
        }
    }
}

export default LoginService;