import { getCustomRepository } from "typeorm";
import { Tag } from "../entities/Tag";
import { TagRepository } from "../repositories/TagRepository";

interface IUserRequest {
  name: string;
}

class CreateTagService {
  private tagRepository: TagRepository;
  constructor() {
    this.tagRepository = getCustomRepository(TagRepository);
  }
  public async execute({ name }: IUserRequest): Promise<Tag> {
    if (!name) {
      throw new Error("Name is obligatory");
    }
    const TAGExists = await this.tagRepository.findOne({ where: { name } });
    if (TAGExists) {
      throw new Error("already exists tag with this name");
    }
    const tag = this.tagRepository.create({ name });
    await this.tagRepository.save(tag);
    return tag;
  }
}

export { CreateTagService };
