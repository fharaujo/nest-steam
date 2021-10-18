import {
  Controller,
  Body,
  Post,
  ValidationPipe,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dtos/return-user';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createAdminUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto);
    return {
      user,
      message: 'Administrador criado com sucesso',
    };
  }

  @Get(':username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return {
      user,
      message: 'Usuário',
    };
  }

  @Get()
  async getAll() {
    return this.usersService.getAllUser();
  }
}
