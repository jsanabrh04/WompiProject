import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsPhoneNumber(null)
  readonly phoneNumber?: string;

  @ApiProperty()
  @IsString()
  readonly address?: string;
}
