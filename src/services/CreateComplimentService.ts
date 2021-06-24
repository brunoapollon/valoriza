import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  private complimentRepository: ComplimentRepository;
  private userRepository: UserRepository;
  constructor() {
    this.complimentRepository = getCustomRepository(ComplimentRepository);
    this.userRepository = getCustomRepository(UserRepository);
  }
  public async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IUserRequest) {
    if (user_receiver === user_sender) {
      throw new Error("Incorrect user receiver");
    }
    const userReceiverExists = await this.userRepository.findOne({
      where: { id: user_receiver },
    });
    if (!userReceiverExists) {
      throw new Error("User receiver does not exists");
    }
    const compliment = this.complimentRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });
    await this.complimentRepository.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService };
