// src/products/product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/products.entity';
import { CreateProductDto } from '../dtos/products/create-products.dto';
import { UpdateProductDto } from '../dtos/products/update-products.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.productRepository.find();
  }

  async findOne(idProduct: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { idProduct },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${idProduct} not found`);
    }
    return product;
  }

  async update(
    idProduct: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.productRepository.preload({
      idProduct,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${idProduct} not found`);
    }
    return this.productRepository.save(product);
  }

  async remove(idProduct: number): Promise<void> {
    const result = await this.productRepository.delete(idProduct);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${idProduct} not found`);
    }
  }
}
