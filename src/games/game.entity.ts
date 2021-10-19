import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import { User } from '../users/user.entity';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 350 })
  image: string;

  @Column({ nullable: true, type: 'varchar', length: 250 })
  bio: string;

  @Column({ nullable: true, type: 'varchar', length: 250 })
  release_date: string;

  @Column({ name: 'likes', default: 0 })
  likes: number;

  // relationship entities
  @Column({ nullable: true, type: 'json' })
  categories: string[];

  @ManyToOne(() => User, (user) => user.games, { eager: true })
  user: User;
}
