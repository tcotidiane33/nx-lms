import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty()
  access_token!: string;
  
  @ApiProperty()
  refresh_token!: string;
  
  @ApiProperty()
  user!: User;
}