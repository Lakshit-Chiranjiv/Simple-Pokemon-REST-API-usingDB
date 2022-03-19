import pokemonModel from "../models/pokemonModel.js";

export const getTypePokemons = async(req,res) => {
    const { type } = req.params;
    try {
        const allPokemon = await pokemonModel.find();
        if(!allPokemon) throw Error('could not find pokemon');
        const typePokemons = allPokemon.filter((pokemon) => {
            return pokemon.type.toLowerCase() === type.toLowerCase();
        })
        res.status(200).json(typePokemons);
    } catch (error) {
        res.status(400).json({message: error});
    }
}