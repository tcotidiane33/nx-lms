import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, MaxLength } from "class-validator";

export class ResetPassword {
    @ApiProperty()
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password!: string;

    @ApiProperty()
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    confirmPassword!: string;
}