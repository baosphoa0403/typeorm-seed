import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { CourseEntity } from '../course/course.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'user_course_many_to_one' })
export class UserCourse {
  @PrimaryColumn()
  courseId: number;

  @PrimaryColumn()
  userId: number;

  @Column({ type: 'datetime', default: '9999-12-31 23:59:59' })
  dateStart: Date;

  @ManyToOne(() => CourseEntity, (course) => course.userCourses)
  public course: CourseEntity;

  @ManyToOne(() => UserEntity, (user) => user.userCourses)
  user: UserEntity;
}
