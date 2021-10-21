import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateGameDto } from './dtos/create.game.dto';
import { Game } from './game.entity';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  // create gameRepository
  async createGame(createGameDto: CreateGameDto, user: User): Promise<Game> {
    const { name, image, bio, releaseDate, likes, categories } = createGameDto;

    const game = this.create();

    game.name = name;
    game.image = image;
    game.bio = bio;
    game.releaseDate = releaseDate;
    game.likes = likes;
    game.categories = categories;
    game.author = [user.username, user.role];

    try {
      await game.save();
      return game;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Jogo já existe');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o jogo no banco.',
        );
      }
    }
  }

  /*   async updateGame(createGameDto: CreateGameDto);
   */
}
