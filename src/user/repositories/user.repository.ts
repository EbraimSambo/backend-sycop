import { Injectable } from "@nestjs/common";
import { ErrorCreate, IUserRepo } from "../interfaces";
import { UserCreateProps, UserCreateResult } from "../types";
import { DatabaseService } from "src/database/database.service";
import { User } from "../entities/user.entity";



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

        const { email, createdAt, id, password, uuid, name } = newUser

        return {
            id,
            uuid,
            name,
            email,
            password,
            createdAt,
        }
    }


    async findOne(id: number): Promise<User> {
        return await this.databaseService.user.findUnique({
            where: { id: id }
        })
    }

    async findUserEmail(email: string): Promise<User> {
        return await this.databaseService.user.findUnique({
            where: { email }
        })
    }

    async findAll(): Promise<User[]> {
        return await this.databaseService.user.findMany()
    }
}