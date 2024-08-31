import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TransactionsEntity } from './transactions.entity';

@Entity()
export class DeliverysEntity {
  @PrimaryGeneratedColumn()
  idDeliverie: number;

  @OneToOne(() => TransactionsEntity)
  @JoinColumn()
  idTransaction: TransactionsEntity;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
