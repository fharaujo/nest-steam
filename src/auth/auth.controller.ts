import { Controller, ValidationPipe, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/create-account')
  async createAccount(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<{ message: string }> {
    await this.authService.createAccount(createUserDto);
    return { message: 'Usuário cadastrado com sucesso.' };
  }
}
