import connectDB from "./db/index.js";
import {app} from "./app.js";
// method 1 for use dotenv
// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at PORT ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGOBD connection failed !!!",err);
})









/*
import express from "express";
const app = express();

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Port listening at ${process.env.PORT}`);
        })
    }catch (error){
        console.error(error)
        throw error
    }
})()
*/