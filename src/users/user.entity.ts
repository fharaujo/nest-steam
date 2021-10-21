import {
  BaseEntity,
  Entity,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { Game } from '../games/game.entity';
import * as bcrypt from 'bcrypt';
@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  username: string;

  @Column({ nullable: true, type: 'varchar', length: 250 })
  image: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  salt: string;

  @Column({ nullable: true, type: 'varchar', length: 64, select: false })
  confirmationToken: string;

  @Column({ nullable: true, type: 'varchar', length: 250 })
  bio: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  birthday: string;

  @Column({ nullable: false, default: true })
  status: true;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  role: string;

  // relationship entities
  @OneToMany(() => Game, (game) => game.user)
  games: Game[];

  @Column({ name: 'follow_count', default: 0 })
  followCount: number;

  @Column({ name: 'following_count', default: 0 })
  followingCount: number;

  // date
  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  async checkPasswordUser(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}

/*
+id
+nome
+email
+imagem
+bio
+nascimento
+seguidores[]
+seguindo[]
+criado_em
+modificado_em
+jogos_que_segue[]
+éAdmin*/
