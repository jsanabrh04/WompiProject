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
      entities: [ProductsEntity, CustomersEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([ProductsEntity, CustomersEntity]),
    ProductsModule,
  ],
  controllers: [ProductsController, CustomersController],
  providers: [ProductsService, CustomersService],
})
export class AppModule {}
