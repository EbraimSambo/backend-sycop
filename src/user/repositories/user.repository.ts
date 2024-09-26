import { Injectable } from "@nestjs/common";
import { ErrorCreate, IUserRepo } from "../interfaces";
import { UserCreateProps, UserCreateResult } from "../types";
import { DatabaseService } from "src/database/database.service";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";



@Injectable()
export class UserRepository implements IUserRepo {

    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async create(values: UserCreateProps): Promise<UserCreateResult> {

        const newUser = await this.databaseService.user.create({
            data: {
                email: values.email,
                password: await hash(values.password, 14),
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