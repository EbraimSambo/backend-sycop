import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { UserRepository } from 'src/user/repositories/user.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [
    AuthService,
    UserReadService,
    UserRepository,
    JwtService,
    DatabaseService
  ],
  controllers: [AuthController],
  imports: [
    // JwtModule.register({
    //   global: true,
    // }),
  ]
})
export class AuthModule { }
