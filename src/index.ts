import express, {Router, Request, Response} from "express";
const postRoute = require("./routes/postController");
const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response) =>{
    res.send("Running on nodejs with typescript!");
});
app.use("/api/posts", postRoute);
app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});