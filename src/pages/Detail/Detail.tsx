import { PokemonAdapter } from "@/adapters";
import { Pokemon } from "@/models";
import { PokemonApi } from "@/services";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const Detail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
    const dispatch = useDispatch();

    const getPokemon = async () => {
      const pokemonApi = PokemonApi.Instance;
      try {
        const response = await pokemonApi.getPokemon(id);
        if(response.status === 200) {
          const adaptedPokemon = PokemonAdapter.axiosToPokemon(response);
          setPokemon(adaptedPokemon);
          dispatch({ type: "SET_POKEMON", payload: adaptedPokemon });
        }
      } catch (error) {
        console.error(error);
      }
      
    }
    
    useEffect(() => {
      getPokemon()
    }, [])
    return (
      <div>
        {pokemon.image}
      </div>
    );
  }
  
  export { Detail }; 