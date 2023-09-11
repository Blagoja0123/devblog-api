import { ParamsDictionary } from "express-serve-static-core";
import { PrismaClient } from "@prisma/client";
import { PostSchema } from "../utils/schemas";
import { PostInputSchema } from "../utils/schemas/post.schema";
export class postService{

    private prisma: any = null; 
    
    constructor(client = new PrismaClient()){
        this.prisma = client;
    }

    public async getSinglePosts(id: number): Promise<PostSchema>{
        const res = await this.prisma?.post.findUnique({
            where: {
                id: id,
            },
        })
        return res;
    }

    public async getAllPosts(): Promise<Array<PostSchema>>{
        const res = await this.prisma?.post.findMany();
        return res;
    }

    public async createPost(data: PostInputSchema): Promise<PostSchema>{
       const {title, content, author} = data;
       const res = await this.prisma?.post.create({
            data: {
                title: title,
                content: content,
                user: {
                    connect: {
                        id: author,
                    }
                }
            }
       })
        return res;
    }

    public async updatePost(id: number, data: PostInputSchema): Promise<PostSchema>{
        const {title, content} = data;
        const date = Date.now();
        const res = await this.prisma.post.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                content: content,
            }
        });
        return res;
    }

    public async deletePost(id: number): Promise<string>{
        const res = await this.prisma.post.delete({
            where: {
                id: id,
            }
        });
        return "Successfully deleted "
    }
}