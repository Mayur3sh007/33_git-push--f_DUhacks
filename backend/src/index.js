import 'dotenv/config'
import { app, port } from './app.js';
import connectDB from "./db/index.js";


connectDB()
.then(() => {
    app.on('error', (error)=>{ // global error handler 
        console.log("ERROR :: EXPRESS_APP_ON :: ", error);
        throw error;
    })
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err)=>{
    console.log("ERROR :: MongoDB connection failed !! :: ", err);
})