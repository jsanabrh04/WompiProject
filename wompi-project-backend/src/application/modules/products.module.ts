// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/products.entity';
import { ProductService } from '../services/products.service';
import { ProductController } from '../controllers/products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductsModule {}
