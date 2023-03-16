import { UserEntity } from 'src/model/user/user.entity';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

define(UserEntity, () => {
  const user = new UserEntity();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  return user;
});
