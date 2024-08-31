import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly nameProduct: string;

  @IsNumber()
  @IsPositive()
  readonly priceProduct: number;

  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsString()
  @IsOptional()
  readonly categoryProduct?: string;

  @IsString()
  @IsOptional()
  readonly imageUrl?: string;
}
