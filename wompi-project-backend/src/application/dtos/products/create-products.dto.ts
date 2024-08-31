import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  readonly nameProduct: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly priceProduct: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly categoryProduct?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly imageUrl?: string;
}
