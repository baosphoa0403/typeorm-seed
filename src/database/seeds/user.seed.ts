import { UserEntity } from 'src/model/user/user.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export class UserSeed implements Seeder {
  async run(factory: Factory): Promise<void> {
    console.info('run seed user');
    await factory(UserEntity)().createMany(10);
  }
}
