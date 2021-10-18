import { Module } from '@nestjs/common';
import { UserRepository } from '../users/users.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
