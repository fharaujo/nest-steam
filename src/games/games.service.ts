import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameRepository } from './game.repository';
import { CreateGameDto } from './dtos/create.game.dto';
import { Game } from './game.entity';
import { User } from 'src/users/user.entity';
import { UserRepository } from 'src/users/users.repository';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(GameRepository)
    private gameService: GameRepository,
  ) {}

  // get all games
  async getAllGames(): Promise<Game[]> {
    return await this.gameService.find();
  }

  // create game
  async createGameUserAdmin(
    createGameDto: CreateGameDto,
    user: User,
  ): Promise<Game> {
    const game = await this.gameService.createGame(createGameDto, user);
    return game;
  }

  // get by game name
  async findByNameGame(name: string): Promise<Game> {
    const nameGame = await this.gameService.findOne({ where: { name } });
    return nameGame;
  }
}
