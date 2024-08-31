import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber(null)
  @IsOptional()
  readonly phoneNumber?: string;

  @IsString()
  @IsOptional()
  readonly address?: string;
}
