import { Injectable } from "@nestjs/common";
import { IUserRepo } from "../interfaces";
import { UserCreateProps, UserCreateResult } from "../types";
import { DatabaseService } from "src/database/database.service";



@Injectable()
export class UserRepository implements IUserRepo {

    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async create(values: UserCreateProps): Promise<UserCreateResult> {

        const newUser = await this.databaseService.user.create({
            data: {
                email: values.email,
                password: values.password,
                name: values.name
            }
        })

        const { email, createdAt, id, password,uuid,name} = newUser
        
        return {
            createdAt,
            id,
            name,
            email,
            password,
            uuid
        }
    }
}