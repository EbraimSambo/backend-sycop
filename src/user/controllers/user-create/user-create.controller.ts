import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserCreateService } from 'src/user/services/user-create/user-create.service';

@Controller('user/create')
export class UserCreateController {

    constructor(
        private readonly userService: UserCreateService
    ){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }
}
