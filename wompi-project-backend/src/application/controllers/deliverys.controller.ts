import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DeliverysService } from '../services/deliverys.service';
import { CreateDeliveryDto } from '../dtos/deliverys/create-deliveries.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Deliverys')
@Controller('Deliverys')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliverysService) {}

  @Post()
  async create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @Get()
  async findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.deliveryService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.deliveryService.remove(id);
  }
}
