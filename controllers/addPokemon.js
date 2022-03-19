import pokemonModel from "../models/pokemonModel.js";

import { capitalizeWholeString } from "./miscFunctions.js";

export const addPokemon = async(req,res) => {
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
}