import { ParamsDictionary } from "express-serve-static-core";
import {client} from "../db/client";
import { UserSchema } from "../utils/schemas/user.schema";
import { UserInputSchema } from "../utils/schemas/user.schema";
import {PrismaClient} from "@prisma/client";

export class userService{

    private prisma: any = null;
    
    constructor(client = new PrismaClient){
        this.prisma = client;
    }

    public async getSingleUser(id: number): Promise<UserSchema>{
        const res = await this.prisma.user.findUnique({
            where: {
                id: id,
            }
        });
        return res;
    }

    public async getAllUsers(): Promise<Array<UserSchema>>{
        const res = await this.prisma.user.findMany();
        return res;
    }

    public async createUser(data: UserInputSchema): Promise<UserSchema>{
       const {username, password, email} = data;
       const res = await this.prisma.user.create({
        data: {
            username: username,
            password: password,
            email: email,
        }
       });
        return res;
    }

    public async updateUser(id: number, data: UserInputSchema): Promise<UserSchema>{
        const {username, password, email} = data;
        const res = await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                username: username,
                password: password,
                email: email,
            }
        })
        return res!.rows[0];
    }

    public async deleteUser(id: number): Promise<string>{
        const res = await this.prisma.user.delete({
            where: {
                id: id,
            }
        })
        return "Successfully deleted "
    }
}