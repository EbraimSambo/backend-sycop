import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RefreshTokenGuard } from './guards/refresh-token/refresh-token.guard';

@Controller('auth')
export class AuthController {
    
    constructor(
        private authService: AuthService,
    ) { }

    @Post('login')
    async login(@Body() values: LoginDto) {
        return await this.authService.login(values);
    }

    @UseGuards(RefreshTokenGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
      console.log('refreshed');
  
      return await this.authService.refreshToken(req.user);
    }
}
