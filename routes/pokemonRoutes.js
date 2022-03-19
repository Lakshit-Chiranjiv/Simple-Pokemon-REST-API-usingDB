import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getAllPokemons } from "../controllers/getAllPokemons.js";
import { getAPokemon } from "../controllers/getAPokemon.js";
import { getTypePokemons } from "../controllers/getTypePokemons.js";
import { getRandomPokemon } from "../controllers/getRandomPokemon.js";
import { addPokemon } from "../controllers/addPokemon.js";
import { deletePokemon } from "../controllers/deletePokemon.js";
import { updatePokemonData } from "../controllers/updatePokemonData.js";

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

router.delete('/delete/:id',deletePokemon);

router.patch('/update/:id',updatePokemonData);

export default router;