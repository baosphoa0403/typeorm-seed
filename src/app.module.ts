import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './model/course/course.module';
import { ImageModule } from './model/image/image.module';
import { UsersModule } from './model/user/user.module';
import { UserCourseModule } from './model/user_course/user_course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    UsersModule,
    CourseModule,
    UserCourseModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
