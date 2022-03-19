import pokemonModel from "../models/pokemonModel.js";

export const deletePokemon = async(req,res) => {
    const { id } = req.params;
    try {
        const deletedPokemon = await pokemonModel.findByIdAndDelete(id);
        if(!deletedPokemon) throw Error('could not delete pokemon');
        res.status(200).json({message: `successfully deleted id: ${id}`});
    } catch (error) {
        res.status(400).json({message: error});
    }
}