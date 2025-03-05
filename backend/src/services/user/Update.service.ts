import { userRepository } from "../../database/repositories/user.repository";
import UpdateUserSchema, { UserProps } from "../../schemas/user";

class UpdateService {
    async execute(user: UserProps, data: Partial<UserProps>) {
        const id = user.id as string;
        const validate = UpdateUserSchema.parse(data);
        
        await userRepository.update(id, validate);
        return validate;
    }
}

export default UpdateService;