import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { User } from 'src/users/user.entity';

export class CreateGameDto {
  @IsNotEmpty({ message: 'Informe o nome de usuário.' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  name: string;

  @IsOptional({ message: 'Copie e cole uma URL de imagem.' })
  image: string;

  @IsNotEmpty({ message: 'Informe a biografia do jogo.' })
  bio: string;

  @IsNotEmpty({ message: 'Informe a data de lançamento.' })
  releaseDate: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O default de likes é zero(0).' })
  likes: number;

  @IsOptional()
  user: number;

  @IsOptional()
  categories: string[];

  @IsOptional()
  author: string[];
}
