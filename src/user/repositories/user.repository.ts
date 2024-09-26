import { Injectable } from "@nestjs/common";
import { IUserRepo } from "../interfaces";




@Injectable()
export class UserRepository implements IUserRepo{
    
    async create(): Promise<void> {
        return
    }
}