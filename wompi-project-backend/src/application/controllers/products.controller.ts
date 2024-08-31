// src/products/product.controller.ts
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dtos/products/create-products.dto';
import { UpdateProductDto } from '../dtos/products/update-products.dto';
import { ProductsEntity } from '../entities/products.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductsEntity> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<ProductsEntity[]> {
    return this.productService.findAll();
  }

  @Get(':idProduct')
  async findOne(
    @Param('idProduct') idProduct: number,
  ): Promise<ProductsEntity> {
    return this.productService.findOne(idProduct);
  }

  @Put(':idProduct')
  async update(
    @Param('idProduct') idProduct: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductsEntity> {
    return this.productService.update(idProduct, updateProductDto);
  }

  @Delete(':idProduct')
  async remove(@Param('idProduct') idProduct: number): Promise<void> {
    return this.productService.remove(idProduct);
  }
}
