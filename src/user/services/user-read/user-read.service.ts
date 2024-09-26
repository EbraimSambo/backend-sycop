import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class UserReadService {

    constructor(
        private readonly userRepo: UserRepository
    ){}

   async findUserById(id: string){
        return await this.userRepo.findOne(+id)
    }

    async findUserEmail(email: string){
        return await this.userRepo.findUserEmail(email)
    }

    async findAll(){
        return await this.userRepo.findAll()
    }
}
