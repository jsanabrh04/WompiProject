import { IsString, IsNumber } from 'class-validator';

export class CreateDeliveryDto {
  @IsNumber()
  readonly idTransaction: number;

  @IsString()
  readonly address: string;

  @IsString()
  readonly status: string;
}
