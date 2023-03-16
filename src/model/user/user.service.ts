import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { faker } from '@faker-js/faker';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find({
      relations: { userCourses: { course: true } },
    });
  }

  findOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async create(): Promise<UserEntity> {
    return await this.usersRepository.save({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
  }
}
