import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ImageEntity } from '../image/image.entity';
import { UserCourse } from '../user_course/user_course.entity';

@Entity({ name: 'course' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => UserCourse, (userCourse) => userCourse.course)
  userCourses: UserCourse[];

  @OneToMany(() => ImageEntity, (image) => image.course)
  images: ImageEntity[];
}
