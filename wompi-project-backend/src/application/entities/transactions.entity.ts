import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProductsEntity } from './products.entity';
import { CustomersEntity } from './customers.entity';

@Entity()
export class TransactionsEntity {
  @PrimaryGeneratedColumn()
  idTransaction: number;

  @ManyToOne(() => ProductsEntity)
  idProduct: ProductsEntity;

  @ManyToOne(() => CustomersEntity)
  idCustomer: CustomersEntity;

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
