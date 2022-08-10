import { Pokemon } from "@/models";
export interface PokemonState {
    pokemons: Pokemon[];
    selectedPokemons: Pokemon[];
}