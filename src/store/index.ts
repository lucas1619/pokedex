import { configureStore } from "@reduxjs/toolkit";
import { PokemonReducer } from "./Pokemon/reducers/PokemonReducer";

const store = configureStore({
    reducer: {
        pokemon: PokemonReducer,
    },
});

export {store}