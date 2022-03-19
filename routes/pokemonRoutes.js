import express from "express";
import pokemonModel from "../models/pokemonModel.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getAllPokemons } from "../controllers/getAllPokemons.js";
import { getAPokemon } from "../controllers/getAPokemon.js";
import { getTypePokemons } from "../controllers/getTypePokemons.js";
import { getRandomPokemon } from "../controllers/getRandomPokemon.js";
import { addPokemon } from "../controllers/addPokemon.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get('/',(req,res)=>{
    // res.send('<h1>Pokemons API</h1>');
    res.sendFile(path.join(__dirname,'./../view/apiMain.html'));
});

router.get('/getAll',getAllPokemons);

router.get('/getOne/:id',getAPokemon);

router.get('/getByType/:type',getTypePokemons);

router.get('/getRandom',getRandomPokemon);

router.post('/add',addPokemon);


router.delete('/delete/:id',async(req,res)=>{
    const { id } = req.params;
    try {
        const deletedPokemon = await pokemonModel.findByIdAndDelete(id);
        if(!deletedPokemon) throw Error('could not delete pokemon');
        res.status(200).json({message: `successfully deleted id: ${id}`});
    } catch (error) {
        res.status(400).json({message: error});
    }
});

router.patch('/update/:id',async(req,res)=>{
    const { id } = req.params;
    if(req.body.name) req.body.name = capitalizeWholeString(req.body.name);
    if(req.body.type) req.body.type = capitalizeWholeString(req.body.type);
    try {
        const updatedPokemon = await pokemonModel.findByIdAndUpdate(id,req.body);
        if(!updatedPokemon) throw Error('could not update pokemon');
        res.status(200).json({message: `successfully updated id: ${id}`});
    } catch (error) {
        res.status(400).json({message: error});
    }
});





export default router;