import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateCustomerDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsPhoneNumber(null)
  @IsOptional()
  readonly phoneNumber?: string;

  @IsString()
  @IsOptional()
  readonly address?: string;
}
