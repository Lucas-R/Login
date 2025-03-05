import { userRepository } from "../../database/repositories/user.repository";

class FindOneService {
    async execute(id: string) {
        const user = await userRepository.findOne({where: { id }});
        return user;
    }
}

export default FindOneService;