import { createReducer } from "@reduxjs/toolkit";
import { PokemonState } from "@/store/Pokemon/states";

const PokemonReducer = createReducer<PokemonState>(
    {
        pokemons: [],
        selectedPokemons: [],
    },
    {
        SET_POKEMONS: (state, action) => {
            state.pokemons = action.payload;
        },
        SET_POKEMON: (state, action) => {
            if(state.pokemons.length > 0) {
                state.pokemons[action.payload.number - 1] = action.payload;
            }
        },
        SET_POKEMON_IMAGE: (state, action) => {
            state.pokemons[action.payload.index].image = action.payload.image;
        },
        ADD_TO_SELECTED_POKEMONS: (state, action) => {
            state.selectedPokemons.push(action.payload);
        },
        REMOVE_FROM_SELECTED_POKEMONS: (state, action) => {
            state.selectedPokemons = state.selectedPokemons.filter(
                (pokemon) => pokemon.number !== action.payload.number
            );
        }
    },
);

export { PokemonReducer };