import { Repository } from "typeorm";
import { connectionDB } from "../config/config";
import { UserEntity } from "../entities/user.entity";
import { UserProps } from "../../schemas/user";

export const userRepository: Repository<UserProps> = connectionDB.getRepository(UserEntity);