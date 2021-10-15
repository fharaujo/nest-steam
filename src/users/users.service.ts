import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.category';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private users: UserRepository,
  ) {}
}
