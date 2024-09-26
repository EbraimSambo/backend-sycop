import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly userService: UserReadService
    ) {}

    async login(values: LoginDto){

        const user = await this.userService.findUserEmail(values.email)

        if(!user) throw new UnauthorizedException("Usuario não encontrado")

            
    }
}
