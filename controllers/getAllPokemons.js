import pokemonModel from "../models/pokemonModel.js";

export const getAllPokemons = async(req,res) => {
    try {
        const allPokemons = await pokemonModel.find();
        if(!allPokemons) throw Error('cannot get due to some server error');
        res.status(200).json(allPokemons);
    } catch (error) {
        res.status(400).json({message: error});
    }
}