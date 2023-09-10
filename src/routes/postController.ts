import {Router, Request, Response} from "express";
import { postService } from "../services/post.service";
import {client} from "../db/client";

const router = Router();
const service = new postService(client);

router.get("/", async (req: Request, res: Response)=>{
    try {
        const result = await service.getAllPosts();
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.get("/:post_id", async (req: Request, res: Response) =>{
    try {
        const result = await service.getSinglePosts(req.params["post_id"]);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.post("/", async (req: Request, res: Response) =>{
    try {
        const data = req.body;
        const result = await service.createPost(data);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.patch("/:post_id", async (req: Request, res: Response)=>{
    try {
        const data = req.body;
        const id = req.params['post_id'];
        const result = await service.updatePost(id, data);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.delete("/:post_id", async (req: Request, res: Response) =>{
    try {
        const id = req.params["post_id"];
        const result = await service.deletePost(id);
        return res.status(200).json(result);
    } catch (error) {
        
    }
})

module.exports = router;