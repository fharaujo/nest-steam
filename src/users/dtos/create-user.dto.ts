import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Informe um endereço de e-mail.',
  })
  @IsEmail({}, { message: 'Informe um endereço de e-mail válido.' })
  email: string;

  @IsNotEmpty({ message: 'Informe o nome de usuário.' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  username: string;

  @IsNotEmpty({ message: 'Informe uma senha.' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'Informe uma senha.' })
  @MinLength(8, {
    message: 'A Confirmação de senha deve deve ser igual a senha.',
  })
  passwordConfirmation: string;
}
