import express from "express";
import mongoose from "mongoose";
import { MONGO_DB_URI } from './dbConfig.js';
const app = express();

mongoose.connect(MONGO_DB_URI)
.then(()=>{console.log("Connected to database")})
.catch((err) => {console.log(err)});



app.get('/',(req,res)=>{
    res.send("hwllovv");
})

app.listen(8000,()=>{console.log("server running on port 8000")});