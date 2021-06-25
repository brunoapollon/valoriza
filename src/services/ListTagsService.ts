import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";
import { classToPlain } from "class-transformer";

class ListTagsService {
  private tagRepository: TagRepository;
  constructor() {
    this.tagRepository = getCustomRepository(TagRepository);
  }
  public async execute() {
    const tags = await this.tagRepository.find();
    return classToPlain(tags);
  }
}

export { ListTagsService };
