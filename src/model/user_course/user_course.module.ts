import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourseController } from './user_course.controller';
import { UserCourse } from './user_course.entity';
import { UserCourseService } from './user_course.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserCourse])],
  providers: [UserCourseService],
  controllers: [UserCourseController],
})
export class UserCourseModule {}
