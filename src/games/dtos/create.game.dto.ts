import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty({ message: 'Informe o nome de usuário.' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  name: string;

  @IsOptional({ message: 'Copie e cole uma URL de imagem.' })
  image: string;

  @IsNotEmpty({ message: 'Informe a biografia do jogo.' })
  bio: string;

  @IsNotEmpty({ message: 'Informe a data de lançamento.' })
  release_date: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O default de likes é zero(0).' })
  likes: number;

  @IsOptional()
  @IsString()
  categories: string[];
}
