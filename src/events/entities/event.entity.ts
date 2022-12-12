import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: string;

  @JoinTable()
  @OneToMany(() => Workshop, (workshop) => workshop.event)
  workshops: Workshop[];
}
