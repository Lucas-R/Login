import { UserProps } from "../../schemas/user";
import clerkClientApp from "../../utils/cleckClient";
import { userRepository } from "../../database/repositories/user.repository";

class RegisterService {
    async execute(data: UserProps) {
        const clerkUser = await clerkClientApp.users.createUser({
            emailAddress: [data.email],
            password: data.password,
        });

        const newUser = userRepository.create({
            ...data,
            login_id: clerkUser.id
        });
        const user = await userRepository.save(newUser);
        
        return user;
    }
}

export default RegisterService;