import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';

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

  @IsString()
  @IsOptional()
  readonly wompiStatus?: string;

  @IsString()
  @IsOptional()
  readonly wompiTransactionId?: string;

  @IsString()
  @IsOptional()
  readonly wompiPaymentUrl?: string;
}
