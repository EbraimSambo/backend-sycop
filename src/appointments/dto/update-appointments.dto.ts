import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentsDto } from './create-appointments.dto';

export class UpdateUserDto extends PartialType(CreateAppointmentsDto) {}
