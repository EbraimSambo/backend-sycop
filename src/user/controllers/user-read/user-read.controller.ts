import { Controller, Get, Param } from '@nestjs/common';
import { UserReadService } from 'src/user/services/user-read/user-read.service';

@Controller('user')
export class UserReadController {
    
    constructor(
        private readonly userService: UserReadService
    ){}

    @Get('all')
    getUsers(){
        return this.userService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') id: string){
        return this.userService.findUserById(id);
    }


}
