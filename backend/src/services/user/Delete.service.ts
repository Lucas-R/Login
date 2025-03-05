import { userRepository } from "../../database/repositories/user.repository";
import clerkClientApp from "../../utils/cleckClient";

class DeleteService {
    async execute(id: string, clerkId: string) {
        await clerkClientApp.users.deleteUser(clerkId);
        await userRepository.delete(id);

        return `deleted user id: ${id}`
    }
}

export default DeleteService;