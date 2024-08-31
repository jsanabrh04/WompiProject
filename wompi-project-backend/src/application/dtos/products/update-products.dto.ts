import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly nameProduct?: string;

  @IsNumber()
  @IsOptional()
  readonly priceProduct?: number;

  @IsNumber()
  @IsOptional()
  readonly stock?: number;

  @IsString()
  @IsOptional()
  readonly categoryProduct?: string;

  @IsString()
  @IsOptional()
  readonly imageUrl?: string;
}
