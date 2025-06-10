import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength, MaxLength, IsString } from "class-validator";


export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password!: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  name?: string;
} 