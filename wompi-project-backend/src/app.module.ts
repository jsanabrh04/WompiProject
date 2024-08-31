import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './application/entities/products.entity';
import { ProductController } from './application/controllers/products.controller';
import { ProductsModule } from './application/modules/products.module';
import { ProductService } from './application/services/products.service';

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
      entities: [ProductEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([ProductEntity]),
    ProductsModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
