import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
import XRouter from "./controllers/twitterRouters";
import roomsRouter from "./controllers/roomRouters";
import userRouter from "./controllers/userRouters";
import { clerkHandler } from "./controllers/clerkHandler";

configDotenv();
const app = express();
app.use(express.json())

app.use(cors({
    origin: process.env.FRONT_END 
}))
// app.use(middleware);

app.use('/api/v1',XRouter);
app.use('/api/v1',roomsRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1',clerkHandler);

const PORT = 3001;

app.listen(PORT,() => {
    console.log("hi there");
})