import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCourseDTO } from './user_course.dto';
import { UserCourse } from './user_course.entity';

@Injectable()
export class UserCourseService {
  constructor(
    @InjectRepository(UserCourse)
    private userCoursesRepository: Repository<UserCourse>,
  ) {}

  async createUserCourses({
    courseIds,
    userId,
  }: UserCourseDTO): Promise<UserCourse[]> {
    const array: Promise<UserCourse>[] = [];
    for (const item of courseIds) {
      array.push(
        this.userCoursesRepository.save({
          courseId: item,
          userId: userId,
        }),
      );
    }
    return await Promise.all(array);
  }

  async findOne(userId, courseId): Promise<UserCourse> {
    return await this.userCoursesRepository.findOne({
      where: { courseId, userId },
      relations: { course: { images: true } },
    });
  }
}
