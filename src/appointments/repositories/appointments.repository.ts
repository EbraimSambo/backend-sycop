import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { AppointmentsProps, IAppointmentsRepo } from "../interfaces";
import { Appointments } from "../entities/appointments.entity";



@Injectable()
export class AppointmentsRepository implements IAppointmentsRepo{

    constructor(
        private readonly dataBaseService: DatabaseService,
    ){}

    async create(values: AppointmentsProps, userId: number): Promise<Appointments> {

        const {name,bi,dateVisit,email,phone,visitTime} = values

        return await this.dataBaseService.appointments.create({
            data: {
                email,
                 name,
                 phone,
                 bi,
                 visitTime,
                 dateVisit,
                 userId,
            }
        })
    }
}