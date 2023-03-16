import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { UsersService } from './user.service';

@Controller('user')
@ApiTags('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async finds(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(): Promise<UserEntity> {
    return this.userService.create();
  }
}
