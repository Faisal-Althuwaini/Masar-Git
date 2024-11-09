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
    // findone parameter should be an object, the condition is passed on "where: {condition}"
    const user = await this.userRepo.findOne({ where: { id: id } });

    return { user: user };
  }

  // Delete user by id
  @Delete(':id')
  async DeleteUser(@Param('id') id: number) {
    // delete - Deletes entities by entity id, ids or given conditions:
    this.userRepo.delete(id);

    return 'User Deleted Successfully';
  }
  // End Mohannad todo :

  // Faisal todo :
  // todo : delete array of users by id
  @Delete(':id/:id2/:id3')
  async DeleteUsers(
    @Param('id') id: number,
    @Param('id2') id2: number,
    @Param('id3') id3: number,
  ) {
    // delete - Deletes entities by entity id, ids or given conditions:
    this.userRepo.delete([id, id2, id3]);

    return 'Users Deleted Successfully';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Query() updatedFullName: string) {
    this.userRepo.update(id, { fullName: updatedFullName });
    return 'User updated successfully';
  }
}

// End of Faisal todo :
