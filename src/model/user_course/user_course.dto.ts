import { ApiProperty } from '@nestjs/swagger';

export class UserCourseDTO {
  @ApiProperty({ type: Number })
  userId: number;

  @ApiProperty({ type: Number, isArray: true })
  courseIds: number[];
}
