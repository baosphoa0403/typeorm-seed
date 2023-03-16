import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { CourseEntity } from '../course/course.entity';
import { UserCourse } from '../user_course/user_course.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  //   @ManyToMany(() => CourseEntity)
  //   @JoinTable({
  //     name: 'user_course',
  //     joinColumn: { name: 'userID' },
  //     inverseJoinColumn: { name: 'courseID' },
  //   })
  //   courses: CourseEntity[];

  @OneToMany(() => UserCourse, (userCourse) => userCourse.user)
  userCourses: UserCourse[];
}
