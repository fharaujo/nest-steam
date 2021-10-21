import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';

import { User } from '../users/user.entity';

@Unique(['name'])
@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: true, type: 'varchar' })
  image: string;

  @Column({ nullable: true, type: 'varchar', length: 250 })
  bio: string;

  @Column({ nullable: true, type: 'varchar', length: 250 })
  releaseDate: string;

  @Column({ name: 'likes', default: 0 })
  likes: number;

  @Column({ nullable: true, type: 'json' })
  categories: string[];

  @Column({ nullable: true, type: 'json' })
  author: string[];

  // relationship entities
  @ManyToOne(() => User, (user) => user.games)
  user: User;
}
