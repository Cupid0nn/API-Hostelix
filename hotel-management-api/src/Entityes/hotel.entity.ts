import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Room } from './room.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column({ type: 'int', default: 0 })
  stars: number;

  @Column()
  phone: string;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
