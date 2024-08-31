import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  @IsPositive()
  readonly idProduct: number;

  @IsNumber()
  @IsPositive()
  readonly idCustomer: number;

  @IsNumber()
  @IsPositive()
  readonly amount: number;

  @IsString()
  readonly transactionNumber: string;

  @IsString()
  readonly paymentMethod: string;

  @IsString()
  readonly status: string;

  @IsString()
  @IsOptional()
  readonly wompiTransactionId?: string;

  @IsString()
  @IsOptional()
  readonly wompiStatus?: string;

  @IsString()
  @IsOptional()
  readonly wompiPaymentUrl?: string;
}
