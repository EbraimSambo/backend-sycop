import { User } from "../entities/user.entity";
import { UserCreateProps, UserCreateResult } from "../types";



export interface IUserRepo{
    create(values: UserCreateProps): Promise<UserCreateResult>
    findOne(id: number): Promise<User>
    findUserEmail(email: string): Promise<User>
    findAll(): Promise<User[]>

}

export type ErrorCreate ={
    error: boolean
    type: "conflict" | "forbidden"
}