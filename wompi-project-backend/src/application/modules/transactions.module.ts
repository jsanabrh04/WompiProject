import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsEntity } from '../entities/transactions.entity';
import { TransactionsService } from '../services/transactions.service';
import { TransactionsController } from '../controllers/transactions.controller';
import { DeliverysEntity } from '../entities/deliverys.entity';
import { CustomersEntity } from '../entities/customers.entity';
import { ProductsEntity } from '../entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TransactionsEntity,
      DeliverysEntity,
      CustomersEntity,
      ProductsEntity,
    ]),
  ],
  providers: [TransactionsService],
  controllers: [TransactionsController],
  exports: [TypeOrmModule],
})
export class TransactionsModule {}
