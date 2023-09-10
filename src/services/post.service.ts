import { ParamsDictionary } from "express-serve-static-core";
import {client} from "../db/client";
import { PostSchema } from "../utils/schemas";
import { PostInputSchema } from "../utils/schemas/post.schema";
export class postService{

    private dbClient;
    
    constructor(dbClient: typeof client){
        this.dbClient = dbClient;
    }

    public async getSinglePosts(id: string): Promise<PostSchema>{
        const res = await this.dbClient?.query(
            "SELECT * FROM posts WHERE id = $1",
            [id]
        );
        return res.rows[0];
    }

    public async getAllPosts(): Promise<Array<PostSchema>>{
        const res = await this.dbClient.query("SELECT * FROM posts")
        return res.rows;
    }

    public async createPost(data: PostInputSchema): Promise<PostSchema>{
       const {title, content} = data;
       const res = await this.dbClient?.query(
            "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
            [title, content]
        )
        return res.rows[0];
    }

    public async updatePost(id: string,data: PostInputSchema): Promise<PostSchema>{
        const {title, content} = data;
        const res = await this.dbClient.query(
            "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *;",
            [title, content, id],
        )
        return res.rows[0];
    }

    public async deletePost(id: string): Promise<string>{
        const res = await this.dbClient.query(
            "DELETE FROM posts WHERE id = $1",
            [id],
        )
        return "Successfully deleted "
    }
}