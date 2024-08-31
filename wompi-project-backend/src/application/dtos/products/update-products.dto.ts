import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly nameProduct?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  readonly priceProduct?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  readonly stock?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly categoryProduct?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly imageUrl?: string;
}
