import { Body, Controller, Post,Param } from '@nestjs/common';
import { CreateAppointmentsDto } from 'src/appointments/dto/create-appointments.dto';
import { AppointmentsCreateService } from 'src/appointments/services/appointments-create/appointments-create.service';

@Controller('appointments')
export class AppointmentsCreateController {
    constructor(
        private readonly appointmentService: AppointmentsCreateService,
    ){}


    @Post('create/:id')
    async create(
        @Body() appointment: CreateAppointmentsDto, 
        @Param('id') id: string
    ){
        return await this.appointmentService.create(appointment, +id)
    }
}
