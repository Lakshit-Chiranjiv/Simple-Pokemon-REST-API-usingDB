import express from "express";
import pokemonModel from "../models/pokemonModel.js";
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('<h1>Pokemons API</h1>');
});




export default router;