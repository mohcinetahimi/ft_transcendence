import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() body: { username: string; email: string }): Promise<User> {
    return this.usersService.create(body.username, body.email);
  }
}