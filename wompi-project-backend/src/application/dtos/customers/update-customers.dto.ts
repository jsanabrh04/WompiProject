import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateCustomerDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @ApiProperty()
  @IsPhoneNumber(null)
  @IsOptional()
  readonly phoneNumber?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly address?: string;
}
