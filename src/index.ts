import express, {Router, Request, Response} from "express";
const cors = require("cors");
const postRoute = require("./routes/postController");
const userRoute = require("./routes/userController");
const app = express();
import bodyParser from 'body-parser';

app.use(cors())
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req: Request, res: Response) =>{
    res.send("Running on nodejs with typescript!");
});
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});