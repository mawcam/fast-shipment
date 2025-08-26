import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

class LoginDto {
  email: string;
  password: string;
}

class RegisterDto {
  email: string;
  password: string;
  name?: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.email,
      registerDto.password,
      registerDto.name,
    );
  }

  @Get('logout')
  @UseGuards(AuthGuard('jwt'))
  logout() {
    return this.authService.logout();
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async me(@Req() req) {
    return this.authService.me(req.user.id);
  }

  @Get('users')
  @UseGuards(AuthGuard('jwt'))
  async users() {
    return this.authService.getUsers();
  }

  @Post('impersonate')
  @UseGuards(AuthGuard('jwt'))
  async impersonate(@Body() body: { targetUserId: string }, @Req() req) {
    return this.authService.impersonate(body.targetUserId, req.user.id);
  }
}
