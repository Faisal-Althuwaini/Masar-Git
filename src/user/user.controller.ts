import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(
    private readonly dataSource: DataSource,
    private readonly userService: UserService,
  ) {}
  // repo global variable - (DB)
  userRepo = this.dataSource.getRepository(User);

  // Mohammed todo :
  // Create User
  @Post('')
  async create(@Body() body) {
    const user = new User();
    const { fullName, age } = body;

    if (!fullName || !age) {
      throw new HttpException(
        'Full name and age are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.fullName = fullName;
    user.age = age;

    await this.userRepo.save(user);

    return { message: 'User created Successfully', user: user };
  }

  // Get all users
  @Get('')
  async findAll() {
    const users = await this.userRepo.find();

    return { users: users };
  }

  // End of Mohammed todo :

  // Mohannad todo :
  // Get user by id
  @Get(':id')
  async findUser(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  // Delete user by id
  @Delete(':id')
  async DeleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
  // End Mohannad todo :

  // Faisal todo :
  // todo : delete array of users by id
  @Delete(':id/:id2/:id3')
  // return this.userService.delete(body);
  async DeleteUsers(
    @Param('id') id: number,
    @Param('id2') id2: number,
    @Param('id3') id3: number,
  ) {
    return this.userService.deleteMulti(id, id2, id3);
  }

  // update userFullName by id
  @Patch(':id')
  update(@Param('id') id: string, @Query('fullname') updatedFullName: string) {
    return this.userService.updateFullName(id, updatedFullName);
  }
}

// End of Faisal todo :
