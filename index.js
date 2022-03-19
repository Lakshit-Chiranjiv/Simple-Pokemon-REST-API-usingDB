import express from "express";
import mongoose from "mongoose";
import { MONGO_DB_URI } from './dbConfig.js';
import pokemonRouter from "./routes/pokemonRoutes.js";
import bodyParser from 'body-parser';
const app = express();

mongoose.connect(MONGO_DB_URI)
.then(()=>{console.log("Connected to database")})
.catch((err) => {console.log(err)});

const db = mongoose.connection;

app.get('/',(req,res)=>{
    res.send("<h1>Hello from Pokemons API</h1><h3><a href='/pokemon'>Head here!!</a></h3>");
})
app.use(bodyParser.json());
app.use('/pokemon',pokemonRouter);



app.listen(8000,()=>{console.log("server running on port 8000")});