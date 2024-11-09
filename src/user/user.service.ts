import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: DataSource) {}
  // repo global variable - (DB)
  userRepo = this.dataSource.getRepository(User);
}
