import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: DataSource) {}
  // repo global variable - (DB)
  userRepo = this.dataSource.getRepository(User);

  async create(body) {
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
}
