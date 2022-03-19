import pokemonModel from "../models/pokemonModel.js";

export const getRandomPokemon = async(req,res) => {
    try {
        const allPokemon = await pokemonModel.find();
        if(!allPokemon) throw Error('could not find pokemon');
        const randomPokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)];
        res.status(200).json(randomPokemon);
    } catch (error) {
        res.status(400).json({message: error});
    }
}