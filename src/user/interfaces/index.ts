import { UserCreateProps, UserCreateResult } from "../types";



export interface IUserRepo{
    create(values: UserCreateProps): Promise<UserCreateResult>
}