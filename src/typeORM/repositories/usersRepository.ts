import { getRepository, Repository } from 'typeorm';

import User from '../entities/user';

class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async createUser(name: string, personal_filters: string[]): Promise<User> {
    const user = this.ormRepository.create({
      name,
      personal_filters,
    })

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;