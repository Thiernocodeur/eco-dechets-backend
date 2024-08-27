import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity/user.entity';

@Injectable()
export class UserService {
  findByUsername(username: string) {
      throw new Error('Method not implemented.');
  }
  findById(id: number): User | PromiseLike<User> {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneById(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }
}
