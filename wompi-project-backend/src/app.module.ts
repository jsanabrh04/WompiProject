import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './application/entities/products.entity';
import { ProductsController } from './application/controllers/products.controller';
import { ProductsModule } from './application/modules/products.module';
import { ProductsService } from './application/services/products.service';
import { CustomersEntity } from './application/entities/customers.entity';
import { CustomersController } from './application/controllers/customers.controller';
import { CustomersService } from './application/services/customers.service';
import { DeliverysEntity } from './application/entities/deliverys.entity';
import { DeliverysController } from './application/controllers/deliverys.controller';
import { DeliverysService } from './application/services/deliverys.service';
import { TransactionsEntity } from './application/entities/transactions.entity';
import { CustomersModule } from './application/modules/customers.module';
import { DeliverysModule } from './application/modules/deliverys.module';
import { TransactionsModule } from './application/modules/transactions.module';
import { TransactionsController } from './application/controllers/transactions.controller';
import { TransactionsService } from './application/services/transactions.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [
        ProductsEntity,
        CustomersEntity,
        DeliverysEntity,
        TransactionsEntity,
      ],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([
      ProductsEntity,
      CustomersEntity,
      DeliverysEntity,
      TransactionsEntity,
    ]),
    ProductsModule,
    CustomersModule,
    DeliverysModule,
    TransactionsModule,
  ],
  controllers: [
    ProductsController,
    CustomersController,
    DeliverysController,
    TransactionsController,
  ],
  providers: [
    ProductsService,
    CustomersService,
    DeliverysService,
    TransactionsService,
  ],
})
export class AppModule {}
