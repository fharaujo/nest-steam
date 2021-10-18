import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe o nome da categoria.' })
  @MaxLength(200, { message: 'O nome deve ter mais de 200 caracteres' })
  name: string;
}
