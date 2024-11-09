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

  deleteMulti(id, id2, id3): any {
    const usersId = [id, id2, id3];
    // delete - Deletes entities by entity id, ids or given conditions:
    this.userRepo.delete(usersId);

    return 'Users Deleted Successfully';
  }

  updateFullName(id, updatedFullName): any {
    // delete - Deletes entities by entity id, ids or given conditions:
    this.userRepo.update(id, { fullName: updatedFullName });
    return 'User updated successfully';
  }

  // get user by id
  async getUserById(id: number) {
    const user = await this.userRepo.findOne({ where: { id: id } });

    return { user: user };
  }

  // Delete user by id
  async deleteUser(id: number) {
    this.userRepo.delete(id);

    return 'User Deleted Successfully';
  }


}
