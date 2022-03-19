import express from "express";
import pokemonModel from "../models/pokemonModel.js";
const router = express.Router();

const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizeWholeString = (str) =>{
    let arr = str.split(' ');
    let retArr = arr.map((el) => capitalizeString(el));
    let retStr = retArr.join(" ");
    return retStr;
}

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

router.post('/add',async(req,res)=>{
    req.body.name = capitalizeWholeString(req.body.name);
    req.body.type = capitalizeWholeString(req.body.type);
    const newPokemon = new pokemonModel(req.body);
    try {
        const addedPokemon = await newPokemon.save();
        if(!addedPokemon) throw Error('could not add');
        res.status(200).json(addedPokemon);
    } catch (error) {
        res.status(400).json({message: error});
    }
});





export default router;