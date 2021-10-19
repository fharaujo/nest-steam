import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserRepository } from '../users/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { User } from '../users/user.entity';
import { UserRole } from '../users/user-roles.enum';
import { UserCredentialsDto } from 'src/games/dtos/user-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createAccount(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não são iguais.');
    } else {
      return this.userRepository.createUser(createUserDto, UserRole.USER);
    }
  }

  async loginUser(UserCredentialsDto: UserCredentialsDto) {
    const user = await this.userRepository.checkCredentialsUser(
      UserCredentialsDto,
    );

    if (!user == null) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
