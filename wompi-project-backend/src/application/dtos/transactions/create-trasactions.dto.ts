// src/transactions/dto/create-transaction.dto.ts
import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly idProduct: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly idCustomer: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly amount: number;

  @ApiProperty()
  @IsString()
  readonly transactionNumber: string;

  @ApiProperty()
  @IsString()
  readonly paymentMethod: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly wompiStatus?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly wompiTransactionId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly wompiPaymentUrl?: string;
}
