import express, {json} from 'express';
import dotenv from 'dotenv';
import {ENV} from "./src/lib/env.js";


dotenv.config();

const app = express();
app.get("/health", (req, res) => {
    res.status(200).json({msg:"API is running"});
})

app.listen(3000), () => console.log("Server started on port: ", ENV.PORT);