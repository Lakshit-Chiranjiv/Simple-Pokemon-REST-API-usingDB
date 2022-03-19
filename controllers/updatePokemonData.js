import pokemonModel from "../models/pokemonModel.js";

import { capitalizeWholeString } from "./miscFunctions.js";

export const updatePokemonData = async(req,res) => {
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
}