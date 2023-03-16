import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'songohan',
  database: 'typeormSeed',
  dropSchema: true,
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
