import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class UserCreateService {
    constructor(
        private readonly userRepo: UserRepository
    ){}

    async create(createUserDto: CreateUserDto){
        return this.userRepo.create(createUserDto)
    }
}
