import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from '../image/image.entity';
import { CourseController } from './course.controller';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, ImageEntity])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
