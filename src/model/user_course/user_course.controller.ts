import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserCourseDTO } from './user_course.dto';
import { UserCourse } from './user_course.entity';
import { UserCourseService } from './user_course.service';

@ApiTags('user_course')
@Controller('user_course')
export class UserCourseController {
  constructor(private userCourseService: UserCourseService) {}
  @Post('/register')
  async register(@Body() body: UserCourseDTO): Promise<UserCourse[]> {
    return this.userCourseService.createUserCourses(body);
  }

  @Get('user=:userId&course=:courseId')
  async findOne(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ) {
    console.table({ userId, courseId });
    return this.userCourseService.findOne(userId, courseId);
  }
}
