import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';

@Controller('course')
@ApiTags('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  async finds(): Promise<CourseEntity[]> {
    return this.courseService.findAll();
  }

  @Post()
  async create(): Promise<CourseEntity> {
    return this.courseService.create();
  }
}
