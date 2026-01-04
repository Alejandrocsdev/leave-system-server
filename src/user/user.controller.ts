import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(
    @Body()
    body: {
      employeeId: string;
      firstName: string;
      lastName: string;
    },
  ) {
    return this.userService.create(body);
  }

  @Get()
  getUsers() {
    return this.userService.findAll();
  }
}
