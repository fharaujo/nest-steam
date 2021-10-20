import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameRepository } from './game.repository';
import { CreateGameDto } from './dtos/create.game.dto';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(GameRepository)
    private gameService: GameRepository,
  ) {}

  async createGame(createGameDto: CreateGameDto): Promise<Game> {
    const game = await this.gameService.create(createGameDto);
    return game;
  }
}
