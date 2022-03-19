import pokemonModel from "../models/pokemonModel.js";

export const getAPokemon = async(req,res) => {
    const { id } = req.params;
    try {
        const foundPokemon = await pokemonModel.findById(id);
        if(!foundPokemon) throw Error('could not find pokemon');
        res.status(200).json(foundPokemon);
    } catch (error) {
        res.status(400).json({message: error});
    }
}