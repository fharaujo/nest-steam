import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty({ message: 'Informe o nome de usuário.' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Informe uma senha.' })
  @MaxLength(8, { message: 'A senha deve ter no máximo 350 caracteres' })
  image: string;

  @IsNotEmpty({ message: 'Informe a biografia do jogo.' })
  bio: string;

  @IsNotEmpty({ message: 'Informe a data de lançamento.' })
  release_date: string;

  @IsNumber()
  @IsNotEmpty()
  likes: number;

  @IsOptional()
  categories: string[];
}
