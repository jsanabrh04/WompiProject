import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersEntity } from '../entities/customers.entity';
import { CreateCustomerDto } from '../dtos/customers/create-customers.dto';
import { UpdateCustomerDto } from '../dtos/customers/update-customers.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomersEntity)
    private customerRepository: Repository<CustomersEntity>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomersEntity> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<CustomersEntity[]> {
    return this.customerRepository.find();
  }

  async findOne(id: number): Promise<CustomersEntity> {
    const customer = await this.customerRepository.findOne({
      where: { idCustomer: id },
    });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomersEntity> {
    const customer = await this.findOne(id);
    Object.assign(customer, updateCustomerDto);
    return this.customerRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);
    await this.customerRepository.remove(customer);
  }
}
