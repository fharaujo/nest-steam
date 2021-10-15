import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, GamesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
