import {Router, Request, Response} from "express";
import { userService } from "../services/user.service";

const router = Router();
const service = new userService();

router.get("/", async (req: Request, res: Response)=>{
    try {
        const result = await service.getAllUsers();
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.get("/:user_id", async (req: Request, res: Response) =>{
    try {
        const result = await service.getSingleUser(Number(req.params["user_id"]));
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.post("/", async (req: Request, res: Response) =>{
    try {
        const data = req.body;
        const result = await service.createUser(data);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.patch("/:user_id", async (req: Request, res: Response)=>{
    try {
        const data = req.body;
        const id = Number(req.params['user_id']);
        const result = await service.updateUser(id, data);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    }
})

router.delete("/:user_id", async (req: Request, res: Response) =>{
    try {
        const id = Number(req.params["user_id"]);
        const result = await service.deleteUser(id);
        return res.status(200).json(result);
    } catch (error) {
        
    }
})

module.exports = router;