import { IsString } from "class-validator";

export class CreateAppointmentsDto {

    @IsString()
    name: string
    
    @IsString()
    email: string

    @IsString()
    bi: string

    @IsString()
    phone: string

    @IsString()
    dateVisit: string

    @IsString()
    visitTime: string
}
