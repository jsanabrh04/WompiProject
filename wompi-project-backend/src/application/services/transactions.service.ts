import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionsEntity } from '../entities/transactions.entity';
import { CreateTransactionDto } from '../dtos/transactions/create-trasactions.dto';
import { ProductsEntity } from '../entities/products.entity';
import { CustomersEntity } from '../entities/customers.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionsEntity)
    private transactionRepository: Repository<TransactionsEntity>,

    @InjectRepository(ProductsEntity)
    private productRepository: Repository<ProductsEntity>,

    @InjectRepository(CustomersEntity)
    private customerRepository: Repository<CustomersEntity>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionsEntity> {
    const product = await this.productRepository.findOne({
      where: { idProduct: createTransactionDto.idProduct },
    });
    if (!product) {
      throw new NotFoundException(
        `Product with ID ${createTransactionDto.idProduct} not found`,
      );
    }

    const customer = await this.customerRepository.findOne({
      where: { idCustomer: createTransactionDto.idCustomer },
    });
    if (!customer) {
      throw new NotFoundException(
        `Customer with ID ${createTransactionDto.idCustomer} not found`,
      );
    }

    const transaction = this.transactionRepository.create({
      ...createTransactionDto,
      idProduct: product,
      idCustomer: customer,
    });

    return this.transactionRepository.save(transaction);
  }

  async findAll(): Promise<TransactionsEntity[]> {
    return this.transactionRepository.find({
      relations: ['idProduct', 'idCustomer'],
    });
  }

  async findOne(id: number): Promise<TransactionsEntity> {
    const transaction = await this.transactionRepository.findOne({
      where: { idTransaction: id },
      relations: ['idProduct', 'idCustomer'],
    });
    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    return transaction;
  }

  async remove(id: number): Promise<void> {
    const transaction = await this.findOne(id);
    await this.transactionRepository.remove(transaction);
  }
}
