import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { User } from './user.entity';
import { Categories } from './category.entity';

@Entity('games')
@Unique([])
export class Games extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 300 })
  image: string;

  @Column({ nullable: false, type: 'varchar', length: 300 })
  bio: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  release_date: string;

  @Column({ nullable: true })
  likes: number;

  // relationship  entities
  @ManyToOne(() => User, (user) => user.games)
  user: User;

  @OneToMany(() => Categories, (categories) => categories.games)
  categories: Categories[];
}

/*
+id
+nome
+imagem
+bio
+categoria[]
+data_lançamento
+curtidas*/
