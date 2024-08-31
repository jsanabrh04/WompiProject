import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliverysEntity } from '../entities/deliverys.entity';
import { CreateDeliveryDto } from '../dtos/deliverys/create-deliveries.dto';
import { TransactionsEntity } from '../entities/transactions.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(DeliverysEntity)
    private deliveryRepository: Repository<DeliverysEntity>,

    @InjectRepository(TransactionsEntity)
    private transactionRepository: Repository<TransactionsEntity>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<DeliverysEntity> {
    const transaction = await this.transactionRepository.findOne({
      where: { idTransaction: createDeliveryDto.idTransaction },
    });
    if (!transaction) {
      throw new NotFoundException(
        `Transaction with ID ${createDeliveryDto.idTransaction} not found`,
      );
    }

    const delivery = this.deliveryRepository.create({
      ...createDeliveryDto,
      idTransaction: transaction,
    });

    return this.deliveryRepository.save(delivery);
  }

  async findAll(): Promise<DeliverysEntity[]> {
    return this.deliveryRepository.find({
      relations: ['idTransaction'],
    });
  }

  async findOne(id: number): Promise<DeliverysEntity> {
    const delivery = await this.deliveryRepository.findOne({
      where: { idDeliverie: id },
      relations: ['idTransaction'],
    });
    if (!delivery) {
      throw new NotFoundException(`Delivery with ID ${id} not found`);
    }
    return delivery;
  }

  async remove(id: number): Promise<void> {
    const delivery = await this.findOne(id);
    await this.deliveryRepository.remove(delivery);
  }
}
