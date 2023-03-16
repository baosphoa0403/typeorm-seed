import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity';
import { faker } from '@faker-js/faker';
import { ImageEntity } from '../image/image.entity';
@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
    @InjectRepository(ImageEntity)
    private imageRepository: Repository<ImageEntity>,
  ) {}

  async create(): Promise<CourseEntity> {
    const images: Promise<ImageEntity>[] = [];
    for (const _ of [1, 2]) {
      images.push(
        this.imageRepository.save({
          url: faker.image.animals(),
        }),
      );
    }
    const data = await Promise.all(images);
    return await this.courseRepository.save({
      description: faker.internet.avatar(),
      name: faker.hacker.noun(),
      images: data,
    });
  }

  async findAll(): Promise<CourseEntity[]> {
    return await this.courseRepository.find({
      relations: { images: true },
    });
  }
}
