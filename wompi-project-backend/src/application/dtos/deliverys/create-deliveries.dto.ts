import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateDeliveryDto {
  @ApiProperty()
  @IsNumber()
  readonly idTransaction: number;

  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsString()
  readonly status: string;
}
