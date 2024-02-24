import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

import userRouter from "./routes/user.routes.js"
import supplierRouter from "./routes/supplier.routes.js"
import reviewRouter from "./routes/review.routes.js"
import productRouter from "./routes/product.routes.js";

//routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/supplier", supplierRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/product", productRouter);


export {app, port}