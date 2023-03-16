import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from '../course/course.entity';

@Entity({ name: 'image' })
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => CourseEntity, (course) => course.images)
  course: CourseEntity;
}
