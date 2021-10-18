import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { User } from '../users/user.entity';
import { Category } from './game-category.entity';

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
  @OneToMany(() => Category, (category) => category.games)
  categories: Category[];

  @ManyToOne(() => User, (user) => user.games, { eager: true })
  user: User;
}
