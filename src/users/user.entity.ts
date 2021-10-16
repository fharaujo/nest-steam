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

/*import { Games } from '../entities/game.entity';
import { Follows } from '../entities/follow.entity';
import { Followings } from '../entities/following.entity';*/

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

  @Column({ nullable: true, type: 'varchar', length: 64 })
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
  /*@OneToMany(() => Games, (games) => games.user)
  games: Games[];

  @OneToMany(() => Follows, (follows) => follows.user)
  follows: Follows[];

  @OneToMany(() => Followings, (followings) => followings.user)
  followings: Followings[];*/

  // date
  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
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
