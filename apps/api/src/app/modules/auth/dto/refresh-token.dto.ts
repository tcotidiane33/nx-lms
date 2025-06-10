import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, MaxLength } from "class-validator";

export class RefreshTokenDto {
    @ApiProperty()
    @IsString()
    @MinLength(32)
    @MaxLength(32)
    refreshToken!: string;
}