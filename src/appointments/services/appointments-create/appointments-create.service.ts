import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAppointmentsDto } from 'src/appointments/dto/create-appointments.dto';
import { AppointmentsRepository } from 'src/appointments/repositories/appointments.repository';
import { UserReadService } from 'src/user/services/user-read/user-read.service';

@Injectable()
export class AppointmentsCreateService {

    constructor(
        private readonly appointmentsRepo: AppointmentsRepository,
        private readonly userService: UserReadService,
    ){}


    async create(values: CreateAppointmentsDto, userId: number){

        const user = await this.userService.findUserById(userId.toString())

        if(!user) throw new UnauthorizedException("Operação não autorizada")

        return await this.appointmentsRepo.create(values, user.id)
    }
}
