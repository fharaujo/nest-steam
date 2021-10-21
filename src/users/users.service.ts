import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/users/users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from 'src/users/user.entity';
import { UserRole } from './user-roles.enum';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userService: UserRepository,
  ) {}

  // create user admin
  async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não são iguais');
    } else {
      return this.userService.createUser(createUserDto, UserRole.ADMIN);
    }
  }

  // update user
  async updateUser(updateUserDto: UpdateUserDto, id: number): Promise<User> {
    const user = await this.findUserById(id);
    const { name, email, role, status } = updateUserDto;

    user.username = name ? name : user.username;
    user.email = email ? email : user.email;
    user.role = role ? role : user.role;
    user.status = status === undefined ? user.status : status;

    try {
      await user.save();
      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar no banco de dados',
      );
    }
  }

  // get by id user
  async findUserById(userId: number): Promise<User> {
    const user = await this.userService.findOne(userId, {
      select: ['email', 'username', 'role', 'id'],
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  // get all users
  async getAllUsers(): Promise<User[]> {
    return await this.userService.find();
  }

  // get by name user
  async getUserByUsername(username: string): Promise<User> {
    const userExist = await this.userService.findOne({ where: { username } });

    if (!userExist) {
      throw new NotFoundException('Jogo não existe.');
    }

    return userExist;
  }
}
