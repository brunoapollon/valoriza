import { getCustomRepository, Not } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class ListUserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  public async execute(user_id: string) {
    const users = await this.userRepository.find({
      where: { id: Not(user_id) },
    });
    const usersMap = users.map((user) => {
      delete user.password;
      return user;
    });
    return usersMap;
  }
}

export { ListUserService };
