import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProductEntity } from './products.entity';
import { Customer } from './customers.entity';

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  idTransaction: number;

  @ManyToOne(() => ProductEntity)
  idProduct: ProductEntity;

  @ManyToOne(() => Customer)
  idCustomer: Customer;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  transactionNumber: string;

  @Column({ type: 'varchar', length: 50 })
  paymentMethod: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  wompiStatus: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  wompiTransactionId: string;

  @Column({ type: 'text', nullable: true })
  wompiPaymentUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
