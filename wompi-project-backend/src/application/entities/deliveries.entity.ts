import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Transaction } from './transactions.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  idDeliverie: number;

  @OneToOne(() => Transaction)
  @JoinColumn()
  idTransaction: Transaction;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
