import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  public async execute({
    name,
    email,
    password,
    admin = false,
  }: IUserRequest): Promise<User> {
    if (!email) {
      throw new Error("Email is obligatory");
    }
    if (!password) {
      throw new Error("Password is obligatory");
    }
    const userExists = await this.userRepository.findOne({ where: { email } });
    if (userExists) {
      throw new Error("already exists user with this email");
    }
    const passwordEncrypted = await hash(password, 8);
    const user = this.userRepository.create({
      name,
      email,
      password: passwordEncrypted,
      admin,
    });
    await this.userRepository.save(user);
    delete user.password;
    return user;
  }
}

export { CreateUserService };
