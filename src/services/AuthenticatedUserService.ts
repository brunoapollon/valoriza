import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  email: string;
  password: string;
}

class AuthenticatedUserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  public async execute({ email, password }: IUserRequest): Promise<User> {
    if (!email) {
      throw new Error("Email is obligatory");
    }
    if (!password) {
      throw new Error("Password is obligatory");
    }
    const findUser = await this.userRepository.findOne({ where: { email } });
    if (!findUser) {
      throw new Error("Wrong email or password, try again.");
    }
    const passwordEncrypted = findUser.password;
    const comparePasswords = await compare(password, passwordEncrypted || "");
    if (!comparePasswords) {
      throw new Error("Wrong email or password, try again.");
    }
    delete findUser.password;
    return findUser;
  }
}

export { AuthenticatedUserService };
