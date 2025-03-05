import { userRepository } from "../../database/repositories/user.repository";

class FindService {
    async execute() {
        const find = await userRepository.find();
        
        return find;
    }
}

export default FindService;