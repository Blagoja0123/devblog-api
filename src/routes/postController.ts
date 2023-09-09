import express, {Request, Response} from "express";

const router = express.Router();

router.route("/:post_id").get((req: Request, res: Response)=>{
    res.json({
        "post": "exists",
    });
});

module.exports = router;