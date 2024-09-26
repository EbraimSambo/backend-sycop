import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserReadService,
        private jwtService: JwtService,
    ) { }

    async login(values: LoginDto) {

        const EXPIRE_TIME = 20 * 1000;

        const user = await this.userService.findUserEmail(values.email)

        if (!user) throw new UnauthorizedException("Usuario não encontrado")
        const payload = {
            username: user.email,
            sub: {
                username: user.name,
            },
        };

        return {
            user,
            backendTokens: {
              accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: '20s',
                secret: process.env.jwtSecretKey,
              }),
              refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: '7d',
                secret: process.env.jwtRefreshTokenKey,
              }),
              expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
            },
          };

    }
    async refreshToken(user: any) {
        
        const EXPIRE_TIME = 20 * 1000;

        const payload = {
          username: user.username,
          sub: user.sub,
        };
    
        return {
          accessToken: await this.jwtService.signAsync(payload, {
            expiresIn: '20s',
            secret: process.env.jwtSecretKey,
          }),
          refreshToken: await this.jwtService.signAsync(payload, {
            expiresIn: '7d',
            secret: process.env.jwtRefreshTokenKey,
          }),
          expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
        };
      }
    
}
