import { Repository, EntityRepository } from 'typeorm'
import { Compliment } from '../entities/Compliment'

@EntityRepository(Compliment)
class complimentsRepository extends Repository<Compliment> { }

export { complimentsRepository }