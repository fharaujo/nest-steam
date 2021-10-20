import { Post, Body, ValidationPipe, Controller } from '@nestjs/common';
import { CreateGameDto } from './dtos/create.game.dto';
import { ReturnGameDto } from './dtos/return-game.dto';
import { UserRole } from 'src/users/user-roles.enum';
import { UseGuards } from '@nestjs/common';
import { GameRepository } from './game.repository';
import { Role } from 'src/auth/auth-role.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/auth-roles.guard';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('game')
export class GamesController {
  constructor(private gameService: GameRepository) {}

  @Post('create-game')
  @Role(UserRole.ADMIN)
  async createGame(
    @Body(ValidationPipe) createGameDto: CreateGameDto,
  ): Promise<ReturnGameDto> {
    const game = await this.gameService.createGame(createGameDto);
    return {
      game,
      message: 'Jogo criado com sucesso.',
    };
  }
}
