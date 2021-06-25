import { EntityRepository, Repository } from "typeorm";
import { Tags } from "../entities/Tags"


@EntityRepository(Tags)
class TagRepositories extends Repository<Tags> { }

export { TagRepositories }