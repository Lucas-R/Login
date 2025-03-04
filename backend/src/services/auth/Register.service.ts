import { User } from "@clerk/backend";
import { UserProps } from "../../schemas/user";
import clerkClientApp from "../../utils/cleckClient";

class RegisterService {
    async execute(data: UserProps): Promise<User> {
        const response = await clerkClientApp.users.createUser({
            firstName: data.firstName,
            lastName: data.lastName,
            emailAddress: [data.email],
            password: data.password,
        });

        return response;
    }
}

export default RegisterService;