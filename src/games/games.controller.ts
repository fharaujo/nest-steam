import {
  Post,
  Body,
  ValidationPipe,
  Controller,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateGameDto } from './dtos/create.game.dto';
import { ReturnGameDto } from './dtos/return-game.dto';
import { UserRole } from 'src/users/user-roles.enum';
import { UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/auth-role.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/auth-roles.guard';
import { GamesService } from './games.service';

@Controller('game')
export class GamesController {
  constructor(private gameService: GamesService) {}

  // get all games
  @Get()
  async findAllGames() {
    return this.gameService.getAllGames();
  }

  // get by game name
  @Get(':name')
  async getByNameGame(@Param('name') name: string): Promise<ReturnGameDto> {
    const game = await this.gameService.findByNameGame(name);

    if (!game) {
      throw new NotFoundException('Jogo não encontrado');
    }

    return {
      game,
      message: 'Jogo encontrado.',
    };
  }

  // create game admin user
  @Post('create-game')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Role(UserRole.ADMIN)
  async createGame(
    @Body(ValidationPipe) createGameDto: CreateGameDto,
  ): Promise<ReturnGameDto> {
    const game = await this.gameService.createGameUserAdmin(createGameDto);
    return {
      game,
      message: 'Jogo criado com sucesso.',
    };
  }
}
