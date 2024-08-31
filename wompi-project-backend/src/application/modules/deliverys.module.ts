import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliverysEntity } from '../entities/deliverys.entity';
import { DeliverysService } from '../services/deliverys.service';
import { DeliverysController } from '../controllers/deliverys.controller';
import { TransactionsEntity } from '../entities/transactions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverysEntity, TransactionsEntity])],
  providers: [DeliverysService],
  controllers: [DeliverysController],
})
export class DeliverysModule {}
