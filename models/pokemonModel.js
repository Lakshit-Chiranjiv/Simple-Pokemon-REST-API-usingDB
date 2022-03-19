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

const pokemonModel = mongoose.model('pokemonsdatas',pokemonSchema);

export default pokemonModel;