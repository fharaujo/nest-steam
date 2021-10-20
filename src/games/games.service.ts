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

  // create game
  async createGameUserAdmin(createGameDto: CreateGameDto): Promise<Game> {
    const game = await this.gameService.createGame(createGameDto);
    return game;
  }

  async getAllGames(): Promise<Game[]> {
    return await this.gameService.find();
  }
}
