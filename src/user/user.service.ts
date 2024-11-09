import { Injectable, Param } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: DataSource) {}
  // repo global variable - (DB)
  userRepo = this.dataSource.getRepository(User);

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
