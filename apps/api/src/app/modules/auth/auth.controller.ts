import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ description: 'Returns JWT and user' })
  async login(@Body() body: LoginDto) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  @ApiBody({ type: RegisterDto })
  @ApiOkResponse({ description: 'Returns JWT and user' })
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body.email, body.password, body.name);
  }

  @Get('login')
  async loginGet(@Req() req: Request) {
    return this.authService.login(req.body.email, req.body.password);
  }
}
