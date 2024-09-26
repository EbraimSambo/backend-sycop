import { Module } from '@nestjs/common';
import { AppointmentsCreateController } from './controllers/appointments-create/appointments-create.controller';
import { AppointmentsCreateService } from './services/appointments-create/appointments-create.service';
import { AppointmentsRepository } from './repositories/appointments.repository';
import { DatabaseService } from 'src/database/database.service';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { UserRepository } from 'src/user/repositories/user.repository';

@Module({
  providers: [AppointmentsCreateService,DatabaseService,AppointmentsRepository,UserReadService, UserRepository],
  controllers: [AppointmentsCreateController, ]
})
export class AppointmentsModule {}
