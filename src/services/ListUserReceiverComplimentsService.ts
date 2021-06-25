import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserReceiverComplimentsService {
  private complimentRepository: ComplimentRepository;
  constructor() {
    this.complimentRepository = getCustomRepository(ComplimentRepository);
  }
  public async execute(user_id: string) {
    const compliments = await this.complimentRepository.find({
      where: { user_receiver: user_id },
    });

    return compliments;
  }
}

export { ListUserReceiverComplimentsService };
