import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  public async execute({ name, email, admin }: IUserRequest): Promise<User> {
    if (!email) {
      throw new Error("Email is obligatory");
    }
    const userExists = await this.userRepository.findOne({ where: { email } });
    if (userExists) {
      throw new Error("already exists user with this email");
    }
    const user = this.userRepository.create({ name, email, admin });
    await this.userRepository.save(user);
    return user;
  }
}

export { CreateUserService };
