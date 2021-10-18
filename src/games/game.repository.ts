import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateGameDto } from './dtos/create.game.dto';
import { Game } from './game.entity';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  async createGame(createGameDto: CreateGameDto): Promise<Game> {
    const { name, image, bio, release_date } = createGameDto;

    const game = this.create();

    game.name = name;
    game.image = image;
    game.bio = bio;
    game.release_date = release_date;

    try {
      await game.save();
      return game;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Categoria já existe');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar a categoria no banco.',
        );
      }
    }
  }
}
