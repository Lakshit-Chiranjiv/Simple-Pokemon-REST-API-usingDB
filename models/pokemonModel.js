import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    power: {
        type: Number,
        required: false,
        default: 50
    }
});

export default mongoose.model('Pokemons',pokemonSchema);