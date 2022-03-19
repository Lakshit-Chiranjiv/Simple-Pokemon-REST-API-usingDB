import express from "express";
import pokemonModel from "../models/pokemonModel.js";
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('<h1>Pokemons API</h1>');
});

router.get('/getAll',async(req,res)=>{
    try {
        const allPokemons = await pokemonModel.find();
        if(!allPokemons) throw Error('cannot get due to some server error');
        res.status(200).json(allPokemons);
    } catch (error) {
        res.status(400).json({message: error});
    }
});





export default router;