import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser());


import userRouter from "./routes/user.routes.js"
//user routes
app.use("/api/v1/user", userRouter);


export {app, port}